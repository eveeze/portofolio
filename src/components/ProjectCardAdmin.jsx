"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProjectCardAdmin({ project }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(`/api/admin/project/${project.id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        router.refresh(); // Refresh page to update UI after deletion
      } else {
        console.error("Failed to delete project.");
      }
    } catch (error) {
      console.error("Error deleting project:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleEdit = async () => {
    setIsEditing(true);
    const updatedProject = {
      title: "Updated Title", // Kamu bisa buat form untuk edit data sebenarnya
      description: "Updated description",
      link: "https://updated-link.com",
      techStack: ["Updated Tech 1", "Updated Tech 2"],
      icon: "/updated-icon.png",
    };

    try {
      const res = await fetch(`/api/admin/project/${project.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProject),
      });

      if (res.ok) {
        router.refresh(); // Refresh page to update UI after editing
      } else {
        console.error("Failed to update project.");
      }
    } catch (error) {
      console.error("Error updating project:", error);
    } finally {
      setIsEditing(false);
    }
  };

  return (
    <div className="bg-[#1C1E22] p-8 rounded-lg shadow-md flex flex-col justify-between h-[300px]">
      <div>
        <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="text-gray-400 mb-4">
          <span className="font-semibold text-white">Tech Stack:</span>{" "}
          {project.techStack.join(", ")}
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="text-sm text-white bg-blue-500 px-4 py-2 rounded-md"
          onClick={handleEdit}
          disabled={isEditing}
        >
          {isEditing ? "Editing..." : "Edit"}
        </button>

        <button
          className="text-sm text-white bg-red-500 px-4 py-2 rounded-md"
          onClick={handleDelete}
          disabled={isDeleting}
        >
          {isDeleting ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
