import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ExpandedTestimonials = () => {
  return (
    <section className="py-8 font-sans sm:py-10 lg:py-16">
      <div className="mx-auto px-4 text-center sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2 className="font-display text-4xl font-bold tracking-tight text-neutral-900">
          Some kind words from early customers...
        </h2>
        <p className="mt-4 text-lg tracking-tight text-neutral-600">
          I worked with a small group of previous students to make sure all of
          the content in the class was exactly what they needed. Here is what
          they had to say about the finished product.
        </p>
      </div>
      <div className="group mt-16" data-expanded="">
        <ul
          role="list"
          className="mx-auto grid max-w-2xl grid-cols-1 gap-8 px-4 lg:max-w-7xl lg:grid-cols-3 lg:px-8"
        >
          <li className="lg:hidden">
            <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
              <blockquote>
                <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                  Lazar’s teaching style is second to none. Everything was easy
                  to follow every step of the way.
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <div className="overflow-hidden rounded-full bg-neutral-50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                    Antonio Littel
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Frontend Developer
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="lg:hidden">
            <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
              <blockquote>
                <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                  I run an ecommerce store selling rare vintage gummy bears and
                  could never find a good gummy bear icon. Now I can design my
                  own in minutes.
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <div className="overflow-hidden rounded-full bg-neutral-50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                    Cameron Considine
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Entrepreneur
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="lg:hidden">
            <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
              <blockquote>
                <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                  I couldn’t believe how fast Lazar moved in Figma compared to
                  my own workflow. I’m designing icons more accurately in half
                  the time with the shortcuts I learned from her videos.
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center">
                <div className="overflow-hidden rounded-full bg-neutral-50">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                    Steven Hackett
                  </div>
                  <div className="mt-1 text-sm text-neutral-600">
                    Bootcamp Instructor
                  </div>
                </div>
              </figcaption>
            </figure>
          </li>
          <li className="hidden group-data-[expanded]:list-item lg:list-item">
            <ul role="list">
              <li className="hidden lg:list-item">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      Lazar’s teaching style is second to none. Everything was
                      easy to follow every step of the way.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Antonio Littel
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Frontend Developer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="lg:mt-8">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      Even though I was excited to learn, I was pessimistic that
                      I wouldn’t actually ever get good enough to design my own
                      icons. I was wrong — this book is all I needed.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Lynn Nolan
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Growth Marketer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="mt-8">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      I’ve been employed as a professional icon designer for
                      years and still learned tons of new tricks that have made
                      my work even better
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Krista Prosacco
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Professional Designer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li className="hidden group-data-[expanded]:list-item lg:list-item">
            <ul role="list">
              <li className="hidden lg:list-item">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      I run an ecommerce store selling rare vintage gummy bears
                      and could never find a good gummy bear icon. Now I can
                      design my own in minutes.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Cameron Considine
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Entrepreneur
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="lg:mt-8">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      The complete package is worth it for the weekly teardown
                      videos alone. I’ve learned so much watching Lazar take
                      apart other icons and recreate them from scratch.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Regina Wisoky
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Design Student
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="mt-8">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      I didn’t expect to find a lot of value in the community
                      but now I’m in there for at least an hour every day
                      picking up tips from other designers.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Vernon Cummerata
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        UI Engineer
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
          <li className="hidden group-data-[expanded]:list-item lg:list-item">
            <ul role="list">
              <li className="hidden lg:list-item">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      I couldn’t believe how fast Lazar moved in Figma compared
                      to my own workflow. I’m designing icons more accurately in
                      half the time with the shortcuts I learned from her
                      videos.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Steven Hackett
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Bootcamp Instructor
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="lg:mt-8">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      I never thought I would enjoy designing icons but using
                      the ideas in this book, it’s become a great way for me to
                      relax while still being creative.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Carla Schoen
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Startup Founder
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
              <li className="mt-8">
                <figure className="rounded-3xl p-8 shadow-md ring-1 ring-neutral-900/5">
                  <blockquote>
                    <p className="text-lg tracking-tight text-neutral-900 before:content-['“'] after:content-['”']">
                      All I can say is wow — this is easily the best icon design
                      resource I’ve ever encountered.
                    </p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center">
                    <div className="overflow-hidden rounded-full bg-neutral-50">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium leading-6 tracking-tight text-neutral-900">
                        Leah Kiehn
                      </div>
                      <div className="mt-1 text-sm text-neutral-600">
                        Creative Director
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExpandedTestimonials;
