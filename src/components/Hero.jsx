import Image from "next/image";
import SmallCard from "./SmallCard";
import Link from "next/link";
import SocialMediaCard from "./Sosmed";
import License from "./License";

export default function Hero() {
  return (
    <>
      <div className="max-w-screen-md mx-auto mt-32 p-8 space-y-4">
        <div className="space-y-8">
          <h1 className="text-gray-200 text-3xl font-bold">
            Tito Zaki Saputro
          </h1>
          <p className="text-[#bbbbbb] text-sm md:text-lg font-normal">
            Hi, I&apos;m Tito Zaki Saputro, a college student passionate about
            web development.
          </p>
        </div>
        <div>
          <div className="flex text-[#bbbbbb] text-sm md:text-lg">
            <p className="mt-1">Founder of</p>
            <div>
              <SmallCard
                imageUrl={"/image/verdex.png"}
                title={"Verdex"}
                width={40}
                height={40}
                className={"p-1"}
              />
            </div>
            <p></p>
          </div>
          <div>
            <div className="flex flex-wrap mt-4 text-[#bbbbbb] text-sm md:text-lg">
              <p className="mt-2">
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
            </div>
          </div>
          <div className="flex flex-wrap text-[#bbbbbb] mt-4 text-sm md:text-lg">
            <p className="mt-2">I have mastered</p>
            <div className="w-28">
              <Link href={"https://www.w3.org/"} target="_blank">
                <SmallCard
                  imageUrl={"/image/html.png"}
                  title={"HTML"}
                  width={24}
                  height={24}
                  className={"ml-2 mt-1"}
                  imgclassName={"mt-1 ml-2"}
                />
              </Link>
            </div>
            <div className="w-26 ">
              <Link href={"https://www.w3.org/Style/CSS/"} target="_blank">
                <SmallCard
                  imageUrl={"/image/css.png"}
                  title={"CSS"}
                  width={26}
                  height={26}
                  className={"ml-2 mt-1"}
                  imgclassName={"mt-1 ml-2"}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap mt-4 text-[#bbbbbb] text-sm md:text-lg gap-2">
            <p className="mt-1">I have skills in </p>
            <div>
              <Link href={"https://nextjs.org/"} target="_blank">
                <SmallCard
                  imageUrl={"/image/Nextjs.png"}
                  title={"NextJS"}
                  width={40}
                  height={40}
                />
              </Link>
            </div>
            <div>
              <Link href={"https://react.dev/"} target="_blank">
                <SmallCard
                  imageUrl={"/icons/logo_dark.svg"}
                  title={"React"}
                  width={25}
                  height={25}
                  imgclassName={"ml-2"}
                  className={"ml-2 p-1"}
                />
              </Link>
            </div>
            <div>
              <Link href={"https://www.javascript.com/"} target="_blank">
                <SmallCard
                  imageUrl={"/image/js.png"}
                  title={"Javascript"}
                  width={28.5}
                  height={28.5}
                  className={"ml-1"}
                  imgclassName={"ml-1"}
                />
              </Link>
            </div>
            <div>
              <Link href={"https://tailwindcss.com/"} target="_blank">
                {" "}
                <SmallCard
                  imageUrl={"/icons/tailwindcss.svg"}
                  title={"Tailwind CSS"}
                  width={40.5}
                  height={40.5}
                  className={""}
                  imgclassName={"p-1"}
                />
              </Link>
            </div>
          </div>
          <div className="text-[#bbbbbb] flex mt-8 text-sm md:text-lg">
            <p>
              Dreaming up ideas and making them come true is where my passion
              lies. You can find my{" "}
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
          </div>
          <div className="text-[#bbbbbb] flex mt-8 text-sm md:text-lg">
            <p>
              Outside of programming, I enjoy playing games. Playing games helps
              me develop strategic thinking and problem-solving skills.
              Currently, I live in Boyolali, Central Java. If you are around
              this area, feel free to reach out. Maybe we can grab a coffee or
              work together on an exciting project.
            </p>
          </div>
          <hr className="w-24 h-[2px] mx-auto my-4 bg-[#292929] border-0 rounded md:my-10" />
          <div className="flex mt-8 text-sm md:text-lg">
            <SocialMediaCard />
          </div>
          <div className="mt-10">
            <p className="text-[#bbbbbb] text-sm md:text-lg">
              If you enjoy my work and find it interesting, consider supporting
              me by visiting{" "}
              <Link
                href={"https://verdex.id"}
                className="text-white group transition-all duration-300 ease-in-out"
              >
                <span className="bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                  Verdex.id.
                </span>
              </Link>{" "}
              Thank you!
            </p>
          </div>
          <div>
            <License />
          </div>
        </div>
      </div>
    </>
  );
}
