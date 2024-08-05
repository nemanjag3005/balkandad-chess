"use client";

import React from "react";
import { Button } from "../ui/button";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import LogoPlain from "../ui/Logos/LogoPlain";
import Link from "next/link";
import { routes } from "./Navbar";

const Sidebar = () => {
  const [opened, setOpened] = React.useState(0);

  return (
    <div className="block font-sans md:hidden">
      <Button variant="ghost" className="p-1.5" onClick={() => setOpened(1)}>
        <Bars3BottomRightIcon className="h-6 w-6" />{" "}
      </Button>
      {opened == 1 ? (
        <div className="fixed inset-0 left-0 top-0 z-40 h-screen w-full overflow-y-scroll bg-white">
          <div className="flex w-full items-center justify-between border-b px-4 py-4">
            <Link href="/">
              <LogoPlain className="h-8 w-8" />
            </Link>
            <Button onClick={() => setOpened(0)} size="icon" variant="ghost">
              <XMarkIcon className="h-7 w-7" />
            </Button>
          </div>
          <div className="flex flex-col px-4 py-2 text-lg font-medium">
            <ul className="">
              {routes.map((route) => (
                <Link key={route.href} href={route.href}>
                  <li className="py-2">{route.title}</li>
                </Link>
              ))}
              <li className="py-2">Newsletter</li>
            </ul>
          </div>
        </div>
      ) : opened == 2 ? (
        <></>
      ) : opened == 3 ? (
        <></>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Sidebar;
