import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

export default function CdButton() {
  return (
    <>
      <Link href={"/"} className="text-[#bababa] cursor-pointer">
        <div className="flex flex-wrap gap-1  text-left w-16 mt-16 ml-3">
          <span className="mt-1">
            <IoIosArrowForward />
          </span>
          <span className="border-b-2 hover:border-gray-300 border-[#292929] hover:text-gray-200 transition duration-500 ease-in-out">
            cd . .{" "}
          </span>
        </div>
      </Link>
    </>
  );
}
