import Bio from "~/components/Hero/Bio";
import Blog from "~/components/Hero/Blog";
import Coach from "~/components/Hero/Coach";
import Course from "~/components/Hero/Course";
import Landing from "~/components/Hero/Landing";
import Testimonials from "~/components/Hero/Testimonials";
import { sanityFetch } from "~/sanity/lib/client";
import { postsQuery } from "~/sanity/queries";
import { HydrateClient } from "~/trpc/server";

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function Home() {
  const posts = await sanityFetch({
    query: postsQuery,
    tags: ["post"],
  });

  return (
    <HydrateClient>
      <main className="font-sans">
        <Landing />
        <Course />
        <Bio />
        <Coach />
        <Testimonials />
        <Blog posts={posts} />
      </main>
    </HydrateClient>
  );
}
