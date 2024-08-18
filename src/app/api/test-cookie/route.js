// api/test-cookie/route.js
import { NextResponse } from "next/server";

export async function GET() {
  const response = NextResponse.json({ message: "Cookie test successful" });
  response.cookies.set("test-cookie", "test-value", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60, // 1 hour
    path: "/",
  });
  return response;
}
