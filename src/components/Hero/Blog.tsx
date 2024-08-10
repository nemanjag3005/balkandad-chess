/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Image from "next/image";
import React from "react";
import "dayjs/locale/en";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";
import { Button } from "../ui/button";

const Blog = ({ posts }: { posts: any }) => {
  dayjs.extend(localizedFormat);
  return (
    <div
      id="blog"
      className="relative flex flex-col items-center justify-center bg-chess-clock bg-cover bg-no-repeat py-10"
    >
      <div className="absolute inset-0 bg-gradient-radial from-[#FFFFFFCC] to-[#FFFFFF]"></div>
      <div className="z-10 flex w-full max-w-6xl flex-col items-center px-4 py-8">
        <h4 className="font-sans text-sm font-bold uppercase text-primary">
          my blog
        </h4>
        <h2 className="mt-4 font-sans text-4xl font-semibold">
          Latest Chess News & My Thoughts
        </h2>
        <p className="z-30 mt-6 font-sans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div className="mt-10 grid w-full gap-10 md:grid-cols-3">
          {posts.map((post: any) => (
            <Link href={`/blog/${post.slug}`} key={post._id}>
              <div className="group">
                <div className="relative h-60 w-full rounded-xl border transition-all duration-300 ease-in-out group-hover:scale-105">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="my-3 flex items-center justify-start space-x-4">
                  <p className="text-xs text-neutral-500">
                    {dayjs(post.publishedAt).format("ll")}
                  </p>
                  <div className="rounded-2xl bg-primary px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-700 dark:text-white">
                    {post.categories[0].title}
                  </div>
                </div>

                <h1 className="font-semibold text-neutral-900 group-hover:underline">
                  {post.title}
                </h1>
                <p className="mt-4 max-w-sm text-sm font-light text-neutral-500">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/blog">
          <Button className="mt-6">Show All</Button>
        </Link>
      </div>
      <div className="relative z-10 mt-20 flex w-full max-w-6xl flex-col items-center space-y-8 bg-chess-pieces bg-center px-8 py-14 text-center font-sans md:items-start md:pl-24 md:pr-80 md:text-left">
        <div className="absolute inset-0 bg-gradient-radial from-[#1B1B1BCC] to-[#333333] opacity-75"></div>
        <h2 className="z-10 text-2xl font-bold text-neutral-50 md:text-4xl">
          Lorem Ipsum Dolor Sit Amet consectetetuer adipiscing elit!
        </h2>
        <p className="z-10 text-neutral-300">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <button className="z-10 border-2 border-neutral-50 px-4 py-2 text-sm font-semibold uppercase text-neutral-50 transition-all duration-300 ease-in-out hover:bg-neutral-50 hover:text-black">
          discover more
        </button>
      </div>
    </div>
  );
};

export default Blog;
