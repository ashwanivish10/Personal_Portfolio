// api/send-email.ts

import type { VercelRequest, VercelResponse } from '@vercel/node';

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All form fields are required.' });
    }

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      // IMPORTANT: Use the Resend test address or your own verified domain
      from: 'Portfolio Form <onboarding@resend.dev>',
      // IMPORTANT: Change this to your personal email address
      to: ['sshwani59@gmail.com'],
      subject: subject, // Use the subject from the form
      // Create a nice HTML body for the email
      html: `
        <h2>New Message from Portfolio Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error({ error });
      return res.status(400).json({ error: 'Failed to send email.' });
    }

    return res.status(200).json({ message: 'Email sent successfully!' });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'An internal server error occurred.' });
  }
}