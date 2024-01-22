"use client";
import { Button, List, ListItem } from "@material-tailwind/react";
import Link from "next/link";
import React from "react";

function Sidebar() {
  return (
    <div className="w-[280px] p-5 h-screen overflow-hidden overflow-y-auto ">
      <p className="text-2xl">Admin Panel</p>

      <div className="mt-10">
        <div>
          <p className="uppercase font-bold">Menu</p>
          <Link
            href="/dashboard/users"
            className="pl-5 py-2 block hover:bg-indigo-500 text-gray-700 hover:text-white rounded-r-full"
          >
            Super Admin
          </Link>
          <Link
            href="/dashboard/users"
            className="pl-5 py-2 block hover:bg-indigo-500 hover:text-white rounded-r-full"
          >
            Admin
          </Link>
          <Link
            href="/dashboard/users"
            className="pl-5 py-2 block hover:bg-indigo-500 hover:text-white rounded-r-full"
          >
            Customer
          </Link>
          <Link
            href="/dashboard/users"
            className="pl-5 py-2 block hover:bg-indigo-500 hover:text-white rounded-r-full"
          >
            SEO Executive
          </Link>
          <List>
            <ListItem>Inbox</ListItem>
            <ListItem>Trash</ListItem>
            <ListItem>Settings</ListItem>
          </List>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
