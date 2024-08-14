"use client";
import React, { useState } from "react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="fixed left-0 top-24 flex">
      <div
        className={`font-sans text-white shadow-lg transition-all duration-300 ${
          isExpanded ? "w-80" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`rounded-2xl bg-neutral-800 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
        >
          <div className="rounded-2xl bg-neutral-700 px-6 py-4">
            <h2 className="text-sm font-bold">Chapter 01</h2>
            <h1 className="text-2xl font-bold text-primary">Basics</h1>
          </div>
          <div className="bg-neutral-800 py-1 pl-2">
            <ul>
              <li className="relative flex w-full cursor-pointer items-center rounded-l-2xl py-2 pl-4 pr-6 hover:bg-neutral-600">
                <div className="mr-3 w-fit rounded-full bg-primary p-1.5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="text-sm">01. Introduction</p>
                <p className="ml-auto text-xs text-neutral-500">35:24</p>
                <div className="absolute -top-2 right-0 rounded-2xl bg-primary px-2 py-0.5 text-xs">
                  free
                </div>
              </li>
              <li className="flex w-full cursor-pointer items-center rounded-l-2xl py-2 pl-4 pr-6 hover:bg-neutral-600">
                <div className="ml-1 mr-3 w-fit rounded-full border border-muted-foreground p-2"></div>
                <p className="text-sm">02. How do Openings work</p>
                <p className="ml-auto text-xs text-neutral-500">23:56</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <button
        onClick={toggleSidebar}
        className="mt-3 h-10 rounded-r-md bg-neutral-800 p-2 text-white"
      >
        {isExpanded ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default Sidebar;
