// api/login/route.js

import prisma from "@/lib/prisma";
import bcrypt from "bcrypt";
import crypto from "crypto";

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();

  const user = await prisma.user.findUnique({ where: { email } });

  if (user && bcrypt.compareSync(password, user.password)) {
    // Generate a random 6-digit token for 2FA
    const token = crypto.randomInt(100000, 999999).toString();

    // Save or update the token in the database
    await prisma.twoFactorToken.upsert({
      where: { userId: user.id },
      update: { token },
      create: {
        token,
        user: { connect: { id: user.id } },
      },
    });

    // Send token to email
    await fetch(`${process.env.NEXT_PUBLIC_URL}/api/send-2fa-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token }),
    });

    return new Response(JSON.stringify({ message: "2FA required" }), {
      status: 200,
    });
  } else {
    return new Response(
      JSON.stringify({ message: "Invalid email or password" }),
      { status: 401 }
    );
  }
}
