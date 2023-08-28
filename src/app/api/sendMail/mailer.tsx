import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use the appropriate email service
  auth: {
    user: 'your_email@gmail.com', // Your email address
    pass: 'your_email_password', // Your email password or an app-specific password
  },
});

export default transporter;
