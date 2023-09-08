import { NextApiRequest, NextApiResponse } from 'next';
import transporter from '../../components/mailer';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { emailContent } = await request.json();

    const info = await transporter.sendMail({
      from: 'aniyikayeolamide3@gmail.com', // Your dedicated email account
      to: 'futurebuildersagency@gmail.com', // Recipient's email address
      subject: 'New Form Submission',
      text: emailContent,
    });

    console.log("Email sent:", info.response);
    return NextResponse.json({ message: "Email sent successfully" });

  } catch (error) {
    console.error("Error sending mail:", error);
    return NextResponse.json({
      error: "An error occured while sending the mail"
    })
  }
}
