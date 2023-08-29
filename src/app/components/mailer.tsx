import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use the appropriate email service
  auth: {
    user: "futurebuildersagency@gmail.com", // Your email address
    pass: "cajmpgtfoiyttnwf", // Your email password or an app-specific password
  },
});

export default transporter;
