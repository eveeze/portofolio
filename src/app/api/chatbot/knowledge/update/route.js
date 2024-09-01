// api/chatbot/knowledge/update/route.js

import prisma from "@/lib/prisma";

export async function PUT(req) {
  try {
    const { content } = await req.json();

    // If content is empty, delete all knowledge entries
    if (!content) {
      await prisma.knowledge.deleteMany({});
      return new Response(
        JSON.stringify({ message: "All knowledge entries deleted" }),
        {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Upsert knowledge entry, assuming there's only one entry
    const updatedKnowledge = await prisma.knowledge.upsert({
      where: { id: 1 }, // Assuming you are using a single entry with a fixed ID
      update: { content },
      create: { id: 1, content },
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
