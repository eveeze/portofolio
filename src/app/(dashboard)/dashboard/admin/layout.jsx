import DashboardNavbar from "@/components/DashboardNavbar";

export const metadata = {
  title: "titozaki",
  description: "Halaman Contact Tito Zaki Saputro",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DashboardNavbar />
        {children}
      </body>
    </html>
  );
}
