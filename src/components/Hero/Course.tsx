import React from "react";
import { Button } from "../ui/button";
import { PlayIcon } from "@heroicons/react/24/solid";

const Course = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid w-full max-w-6xl grid-cols-8 grid-rows-6 border-t border-neutral-300">
        <div className="col-span-5 row-span-5 border-b border-neutral-300 p-8">
          <h1 className="text-6xl font-medium">
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
            <Button className="text-xs uppercase" variant="default">
              Learn now
            </Button>
            <div className="flex items-center space-x-1">
              <button className="rounded-full bg-black p-2.5">
                <PlayIcon className="h-3 w-3 text-white" />
              </button>
              <p className="font-sans text-xs font-semibold uppercase">
                watch intro class{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-3 row-span-5 border-l border-neutral-300"></div>
        <div className="col-span-3 flex items-center justify-center">
          <h3 className="font-sans text-5xl font-semibold">$149</h3>
          <div className="ml-2 flex flex-col">
            <p className="font-sans text-sm font-medium">one-time payment</p>
            <p className="font-sans text-sm text-muted-foreground">
              plus local taxes
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="font-sans text-4xl font-semibold">120</h3>
          <p className="font-sans text-sm font-medium">teaching hours</p>
        </div>
      </div>
    </div>
  );
};

export default Course;
