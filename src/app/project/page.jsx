"use client";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

export default function Project() {
  const projects = [
    {
      id: 1,
      link: "https://github.com/eveeze/silalearn",
      icon: "/image/Nextjs.png",
      title: "Silalearn",
      description: "Website to learn Pancasila",
      techStack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: 2,
      link: "https://github.com/eveeze/Website-List-Tugas-Flask/tree/master",
      icon: "/image/Nextjs.png",
      title: "Task List",
      description: "Website to list your task ",
      techStack: ["Python", "Flask", "CSS", "HTML"],
    },
    {
      id: 3,
      link: "https://github.com/eveeze/silalearn",
      icon: "/image/Nextjs.png",
      title: "E-Commerce Store",
      description: "A fully-fledged e-commerce site ",
      techStack: ["Vite", "React", "TailwindCSS"],
    },
    {
      id: 4,
      link: "https://github.com/eveeze/silalearn",
      icon: "/icons/logo_dark.svg",
      title: "E-Commerce Store",
      description: "A fully-fledged e-commerce site ",
      techStack: ["Vite", "React", "TailwindCSS"],
    },
    {
      id: 5,
      link: "https://github.com/eveeze/silalearn",
      icon: "/icons/logo_dark.svg",
      title: "E-Commerce Store",
      description: "A fully-fledged e-commerce site ",
      techStack: ["Vite", "React", "TailwindCSS"],
    },
    {
      id: 6,
      link: "https://github.com/eveeze/silalearn",
      icon: "/icons/logo_dark.svg",
      title: "E-Commerce Store",
      description: "A fully-fledged e-commerce site ",
      techStack: ["Vite", "React", "TailwindCSS"],
    },
  ];

  return (
    <>
      <div className="mt-32 mx-auto min-h-dvh p-8 max-w-screen-xl pb-32">
        <div className="mx-auto space-y-4">
          <motion.h1
            className="text-4xl text-center font-bold text-gray-200"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Projects
          </motion.h1>
          <motion.p
            className="text-lg text-center font-normal text-[#bababa]"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
          >
            Projects that I created and maintained
          </motion.p>
        </div>
        <motion.div
          className="mx-auto space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4 items-baseline"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
        >
          {projects.map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
