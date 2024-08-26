import { type Metadata } from "next/types";
import Post from "~/components/Blog/Post";
import { sanityFetch } from "~/sanity/lib/client";
import { postQuery } from "~/sanity/queries";

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: `Balkandad Chess | Blog`,
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function BlogPost({ params }: Props) {
  const id = params.id;
  const post = await sanityFetch({
    query: postQuery,
    tags: ["post"],
    qParams: { slug: id },
  });
  return (
    <>
      <Post post={post} />
    </>
  );
}
