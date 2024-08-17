import prisma from "@/lib/prisma";

const prisma = new PrismaClient();

export async function POST(req) {
  const { token, email } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email },
    include: { token: true },
  });

  if (user && user.token && user.token.token === token) {
    return new Response(JSON.stringify({ message: "2FA successful" }), {
      status: 200,
    });
  } else {
    return new Response(JSON.stringify({ message: "Invalid 2FA code" }), {
      status: 401,
    });
  }
}
