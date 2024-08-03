"use client";
import React from "react";
import { Boxes } from "../ui/background-boxes";
import { cn } from "~/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-neutral-900 py-24 font-sans">
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-neutral-900 [mask-image:radial-gradient(transparent,white)]" />

      <Boxes />
      <p className="z-20 font-bold uppercase text-primary">
        my chess masterclass
      </p>
      <h1
        className={cn(
          "relative z-20 mt-4 text-xl font-bold text-white md:text-5xl",
        )}
      >
        Get access to all my classes, forever.
      </h1>
      <p className="relative z-20 mt-6 text-center text-neutral-300">
        Get lifetime access to 100+ video lessons and personalized help from me,
        plus any new lessons I add in the future for a simple one-time price.
      </p>
      <div className="z-20 mt-10 w-full max-w-lg rounded-xl border bg-neutral-50 px-8 py-10 shadow-lg">
        <div className="flex items-center justify-center">
          <h3 className="font-sans text-5xl font-semibold">$149</h3>
          <div className="ml-2 flex flex-col">
            <p className="font-sans text-sm font-medium">one-time payment</p>
            <p className="font-sans text-sm text-muted-foreground">
              plus local taxes
            </p>
          </div>
        </div>
        <Link href="/checkout">
          <Button className="mt-6 w-full" variant="default">
            Enroll now
          </Button>
        </Link>
        <p className="mt-4 text-center text-sm text-neutral-400">
          Lifetime access. Free updates.
        </p>
        <ul className="mt-8 space-y-8 text-sm leading-6 text-neutral-700">
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              className="h-8 w-8 flex-none"
            >
              <path fill="#fff" d="M0 0h32v32H0z"></path>
              <rect
                width="23"
                height="22"
                x="3"
                y="5"
                stroke="#dab22f"
                stroke-linejoin="round"
                stroke-width="1.5"
                rx="2"
              ></rect>
              <rect
                width="10"
                height="18"
                x="19"
                y="9"
                fill="#E0F2FE"
                stroke="#dab22f"
                stroke-linejoin="round"
                stroke-width="1.5"
                rx="2"
              ></rect>
              <circle cx="6" cy="8" r="1" fill="#dab22f"></circle>
              <circle cx="9" cy="8" r="1" fill="#dab22f"></circle>
              <path stroke="#dab22f" stroke-width="1.5" d="M3 11h16"></path>
            </svg>
            <p className="ml-6">
              <strong className="font-semibold text-neutral-900">
                Over 20+ professional lectures
              </strong>{" "}
              — everything you need to build build a solid foundation in chess,
              from openings, endgames and advanced tactics.
            </p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-8 w-8 flex-none stroke-primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
              />
            </svg>

            <p className="ml-6">
              <strong className="font-semibold text-neutral-900">
                Personalized help
              </strong>{" "}
              — if at any point in the learning process you get stuck or have
              any questions, you can always reach out to me.
            </p>
          </li>
          <li className="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 32 32"
              className="h-8 w-8 flex-none"
            >
              <path fill="#fff" d="M0 0h32v32H0z"></path>
              <path
                fill="#E0F2FE"
                d="M13.168 18.828a4 4 0 110-5.656L15.997 16l1.5-1.5 1.328-1.328a4 4 0 110 5.656L15.996 16l-1.499 1.5-1.329 1.328z"
              ></path>
              <path
                stroke="#dab22f"
                stroke-linecap="round"
                stroke-width="1.5"
                d="M14.497 17.5l-1.329 1.328a4 4 0 110-5.656l5.657 5.656a4 4 0 100-5.656L17.496 14.5"
              ></path>
              <circle
                cx="16"
                cy="16"
                r="14"
                stroke="#dab22f"
                stroke-width="1.5"
              ></circle>
            </svg>
            <p className="ml-6">
              <strong className="font-semibold text-neutral-900">
                Lifetime access
              </strong>{" "}
              — get instant access to all the lectures I have today, plus any
              new lectures I add in the future.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pricing;
