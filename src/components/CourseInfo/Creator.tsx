import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Creator = () => {
  return (
    <section
      id="author"
      aria-labelledby="author-title"
      className="relative scroll-mt-14 pb-3 pt-8 font-sans sm:scroll-mt-32 sm:pb-16 sm:pt-10 lg:pt-16"
    >
      <div className="absolute inset-x-0 bottom-0 top-1/2 text-neutral-900/10 [mask-image:linear-gradient(transparent,white)]">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern
              id=":S6:"
              width="128"
              height="128"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
            >
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S6:)"></rect>
        </svg>
      </div>
      <div className="relative mx-auto max-w-5xl pt-16 sm:px-6">
        <div className="bg-neutral-50 pt-px sm:rounded-3xl">
          <div className="relative mx-auto -mt-16 h-44 w-44 overflow-hidden rounded-full bg-neutral-200 md:float-right md:h-64 md:w-64 md:[shape-outside:circle(40%)] lg:mr-20 lg:h-72 lg:w-72">
            <Avatar className="h-full w-full">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className="px-4 py-10 sm:px-10 sm:py-16 md:py-20 lg:px-20 lg:py-32">
            <h2
              className="inline-flex items-center rounded-full px-4 py-1 text-primary ring-1 ring-inset ring-primary"
              id="author-title"
            >
              <span className="font-mono text-sm" aria-hidden="true">
                04
              </span>
              <span className="ml-3 h-3.5 w-px bg-neutral-300"></span>
              <span className="ml-3 text-base font-medium tracking-tight">
                Author
              </span>
            </h2>
            <p className="font-display mt-8 text-5xl font-extrabold tracking-tight text-neutral-900 sm:text-6xl">
              <span className="block text-primary">Lazar Vilotijevic –</span>{" "}
              Hey there, I’m the instructor behind this Chess Masterclass.
            </p>
            <p className="mt-4 text-lg tracking-tight text-neutral-700">
              I&apos;ve been playing chess since I was a little kid, and my
              passion for the game has only grown stronger over the years. With
              hundreds of students under my tutelage, I&apos;ve developed a
              teaching style that resonates with chess enthusiasts of all
              levels. My YouTube channel, BalkanDad Chess, is where I share
              insights, strategies, and the joy of chess with a wider audience.
              Whether you&apos;re a beginner or looking to refine your skills,
              this masterclass is designed to elevate your chess game and deepen
              your understanding of this magnificent sport.
            </p>
            <p className="mt-8">
              <a
                className="inline-flex items-center text-base font-medium tracking-tight text-neutral-900"
                href="#"
              >
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-10 w-10 fill-current"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8132L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"></path>
                </svg>
                <span className="ml-4">Follow on X</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creator;
