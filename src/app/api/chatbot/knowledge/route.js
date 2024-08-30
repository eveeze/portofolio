// api/chatbot/knowledge/route.js

import prisma from "@/lib/prisma";

export async function GET(req) {
  try {
    const knowledge = await prisma.knowledge.findMany();
    return new Response(JSON.stringify(knowledge), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching knowledge:", error);
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
}
