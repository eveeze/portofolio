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
      <div className="mt-32 mx-auto min-h-dvh p-8 max-w-screen-xl ">
        <div className=" mx-auto space-y-4 ">
          <h1 className="text-4xl text-center font-bold text-gray-200">
            Projects
          </h1>
          <p className="text-lg text-center font-normal text-[#bababa] ">
            Projects that i created and maintained
          </p>
        </div>
        <div className="mx-auto space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4  items-baseline">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}
