"use client";
import { useState, useEffect } from "react";
import ProjectCardAdmin from "@/components/ProjectCardAdmin";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const response = await fetch("/api/admin/project");
    const data = await response.json();
    setProjects(data);
  };

  const handleDelete = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="mt-32 max-w-screen-md min-h-dvh mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8">
          Project Management
        </h1>
        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectCardAdmin
              key={project.id}
              project={project}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p className="text-gray-400">No projects found</p>
        )}
      </div>
    </>
  );
}
