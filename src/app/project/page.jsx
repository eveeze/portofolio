// app/project/page.jsx

export default function Project() {
  const techStack = [
    { id: 1, name: "Next.js", description: "React Framework for production." },
    {
      id: 2,
      name: "React",
      description: "JavaScript library for building user interfaces.",
    },
    { id: 3, name: "Vite", description: "Next Generation Frontend Tooling." },
    {
      id: 4,
      name: "Prisma",
      description: "Next-generation ORM for Node.js & TypeScript.",
    },
    {
      id: 5,
      name: "PostgreSQL",
      description: "The world's most advanced open-source database.",
    },
    {
      id: 6,
      name: "TailwindCSS",
      description: "A utility-first CSS framework.",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A personal portfolio built with Next.js, React, and TailwindCSS.",
      techStack: ["Next.js", "React", "TailwindCSS"],
    },
    {
      id: 2,
      title: "Blog System",
      description:
        "A dynamic blog system with Next.js, Prisma, and PostgreSQL.",
      techStack: ["Next.js", "Prisma", "PostgreSQL"],
    },
    {
      id: 3,
      title: "E-Commerce Store",
      description:
        "A fully-fledged e-commerce site built with Vite, React, and TailwindCSS.",
      techStack: ["Vite", "React", "TailwindCSS"],
    },
  ];

  return (
    <>
      <div className="min-h-dvh w-full mx-auto max-w-screen-md mt-32 text-gray-200">
        <h1 className="text-6xl font-bold text-white mt-24 mb-12">Projects</h1>
        <p className="text-xl text-gray-400 mb-16">
          Here are some of the projects I’ve built using modern web
          technologies.
        </p>

        {/* Tech Stack Section */}
        <section>
          <h2 className="text-4xl font-semibold text-white mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 gap-6">
            {techStack.map((stack) => (
              <div
                key={stack.id}
                className="bg-[#1C1E22] p-6 rounded-3xl shadow-cardNeumorphism"
              >
                <h3 className="text-2xl font-medium mb-2 text-white">
                  {stack.name}
                </h3>
                <p className="text-gray-400">{stack.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Placeholder for Project Cards */}
        <section className="mt-24">
          <h2 className="text-4xl font-semibold text-white mb-6">Projects</h2>
          <div className="grid grid-cols-1 gap-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#1C1E22] p-8 rounded-3xl shadow-cardNeumorphism"
              >
                <h3 className="text-3xl font-semibold text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="text-gray-400">
                  <span className="font-semibold text-white">Tech Stack:</span>{" "}
                  {project.techStack.join(", ")}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
