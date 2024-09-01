import DashboardNavbar from "@/components/DashboardNavbar";

export const metadata = {
  title: "titozaki",
  description: "Halaman Admin Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar with fixed width */}
          <DashboardNavbar />

          {/* Content area to the right of the Sidebar */}
          <div className="flex-1 p-8 rounded-tl-3xl rounded-bl-rounded-tl-3xl shadow-neumorphism min-h-dvh bg-[#1C1E22]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
