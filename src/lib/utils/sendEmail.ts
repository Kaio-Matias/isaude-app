import nodemailer from 'nodemailer';

interface EnviarEmailProps {
  forEmail: string;
  subject: string;
  body: string;
}

export async function sendEmail({ forEmail, subject, body }: EnviarEmailProps): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVER,
    port: parseInt(process.env.SMTP_SERVER_PORT || '587'),
    secure: false, 
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: forEmail,
    subject,
    html: body
  });
}