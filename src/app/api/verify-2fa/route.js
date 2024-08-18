// api/verify-2fa/route.js
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";
import { generateToken } from "@/lib/jwt";

export async function POST(req) {
  let email;
  let token;

  try {
    const body = await req.json();
    email = body.email;
    token = body.token;

    const user = await prisma.user.findUnique({
      where: { email },
      include: {
        twoFactorToken: true,
      },
    });

    if (!user) {
      console.error("User not found");
      return new Response(JSON.stringify({ message: "User not found" }), {
        status: 404,
      });
    }

    const storedToken = user.twoFactorToken?.[0]?.token;
    const createdAt = user.twoFactorToken?.[0]?.createdAt;

    const tokenIsValid = storedToken === token;
    const tokenIsFresh = new Date() - new Date(createdAt) < 10 * 60 * 1000;

    if (tokenIsValid && tokenIsFresh) {
      await prisma.twoFactorToken.delete({ where: { userId: user.id } });

      const authToken = await generateToken(user.id);

      const response = NextResponse.json({ message: "2FA successful" });
      response.cookies.set("auth-token", authToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60,
        path: "/",
      });

      return response;
    } else {
      return new Response(
        JSON.stringify({ message: "Invalid or expired 2FA code" }),
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Error in /api/verify-2fa:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
