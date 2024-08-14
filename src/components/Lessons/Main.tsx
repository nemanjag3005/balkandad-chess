"use client";
import React from "react";
import ReactPlayer from "react-player";
import { AspectRatio } from "../ui/aspect-ratio";

const Main = () => {
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
          <h2 className="text-2xl font-bold">Introduction</h2>
          <div className="space-x-2">
            <span className="text-sm">Difficulty</span>
            <span className="rounded-md border border-black p-1 text-sm">
              Easy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
