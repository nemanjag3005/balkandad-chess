/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../ui/pagination";
import "dayjs/locale/en";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import Link from "next/link";

const Blog = ({ posts }: { posts: any }) => {
  dayjs.extend(localizedFormat);
  const articlesPerPage = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const totalArticles = posts.length;
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  const currentposts = posts.slice(
    (currentPage - 1) * articlesPerPage,
    currentPage * articlesPerPage,
  );
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Optionally, manage focus or scroll adjustments here
  };
  return (
    <div className="w-full font-sans">
      <div className="mx-auto flex max-w-7xl flex-col px-3 py-24 md:px-10">
        <h1 className="mt-4 text-xl font-semibold uppercase leading-tight text-primary md:text-3xl">
          Latest posts
        </h1>
        <div className="mb-5 mt-20 grid grid-cols-1 gap-10 md:grid-cols-3">
          {currentposts.map((article: any) => (
            <Link href={`/blog/${article.slug}`} key={article._id}>
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
                  <p className="text-xs text-stone-500">
                    {dayjs(article.publishedAt).format("ll")}
                  </p>
                  <div className="rounded-2xl bg-neutral-100 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-700 dark:text-white">
                    {article.categories[0].title}
                  </div>
                </div>

                <h1 className="font-semibold text-stone-900 group-hover:underline">
                  {article.title}
                </h1>
                <p className="mt-4 max-w-sm text-sm font-light text-stone-500">
                  {article.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
        {totalPages > 1 && (
          <Pagination className="mt-12">
            <PaginationContent>
              {currentPage > 1 && (
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={() => handlePageChange(currentPage - 1)}
                  />
                </PaginationItem>
              )}
              {[...Array(totalPages).keys()].map((page) => (
                <PaginationItem key={page + 1}>
                  <PaginationLink
                    href="#"
                    onClick={() => handlePageChange(page + 1)}
                    isActive={currentPage === page + 1}
                  >
                    {page + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {currentPage < totalPages && (
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={() => handlePageChange(currentPage + 1)}
                  />
                </PaginationItem>
              )}
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </div>
  );
};

export default Blog;
