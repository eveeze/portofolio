import React from "react";
import Link from "next/link";
export default function License() {
  return (
    <div className=" mt-16">
      <p className="text-[#bbbbbb] text-lg">
        <Link
          href="https://creativecommons.org/licenses/by-nc/4.0/?ref=chooser-v1"
          target="_blank"
          rel="license noopener noreferrer"
          className=" inline-block hover:underline"
        >
          CC BY-NC 4.0
        </Link>{" "}
        2024-PRESENT{" "}
        <Link
          rel="cc:attributionURL dct:creator"
          property="cc:attributionName"
          href="https://www.linkedin.com/in/tito-zaki-saputro-6a854a229/"
        >
          &copy;Tito Zaki Saputro{" "}
        </Link>
      </p>
    </div>
  );
}
