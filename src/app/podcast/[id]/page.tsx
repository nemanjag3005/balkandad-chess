import { type Metadata } from "next/types";
import Episode from "~/components/Podcast/Episode";
import { sanityFetch } from "~/sanity/lib/client";
import { episodeQuery } from "~/sanity/queries";

type Props = {
  params: { id: string };
};

export const metadata: Metadata = {
  title: `Balkandad Chess | Podcast`,
};

export const revalidate = 60; // revalidate this page every 60 seconds

export default async function PodcastEpisode({ params }: Props) {
  const id = params.id;
  const episode = await sanityFetch({
    query: episodeQuery,
    tags: ["podcastEpisode"],
    qParams: { slug: id },
  });
  return (
    <>
      <Episode episode={episode} />
    </>
  );
}
