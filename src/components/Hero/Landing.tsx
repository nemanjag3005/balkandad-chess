import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NorthStar from "../ui/Logos/NorthStar";
import Star2 from "../ui/Logos/Star2";

const homeRoutes: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Coach", href: "/coach" },
  { title: "Bio", href: "/bio" },
  { title: "Train", href: "/train" },
  { title: "Blog", href: "/blog" },
];

const Landing = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid w-full max-w-6xl grid-cols-8 grid-rows-6 border border-black">
        <div className="row-span-6 flex flex-col items-center border-r border-black py-4">
          <h3 className="text-sm font-medium uppercase italic">STD. RANK</h3>
          <div className="relative my-4">
            <NorthStar className="h-20 w-20" />
            <span className="absolute inset-y-0 right-1/2 rotate-45 place-content-center text-sm italic text-white">
              #
            </span>
          </div>
          <div className="my-44 flex flex-grow items-center justify-center">
            <div className="-rotate-90">
              <h3 className="pb-4 text-center text-6xl font-semibold">
                Grandmaster
              </h3>
            </div>
          </div>

          <div className="relative my-4">
            <Star2 className="h-20 w-20" />
            <span className="absolute inset-y-0 right-1/3 -rotate-45 place-content-center text-sm italic text-white">
              2658
            </span>
          </div>
          <h3 className="text-sm font-medium uppercase italic">STD. RATING</h3>
        </div>
        <div className="col-span-4 row-span-2 grid grid-cols-1 grid-rows-3">
          <div className="row-span-2 flex flex-col items-center justify-center px-4">
            <h1 className="text-center text-5xl font-semibold">
              Lazar Vilotijević
            </h1>
            <h6 className="mt-4 font-sans text-lg font-bold text-primary">
              BalkanDad Chess
            </h6>
          </div>
          <ul className="flex w-full items-center justify-around border-y border-black py-4 font-sans text-xs font-bold uppercase">
            {homeRoutes.map((route) => (
              <Link key={route.href} href={route.href}>
                <li className="nav w-[100%] py-1">{route.title}</li>
              </Link>
            ))}
          </ul>
        </div>
        <div className="col-span-3 row-span-3 bg-black"></div>
        <div className="h-36" />
        <div className="h-36 bg-black" />
        <div className="h-36" />
        <div className="h-36 bg-black" />
        <div className="h-36 bg-black" />
        <div className="h-36" />
        <div className="h-36 bg-black" />
        <div className="h-36" />
        <div className="col-span-3 row-span-3 flex flex-col items-center justify-center border-l border-black px-8 py-4">
          <h3 className="text-center text-2xl font-semibold leading-10">
            &quot;Without the Element Of Enjoyment, It Is Not Worth Trying To
            Excel At Anything&quot;
          </h3>
          <div className="mt-10">
            <div className="grid grid-cols-4 border border-black">
              <a href="/" className="bg-black p-2">
                <FaFacebook className="h-6 w-6 fill-white" />
              </a>

              <a href="/" className="border-r border-black bg-white p-2">
                <FaTwitter className="h-6 w-6 fill-black" />
              </a>
              <a href="/" className="bg-black p-2">
                <FaInstagram className="h-6 w-6 fill-white" />
              </a>
              <a href="/" className="bg-white p-2">
                <FaYoutube className="h-6 w-6 fill-black" />
              </a>
            </div>
            <div className="mt-4 flex w-full items-center">
              <div className="h-[1px] flex-grow bg-black"></div>
              <span className="mx-2 text-sm font-medium italic">Follow Me</span>
              <div className="h-[1px] flex-grow bg-black"></div>
            </div>
          </div>
        </div>
        <div className="" />
        <div className="bg-black" />
        <div className="" />
        <div className="bg-black" />
        <div className="bg-black" />
        <div className="" />
        <div className="bg-black" />
        <div className="" />
      </div>
    </div>
  );
};

export default Landing;
