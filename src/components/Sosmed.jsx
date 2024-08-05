import Link from "next/link";
import Image from "next/image";
export default function SocialMediaCard() {
  const socialMediaLinks = [
    {
      name: "GitHub",
      url: "https://github.com/eveeze",
      icon: "/image/gitub.png",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tito-zaki-saputro-6a854a229/",
      icon: "/image/linkedin-app.png",
    },
    {
      name: "Twitter",
      url: "https://x.com/EVEEZE69",
      icon: "/image/xtwitter.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ev2eze/",
      icon: "/icons/instagram.svg",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/channel/UCCcCSLanjHRnUawO2LpoxBg",
      icon: "/image/yt.png",
    },
  ];

  return (
    <div className="text-white ">
      <h2 className="text-xl mb-4 text-[#ffffff] font-semibold">Find me on</h2>
      <div className="flex flex-wrap gap-4">
        {socialMediaLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            passHref
            className="mt-2 border-b-2 hover:border-gray-300 border-[#292929] transition duration-500 ease-in-out"
            target="_blank"
          >
            <div className="flex items-center space-x-1 cursor-pointer ">
              <Image src={link.icon} alt={link.name} width={24} height={24} />
              <span>{link.name}</span>
            </div>
          </Link>
        ))}
      </div>
      <p className="mt-6 text-[#bbbbbb]">
        Or sent an email to me at{" "}
        <Link
          href="mailto:jsah737@gmail"
          passHref
          className="group transition-all duration-300 ease-in-out"
        >
          <span className=" text-white cursor-pointer bg-left-bottom bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Jsah737@gmail.com
          </span>
        </Link>
      </p>
    </div>
  );
}
