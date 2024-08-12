// app/profile/layout.jsx

import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export const metadata = {
  title: "titozaki",
  description: "Halaman Profile Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`text-gray-200`}>
      <body>
        <Navbar />
        <Video />
        {children}
        <Video className={"top-full h-[450px]"} />
      </body>
    </html>
  );
}
