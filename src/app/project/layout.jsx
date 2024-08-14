import Navbar from "@/components/Navbar";
import Video from "@/components/Video";

export const metadata = {
  title: "titozaki",
  description: "Halaman Portofolio Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`text-gray-200`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
