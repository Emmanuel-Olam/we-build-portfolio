import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use the appropriate email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Your email password or an app-specific password
  },
});

export default transporter;
