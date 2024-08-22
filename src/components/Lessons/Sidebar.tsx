"use client";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

function formatDuration(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

const Sidebar = ({ lessonsList }: { lessonsList: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pathname = usePathname();
  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };
  console.log(lessonsList);
  return (
    <div className="fixed left-0 top-24 flex">
      <div
        className={`font-sans text-white shadow-lg transition-all duration-300 ${
          isExpanded ? "w-[25vw]" : "w-0"
        } overflow-hidden`}
      >
        <div
          className={`rounded-2xl bg-neutral-800 transition-all duration-300 ${isExpanded ? "opacity-100" : "opacity-0"}`}
        >
          {lessonsList.map((lessonChapter: any) => (
            <div key={lessonChapter._id}>
              <div className="rounded-2xl bg-neutral-700 px-6 py-4">
                <h2 className="text-sm font-bold">
                  Chapter {lessonChapter.chapterNumber}
                </h2>
                <h1 className="text-2xl font-bold text-primary">
                  {lessonChapter.title}
                </h1>
              </div>
              <div className="bg-neutral-800 py-1 pl-2">
                <ul>
                  {lessonChapter.lessons.map((lesson: any, index: number) => {
                    const isActive = pathname === `/lessons/${lesson.slug}`;
                    return (
                      <Link href={`/lessons/${lesson.slug}`} key={lesson.slug}>
                        <li className="group relative flex h-12 w-full cursor-pointer items-center rounded-l-2xl pl-4 pr-6 hover:bg-neutral-600">
                          {isActive ? (
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
                          ) : (
                            <div className="ml-1 mr-4 w-fit rounded-full border border-muted-foreground p-2"></div>
                          )}

                          <p
                            className={`${isActive ? "text-white" : "text-neutral-500"} group-hover:text-white`}
                          >
                            0{index + 1}. {lesson.title}
                          </p>
                          <p className="ml-auto text-xs text-neutral-500">
                            {formatDuration(lesson.duration)}
                          </p>
                          {lesson.isFree && (
                            <div className="absolute -top-2 right-0 rounded-2xl bg-primary px-2 py-0.5 text-xs">
                              free
                            </div>
                          )}
                        </li>
                      </Link>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
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
