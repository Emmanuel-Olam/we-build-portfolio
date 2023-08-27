// mailer.js

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail', // You can use other email services as well
  auth: {
    user: 'your_email@gmail.com', // Your email address
    pass: 'your_email_password', // Your email password
  },
});

module.exports = transporter;
