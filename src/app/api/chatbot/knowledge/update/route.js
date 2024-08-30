// api/chatbot/knowledge/update/route.js

import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const { id, content } = await req.json();

    if (!id || !content) {
      return new Response(
        JSON.stringify({ message: "ID and content are required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const updatedKnowledge = await prisma.knowledge.update({
      where: { id: parseInt(id) },
      data: { content },
    });

    return new Response(JSON.stringify(updatedKnowledge), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to update knowledge entry" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
