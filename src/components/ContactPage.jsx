"use client";
import { motion } from "framer-motion";
import Badge from "./Badge";
import CdButton from "./CdButton";
import ContactForm from "./ContactForm";
import License from "./License";

export default function ContactPage() {
  return (
    <>
      <motion.div
        className="max-w-screen-md mx-auto mt-32 min-h-dvh p-8 space-y-4 bg-darkBackground text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <motion.div
            className="h-[500px] w-full rounded-3xl overflow-hidden bg-darkBackground"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.3)",
            }}
          >
            <div className="relative h-full w-full rounded-3xl shadow-cardNeumorphism">
              <Badge />
            </div>
          </motion.div>
          <motion.div
            className="pt-4 ml-2 space-y-4 text-right mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
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
            <div>
              <h2 className="text-white text-xl font-semibold mt-2">
                Have a Project?
              </h2>
              <p className="text-md text-[#bababa]">
                Let&apos;s turn your idea into reality together.
              </p>
            </div>
            <div>
              <h2 className="text-white text-xl font-semibold mt-2">
                Want to Connect?
              </h2>
              <p className="text-md text-[#bababa]">
                I&apos;m always open to a chat. Reach out anytime!
              </p>
            </div>
          </motion.div>
        </div>
        <div className="p-4">
          <ContactForm />
        </div>
        <motion.div
          className="ml-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        >
          <CdButton />
        </motion.div>
        <motion.div
          className="ml-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
        >
          <License />
        </motion.div>
      </motion.div>
    </>
  );
}
