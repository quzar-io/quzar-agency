'use client';

import { motion } from 'motion/react';
import { ArrowUpRight, Calendar, Mail, Instagram } from 'lucide-react';
import React, { useState, useEffect, Suspense } from 'react';
import { services } from '@/data/services';
import { useSearchParams } from 'next/navigation';
import { FoldButton } from '@/components/ui/FoldButton';
import { OutlineButton } from '@/components/ui/OutlineButton';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

function ContactFormContent() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');

  const searchParams = useSearchParams();
  const serviceParam = searchParams.get('service');

  useEffect(() => {
    if (serviceParam) {
      setSelectedService(serviceParam);
    }
  }, [serviceParam]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      mobile: (form.elements.namedItem('mobile') as HTMLInputElement).value,
      service: (form.elements.namedItem('service') as HTMLSelectElement).value,
      project: (form.elements.namedItem('project') as HTMLTextAreaElement).value,
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.message ?? 'Unable to submit inquiry. Verify your connection or email hello@quzar.in directly.');
      }

      setFormState('success');
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to submit inquiry. Verify your connection or email hello@quzar.in directly.';
      setErrorMsg(message);
      setFormState('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="mb-16 md:mb-24"
      >
        <h1 className="text-sm tracking-widest text-brand-primary mb-6 uppercase">
          Contact // Let's Build
        </h1>
        <h2 className="text-4xl md:text-7xl font-bold text-white tracking-tighter">
          Ready to scale?
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
        
        {/* Left Column - Minimalist Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 pr-0 lg:pr-16"
        >
          {formState === 'success' ? (
            <div className="p-12 rounded-sm bg-brand-primary/10 border border-brand-primary/20 flex flex-col items-center justify-center text-center h-full min-h-[400px]">
              <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-brand-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white text-3xl font-bold mb-4 tracking-tight">Message received.</p>
              <p className="text-brand-smoke text-lg">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-12">
              <div className="relative group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="What's your name?"
                  className="w-full text-2xl md:text-3xl text-white pb-4 border-b border-white/20 bg-transparent focus:outline-none focus:border-brand-primary placeholder:text-white/20 transition-colors peer"
                />
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email address"
                  className="w-full text-2xl md:text-3xl text-white pb-4 border-b border-white/20 bg-transparent focus:outline-none focus:border-brand-primary placeholder:text-white/20 transition-colors peer"
                />
              </div>
              
              <div className="relative group">
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  required
                  placeholder="Your mobile number"
                  className="w-full text-2xl md:text-3xl text-white pb-4 border-b border-white/20 bg-transparent focus:outline-none focus:border-brand-primary placeholder:text-white/20 transition-colors peer"
                />
              </div>

              <div className="relative group">
                <select
                  id="service"
                  name="service"
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className={`w-full text-2xl md:text-3xl pb-4 border-b border-white/20 bg-transparent focus:outline-none focus:border-brand-primary transition-colors peer appearance-none cursor-pointer ${selectedService ? 'text-white' : 'text-white/50'}`}
                >
                  <option value="" disabled className="bg-[#09090b] text-white/50">Select a service</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id} className="bg-[#09090b] text-white py-2">{service.title}</option>
                  ))}
                </select>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
              
              <div className="relative group">
                <textarea
                  id="project"
                  name="project"
                  required
                  rows={3}
                  placeholder="Tell us about your project or idea..."
                  className="w-full text-2xl md:text-3xl text-white pb-4 border-b border-white/20 bg-transparent focus:outline-none focus:border-brand-primary placeholder:text-white/20 transition-colors resize-none peer"
                ></textarea>
              </div>

              {formState === 'error' && (
                <p className="text-red-400 text-sm -mt-4">{errorMsg}</p>
              )}

              <FoldButton
                type="submit"
                disabled={formState === 'submitting'}
                className="self-start gap-3 px-10 py-5 text-lg group"
              >
                {formState === 'submitting' ? 'SENDING...' : 'SEND INQUIRY'}
                <ArrowUpRight className="w-6 h-6 group-hover:rotate-45 transition-transform" />
              </FoldButton>
            </form>
          )}

          {/* Social Proof Integration */}
          <div className="mt-16 pt-12 border-t border-white/10 flex items-center gap-6">
            <div className="flex -space-x-3">
              <div className="w-11 h-11 rounded-full border-2 border-[#09090b] bg-brand-primary/20 text-white text-xs font-bold flex items-center justify-center">
                OR
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-[#09090b] bg-white/10 text-white text-xs font-bold flex items-center justify-center">
                SD
              </div>
              <div className="w-11 h-11 rounded-full border-2 border-[#09090b] bg-brand-primary/30 text-white text-xs font-bold flex items-center justify-center">
                JM
              </div>
            </div>
            <div>
              <p className="text-white font-semibold">Trusted by real businesses, schools &amp; founders.</p>
              <div className="flex text-brand-primary text-sm mt-1">
                ★ ★ ★ ★ ★
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column - Bento Cards for Contact Options */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          {/* Consultation Bento Card */}
          <div className="p-8 rounded-sm border border-white/10 bg-white/5 backdrop-blur-sm hover:border-brand-primary/40 transition-colors flex flex-col">
            <div className="w-12 h-12 rounded-sm bg-brand-primary/20 flex items-center justify-center text-brand-primary mb-6">
              <Calendar className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Book a Consultation</h3>
            <p className="text-brand-smoke mb-8">Skip the back-and-forth. Request a 30-minute strategy call directly to discuss your architecture and roadmap.</p>
            <OutlineButton 
              href="mailto:hello@quzar.in?subject=30-Minute%20Strategy%20Call%20Request&body=Hi%20Piyush%2C%0A%0AI'd%20like%20to%20schedule%20a%2030-minute%20call%20to%20discuss%20a%20project.%0A%0APreferred%20date%2Ftime%3A%20%0AProject%20brief%3A%20"
              className="mt-auto w-full py-4"
            >
              Schedule a Call
            </OutlineButton>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {/* Email Bento Card */}
            <a href="mailto:hello@quzar.in" className="p-6 rounded-sm border border-white/10 bg-[#0c0c0e] hover:bg-white/5 transition-colors group flex flex-col items-center text-center">
              <Mail className="w-8 h-8 text-white/50 group-hover:text-white mb-4 transition-colors" />
              <span className="text-sm font-semibold text-white tracking-wider">EMAIL US</span>
              <span className="text-xs text-brand-smoke mt-1">hello@quzar.in</span>
            </a>

            {/* Insta Bento Card */}
            <a href="https://instagram.com/quzarhq" target="_blank" rel="noreferrer" className="p-6 rounded-sm border border-white/10 bg-[#0c0c0e] hover:bg-white/5 transition-colors group flex flex-col items-center text-center">
              <Instagram className="w-8 h-8 text-white/50 group-hover:text-brand-primary mb-4 transition-colors" />
              <span className="text-sm font-semibold text-white tracking-wider">INSTAGRAM</span>
              <span className="text-xs text-brand-smoke mt-1">@quzarhq</span>
            </a>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-brand-primary font-mono text-xs uppercase tracking-[0.2em]">LOADING CONTACT FORM...</div>}>
      <ContactFormContent />
    </Suspense>
  );
}
