"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";
import LogoPlain from "../ui/Logos/LogoPlain";

export const routes: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Courses", href: "/courses" },
  { title: "Podcast", href: "/podcast" },
  { title: "Balkan Repertoires", href: "/balkan-repertoires" },
  { title: "Blog", href: "/blog" },
];

const Navbar: React.FC<{
  authComponent: React.ReactNode;
}> = ({ authComponent }) => {
  return (
    <nav className="sticky top-0 flex w-full items-center justify-center px-4 md:px-10">
      <div className="flex w-full max-w-7xl items-center justify-between py-4">
        <Link href="/">
          <LogoPlain className="h-8 w-8" />
        </Link>
        <div className="flex items-center space-x-2 font-medium">
          <ul className="mr-4 hidden items-center justify-between space-x-6 md:flex">
            {routes.map((route) => (
              <Link key={route.href} href={route.href}>
                <li className="nav w-[100%] py-1">{route.title}</li>
              </Link>
            ))}

            <li className="nav py-1">Newsletter</li>
          </ul>
          {authComponent}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
