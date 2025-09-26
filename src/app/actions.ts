'use server';

import { z } from 'zod';

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().optional(),
  message: z.string(),
});

export async function submitContactForm(values: z.infer<typeof formSchema>) {
  // Here you would typically send an email, save to a database, etc.
  // For this example, we'll just log the data and simulate a network delay.
  console.log('New contact form submission:', values);

  await new Promise(resolve => setTimeout(resolve, 1000));

  // You can return a success or error message to be displayed to the user.
  return {
    success: true,
    message: "Thanks for reaching out! We'll get back to you shortly.",
  };
}
