import React from "react";
import Image from "next/image";

const Coach = () => {
  return (
    <div className="mt-10 flex items-center justify-center bg-neutral-50">
      <div className="flex w-full max-w-6xl flex-col items-center px-4 py-8">
        <h4 className="font-sans text-sm font-bold uppercase text-primary">
          i also coach
        </h4>
        <h2 className="mt-4 text-center font-sans text-4xl font-semibold md:text-left">
          In every game, I see the potential for greatness
        </h2>
        <div className="mt-10 grid w-full grid-cols-3 gap-6 md:grid-rows-4">
          <div className="col-span-3 flex flex-col space-y-4 bg-[#1b1b1b] px-4 py-8 md:col-span-1">
            <div className="w-fit bg-neutral-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 fill-[#1b1b1b]"
              >
                <title>chess-pawn</title>
                <path d="M19 22H5V20H19V22M16 18H8L10.18 10H8V8H10.72L10.79 7.74C10.1 7.44 9.55 6.89 9.25 6.2C8.58 4.68 9.27 2.91 10.79 2.25C12.31 1.58 14.08 2.27 14.74 3.79C15.41 5.31 14.72 7.07 13.2 7.74L13.27 8H16V10H13.82L16 18Z" />
              </svg>
            </div>
            <h4 className="font-sans text-2xl font-medium text-neutral-100">
              Something
            </h4>
            <p className="font-sans text-neutral-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="group col-span-3 md:col-span-1 md:row-span-2">
            <div className="relative h-72 w-full backdrop-grayscale">
              <Image
                fill
                src="/coach1.jpg"
                alt="coach1"
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col justify-center bg-white p-8">
              <h4 className="font-sans text-2xl font-bold">
                One-on-one lessons
              </h4>
              <p className="mt-4 font-sans text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </p>
              <button className="mt-4 w-fit bg-[#1b1b1b] px-6 py-3 font-sans text-xs font-semibold uppercase text-white hover:bg-black/70">
                learn more
              </button>
            </div>
          </div>
          <div className="group col-span-3 md:col-span-1 md:row-span-2">
            <div className="relative h-72 w-full">
              <Image
                fill
                src="/coach2.jpg"
                alt="coach2"
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col justify-center bg-white p-8">
              <h4 className="font-sans text-2xl font-bold">Game reviews</h4>
              <p className="mt-4 font-sans text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </p>
              <button className="mt-4 w-fit bg-[#1b1b1b] px-6 py-3 font-sans text-xs font-semibold uppercase text-white hover:bg-black/70">
                learn more
              </button>
            </div>
          </div>
          <div className="order-first col-span-3 flex flex-col space-y-4 bg-[#1b1b1b] px-4 py-8 md:order-none md:col-span-1">
            <div className="w-fit bg-neutral-100 p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-8 w-8 fill-[#1b1b1b]"
              >
                <title>chess-pawn</title>
                <path d="M19 22H5V20H19V22M16 18H8L10.18 10H8V8H10.72L10.79 7.74C10.1 7.44 9.55 6.89 9.25 6.2C8.58 4.68 9.27 2.91 10.79 2.25C12.31 1.58 14.08 2.27 14.74 3.79C15.41 5.31 14.72 7.07 13.2 7.74L13.27 8H16V10H13.82L16 18Z" />
              </svg>
            </div>
            <h4 className="font-sans text-2xl font-medium text-neutral-100">
              Something
            </h4>
            <p className="font-sans text-neutral-100">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="group col-span-3 md:col-span-1 md:row-span-2">
            <div className="relative h-72 w-full">
              <Image
                fill
                src="/coach3.jpg"
                alt="coach3"
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col justify-center bg-white p-8">
              <h4 className="font-sans text-2xl font-bold">Practice</h4>
              <p className="mt-4 font-sans text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </p>
              <button className="mt-4 w-fit bg-[#1b1b1b] px-6 py-3 font-sans text-xs font-semibold uppercase text-white hover:bg-black/70">
                learn more
              </button>
            </div>
          </div>
          <div className="group col-span-3 md:col-span-1 md:row-span-2">
            <div className="relative h-72 w-full">
              <Image
                fill
                src="/coach4.jpg"
                alt="coach4"
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col justify-center bg-white p-8">
              <h4 className="font-sans text-2xl font-bold">Something</h4>
              <p className="mt-4 font-sans text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </p>
              <button className="mt-4 w-fit bg-[#1b1b1b] px-6 py-3 font-sans text-xs font-semibold uppercase text-white hover:bg-black/70">
                learn more
              </button>
            </div>
          </div>
          <div className="group col-span-3 md:col-span-1 md:row-span-2">
            <div className="relative h-72 w-full">
              <Image
                fill
                src="/coach5.jpg"
                alt="coach5"
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
              />
            </div>
            <div className="flex flex-col justify-center bg-white p-8">
              <h4 className="font-sans text-2xl font-bold">Something</h4>
              <p className="mt-4 font-sans text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
              </p>
              <button className="mt-4 w-fit bg-[#1b1b1b] px-6 py-3 font-sans text-xs font-semibold uppercase text-white hover:bg-black/70">
                learn more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coach;
