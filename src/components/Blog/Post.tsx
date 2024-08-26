/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
"use client";
import React from "react";
import { TracingBeam } from "../ui/tracing-beam";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import Link from "next/link";

const Post = ({ post }: { post: any }) => {
  dayjs.extend(localizedFormat);
  const components = {
    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }: { children: any }) => <p>{children}</p>,
      h1: ({ children }: { children: any }) => <h1>{children}</h1>,
      blockquote: ({ children }: { children: any }) => (
        <blockquote>{children}</blockquote>
      ),
      image: ({ children }: { children: any }) => {
        return (
          <div className="relative h-96 w-full">
            <Image
              src={children[0].props.src}
              alt={children[0].props.alt}
              className="h-full w-full object-cover"
            />
          </div>
        );
      },
    },
  };
  return (
    <article className="relative w-full font-sans">
      <div className="mx-auto flex max-w-7xl flex-col px-3 py-24 md:px-10">
        <TracingBeam className="pl-10 pr-4 md:pl-6 md:pr-6">
          <div className="relative mx-auto max-w-2xl pt-4 antialiased">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-2xl bg-neutral-100 px-2.5 py-1 text-sm text-neutral-700 dark:bg-neutral-700 dark:text-white">
                  {post.categories[0].title}
                </div>
                <p className="text-sm font-light text-neutral-600 dark:text-white">
                  {dayjs(post.publishedAt).format("LL")}
                </p>
              </div>
              <h1 className="text-4xl font-semibold text-neutral-900 dark:text-white">
                {post.title}
              </h1>
            </div>
            <div className="prose prose-neutral my-12">
              {/*//@ts-expect-error known error*/}
              <PortableText components={components} value={post.body} />
            </div>
          </div>
        </TracingBeam>
        <div className="mt-16">
          <motion.p className="w-full py-4 text-2xl font-bold text-primary md:text-4xl">
            Read More
          </motion.p>
        </div>
        {/* <div className="mb-5 mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          {moreNews.map((article: any) => (
            <Link href={`/lab-news/${article.slug}`} key={article._id}>
              <div className="group">
                <div className="relative h-60 w-full rounded-xl border">
                  <Image
                    src={article.mainImage}
                    alt={article.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="my-3 flex items-center justify-start space-x-4">
                  <p className="text-xs text-neutral-500">
                    {dayjs(article.publishedAt).format("ll")}
                  </p>
                  <div className="rounded-2xl bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-700 dark:text-white">
                    {article.categories[0].title}
                  </div>
                </div>

                <h1 className="font-semibold text-neutral-900 group-hover:underline">
                  {article.title}
                </h1>
                <p className="mt-4 max-w-sm text-sm font-light text-neutral-500">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div> */}
      </div>
    </article>
  );
};

export default Post;
