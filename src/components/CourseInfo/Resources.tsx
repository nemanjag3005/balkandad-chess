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
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(#2C313D_35%,#000)]"></div>
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
              <div className="absolute inset-0 flex items-center justify-center"></div>
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
              <div className="absolute inset-0 flex items-center justify-center bg-primary"></div>
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
