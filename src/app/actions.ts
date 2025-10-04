
'use server';

import { z } from 'zod';

const contactFormSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  inquiryType: z.string(),
  subject: z.string(),
  message: z.string(),
  company: z.string().optional(),
  consent: z.boolean(),
});

export async function submitContactForm(values: z.infer<typeof contactFormSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a network delay.
  console.log('New contact form submission:', values);

  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can return a success or error message to be displayed to the user.
  return {
    success: true,
    message: "Thanks! I'll reply within 24 hours.",
  };
}
