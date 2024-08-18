// api/send-2fa-email/route.js
import prisma from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, token } = await req.json();

    // Find the user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    // Upsert the two-factor token for the user
    await prisma.twoFactorToken.upsert({
      where: { userId: user.id },
      update: {
        token,
        createdAt: new Date(),
      },
      create: {
        userId: user.id,
        token,
        createdAt: new Date(),
      },
    });

    // Send 2FA email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Your 2FA Code",
      text: `Your 2FA code is ${token}. It will expire in 10 minutes.`,
    };

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
