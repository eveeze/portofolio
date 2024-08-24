// components/DashboardNavbar.jsx

import React from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./Sidebar";
import { IconHome, IconArticle, IconFolder } from "@tabler/icons-react";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: <IconHome /> },
  { label: "Article", href: "/article", icon: <IconArticle /> },
  { label: "Projects", href: "/projects", icon: <IconFolder /> },
];

export default function DashboardNavbar() {
  return (
    <Sidebar>
      <SidebarBody>
        {menuItems.map((item, index) => (
          <SidebarLink key={index} link={item} />
        ))}
      </SidebarBody>
    </Sidebar>
  );
}
