// pages/api/sendEmail.ts
import {transporter} from './mailer'
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { selected, selectConnect, formData } = req.body;

    const emailContent = `
      Course: ${selected.course}
      How did you hear about FUBA: ${selectConnect.connect}
      // Include other form fields

      // Additional information: ${formData.additionalInfo}
    `;

    try {
      const info = await transporter.sendMail({
        from: 'your_email@gmail.com', // Your email address
        to: 'olamide@gmail.com', // Recipient's email address
        subject: 'New Form Submission',
        text: emailContent,
      });

      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ message: 'Error sending email' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}
