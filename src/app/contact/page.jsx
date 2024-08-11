import Badge from "@/components/Badge";
export default function Contact() {
  return (
    <>
      <div className=" max-w-screen-md  mx-auto mt-32 min-h-dvh  p-8 space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="hidden md:block h-[500px] w-full border-2 border-white rounded-3xl overflow-hidden shadow-lg ">
            <Badge />
          </div>
          <div className="p-8 ml-2 space-y-4">
            <h1 className="text-gray-200 text-4xl font-bold">Let's Chat </h1>
            <p className="text-lg text-[#bababa]">
              Whether you're an HR professional looking to hire, a client with
              an exciting project, or someone interested in collaboration, I'm
              all ears! Let's work together to create something amazing.
            </p>
            <div>
              <h2 className="text-white text-xl font-semibold mt-2">
                Looking to Hire?
              </h2>
              <p className="text-lg text-[#bababa]">
                I'm ready to bring value to your team. Let's talk!
              </p>
            </div>
            <div className="">
              <h2 className="text-white text-xl font-semibold mt-2">
                Have a Project?
              </h2>
              <p className="text-lg text-[#bababa]">
                Let's turn your idea into reality together.
              </p>
            </div>
            <div className="">
              <h2 className="text-white text-xl font-semibold mt-2">
                Want to Connect?
              </h2>
              <p className="text-lg text-[#bababa] ">
                I'm always open to a chat. Reach out anytime!
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 p-8">
          <div>
            <h1 className="text-xl text-white">halo dunia</h1>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
