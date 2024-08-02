import Image from "next/image";
import React from "react";

const Lectures = () => {
  return (
    <section className="scroll-mt-14 py-16 font-sans sm:scroll-mt-32 sm:py-20 lg:py-32">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2
          className="inline-flex items-center rounded-full px-4 py-1 text-primary ring-1 ring-inset ring-primary"
          id="screencasts-title"
        >
          <span className="font-mono text-sm" aria-hidden="true">
            02
          </span>
          <span className="ml-3 h-3.5 w-px bg-primary/20"></span>
          <span className="ml-3 text-base font-medium tracking-tight">
            Video Lectures
          </span>
        </h2>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-neutral-900">
          Over 10 hours of high-quality, in-depth video content to elevate your
          chess skills from amateur to master level.
        </p>
        <p className="mt-4 text-lg tracking-tight text-neutral-700">
          Dive into a comprehensive series of video lectures that will guide you
          through every aspect of chess mastery. From opening theory to endgame
          techniques, these lessons will transform your understanding and
          execution of the game.
        </p>
      </div>
      <div className="mx-auto mt-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8">
        <ol
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-10 [counter-reset:video] sm:grid-cols-2 lg:grid-cols-4"
        >
          <li className="[counter-increment:video]">
            <div
              className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
              style={{
                backgroundImage:
                  "conic-gradient(from -49.8deg at 50% 50%, #dab22f 0deg, #f2d675 59.07deg, #e6c349 185.61deg, #fff4d1 284.23deg, #ffebaa 329.41deg, #dab22f 360deg)",
              }}
            >
              <div className="flex overflow-hidden rounded shadow-sm">
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="108"
                  decoding="async"
                  data-nimg="1"
                  src="/video.png"
                />
              </div>
              <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                <svg
                  aria-hidden="true"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-current stroke-current"
                >
                  <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z"></path>
                  <circle cx="8" cy="8" r="6.25" fill="none"></circle>
                </svg>
                <time dateTime="16m 54s" className="ml-2">
                  16:54
                </time>
              </div>
            </div>
            <h3 className="mt-8 text-base font-medium tracking-tight text-neutral-900 before:mb-2 before:block before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(video,decimal-leading-zero)]">
              Fundamentals of Chess Strategy
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Learn the core principles of chess strategy, including piece
              development, center control, and pawn structure.
            </p>
          </li>
          <li className="[counter-increment:video]">
            <div
              className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
              style={{
                backgroundImage:
                  "conic-gradient(from -49.8deg at 50% 50%, #dab22f 0deg, #f2d675 59.07deg, #e6c349 185.61deg, #fff4d1 284.23deg, #ffebaa 329.41deg, #dab22f 360deg)",
              }}
            >
              <div className="flex overflow-hidden rounded shadow-sm">
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="108"
                  decoding="async"
                  data-nimg="1"
                  src="/video.png"
                />
              </div>
              <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                <svg
                  aria-hidden="true"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-current stroke-current"
                >
                  <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z"></path>
                  <circle cx="8" cy="8" r="6.25" fill="none"></circle>
                </svg>
                <time dateTime="9m 12s" className="ml-2">
                  9:12
                </time>
              </div>
            </div>
            <h3 className="mt-8 text-base font-medium tracking-tight text-neutral-900 before:mb-2 before:block before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(video,decimal-leading-zero)]">
              Mastering the Opening
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Explore popular opening sequences and understand the key
              principles behind a strong game start.
            </p>
          </li>
          <li className="[counter-increment:video]">
            <div
              className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
              style={{
                backgroundImage:
                  "conic-gradient(from -49.8deg at 50% 50%, #dab22f 0deg, #f2d675 59.07deg, #e6c349 185.61deg, #fff4d1 284.23deg, #ffebaa 329.41deg, #dab22f 360deg)",
              }}
            >
              <div className="flex overflow-hidden rounded shadow-sm">
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="108"
                  decoding="async"
                  data-nimg="1"
                  src="/video.png"
                />
              </div>
              <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                <svg
                  aria-hidden="true"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-current stroke-current"
                >
                  <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z"></path>
                  <circle cx="8" cy="8" r="6.25" fill="none"></circle>
                </svg>
                <time dateTime="23m 25s" className="ml-2">
                  23:25
                </time>
              </div>
            </div>
            <h3 className="mt-8 text-base font-medium tracking-tight text-neutral-900 before:mb-2 before:block before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(video,decimal-leading-zero)]">
              Middlegame Tactics and Strategy
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Dive deep into middlegame complexities, learning advanced tactics,
              positional play, and strategic planning.
            </p>
          </li>
          <li className="[counter-increment:video]">
            <div
              className="relative flex h-44 items-center justify-center rounded-2xl px-6 shadow-lg"
              style={{
                backgroundImage:
                  "conic-gradient(from -49.8deg at 50% 50%, #dab22f 0deg, #f2d675 59.07deg, #e6c349 185.61deg, #fff4d1 284.23deg, #ffebaa 329.41deg, #dab22f 360deg)",
              }}
            >
              <div className="flex overflow-hidden rounded shadow-sm">
                <Image
                  alt=""
                  loading="lazy"
                  width="200"
                  height="108"
                  decoding="async"
                  data-nimg="1"
                  src="/video.png"
                />
              </div>
              <div className="absolute bottom-2 left-2 flex items-center rounded-lg bg-black/30 px-1.5 py-0.5 text-sm text-white [@supports(backdrop-filter:blur(0))]:bg-white/10 [@supports(backdrop-filter:blur(0))]:backdrop-blur">
                <svg
                  aria-hidden="true"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 16 16"
                  className="h-4 w-4 fill-current stroke-current"
                >
                  <path d="M6.75 10.25v-4.5L10.25 8l-3.5 2.25Z"></path>
                  <circle cx="8" cy="8" r="6.25" fill="none"></circle>
                </svg>
                <time dateTime="28m 44s" className="ml-2">
                  28:44
                </time>
              </div>
            </div>
            <h3 className="mt-8 text-base font-medium tracking-tight text-neutral-900 before:mb-2 before:block before:font-mono before:text-sm before:text-neutral-500 before:content-[counter(video,decimal-leading-zero)]">
              Endgame Techniques
            </h3>
            <p className="mt-2 text-sm text-neutral-600">
              Master crucial endgame positions and learn the techniques to
              convert advantages into victories.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Lectures;
