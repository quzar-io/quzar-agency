import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  mobile: z.string().min(6, 'Mobile number is required').max(20),
  service: z.string().min(1, 'Please select a service'),
  project: z.string().min(1, 'Project description is required').max(2000),
});

export type ContactInput = z.infer<typeof contactSchema>;
