"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "~/components/ui/button";

const routes: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Courses", href: "/courses" },
  { title: "Podcast", href: "/podcast" },
  { title: "Balkan Repertoires", href: "/balkan-repertoires" },
  { title: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <nav className="sticky top-0 flex items-center justify-center px-10 py-5">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div>Logo</div>
        <ul className="hidden items-center justify-between space-x-6 md:flex">
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <li>{route.title}</li>
            </Link>
          ))}

          <li>Newsletter</li>

          <Button>Login</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
