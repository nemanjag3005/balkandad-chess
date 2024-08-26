/* eslint-disable @typescript-eslint/no-unsafe-return */
"use client";
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "../ui/aspect-ratio";
import { useRouter } from "next/navigation";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const findNextLesson = (currentSlug: string, lessonsList: any) => {
  let foundCurrent = false;
  for (const chapter of lessonsList) {
    for (let i = 0; i < chapter.lessons.length; i++) {
      if (foundCurrent) {
        return {
          slug: chapter.lessons[i].slug,
          title: chapter.lessons[i].title,
          number: i + 1,
        };
      }
      if (chapter.lessons[i].slug === currentSlug) {
        foundCurrent = true;
        if (i === chapter.lessons.length - 1) {
          continue;
        }
      }
    }
  }
  return null;
};

const Main = ({
  lesson,
  isPaid,
  lessonsList,
}: {
  lesson: any;
  isPaid: boolean;
  lessonsList: any;
}) => {
  const router = useRouter();

  if (!isPaid && !lesson.isFree) {
    router.push("/course");
    return null;
  }

  const nextLesson = findNextLesson(lesson.slug, lessonsList);

  const components = {
    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }: { children: any }) => <p>{children}</p>,
      h1: ({ children }: { children: any }) => <h1>{children}</h1>,
      blockquote: ({ children }: { children: any }) => (
        <blockquote>{children}</blockquote>
      ),
      image: ({ children }: { children: any }) => {
        return (
          <div className="relative h-96 w-full">
            <Image
              src={children[0].props.src}
              alt={children[0].props.alt}
              className="h-full w-full object-cover"
            />
          </div>
        );
      },
    },
  };

  return (
    <div className="w-full font-sans">
      <AspectRatio
        className="relative flex w-full bg-black shadow-lg"
        ratio={16 / 7}
      >
        <ReactPlayer
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          url="https://www.youtube.com/watch?v=MltFyOGPCaA"
          controls
        />
      </AspectRatio>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative flex items-center justify-center space-y-2 rounded-b-3xl bg-primary px-8 py-8">
          <div className="flex flex-col items-center">
            <h4>01.</h4>
            <h2 className="text-2xl font-bold">{lesson.title}</h2>
          </div>
          {nextLesson && (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              className="group absolute right-8 top-5 flex items-center justify-center space-x-4 rounded-lg px-4 py-1.5 hover:bg-primary-dark"
            >
              <div className="flex flex-col items-end opacity-0 transition-opacity duration-150 ease-in-out group-hover:opacity-100">
                <span className="font-light">0{nextLesson.number}.</span>
                <span className="font-semibold">{nextLesson.title}</span>
              </div>
              <ChevronRightIcon className="h-5 w-5 text-black" />
            </Link>
          )}
        </div>
        <div className="prose prose-neutral mx-auto my-14 max-w-none px-12">
          {/*//@ts-expect-error doesnt work*/}
          <PortableText components={components} value={lesson.body} />
        </div>
      </div>
    </div>
  );
};

export default Main;
