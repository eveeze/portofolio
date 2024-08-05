import Image from "next/image";
import Link from "next/link";
import { MdOutlineArticle } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";

export default function Navbar() {
  return (
    <>
      <nav className="absolute w-full z-20 top-0 start-0">
        <div className="max-w-screen-md mx-auto p-8 grid grid-cols-2">
          <div className="">
            <Image
              src={"/image/pp.jpg"}
              alt="Foto Profil Tito Zaki Saputro"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <div className="">
            <ul className="flex  items-end justify-end gap-1 md:gap-8 mt-4">
              <li>
                <Link
                  href={"/"}
                  className="text-gray-400 flex items-center hover:text-white"
                >
                  <MdOutlineArticle size={24} className="mr-2" />
                  <span className="hidden md:block">Blog</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/project"}
                  className="text-gray-400 flex items-center hover:text-white"
                >
                  <FaRegLightbulb size={24} className="mr-2" />
                  <span className="hidden md:block">Projects</span>
                </Link>
              </li>
              <li>
                <Link
                  href={"/"}
                  className="text-gray-400 flex items-center hover:text-white"
                >
                  <FiMessageCircle size={24} className="mr-2" />
                  <span className="hidden md:block">Contact</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
