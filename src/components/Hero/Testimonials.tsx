import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Testimonials = () => {
  return (
    <div className="mt-10 flex items-center justify-center">
      <div className="flex w-full max-w-6xl flex-col items-center px-6 py-8">
        <h4 className="font-sans text-sm font-bold uppercase text-primary">
          testimonials
        </h4>
        <h2 className="mt-4 text-center font-sans text-4xl font-semibold">
          I have worked with hundreds of amazing clients
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 lg:grid-cols-3">
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “I feel like I have stumbled across a gold mine in finding
                Lazar. I wanted to learn more about the game because I knew
                nothing more then how the pieces moved. His love for the game is
                clear and his way to articulate any kind of position and make it
                clear to a beginner is fascinating. Though I know I have much to
                learn, I can’t believe how much I have already improved.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Denise Z.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Lazar is the best. He genuinely wants you to be better at
                chess. His enthusiasm and high level chess IQ make him really
                fun to work with. I’ve been a student for almost a year now and
                I’m very happy my experience working with Lazar!”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Dylan D.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “We are very satisfied with coach Lazar. He teaches our ten
                years old son, and we would hardly recommend coach Lazar for
                both adults and kids interested in chess.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Vesna P.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm lg:hidden">
              <p>
                “Lazar is clearly a master of his craft. I really appreciate his
                ability to articulate his vast knowledge of chess to a layman
                and direct them to the next goal. 10/10.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Ryan R.</p>
              </div>
            </div>
          </div>
          <div className="hidden flex-col space-y-8 lg:flex">
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Lazar is clearly a master of his craft. I really appreciate his
                ability to articulate his vast knowledge of chess to a layman
                and direct them to the next goal. 10/10.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Ryan R.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Coach Lazar is extremely thorough and definite understands the
                game at a very deep level. He does a great job teaching and
                walking through different scenarios, and is a huge value add for
                anyone looking to further their chess game.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Jake S.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Coach Lazar is a wonderful person and a coach. He is always
                approachable and takes his sessions very seriously. His sessions
                are detail oriented and explains his moves and strategies
                clearly. My kid has started showing improvement in his thinking
                and able to grasp the difficult concepts easily. All thanks to
                Coach Lazar !!!”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Kaushik R.</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm lg:hidden">
              <p>
                “My 7 year old son has been learning with Coach Lazar for 3
                weeks and is showing tremendous improvement after each class.
                Coach Lazar is a responsive and passionate coach who is willing
                to go above and beyond to evaluate my sons online games so that
                he teaches based on ongoing chess performance.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Dana I.</p>
              </div>
            </div>
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm lg:hidden">
              <p>
                “Lazar is an amazing teacher. He will not only help with chess
                principles but will analyze your games so that you can see where
                mistakes were made. This isn&apos;t something you can get from a
                computer analysis, Lazar takes you through the moves and the
                reasoning/rationale behind each position.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>John A.</p>
              </div>
            </div>
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Lazar is an amazing teacher. He will not only help with chess
                principles but will analyze your games so that you can see where
                mistakes were made. This isn&apos;t something you can get from a
                computer analysis, Lazar takes you through the moves and the
                reasoning/rationale behind each position.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>John A.</p>
              </div>
            </div>
            <div className="mb-8 flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “My 7 year old son has been learning with Coach Lazar for 3
                weeks and is showing tremendous improvement after each class.
                Coach Lazar is a responsive and passionate coach who is willing
                to go above and beyond to evaluate my sons online games so that
                he teaches based on ongoing chess performance.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Dana I.</p>
              </div>
            </div>
            <div className="flex flex-col rounded-xl bg-neutral-50 p-10 font-sans text-sm">
              <p>
                “Lazar is a complete pro and I thoroughly enjoy my lessons with
                him.”
              </p>
              <div className="mt-6 flex items-center space-x-2 font-semibold">
                <Avatar>
                  <AvatarImage src="/anonymous.webp" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <p>Stephen G.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
