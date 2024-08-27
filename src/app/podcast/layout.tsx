"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Button } from "~/components/ui/button";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showMore, setShowMore] = React.useState(false);
  return (
    <div className="flex min-h-full font-sans">
      <div className="w-full overflow-x-hidden">
        <header className="bg-neutral-50 lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-[28rem] lg:items-start lg:overflow-y-auto xl:w-[30rem]">
          <div className="hidden lg:sticky lg:top-0 lg:flex lg:w-16 lg:flex-none lg:items-center lg:whitespace-nowrap lg:py-12 lg:text-sm lg:leading-7 lg:[writing-mode:vertical-rl]">
            <span className="font-mono text-neutral-500">Hosted by</span>
            <span className="mt-6 flex gap-6 font-bold text-neutral-900">
              Lazar Vilotijevic
              {/* <span aria-hidden="true" className="text-neutral-400">
                /
              </span>
              Wes Mantooth */}
            </span>
          </div>
          <div className="relative z-10 mx-auto px-4 pb-4 pt-10 sm:px-6 md:max-w-2xl md:px-4 lg:min-h-full lg:flex-auto lg:border-x lg:border-neutral-200 lg:px-8 lg:py-12 xl:px-12">
            <div className="pb-4 font-sans text-sm">
              <Link href="/">
                <Button variant="outline">&larr; Home </Button>
              </Link>
            </div>
            <a
              className="relative mx-auto block h-64 w-full overflow-hidden rounded-lg bg-neutral-200 shadow-xl shadow-neutral-200 sm:w-64 sm:rounded-xl lg:w-auto lg:rounded-2xl"
              aria-label="Homepage"
              href="/"
            >
              <Image alt="" fill src="/" />
              <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-black/10 sm:rounded-xl lg:rounded-2xl"></div>
            </a>
            <div className="mt-10 text-center lg:mt-12 lg:text-left">
              <p className="text-xl font-bold text-neutral-900">
                <a href="/">The Chess Podcast</a>
              </p>
              <p className="mt-3 text-lg font-medium leading-8 text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus.
              </p>
            </div>
            <section className="mt-12 hidden lg:block">
              <h2 className="flex items-center font-mono text-sm font-medium leading-7 text-neutral-900">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  className="h-2.5 w-2.5"
                >
                  <path
                    d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                    className="fill-primary"
                  ></path>
                  <path
                    d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                    className="fill-primary"
                  ></path>
                </svg>
                <span className="ml-2.5">About</span>
              </h2>
              <p className="mt-2 text-base leading-7 text-neutral-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
                {showMore && (
                  <span>
                    Ut elit tellus, luctus nec ullamcorper mattis, pulvinar
                    dapibus leo. Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Ut elit tellus
                  </span>
                )}
              </p>{" "}
              {!showMore && (
                <button
                  type="button"
                  onClick={() => setShowMore(true)}
                  className="mt-2 hidden text-sm font-bold leading-6 text-primary hover:text-primary-dark active:text-pink-900 lg:inline-block"
                >
                  Show more
                </button>
              )}
            </section>
            <section className="mt-10 lg:mt-12">
              <h2 className="sr-only flex items-center font-mono text-sm font-medium leading-7 text-neutral-900 lg:not-sr-only">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 10 10"
                  className="h-2.5 w-2.5"
                >
                  <path
                    d="M0 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V5Z"
                    className="fill-primary"
                  ></path>
                  <path
                    d="M6 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V1Z"
                    className="fill-primary"
                  ></path>
                </svg>
                <span className="ml-2.5">Listen</span>
              </h2>
              <div className="h-px bg-gradient-to-r from-neutral-200/0 via-neutral-200 to-neutral-200/0 lg:hidden"></div>
              <ul
                role="list"
                className="mt-4 flex justify-center gap-10 text-base font-medium leading-7 text-neutral-700 sm:gap-8 lg:flex-col lg:gap-4"
              >
                <li className="flex">
                  <a
                    className="group flex items-center"
                    aria-label="Spotify"
                    href="/"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-8 w-8 fill-neutral-400 group-hover:fill-neutral-600"
                    >
                      <path d="M15.8 3a12.8 12.8 0 1 0 0 25.6 12.8 12.8 0 0 0 0-25.6Zm5.87 18.461a.8.8 0 0 1-1.097.266c-3.006-1.837-6.787-2.252-11.244-1.234a.796.796 0 1 1-.355-1.555c4.875-1.115 9.058-.635 12.432 1.427a.8.8 0 0 1 .265 1.096Zm1.565-3.485a.999.999 0 0 1-1.371.33c-3.44-2.116-8.685-2.728-12.755-1.493a1 1 0 0 1-.58-1.91c4.65-1.41 10.428-.726 14.378 1.7a1 1 0 0 1 .33 1.375l-.002-.002Zm.137-3.629c-4.127-2.45-10.933-2.675-14.871-1.478a1.196 1.196 0 1 1-.695-2.291c4.52-1.374 12.037-1.107 16.785 1.711a1.197 1.197 0 1 1-1.221 2.06"></path>
                    </svg>
                    <span className="hidden sm:ml-3 sm:block">Spotify</span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="group flex items-center"
                    aria-label="Apple Podcast"
                    href="/"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-8 w-8 fill-neutral-400 group-hover:fill-neutral-600"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.528 24.8c-.232.592-.768 1.424-1.536 2.016-.44.336-.968.664-1.688.88-.768.232-1.72.304-2.904.304H10.6c-1.184 0-2.128-.08-2.904-.304a4.99 4.99 0 0 1-1.688-.88c-.76-.584-1.304-1.424-1.536-2.016C4.008 23.608 4 22.256 4 21.4V10.6c0-.856.008-2.208.472-3.4.232-.592.768-1.424 1.536-2.016.44-.336.968-.664 1.688-.88C8.472 4.08 9.416 4 10.6 4h10.8c1.184 0 2.128.08 2.904.304a4.99 4.99 0 0 1 1.688.88c.76.584 1.304 1.424 1.536 2.016C28 8.392 28 9.752 28 10.6v10.8c0 .856-.008 2.208-.472 3.4Zm-9.471-6.312a1.069 1.069 0 0 0-.32-.688c-.36-.376-.992-.624-1.736-.624-.745 0-1.377.24-1.737.624-.183.2-.287.4-.32.688-.063.558-.024 1.036.04 1.807v.009c.065.736.184 1.72.336 2.712.112.712.2 1.096.28 1.368.136.448.625.832 1.4.832.776 0 1.273-.392 1.4-.832.08-.272.169-.656.28-1.368.152-1 .273-1.976.337-2.712.072-.776.104-1.256.04-1.816ZM16 16.375c1.088 0 1.968-.88 1.968-1.967 0-1.08-.88-1.968-1.968-1.968s-1.968.88-1.968 1.968.88 1.967 1.968 1.967Zm-.024-9.719c-4.592.016-8.352 3.744-8.416 8.336-.048 3.72 2.328 6.904 5.648 8.072.08.032.16-.04.152-.12a35.046 35.046 0 0 0-.041-.288c-.029-.192-.057-.384-.079-.576a.317.317 0 0 0-.168-.232 7.365 7.365 0 0 1-4.424-6.824c.04-4 3.304-7.256 7.296-7.288 4.088-.032 7.424 3.28 7.424 7.36 0 3.016-1.824 5.608-4.424 6.752a.272.272 0 0 0-.168.232l-.12.864c-.016.088.072.152.152.12a8.448 8.448 0 0 0 5.648-7.968c-.016-4.656-3.816-8.448-8.48-8.44Zm-5.624 8.376c.04-2.992 2.44-5.464 5.432-5.576 3.216-.128 5.88 2.456 5.872 5.64a5.661 5.661 0 0 1-2.472 4.672c-.08.056-.184-.008-.176-.096.016-.344.024-.648.008-.96 0-.104.04-.2.112-.272a4.584 4.584 0 0 0 1.448-3.336 4.574 4.574 0 0 0-4.752-4.568 4.585 4.585 0 0 0-4.392 4.448 4.574 4.574 0 0 0 1.448 3.456c.08.072.12.168.112.272-.016.32-.016.624.008.968 0 .088-.104.144-.176.096a5.65 5.65 0 0 1-2.472-4.744Z"
                      ></path>
                    </svg>
                    <span className="hidden sm:ml-3 sm:block">
                      Apple Podcast
                    </span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="group flex items-center"
                    aria-label="Overcast"
                    href="/"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-8 w-8 fill-neutral-400 group-hover:fill-neutral-600"
                    >
                      <path d="M16 28.8A12.77 12.77 0 0 1 3.2 16 12.77 12.77 0 0 1 16 3.2 12.77 12.77 0 0 1 28.8 16 12.77 12.77 0 0 1 16 28.8Zm0-5.067.96-.96-.96-3.68-.96 3.68.96.96Zm-1.226-.054-.48 1.814 1.12-1.12-.64-.694Zm2.453 0-.64.64 1.12 1.12-.48-1.76Zm.907 3.307L16 24.853l-2.133 2.133c.693.107 1.387.213 2.133.213.747 0 1.44-.053 2.134-.213ZM16 4.799C9.814 4.8 4.8 9.813 4.8 16c0 4.907 3.147 9.067 7.52 10.56l2.4-8.906c-.533-.374-.853-1.014-.853-1.707A2.14 2.14 0 0 1 16 13.813a2.14 2.14 0 0 1 2.134 2.133c0 .693-.32 1.28-.854 1.707l2.4 8.906A11.145 11.145 0 0 0 27.2 16c0-6.186-5.013-11.2-11.2-11.2Zm7.307 16.747c-.267.32-.747.427-1.12.16-.373-.267-.427-.747-.16-1.067 0 0 1.44-1.92 1.44-4.64 0-2.72-1.44-4.64-1.44-4.64-.267-.32-.213-.8.16-1.066.373-.267.853-.16 1.12.16.107.106 1.76 2.293 1.76 5.546 0 3.254-1.653 5.44-1.76 5.547Zm-3.893-2.08c-.32-.32-.267-.907.053-1.227 0 0 .8-.853.8-2.24 0-1.386-.8-2.186-.8-2.24-.32-.32-.32-.853-.053-1.226.32-.374.8-.374 1.12-.054.053.054 1.333 1.387 1.333 3.52 0 2.134-1.28 3.467-1.333 3.52-.32.32-.8.267-1.12-.053Zm-6.827 0c-.32.32-.8.373-1.12.053-.053-.106-1.333-1.386-1.333-3.52 0-2.133 1.28-3.413 1.333-3.52.32-.32.853-.32 1.12.054.32.32.267.906-.053 1.226 0 .054-.8.854-.8 2.24 0 1.387.8 2.24.8 2.24.32.32.373.854.053 1.227Zm-2.773 2.24c-.374.267-.854.16-1.12-.16-.107-.107-1.76-2.293-1.76-5.547 0-3.253 1.653-5.44 1.76-5.546.266-.32.746-.427 1.12-.16.373.266.426.746.16 1.066 0 0-1.44 1.92-1.44 4.64 0 2.72 1.44 4.64 1.44 4.64.266.32.16.8-.16 1.067Z"></path>
                    </svg>
                    <span className="hidden sm:ml-3 sm:block">Overcast</span>
                  </a>
                </li>
                <li className="flex">
                  <a
                    className="group flex items-center"
                    aria-label="RSS Feed"
                    href="/"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 32 32"
                      className="h-8 w-8 fill-neutral-400 group-hover:fill-neutral-600"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.5 4h15A4.5 4.5 0 0 1 28 8.5v15a4.5 4.5 0 0 1-4.5 4.5h-15A4.5 4.5 0 0 1 4 23.5v-15A4.5 4.5 0 0 1 8.5 4ZM13 22a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6-6a9 9 0 0 1 9 9h3A12 12 0 0 0 7 13v3Zm5.74-4.858A15 15 0 0 0 7 10V7a18 18 0 0 1 18 18h-3a15 15 0 0 0-9.26-13.858Z"
                      ></path>
                    </svg>
                    <span className="hidden sm:ml-3 sm:block">RSS Feed</span>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </header>

        <main className="w-full border-t border-neutral-200 lg:relative lg:mb-28 lg:ml-[28rem] lg:border-t-0 xl:ml-[30rem]">
          <svg aria-hidden="true" className="absolute left-0 top-0 h-20 w-full">
            <defs>
              <linearGradient id=":S1:-fade" x1="0" x2="0" y1="0" y2="1">
                <stop offset="40%" stop-color="white"></stop>
                <stop offset="100%" stop-color="black"></stop>
              </linearGradient>
              <linearGradient id=":S1:-gradient">
                <stop offset="0%" stop-color="#FFD700"></stop>
                <stop offset="50%" stop-color="#FFA500"></stop>
                <stop offset="100%" stop-color="#DAA520"></stop>
              </linearGradient>
              <mask id=":S1:-mask">
                <rect
                  width="100%"
                  height="100%"
                  fill="url(#:S1:-pattern)"
                ></rect>
              </mask>
              <pattern
                id=":S1:-pattern"
                width="400"
                height="100%"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  width="2"
                  height="83%"
                  x="2"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="99%"
                  x="6"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="52%"
                  x="10"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="99%"
                  x="14"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="86%"
                  x="18"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="91%"
                  x="22"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="92%"
                  x="26"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="75%"
                  x="30"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="51%"
                  x="34"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="88%"
                  x="38"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="45%"
                  x="42"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="56%"
                  x="46"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="80%"
                  x="50"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="44%"
                  x="54"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="93%"
                  x="58"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="98%"
                  x="62"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="41%"
                  x="66"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="47%"
                  x="70"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="87%"
                  x="74"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="67%"
                  x="78"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="73%"
                  x="82"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="69%"
                  x="86"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="88%"
                  x="90"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="53%"
                  x="94"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="69%"
                  x="98"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="75%"
                  x="102"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="86%"
                  x="106"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="43%"
                  x="110"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="80%"
                  x="114"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="81%"
                  x="118"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="78%"
                  x="122"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="56%"
                  x="126"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="47%"
                  x="130"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="90%"
                  x="134"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="50%"
                  x="138"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="52%"
                  x="142"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="77%"
                  x="146"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="81%"
                  x="150"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="98%"
                  x="154"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="48%"
                  x="158"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="87%"
                  x="162"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="87%"
                  x="166"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="55%"
                  x="170"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="41%"
                  x="174"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="42%"
                  x="178"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="93%"
                  x="182"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="84%"
                  x="186"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="67%"
                  x="190"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="68%"
                  x="194"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="55%"
                  x="198"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="57%"
                  x="202"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="56%"
                  x="206"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="55%"
                  x="210"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="46%"
                  x="214"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="67%"
                  x="218"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="69%"
                  x="222"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="79%"
                  x="226"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="84%"
                  x="230"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="63%"
                  x="234"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="94%"
                  x="238"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="90%"
                  x="242"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="51%"
                  x="246"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="73%"
                  x="250"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="55%"
                  x="254"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="57%"
                  x="258"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="69%"
                  x="262"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="88%"
                  x="266"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="84%"
                  x="270"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="49%"
                  x="274"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="95%"
                  x="278"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="73%"
                  x="282"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="54%"
                  x="286"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="57%"
                  x="290"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="72%"
                  x="294"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="51%"
                  x="298"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="44%"
                  x="302"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="52%"
                  x="306"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="87%"
                  x="310"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="93%"
                  x="314"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="46%"
                  x="318"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="47%"
                  x="322"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="57%"
                  x="326"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="79%"
                  x="330"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="95%"
                  x="334"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="54%"
                  x="338"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="65%"
                  x="342"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="90%"
                  x="346"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="99%"
                  x="350"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="82%"
                  x="354"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="98%"
                  x="358"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="93%"
                  x="362"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="60%"
                  x="366"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="50%"
                  x="370"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="69%"
                  x="374"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="77%"
                  x="378"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="93%"
                  x="382"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="44%"
                  x="386"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="51%"
                  x="390"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="96%"
                  x="394"
                  fill="url(#:S1:-fade)"
                ></rect>
                <rect
                  width="2"
                  height="60%"
                  x="398"
                  fill="url(#:S1:-fade)"
                ></rect>
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              fill="url(#:S1:-gradient)"
              mask="url(#:S1:-mask)"
              opacity="0.25"
            ></rect>
          </svg>
          <div className="relative">{children}</div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
