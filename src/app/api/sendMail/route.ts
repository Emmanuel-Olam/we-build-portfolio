import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../components/mailer';

// Handle POST request
export default async function sendMail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Method Not Allowed
  }

  try {
    const { emailContent } = req.body;

    // Send the email
    const info = await transporter.sendMail({
      from: 'aniyikayeolamide3@gmail.com', // Your dedicated email account
      to: 'futurebuildersagency@gmail.com', // Recipient's email address
      subject: 'New Form Submission',
      text: emailContent,
    });

    console.log('Email sent:', info.response);
    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'An error occurred while sending the email' });
  }
}
