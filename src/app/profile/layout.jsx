// app/profile/layout.jsx

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
        {children}
      </body>
    </html>
  );
}
