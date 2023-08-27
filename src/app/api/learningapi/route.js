import { NextResponse,NextRequest } from 'next/server'
import nodemailer from 'nodemailer';
import { cookies } from 'next/headers'

export  async function POST(req) {
    const cookieStore = cookies()
    const { firstName, lastName, email, phone } = await req.json();
    console.log({ firstName, lastName, email, phone })
    // Replace these with your actual email account and password
    const senderEmail = '';
    const senderPassword = "";
    const mailHost="smtp.gmail.com"
    const  mailport=1234
    const senderMail=""

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host:mailHost,
      secure:false,
      auth: {
        user: senderEmail,
        pass: senderPassword,
      },
    });

    const mailOptions = {
      from: senderEmail,
      to: '', // Replace with your email address
      subject: 'Contact Us Form Submission',
      html: "<h1>Welcome, mail testing</h1>"
    };

    try {
       transporter.sendMail(mailOptions);
       console.log("sent")
      return new Response("'Email sent successfully!'",{status:200})
    //  res.status(200).NextResponse.json({ message: 'Email sent successfully!' });
    } catch (error) {
        return new Response("Something went wrong.",{status:500})
    
    }
 
}