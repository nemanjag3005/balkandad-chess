import Image from "next/image";
import React from "react";

const Resources = () => {
  return (
    <section
      id="resources"
      aria-labelledby="resources-title"
      className="scroll-mt-14 py-16 font-sans sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2
          className="inline-flex items-center rounded-full px-4 py-1 text-primary ring-1 ring-inset ring-primary"
          id="resources-title"
        >
          <span className="font-mono text-sm" aria-hidden="true">
            03
          </span>
          <span className="ml-3 h-3.5 w-px bg-neutral-300"></span>
          <span className="ml-3 text-base font-medium tracking-tight">
            Resources
          </span>
        </h2>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-neutral-900">
          Curated resources to deepen your chess understanding and accelerate
          your progress.
        </p>
        <p className="mt-4 text-lg tracking-tight text-neutral-700">
          Access to in-depth game reviews, carefully selected book
          recommendations, and annotated games to enhance your chess knowledge
          and strategic thinking.
        </p>
      </div>
      <div className="mx-auto mt-16 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8">
        <ol
          role="list"
          className="-mx-3 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:text-center xl:-mx-12 xl:divide-x xl:divide-neutral-400/20"
        >
          <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10 stroke-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 0 1-1.125-1.125v-3.75ZM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-8.25ZM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 0 1-1.125-1.125v-2.25Z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tight text-neutral-900">
                Annotated Game Collection
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                A video collection of 50 meticulously annotated games,
                showcasing critical moments and strategic decisions that shaped
                the outcome.
              </p>
            </div>
          </li>
          <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tight text-neutral-900">
                Essential Chess Literature
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                A curated list of 10 must-read chess books, ranging from classic
                texts to modern game analysis, with personal insights on each.
              </p>
            </div>
          </li>
          <li className="grid auto-rows-min grid-cols-1 items-center gap-8 px-3 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-1 xl:px-12">
            <div className="relative h-48 overflow-hidden rounded-2xl shadow-lg sm:h-60 lg:h-40">
              <div className="absolute inset-0 flex items-center justify-center bg-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-10 w-10"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 0 1 0 1.954l-7.108 4.061A1.125 1.125 0 0 1 3 16.811Z"
                  />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-base font-medium tracking-tight text-neutral-900">
                Monthly Game Reviews
              </h3>
              <p className="mt-2 text-sm text-neutral-600">
                In-depth analysis of recent high-level games, breaking down key
                positions and explaining the strategic and tactical
                considerations.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Resources;
