import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-[#1C1E22] p-6 rounded-lg shadow-neumorph m-4 max-w-sm">
      <img
        src={project.image}
        alt={project.title}
        className="rounded-lg mb-4"
      />
      <h3 className="text-white text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-400">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
