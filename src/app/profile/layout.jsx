// app/profile/layout.jsx

import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export const metadata = {
  title: "titozaki",
  description: "Halaman Profile Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />

        {children}
      </body>
    </html>
  );
}
