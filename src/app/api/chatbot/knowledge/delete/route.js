// api/chatbot/knowledge/delete/route.js

import prisma from "@/lib/prisma";

export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ message: "ID is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await prisma.knowledge.delete({
      where: { id: parseInt(id) },
    });

    return new Response(
      JSON.stringify({ message: "Knowledge entry deleted" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to delete knowledge entry" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
