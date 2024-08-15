/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import "dayjs/locale/en";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";

const Landing = ({ podcasts }: { podcasts: any }) => {
  dayjs.extend(localizedFormat);

  return (
    <div className="pb-12 pt-16 sm:pb-4 lg:pt-12">
      <div className="lg:px-8">
        <div className="lg:max-w-4xl">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <h1 className="text-2xl font-bold leading-7 text-neutral-900">
              Episodes
            </h1>
          </div>
        </div>
      </div>
      <div className="divide-y divide-neutral-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-neutral-100">
        {podcasts.map((podcast: any, index: number) => (
          <article key={podcast._id} className="py-10 sm:py-12">
            <div className="lg:px-8">
              <div className="lg:max-w-4xl">
                <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                  <div className="flex flex-col items-start">
                    <h2 className="mt-2 text-lg font-bold text-neutral-900">
                      <a href={`/podcast/${podcast.slug}`}>
                        {index + 1}: {podcast.title}
                      </a>
                    </h2>
                    <time
                      dateTime={podcast.publishedAt}
                      className="order-first font-mono text-sm leading-7 text-neutral-500"
                    >
                      {dayjs(podcast.publishedAt).format("ll")}
                    </time>
                    <p className="mt-1 text-base leading-7 text-neutral-700">
                      {podcast.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4">
                      <button
                        type="button"
                        aria-label="Play episode 5: Bill Lumbergh"
                        className="flex items-center gap-x-3 text-sm font-bold leading-6 text-primary hover:text-primary-dark active:text-pink-900"
                      >
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 10 10"
                          className="h-2.5 w-2.5 fill-current"
                        >
                          <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path>
                        </svg>
                        <span aria-hidden="true">Listen</span>
                      </button>
                      <span
                        aria-hidden="true"
                        className="text-sm font-bold text-neutral-400"
                      >
                        /
                      </span>
                      <a
                        className="flex items-center text-sm font-bold leading-6 text-primary hover:text-primary-dark active:text-pink-900"
                        aria-label="Show notes for episode 5: Bill Lumbergh"
                        href={`/podcast/${podcast.slug}`}
                      >
                        Show notes
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Landing;
