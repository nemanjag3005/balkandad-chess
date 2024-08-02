import React from "react";

const TableOfContents = () => {
  return (
    <section
      id="table-of-contents"
      aria-labelledby="table-of-contents-title"
      className="scroll-mt-14 py-16 font-sans sm:scroll-mt-32 sm:py-20 lg:py-32"
    >
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <h2
          className="inline-flex items-center rounded-full px-4 py-1 text-primary ring-1 ring-inset ring-primary"
          id="table-of-contents-title"
        >
          <span className="font-mono text-sm" aria-hidden="true">
            01
          </span>
          <span className="ml-3 h-3.5 w-px bg-primary/20"></span>
          <span className="ml-3 text-base font-medium tracking-tight">
            Table of contents
          </span>
        </h2>
        <p className="font-display mt-8 text-4xl font-bold tracking-tight text-neutral-900">
          Explore the comprehensive content of my Chess Masterclass. Every
          crucial aspect of chess mastery is covered inside.
        </p>
        <p className="mt-4 text-lg tracking-tight text-neutral-700">
          &quot;From Pawn to Grandmaster&quot; is a meticulously crafted course
          comprising over 20 lectures of richly detailed content, designed to
          elevate your chess skills from beginner to advanced level, with no
          unnecessary filler.
        </p>
        <div data-expanded="">
          <ol role="list" className="mt-16 space-y-10 sm:space-y-16">
            <li>
              <h3 className="font-display text-3xl font-bold tracking-tight text-neutral-900">
                Chess Fundamentals
              </h3>
              <ol
                role="list"
                className="mt-8 divide-y divide-neutral-300/30 rounded-2xl bg-neutral-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
              >
                <li
                  className="flex justify-between py-3"
                  aria-label="Introduction to chess on page 1"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Introduction to chess
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 1
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="The chessboard and pieces on page 15"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    The chessboard and pieces
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 2
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Basic rules and movements on page 20"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Basic rules and movements
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 3
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-display text-3xl font-bold tracking-tight text-neutral-900">
                Opening Strategies
              </h3>
              <ol
                role="list"
                className="mt-8 divide-y divide-neutral-300/30 rounded-2xl bg-neutral-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
              >
                <li
                  className="flex justify-between py-3"
                  aria-label="Principles of opening play on page 35"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Principles of opening play
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 4
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Popular openings for White on page 50"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Popular openings for White
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 5
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Defensive strategies for Black on page 65"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Defensive strategies for Black
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 6
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-display text-3xl font-bold tracking-tight text-neutral-900">
                Middlegame Tactics
              </h3>
              <ol
                role="list"
                className="mt-8 divide-y divide-neutral-300/30 rounded-2xl bg-neutral-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
              >
                <li
                  className="flex justify-between py-3"
                  aria-label="Attacking the king on page 80"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Attacking the king
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 7
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Piece sacrifices on page 95"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Piece sacrifices
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 8
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Positional play on page 110"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Positional play
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 9
                  </span>
                </li>
              </ol>
            </li>
            <li>
              <h3 className="font-display text-3xl font-bold tracking-tight text-neutral-900">
                Endgame Mastery
              </h3>
              <ol
                role="list"
                className="mt-8 divide-y divide-neutral-300/30 rounded-2xl bg-neutral-50 px-6 py-3 text-base tracking-tight sm:px-8 sm:py-7"
              >
                <li
                  className="flex justify-between py-3"
                  aria-label="Basic checkmates on page 125"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Basic checkmates
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 10
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Pawn endgames on page 140"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Pawn endgames
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 11
                  </span>
                </li>
                <li
                  className="flex justify-between py-3"
                  aria-label="Complex endgame scenarios on page 155"
                >
                  <span
                    className="font-medium text-neutral-900"
                    aria-hidden="true"
                  >
                    Complex endgame scenarios
                  </span>
                  <span
                    className="font-mono text-neutral-400"
                    aria-hidden="true"
                  >
                    Lecture 12
                  </span>
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default TableOfContents;
