import { type Metadata } from "next/types";
import Landing from "~/components/Podcast/Landing";
import { sanityFetch } from "~/sanity/lib/client";
import { podcastsQuery } from "~/sanity/queries";

export const revalidate = 60;

export const metadata: Metadata = {
  title: `BalkanDad Chess | Podcast`,
};

export default async function Podcast() {
  const podcasts = await sanityFetch({
    query: podcastsQuery,
    tags: ["podcastEpisode"],
  });
  return (
    <>
      <Landing podcasts={podcasts} />
    </>
  );
}
