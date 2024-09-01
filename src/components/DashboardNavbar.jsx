// components/DashboardNavbar.jsx
"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import {
  IconHome,
  IconArticle,
  IconFolder,
  IconLogout,
} from "@tabler/icons-react";
import Button from "./Button";

const menuItems = [
  { label: "Dashboard", href: "/dashboard/admin/", icon: <IconHome /> },
  { label: "Article", href: "/dashboard/admin/article", icon: <IconArticle /> },
  {
    label: "Projects",
    href: "/dashboard/admin/projects",
    icon: <IconFolder />,
  },
];

export default function DashboardNavbar() {
  const router = useRouter();

  const handleLogout = async () => {
    const res = await fetch("/api/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
      router.push("/dashboard/login"); // Redirect to login page after successful logout
    } else {
      console.error("Logout failed");
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar with fixed width */}
      <div className="w-60 text-white flex flex-col justify-between">
        <Sidebar>
          <SidebarBody>
            <div className="mt-2">
              {/* Add logout button at the top */}
              {menuItems.map((item, index) => (
                <SidebarLink key={index} link={item} />
              ))}
            </div>
            <div className="mb-4">
              <Button onClick={handleLogout}>Logout</Button>
            </div>
            {/* Add your name at the bottom */}
            <div className="mt-auto text-center p-4 rounded-md bg-neutral-800 shadow-neumorphism">
              <span className="text-white block py-4">Tito Zaki Saputro</span>
            </div>
          </SidebarBody>
        </Sidebar>
      </div>
    </div>
  );
}
