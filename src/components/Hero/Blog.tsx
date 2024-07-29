import Image from "next/image";
import React from "react";
import "dayjs/locale/en";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

const Blog = () => {
  dayjs.extend(localizedFormat);
  return (
    <div className="bg-chess-clock relative flex flex-col items-center justify-center bg-cover bg-no-repeat py-10">
      <div className="absolute inset-0 bg-gradient-radial from-[#FFFFFFCC] to-[#FFFFFF]"></div>
      <div className="z-10 flex w-full max-w-6xl flex-col items-center py-8">
        <h4 className="font-sans text-sm font-bold uppercase text-primary">
          my blog
        </h4>
        <h2 className="mt-4 font-sans text-4xl font-semibold">
          Latest Chess News & My Thoughts
        </h2>
        <p className="z-30 mt-6 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="mt-10 grid w-full grid-cols-3 gap-6">
          <div className="cursor-pointer bg-[#1b1b1b] transition-all duration-300 ease-in-out hover:scale-105">
            <div className="relative h-60 w-full">
              <Image
                src="/coach1.jpg"
                alt="Article"
                fill
                className="object-cover"
              />
              <div className="absolute left-2 top-2 bg-primary px-2.5 py-1 font-sans text-xs text-neutral-700">
                Blog
              </div>
            </div>
            <div className="p-4 font-sans">
              <div className="mb-3 flex items-center justify-start space-x-4">
                <p className="text-xs text-neutral-300">
                  {dayjs("07/02/2024").format("ll")}
                </p>
              </div>

              <h1 className="font-semibold text-neutral-100 group-hover:underline">
                7 Tips to Improve Your Chess Game
              </h1>
              <p className="mt-4 max-w-sm text-sm font-light text-neutral-200">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor....
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-chess-pieces relative z-10 mt-20 flex w-full max-w-6xl flex-col items-start space-y-8 bg-center py-14 pl-24 pr-80 font-sans">
        <div className="absolute inset-0 bg-gradient-radial from-[#1B1B1BCC] to-[#333333] opacity-75"></div>
        <h2 className="z-10 text-4xl font-bold text-neutral-50">
          Lorem Ipsum Dolor Sit Amet consectetetuer adipiscing elit!
        </h2>
        <p className="z-10 text-neutral-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="z-10 border-2 border-neutral-50 px-4 py-2 text-sm font-semibold uppercase text-neutral-50 transition-all duration-300 ease-in-out hover:bg-neutral-50 hover:text-black">
          discover more
        </button>
      </div>
    </div>
  );
};

export default Blog;