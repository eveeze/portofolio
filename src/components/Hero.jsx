"use client";
import { motion } from "framer-motion";
import SmallCard from "./SmallCard";
import Link from "next/link";
import SocialMediaCard from "./Sosmed";
import License from "./License";

export default function Hero() {
  const skills = [
    {
      imageUrl: "/image/html.png",
      title: "HTML",
      link: "https://www.w3.org/",
      width: 30,
      height: 30,
    },
    {
      imageUrl: "/image/css.png",
      title: "CSS",
      link: "https://www.w3.org/Style/CSS/",
      width: 30,
      height: 30,
    },
    {
      imageUrl: "/image/Nextjs.png",
      title: "NextJS",
      link: "https://nextjs.org/",
      width: 40,
      height: 40,
    },
    {
      imageUrl: "/icons/logo_dark.svg",
      title: "React",
      link: "https://react.dev/",
      width: 33,
      height: 33,
    },
    {
      imageUrl: "/image/js.png",
      title: "JavaScript",
      link: "https://www.javascript.com/",
      width: 30,
      height: 30,
    },
    {
      imageUrl: "/icons/tailwindcss.svg",
      title: "Tailwind CSS",
      link: "https://tailwindcss.com/",
      width: 41,
      height: 41,
    },
  ];

  return (
    <motion.div
      className="max-w-screen-md mx-auto mt-32 p-8 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.0 }}
    >
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-gray-200 text-3xl font-bold"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        >
          Tito Zaki Saputro
        </motion.h1>
        <motion.p
          className="text-[#bbbbbb] text-sm md:text-lg font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
        >
          Hi, I&apos;m Tito Zaki Saputro, a college student passionate about web
          development.
        </motion.p>
      </motion.div>

      <motion.div
        className="flex text-[#bbbbbb] text-sm md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8, ease: "easeOut" }}
      >
        <p className="mt-1">Founder of</p>
        <div className="ml-4 mt-1">
          <Link href={"https://verdex.id"}>
            <SmallCard
              imageUrl={"/image/verdex.png"}
              title={"Verdex"}
              width={40}
              height={40}
              className={""}
              imgclassName={"p-0.5"}
            />
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-[#bbbbbb] text-sm md:text-lg mt-4">
          I am currently studying at{" "}
          <Link
            href={"https://uty.ac.id/"}
            className="text-white group transition-all duration-300 ease-in-out"
            target="_blank"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Universitas Teknologi Yogyakarta
            </span>
          </Link>
        </p>
      </motion.div>

      <motion.div
        className="mt-4 text-[#bbbbbb] text-sm md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: "easeOut" }}
      >
        <p className="mt-1">I have skills in</p>
        <div className="flex flex-wrap gap-2 items-center justify-left">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="mt-1"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={skill.link} target="_blank">
                <SmallCard
                  imageUrl={skill.imageUrl}
                  title={skill.title}
                  width={skill.width}
                  height={skill.height}
                  className={"flex items-center justify-center"}
                  imgclassName={"p-0.5"}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="text-[#bbbbbb] flex mt-8 text-sm md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
      >
        <p>
          Dreaming up ideas and making them come true is where my passion lies.
          You can find my{" "}
          <Link
            className="text-white group transition-all duration-300 ease-in-out"
            href={"/project"}
          >
            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              full projects list here.
            </span>
          </Link>{" "}
          In addition to my projects, I also create various tutorials on{" "}
          <Link
            href={"https://verdex.id"}
            className="text-white group transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Verdex.id
            </span>
          </Link>{" "}
          to help others learn and grow in the field of web development.
        </p>
      </motion.div>

      <motion.div
        className="text-[#bbbbbb] flex mt-8 text-sm md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <p>
          Outside of programming, I enjoy playing games. Playing games helps me
          develop strategic thinking and problem-solving skills. Currently, I
          live in Boyolali, Central Java. If you are around this area, feel free
          to reach out. Maybe we can grab a coffee or work together on an
          exciting project.
        </p>
      </motion.div>

      <motion.hr
        className="w-32 h-[2px] mx-auto my-4 bg-[#686767] border-0 rounded md:my-10 mt-32"
        initial={{ width: 0 }}
        animate={{ width: "8rem" }}
        transition={{ delay: 1.6, duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="flex mt-8 text-sm md:text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 0.8, ease: "easeOut" }}
      >
        <SocialMediaCard />
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 0.8, ease: "easeOut" }}
      >
        <p className="text-[#bbbbbb] text-sm md:text-lg">
          If you enjoy my work and find it interesting, consider supporting me
          by visiting{" "}
          <Link
            href={"https://verdex.id"}
            className="text-white group transition-all duration-300 ease-in-out"
          >
            <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
              Verdex.id
            </span>
          </Link>
        </p>
      </motion.div>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.1, duration: 0.8, ease: "easeOut" }}
      >
        <License />
      </motion.div>
    </motion.div>
  );
}
