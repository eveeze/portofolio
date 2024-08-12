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
          <div>
            <Image
              src={"/image/pp.jpg"}
              alt="Foto Profil Tito Zaki Saputro"
              width={50}
              height={50}
              className="rounded-full"
            />
          </div>

          <div>
            <ul className="flex items-end justify-end gap-1 md:gap-4 mt-4">
              <li className="relative group">
                <Link
                  href={"/"}
                  className="text-gray-400 flex items-center hover:text-white"
                >
                  <MdOutlineArticle size={24} className="mr-2" />
                </Link>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100  transition-transform delay-700 text-xs text-white p-1 rounded scale-0 group-hover:scale-100 origin-bottom duration-300 ease-out">
                  Articles
                </span>
              </li>
              <li className="relative group">
                <Link
                  href={"/project"}
                  className="text-gray-400 flex items-center hover:text-white"
                >
                  <FaRegLightbulb size={24} className="mr-2" />
                </Link>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100  transition-transform delay-700 text-xs text-white p-1 rounded scale-0 group-hover:scale-100 origin-bottom duration-300 ease-out">
                  Projects
                </span>
              </li>
              <li className="relative group">
                <Link
                  href={"/contact"}
                  className="text-gray-400 flex items-center hover:text-white"
                >
                  <FiMessageCircle size={24} className="mr-2" />
                </Link>
                <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100  transition-transform delay-700 text-xs text-white p-1 rounded scale-0 group-hover:scale-100 origin-bottom duration-300 ease-out">
                  Contact
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
