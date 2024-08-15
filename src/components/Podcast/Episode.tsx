/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import "dayjs/locale/en";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import React from "react";
import { PortableText } from "@portabletext/react";

const Episode = ({ episode }: { episode: any }) => {
  dayjs.extend(localizedFormat);
  const components = {
    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }: { children: any }) => <p>{children}</p>,
      h1: ({ children }: { children: any }) => <h1>{children}</h1>,
      blockquote: ({ children }: { children: any }) => (
        <blockquote>{children}</blockquote>
      ),
    },
  };
  return (
    <article className="py-16 lg:py-36">
      <div className="lg:px-8">
        <div className="lg:max-w-4xl">
          <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
            <header className="flex flex-col">
              <div className="flex items-center gap-6">
                <button
                  type="button"
                  className="group relative flex flex-shrink-0 items-center justify-center rounded-full bg-neutral-700 p-4 hover:bg-neutral-900 focus:outline-none focus:ring focus:ring-neutral-700 focus:ring-offset-4"
                >
                  <svg
                    viewBox="0 0 36 36"
                    aria-hidden="true"
                    className="h-9 w-9 fill-white group-active:fill-white/80"
                  >
                    <path d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z"></path>
                  </svg>
                </button>
                <div className="flex flex-col">
                  <h1 className="mt-2 text-4xl font-bold text-neutral-900">
                    {episode.title}
                  </h1>
                  <time
                    dateTime={episode.publishedAt}
                    className="order-first font-mono text-sm leading-7 text-neutral-500"
                  >
                    {dayjs(episode.publishedAt).format("ll")}
                  </time>
                </div>
              </div>
              <p className="ml-24 mt-3 text-lg font-medium leading-8 text-neutral-700">
                {episode.description}
              </p>
            </header>
            <hr className="my-12 border-gray-200" />
            <div className="prose prose-neutral mt-14 [&>h2:nth-of-type(3n)]:before:bg-yellow-200 [&>h2:nth-of-type(3n+2)]:before:bg-yellow-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-neutral-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-primary [&>ul]:mt-6 [&>ul]:list-['-'] [&>ul]:pl-5">
              <h2 id="topics">Topics</h2>
              {/*//@ts-expect-error doesnt work*/}
              <PortableText components={components} value={episode.topics} />
              <h2 id="sponsors">Sponsors</h2>
              {/*//@ts-expect-error doesnt work*/}
              <PortableText components={components} value={episode.sponsors} />
              <h2 id="links">Links</h2>
              {/*//@ts-expect-error doesnt work*/}
              <PortableText components={components} value={episode.links} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Episode;
