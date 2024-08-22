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

const Main = ({ lesson, isPaid }: { lesson: any; isPaid: boolean }) => {
  const router = useRouter();

  if (!isPaid && !lesson.isFree) {
    router.push("/course");
    return null;
  }

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
        <div className="flex flex-col items-center justify-center space-y-2 rounded-b-3xl bg-primary py-8">
          <h4>01.</h4>
          <h2 className="text-2xl font-bold">{lesson.title}</h2>
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
