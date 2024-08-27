import { type Metadata } from "next/types";
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

export const metadata: Metadata = {
  title: "BalkanDad Chess - Learn from Lazar Vilotijević",
  description:
    "Join Lazar Vilotijević, AKA BalkanDad Chess, for expert chess coaching, online courses, and insightful content to improve your game.",
  openGraph: {
    siteName: "BalkanDad Chess",
    url: "https://balkandadchess.com",
    type: "website",
    title: "BalkanDad Chess - Master Your Game with Lazar Vilotijević",
    description:
      "Elevate your chess skills with Lazar Vilotijević. Discover expert coaching, online courses, and engaging content from the BalkanDad Chess YouTube channel.",
    images: [
      {
        url: "https://balkandadchess.com/lazar-vilotiijevic.jpg", // Replace with a relevant image URL
        width: 1200,
        height: 630,
        alt: " Lazar Vilotijević, the BalkanDad Chess coach",
      },
    ],
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: [
    "BalkanDad Chess",
    "Lazar Vilotijević",
    "chess coaching",
    "online chess course",
    "chess YouTube channel",
    "chess strategy",
    "chess tactics",
    "chess improvement",
    "chess openings",
    "best chess coach",
    "best chess coach near me",
    "International Master",
    "chess lessons",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "google-verification-code", // Replace with actual Google verification code
  },
  applicationName: "BalkanDad Chess",
  appleWebApp: {
    title: "BalkanDad Chess",
    statusBarStyle: "default",
    capable: true,
  },
  authors: [{ name: "Lazar Vilotijević" }],
  category: "Sports & Recreation",
  creator: "Lazar Vilotijević",
  publisher: "BalkanDad Chess",
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

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
