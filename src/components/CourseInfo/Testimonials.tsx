"use client";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

const Testimonials = () => {
  return (
    <div className="px-6 pb-20 pt-20 font-sans">
      <section className="mx-auto max-w-2xl lg:max-w-3xl">
        <h2 className="sr-only">Testimonials</h2>
        <Tabs defaultValue="t1">
          <TabsList className="flex justify-center space-x-4 pt-2">
            <TabsTrigger
              className="[&amp;:focus:not(:focus-visible)]:outline-none relative h-12 w-12 overflow-hidden rounded-full bg-neutral-100 opacity-40 shadow-md ring-2 ring-white transition"
              value="t1"
            >
              <Image src="/test2.webp" alt="" fill />
            </TabsTrigger>
            <TabsTrigger
              className="[&amp;:focus:not(:focus-visible)]:outline-none relative h-12 w-12 overflow-hidden rounded-full bg-neutral-100 opacity-40 shadow-md ring-2 ring-white transition"
              value="t2"
            >
              <Image src="/test1.webp" alt="" fill />
            </TabsTrigger>
            <TabsTrigger
              className="[&amp;:focus:not(:focus-visible)]:outline-none relative h-12 w-12 overflow-hidden rounded-full bg-neutral-100 opacity-40 shadow-md ring-2 ring-white transition"
              value="t3"
            >
              <Image src="/anonymous2.jpeg" alt="" fill />
            </TabsTrigger>
          </TabsList>
          <TabsContent value="t1" className="mt-10">
            <figure className="text-center">
              <blockquote className="text-2xl leading-9 text-neutral-900">
                <p className="before:content-['“'] after:content-['”']">
                  Lazar helped me reconnect with my passion about learning
                  Chess. As an adult with childhood experience in Chess, it was
                  difficult to bridge the gap in decades where I didn’t study.
                  But he’s given me such great direction and connected me with
                  resources that have greatly helped my game. He’s definitely
                  leading me into smarter ways of thinking and giving me
                  direction to make me a much stronger player.
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <span className="block text-base font-medium leading-7 text-neutral-900">
                  Luke A.
                </span>
              </figcaption>
            </figure>
          </TabsContent>
          <TabsContent value="t2" className="mt-10">
            <figure className="text-center">
              <blockquote className="text-2xl leading-9 text-neutral-900">
                <p className="before:content-['“'] after:content-['”']">
                  Lazar is an absolute professional and a master of the game. He
                  is able to connect and communicate with my son in a way that
                  engages his mind and causes him to think. He is thoughtful and
                  patient and always willing to explain moves or answer any
                  questions. If you’re serious about chess, Lazar is your coach.
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <span className="block text-base font-medium leading-7 text-neutral-900">
                  Jay K.
                </span>
              </figcaption>
            </figure>
          </TabsContent>
          <TabsContent value="t3" className="mt-10">
            <figure className="text-center">
              <blockquote className="text-2xl leading-9 text-neutral-900">
                <p className="before:content-['“'] after:content-['”']">
                  I was struggling with both my tactical and positional sense of
                  the game and Lazar’s ability to not only make sense of complex
                  positions but break them down into simplistic ideas utterly
                  fascinated me. All in all a 10/10 experience and I recommend
                  Coach Lazar to anyone who is trying to improve their
                  understanding of the game.
                </p>
              </blockquote>
              <figcaption className="mt-8">
                <span className="block text-base font-medium leading-7 text-neutral-900">
                  John P.
                </span>
              </figcaption>
            </figure>
          </TabsContent>
        </Tabs>
      </section>
    </div>
    //   <div className="px-6">
    //     <section className="mx-auto max-w-2xl lg:-mt-8 lg:max-w-3xl">
    //         <h2 className="sr-only">Testimonials</h2>
    //         <div>
    //             <div className="flex justify-center space-x-4 pt-2" role="tablist" aria-orientation="horizontal">
    //                 <button className="h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition [&amp;:focus:not(:focus-visible)]:outline-none opacity-40" id="headlessui-tabs-tab-:rp:" role="tab" type="button" aria-selected="false" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:rs:"><img src="/img/maccaw-profile.jpeg" alt="">
    //                 <span className="sr-only">Alex MacCaw</span>
    //                 </button>
    //                 <button className="h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition [&amp;:focus:not(:focus-visible)]:outline-none -translate-y-2" id="headlessui-tabs-tab-:rq:" role="tab" type="button" aria-selected="true" data-headlessui-state="selected" aria-controls="headlessui-tabs-panel-:rt:" data-selected="">
    //                     <img src="/img/benbarbersmith-profile.jpeg" alt="">
    //                     <span className="sr-only">Ben Barbersmith</span>
    //                 </button>
    //                 <button className="h-12 w-12 overflow-hidden rounded-full bg-slate-100 shadow-md ring-2 ring-white transition [&amp;:focus:not(:focus-visible)]:outline-none opacity-40" id="headlessui-tabs-tab-:rr:" role="tab" type="button" aria-selected="false" tabindex="-1" data-headlessui-state="" aria-controls="headlessui-tabs-panel-:ru:">
    //                         <img src="/img/justin-profile.jpg" alt="">
    //                         <span className="sr-only">Justin Jackson</span>
    //                 </button>
    //             </div>
    //             <div className="mt-10">
    //                 <span aria-hidden="true" id="headlessui-tabs-panel-:rs:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:rp:" >
    //                 </span>
    //                 <figure className="text-center" id="headlessui-tabs-panel-:rt:" role="tabpanel" aria-labelledby="headlessui-tabs-tab-:rq:"data-headlessui-state="selected" data-selected="">
    //                     <blockquote className="text-2xl leading-9 text-slate-900">
    //                         <p className="before:content-['“'] after:content-['”']">Yet again Tailwind and Tailwind UI are dramatically speeding up my frontend work. At this point Tailwind UI is hands-down the highest ROI digital asset I’ve ever bought.</p></blockquote><figcaption className="mt-8"><span className="block text-base font-medium leading-7 text-slate-900">Ben Barbersmith</span><span className="text-sm text-slate-600"><a href="https://twitter.com/benbarbersmith/status/1527291090889371651" target="_blank">@benbarbersmith</a>
    //                 </span>
    //                                         </figcaption>
    //                 </figure>
    //             </div>
    //         </div>
    //     </section>
    // </div>
  );
};

export default Testimonials;
