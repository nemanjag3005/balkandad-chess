"use client";
import React from "react";
import { Button } from "../ui/button";
import { PlayIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import ReactPlayer from "react-player/youtube";

const Course = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-50 py-10">
      <div className="grid w-full max-w-6xl grid-cols-8 grid-rows-6 bg-white shadow-lg">
        <div className="col-span-8 row-span-5 border-b p-8 md:col-span-5">
          <h1 className="font-sans text-6xl font-medium">
            My Ultimate Chess Masterclass
          </h1>
          <p className="mt-8 font-sans">
            Dive into chess like never before! As a renowned online instructor
            and experienced coach, I&apos;ve distilled years of knowledge into
            this captivating masterclass. From fundamentals to advanced
            strategies, you&apos;ll discover why chess isn&apos;t just a
            game—it&apos;s an exhilarating journey. Ready to elevate your play
            and have a blast doing it?
          </p>
          <div className="mt-10 flex items-center space-x-4">
            <Link href="/course">
              <Button className="text-xs uppercase" variant="default">
                Learn now
              </Button>
            </Link>
            <div className="flex items-center space-x-1.5">
              <button className="rounded-full bg-black p-2.5">
                <PlayIcon className="h-3 w-3 text-white" />
              </button>
              <p className="font-sans text-xs font-semibold uppercase">
                watch intro class{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="relative order-2 col-span-8 row-span-6 flex items-center justify-center border-l border-t pb-16 pl-32 pr-8 md:order-none md:col-span-3 md:border-t-0 md:pb-0">
          <div className="absolute left-6 top-20 flex flex-col items-center justify-center">
            <h6 className="-rotate-12 text-xl font-semibold md:text-lg">
              As seen on YouTube!
            </h6>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 776.09175 693.66538"
              className="mt-6 h-20 w-20 rotate-45 fill-primary md:h-12 md:w-12"
              y="0px"
              x="0px"
              id="Layer_1"
              version="1.1"
            >
              <defs id="defs9" />
              <g
                transform="matrix(2.7190747,0,0,3.1037754,-326.9763,-1172.9045)"
                id="g3"
              >
                <path
                  id="path5"
                  d="m 130.838,381.118 c 1.125,28.749 5.277,54.82 12.695,78.018 7.205,22.53 18.847,40.222 36.812,53.747 52.018,39.16 153.369,16.572 153.369,16.572 l -4.632,-32.843 72.918,42.778 -58.597,58.775 -3.85,-27.303 c 0,0 -100.347,18.529 -163.905,-34.881 -37.659,-31.646 -53.293,-84.021 -51.593,-153.962 0.266,-0.247 4.728,-0.908 6.783,-0.901 z"
                />
              </g>
            </svg>
          </div>
          <div className="relative mt-36 flex w-3/4 rotate-12 bg-black pt-[46.25%] shadow-lg md:mt-12 md:w-full md:pt-[56.25%]">
            <ReactPlayer
              width="100%"
              height="100%"
              style={{ position: "absolute", top: "0", left: "0" }}
              url="https://www.youtube.com/watch?v=MltFyOGPCaA"
              controls
            />
          </div>
        </div>
        <div className="col-span-3 flex items-center justify-center border-r pl-4 pr-1 md:col-span-2">
          <h3 className="font-sans text-4xl font-semibold md:text-5xl">$149</h3>
          <div className="ml-2 flex flex-col">
            <p className="font-sans text-sm font-medium">one-time payment</p>
            <p className="font-sans text-sm text-muted-foreground">
              plus local taxes
            </p>
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center border-r px-4 md:col-span-1">
          <h3 className="font-sans text-3xl font-semibold">120</h3>
          <p className="font-sans text-sm font-medium">teaching hours</p>
        </div>
        <div className="col-span-3 flex flex-col justify-center px-6 md:col-span-2">
          <h3 className="font-sans text-3xl font-semibold">100+</h3>
          <p className="font-sans text-sm font-medium">satisfied students</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
