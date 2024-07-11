import Link from "next/link";
import React from "react";
import { Button } from "~/components/ui/button";

const Navbar = () => {
  return (
    <nav className="sticky top-0 flex items-center justify-center px-10 py-5">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div>Logo</div>
        <ul className="hidden items-center justify-between space-x-6 md:flex">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/about">
            <li>Courses</li>
          </Link>
          <Link href="/about">
            <li>Podcast</li>
          </Link>
          <Link href="/about">
            <li>Balkan Repertoires</li>
          </Link>
          <Link href="/about">
            <li>Blog</li>
          </Link>
          <Link href="/about">
            <li>Newsletter</li>
          </Link>
          <Button>Login</Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
