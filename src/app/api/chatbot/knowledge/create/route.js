// api/chatbot/knowledge/create/route.js

import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const { content, fileContent } = await req.json();

    // Check if content is provided, either directly or from a file
    const knowledgeContent = content || fileContent;

    if (!knowledgeContent) {
      return new Response(JSON.stringify({ message: "Content is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newKnowledge = await prisma.knowledge.create({
      data: {
        content: knowledgeContent,
      },
    });

    return new Response(JSON.stringify(newKnowledge), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create knowledge entry" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
