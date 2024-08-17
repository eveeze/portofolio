// api/send-2fa-email/route.js

import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, token } = await req.json();

  // Setup Nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Your 2FA Code",
    text: `Your 2FA code is ${token}. It will expire in 10 minutes.`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ message: "2FA email sent" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending 2FA email:", error);
    return new Response(JSON.stringify({ message: "Failed to send email" }), {
      status: 500,
    });
  }
}
