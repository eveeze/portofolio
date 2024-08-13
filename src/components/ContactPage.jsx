"use client";
import Badge from "./Badge";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-32 min-h-dvh p-8 space-y-4 bg-darkBackground">
        <div className="grid grid-cols-1 md:grid-cols-[60%_40%]">
          <div className="h-[500px] w-full rounded-3xl overflow-hidden bg-darkBackground">
            <div className="relative h-full w-full rounded-3xl shadow-cardNeumorphism">
              <Badge />
            </div>
          </div>
          <div className="pt-4 ml-2 space-y-4 text-right">
            <h1 className="text-gray-200 text-4xl font-bold">
              Let&apos;s Chat{" "}
            </h1>
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
          </div>
        </div>
        <div className="p-4">
          <h1 className="text-center text-3xl font-bold text-gray-200 mt-8">
            Reach Out to Me
          </h1>
          <ContactForm />
        </div>
      </div>
    </>
  );
}
