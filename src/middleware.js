// middleware.js
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/jwt";

export async function middleware(req) {
  const token = req.cookies.get("auth-token")?.value;
  const isLoginPage = req.nextUrl.pathname === "/dashboard/login";

  console.log("Requested URL:", req.nextUrl.pathname);
  console.log("Token found:", token);

  if (req.nextUrl.pathname.startsWith("/dashboard") && !isLoginPage) {
    if (!token) {
      console.log("No token found, redirecting to login");
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }

    const verifiedToken = await verifyToken(token);
    if (!verifiedToken) {
      console.log("Token verification failed, redirecting to login");
      return NextResponse.redirect(new URL("/dashboard/login", req.url));
    }

    console.log("Token is valid, proceeding to the next middleware/route");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};
