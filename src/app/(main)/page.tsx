import Section from "~/components/CourseInfo/Section";
import Bio from "~/components/Hero/Bio";
import Blog from "~/components/Hero/Blog";
import Coach from "~/components/Hero/Coach";
import Course from "~/components/Hero/Course";
import Landing from "~/components/Hero/Landing";
import Testimonials from "~/components/Hero/Testimonials";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main className="font-sans">
        <Landing />
        <Course />
        <Bio />
        <Coach />
        <Testimonials />
        <Blog />
      </main>
    </HydrateClient>
  );
}
