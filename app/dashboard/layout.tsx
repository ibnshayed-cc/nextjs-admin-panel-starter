import React from "react";
import Sidebar from "../ui/Sidebar";
import Header from "../ui/Header";
import { SidebarOne } from "../ui/SidebarOne";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SidebarOne />
      <div>
        <Header />
        <div className="p-5 bg-blue-50/50 h-[calc(100vh_-_64px)] overflow-hidden overflow-y-auto rounded-tl-3xl shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
