// ContactPage.jsx

"use client";
import { motion } from "framer-motion";
import Badge from "./Badge";
import CdButton from "./CdButton";
import ContactForm from "./ContactForm";
import License from "./License";

export default function ContactPage() {
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="max-w-screen-md mx-auto mt-32 min-h-dvh p-8 space-y-4 bg-darkBackground text-gray-200"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
        <div className="relative h-full w-full rounded-3xl shadow-cardNeumorphism">
          <Badge />
        </div>

        <motion.div
          className="pt-4 ml-2 space-y-4 text-right"
          variants={textVariants}
        >
          <h1 className="text-4xl font-bold">Let&apos;s Chat</h1>
          <p className="text-md text-[#bababa]">
            Whether you&apos;re an HR professional looking to hire, a client
            with an exciting project, or someone interested in collaboration,
            I&apos;m all ears! Let&apos;s work together to create something
            amazing.
          </p>
          <div>
            <h2 className="text-white text-xl font-semibold mt-2">
              Looking to Hire?
            </h2>
            <p className="text-md text-[#bababa]">
              I&apos;m ready to bring value to your team. Let&apos;s talk!
            </p>
          </div>
          <div className="">
            <h2 className="text-white text-xl font-semibold mt-2">
              Have a Project?
            </h2>
            <p className="text-md text-[#bababa]">
              Let&apos;s turn your idea into reality together.
            </p>
          </div>
          <div className="">
            <h2 className="text-white text-xl font-semibold mt-2">
              Want to Connect?
            </h2>
            <p className="text-md text-[#bababa] ">
              I&apos;m always open to a chat. Reach out anytime!
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div className="p-4" variants={textVariants}>
        <h1 className="text-center text-3xl font-bold mt-24">
          Reach Out to Me
        </h1>
        <ContactForm />
      </motion.div>
      <motion.div className="ml-2" variants={textVariants}>
        <CdButton />
      </motion.div>
      <motion.div className="ml-4" variants={textVariants}>
        <License />
      </motion.div>
    </motion.div>
  );
}
