import { sanityFetch } from "~/sanity/lib/client";
import { allPostsQuery } from "~/sanity/queries";
import { type Metadata } from "next/types";
import Blog from "~/components/Blog/Blog";

export const metadata: Metadata = {
  title: "BalkanDad Chess | Blog",
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function LabNewsPage() {
  const posts = await sanityFetch({
    query: allPostsQuery,
    tags: ["post"],
  });
  return (
    <div>
      <Blog posts={posts} />
    </div>
  );
}
