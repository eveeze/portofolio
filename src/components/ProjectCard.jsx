"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow:
          "0px 0px 0px #121417, -0px -0px 0px #1e2023, 18px 18px 36px rgba(0, 0, 0, 0.5)",
      }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
      className="bg-[#1C1E22] p-8 rounded-3xl shadow-[9px_9px_16px_#121417,-9px_-9px_16px_#1e2023,12px_12px_20px_rgba(0,0,0,0.3)] max-w-sm relative flex flex-col justify-between h-[250px]"
    >
      <div className="">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-[#1C1E22] flex items-center justify-center shadow-[9px_9px_16px_#121417,-9px_-9px_16px_#1e2023]">
            <Image
              src={project.icon}
              alt={project.title}
              width={32}
              height={32}
              className="rounded-full"
            />
          </div>
          <h3 className="text-lg md:text-xl font-semibold text-white ml-4">
            {project.title}
          </h3>
        </div>
        <p className="text-gray-400 mb-4 text-sm md:text-md">
          {project.description}
        </p>
        <div className="text-gray-400 mb-4">
          <span className="font-semibold text-white">Tech Stack:</span>{" "}
          {project.techStack.join(", ")}
        </div>
      </div>
      <Link href={project.link} target="_blank">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#1C1E22] px-4 py-2 rounded-full shadow-[inset_4px_4px_8px_#0e0f12,inset_-4px_-4px_8px_#2a2d32] text-white hover:shadow-[inset_2px_2px_4px_#0e0f12,inset_-2px_-2px_4px_#2a2d32,4px_4px_12px_rgba(0,0,0,0.4)] active:shadow-[inset_6px_6px_12px_#0e0f12,inset_-6px_-6px_12px_#2a2d32] transition-all duration-200"
        >
          Learn More
        </motion.button>
      </Link>
    </motion.div>
  );
}
