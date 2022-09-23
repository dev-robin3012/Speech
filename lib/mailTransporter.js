import { createTransport } from 'nodemailer';

const transporter = createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  secure: false,
  auth: {
    user: process.env.smtp_email,
    pass: process.env.smtp_pass,
  },
});

export default transporter;
