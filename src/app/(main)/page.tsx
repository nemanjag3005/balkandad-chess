import Course from "~/components/Hero/Course";
import Landing from "~/components/Hero/Landing";
import { HydrateClient } from "~/trpc/server";

export default async function Home() {
  return (
    <HydrateClient>
      <main>
        <Landing />
        <Course />
      </main>
    </HydrateClient>
  );
}
