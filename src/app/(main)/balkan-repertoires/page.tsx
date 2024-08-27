import { type Metadata } from "next/types";
import Main from "~/components/Repertoires/Main";
import { sanityFetch } from "~/sanity/lib/client";
import { balkanRepertoirePostsQuery } from "~/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: `BalkanDad Chess | Balkan Repertoires`,
};

export default async function BalkanRepertoires() {
  const posts = await sanityFetch({
    query: balkanRepertoirePostsQuery,
    tags: ["post"],
  });
  return (
    <>
      <Main posts={posts} />
    </>
  );
}
