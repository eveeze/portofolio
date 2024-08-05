import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "titozaki",
  description: "Web Portofolio dari Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
