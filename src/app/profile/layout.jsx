// app/profile/layout.jsx

import Chat from "@/components/Chat";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "titozaki",
  description: "Halaman Profile Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Chat />
        {children}
      </body>
    </html>
  );
}
