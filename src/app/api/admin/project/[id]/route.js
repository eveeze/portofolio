import { prisma } from "@/lib/prisma"; // pastikan prisma diimport dengan benar
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  const { id } = params;
  const { title, description, link, techStack, icon } = await req.json();

  // Validasi jika semua field tidak kosong
  if (!title || !description || !link || !techStack || !icon) {
    return NextResponse.json(
      { error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    const updatedProject = await prisma.project.update({
      where: { id: Number(id) },
      data: {
        title,
        description,
        link,
        techStack,
        icon,
      },
    });

    return NextResponse.json(updatedProject);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update project." },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    // Hapus project berdasarkan ID
    await prisma.project.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({ message: "Project deleted successfully." });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to delete project." },
      { status: 500 }
    );
  }
}
