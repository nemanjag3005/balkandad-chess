import React from "react";

const SectionsNav = () => {
  return (
    <div className="sticky top-0 z-50 font-sans">
      <div className="sm:hidden" data-headlessui-state="">
        <div className="relative flex items-center bg-white/95 px-4 py-3 shadow-sm [@supports(backdrop-filter:blur(0))]:bg-white/80 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
          <span
            aria-hidden="true"
            className="font-mono text-sm text-yellow-600"
          >
            01
          </span>
          <span className="ml-4 text-base font-medium text-neutral-900">
            <span className="hidden lg:inline">Table of contents</span>
            <span className="lg:hidden">Contents</span>
          </span>
          <button
            className="-mr-1 ml-auto flex h-8 w-8 items-center justify-center"
            aria-label="Toggle navigation menu"
            type="button"
            aria-expanded="false"
            data-headlessui-state=""
            id="headlessui-popover-button-:R4n9puja:"
          >
            <span className="absolute inset-0"></span>
            <svg
              aria-hidden="true"
              fill="none"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
              className="h-6 w-6 stroke-neutral-700"
            >
              <path d="m15 16-3 3-3-3M15 8l-3-3-3 3"></path>
            </svg>
          </button>
        </div>
        <div className="absolute inset-x-0 bottom-full z-10 h-4 bg-white"></div>
      </div>

      <div className="hidden sm:flex sm:h-32 sm:justify-center sm:border-b sm:border-neutral-200 sm:bg-white/95 sm:[@supports(backdrop-filter:blur(0))]:bg-white/80 sm:[@supports(backdrop-filter:blur(0))]:backdrop-blur">
        <ol
          role="list"
          className="mb-[-2px] grid auto-cols-[minmax(0,15rem)] grid-flow-col text-base font-medium text-neutral-900 [counter-reset:section]"
        >
          <li className="flex [counter-increment:section]">
            <a
              href="#table-of-contents"
              className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(section,decimal-leading-zero)] hover:bg-yellow-50/40 hover:before:text-neutral-900"
            >
              <span className="hidden lg:inline">Table of contents</span>
              <span className="lg:hidden">Contents</span>
            </a>
          </li>
          <li className="flex [counter-increment:section]">
            <a
              href="#screencasts"
              className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(section,decimal-leading-zero)] hover:bg-yellow-50/40 hover:before:text-neutral-900"
            >
              Video Lectures
            </a>
          </li>
          <li className="flex [counter-increment:section]">
            <a
              href="#resources"
              className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(section,decimal-leading-zero)] hover:bg-yellow-50/40 hover:before:text-neutral-900"
            >
              Resources
            </a>
          </li>

          <li className="flex [counter-increment:section]">
            <a
              href="#author"
              className="flex w-full flex-col items-center justify-center border-b-2 border-transparent before:mb-2 before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(section,decimal-leading-zero)] hover:bg-yellow-50/40 hover:before:text-neutral-900"
            >
              Author
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default SectionsNav;
