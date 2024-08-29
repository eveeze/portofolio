// (main)/layout.jsx
import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";
export const metadata = {
  title: "titozaki",
  description: "Web Portofolio Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`text-gray-200`}>
      <body className="">
        <Navbar />
        {children}
        <Chat />
      </body>
    </html>
  );
}
