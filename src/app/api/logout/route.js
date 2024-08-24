import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const response = NextResponse.json({ message: "Logout sukses" });
    response.cookies.set("auth-token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 0,
      path: "/dashboard/login",
    });
    return response;
  } catch (error) {
    console.error("error di /api/logout : ", error);
    return new Response(JSON.stringify({ message: "internal server error " })),{
        status : 500
    };
  }
}
