import { type Request, type Response } from 'express';
import { contactSchema } from '../schemas/contact';
import { getDb } from '../lib/firebase';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const submitContactForm = async (req: Request, res: Response) => {
  // Validate input
  const result = contactSchema.safeParse(req.body);
  if (!result.success) {
    return res.status(400).json({
      success: false,
      errors: result.error.flatten().fieldErrors,
    });
  }

  const { name, email, mobile, service, project } = result.data;

  try {
    const db = getDb();
    const docRef = await db.collection('contact_submissions').add({
      name,
      email,
      mobile,
      service,
      project,
      createdAt: new Date().toISOString(),
      status: 'new',
    });

    console.log(`[Contact] New submission saved: ${docRef.id} from ${email}`);

    // Beautifully styled HTML Email Content
    const htmlEmail = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: 'Inter', -apple-system, sans-serif; background-color: #09090b; color: #ffffff; margin: 0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background-color: #12141a; border: 1px solid #1e232e; border-radius: 12px; padding: 40px; }
        .logo { font-size: 24px; font-weight: 800; letter-spacing: 0.1em; color: #ffffff; text-align: center; margin-bottom: 30px; }
        .title { font-size: 20px; font-weight: 600; color: #ffffff; margin-bottom: 20px; text-align: center; }
        .content { font-size: 15px; line-height: 1.6; color: #a1a1aa; }
        .highlight { color: #8052ff; font-weight: 600; }
        .details-box { background-color: #09090b; border: 1px solid #1e232e; border-radius: 8px; padding: 20px; margin: 25px 0; }
        .details-item { margin-bottom: 10px; }
        .details-label { font-size: 13px; color: #71717a; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 4px; display: block; }
        .details-value { font-size: 15px; color: #ffffff; margin: 0; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #1e232e; text-align: center; font-size: 13px; color: #71717a; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="logo">QUZAR</div>
        <div class="title">We've Received Your Inquiry</div>
        <div class="content">
          <p>Hi ${name},</p>
          <p>Thank you for reaching out to Quzar! This email is to confirm that we have successfully received your form submission.</p>
          <p>Our team is currently <span class="highlight">processing your request</span> and reviewing the details of your project. We strive to provide premium, tailored solutions, so we are taking the time to understand your needs.</p>
          
          <div class="details-box">
            <div class="details-item">
              <span class="details-label">Service Requested</span>
              <p class="details-value">${service === 'mvp' ? 'MVP Development' : service === 'fullstack' ? 'Full-Stack Development' : service === 'ai' ? 'AI Integration' : service === 'design' ? 'UI/UX Design' : service}</p>
            </div>
            <div class="details-item">
              <span class="details-label">Project Details</span>
              <p class="details-value">${project}</p>
            </div>
          </div>

          <p>You can expect to hear back from us shortly with the next steps to schedule a consultation call.</p>
          <p>Best regards,<br>The Quzar Team</p>
        </div>
        <div class="footer">
          &copy; ${new Date().getFullYear()} Quzar Agency. All rights reserved.
        </div>
      </div>
    </body>
    </html>
    `;

    // Send the email via Resend
    try {
      const { error: emailError } = await resend.emails.send({
        from: `Quzar
         <${process.env.SENDING_MAIL_ADDRESS || 'onboarding@resend.dev'}>`,
        to: email,
        subject: 'We have received your inquiry - Quzar',
        html: htmlEmail,
      });
      if (emailError) {
        console.error('[Contact] Resend API Error:', emailError);
      } else {
        console.log(`[Contact] Confirmation email sent to ${email}`);
      }
    } catch (error) {
      console.error('[Contact] Failed to send email via Resend:', error);
    }

    return res.status(201).json({
      success: true,
      message: 'Message received. We\'ll get back to you within 24 hours.',
      id: docRef.id,
    });
  } catch (error) {
    console.error('[Contact] Failed to save submission:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to submit. Please try again or email hello@quzar.in directly.',
    });
  }
};
