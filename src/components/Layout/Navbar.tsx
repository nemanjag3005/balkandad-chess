"use client";
import Link from "next/link";
import React from "react";
import LogoPlain from "../ui/Logos/LogoPlain";

export const routes: { title: string; href: string }[] = [
  { title: "Podcast", href: "/podcast" },
  { title: "Balkan Repertoires", href: "/balkan-repertoires" },
];

const Navbar: React.FC<{
  authComponent: React.ReactNode;
}> = ({ authComponent }) => {
  return (
    <nav className="flex w-full items-center justify-center">
      <div className="grid w-full max-w-6xl grid-cols-8">
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center bg-black p-2">
            <Link href="/">
              <LogoPlain className="h-8 w-8" />
            </Link>
          </div>
        </div>
        <div className="col-span-7 flex items-center justify-end space-x-2 py-4 font-bold">
          <ul className="mr-4 hidden items-center justify-between space-x-6 font-sans text-xs uppercase md:flex">
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
