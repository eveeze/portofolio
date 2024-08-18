// api/login/route.js

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import crypto from "crypto";
import { generateToken } from "@/lib/jwt";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    if (bcrypt.compareSync(password, user.password)) {
      const token = crypto.randomInt(100000, 999999).toString();

      await prisma.twoFactorToken.upsert({
        where: { userId: user.id },
        update: { token, createdAt: new Date() },
        create: { token, userId: user.id },
      });

      // Send 2FA code via email
      const emailResponse = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/send-2fa-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, token }),
        }
      );

      if (!emailResponse.ok) {
        console.error("Error sending 2FA email:", await emailResponse.text());
        return new Response(
          JSON.stringify({ message: "Failed to send 2FA email" }),
          {
            status: 500,
          }
        );
      }

      return new Response(JSON.stringify({ message: "2FA required" }), {
        status: 200,
      });
    } else {
      return new Response(
        JSON.stringify({ message: "Invalid email or password" }),
        {
          status: 401,
        }
      );
    }
  } catch (error) {
    console.error("Error in /api/login:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
