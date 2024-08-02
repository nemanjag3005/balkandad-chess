import Image from "next/image";
import React from "react";

const Testimonial1 = () => {
  return (
    <aside className="relative bg-neutral-50 py-16 font-sans sm:py-32">
      <div className="text-neutral-900/10">
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
          <defs>
            <pattern
              id=":S2:"
              width="128"
              height="128"
              patternUnits="userSpaceOnUse"
              x="50%"
              patternTransform="translate(0 80)"
            >
              <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#:S2:)"></rect>
        </svg>
      </div>
      <div className="relative mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-2">
        <figure>
          <div className="flex text-slate-900 sm:justify-center">
            <div className="flex gap-1">
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 fill-current"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 fill-current"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 fill-current"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 fill-current"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="h-5 w-5 fill-current"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            </div>
          </div>
          <blockquote className="mt-10 font-sans text-4xl font-medium tracking-tight text-neutral-900 sm:text-center">
            <p>
              “Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam
              delectus nihil. Aut enim doloremque et ipsam.”
            </p>
          </blockquote>
          <figcaption className="mt-10 flex items-center sm:justify-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full bg-neutral-200">
              <Image alt="" fill className="object-cover" src="/coach1.jpg" />
            </div>
            <div className="ml-4">
              <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                Tommy Stroman
              </div>
              <div className="mt-1 text-sm text-neutral-600">Position</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </aside>
  );
};

export default Testimonial1;
