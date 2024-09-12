import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const { title, description, link, techStack, icon } = await req.json();

  try {
    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        link,
        techStack,
        icon,
      },
    });

    return new Response(JSON.stringify(newProject), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to create project" }), {
      status: 500,
    });
  }
}
