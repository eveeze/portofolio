// api/chatbot/knowledge/route.js

import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const knowledgeEntries = await prisma.knowledge.findMany();

    return new Response(JSON.stringify(knowledgeEntries), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch knowledge entries" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
