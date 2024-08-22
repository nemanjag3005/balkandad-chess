import { type Metadata } from "next/types";
import Main from "~/components/Lessons/Main";
import Sidebar from "~/components/Lessons/Sidebar";
import { sanityFetch } from "~/sanity/lib/client";
import { lessonsListQuery, lessonQuery } from "~/sanity/queries";
import { api } from "~/trpc/server";
import { createClient } from "~/utils/supabase/server";

type Props = {
  params: { id: string };
};

export const revalidate = 60;

export const metadata: Metadata = {
  title: `Balkandad Chess | Podcast`,
};

export default async function Lesson({ params }: Props) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const lessonsList = await sanityFetch({
    query: lessonsListQuery,
    tags: ["lessonChapter"],
  });

  const id = params.id;
  const lesson = await sanityFetch({
    query: lessonQuery,
    tags: ["lesson"],
    qParams: { slug: id },
  });

  let isPaid = false;
  if (user) {
    try {
      isPaid = await api.user.checkPaidStatus();
    } catch (error) {
      console.error("Error checking paid status:", error);
    }
  }

  return (
    <>
      <Main lesson={lesson} isPaid={isPaid} />
      <Sidebar lessonsList={lessonsList} />
    </>
  );
}
