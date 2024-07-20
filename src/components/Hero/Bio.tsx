import React from "react";

const Bio = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid w-full max-w-6xl grid-cols-8 grid-rows-6 border-t border-neutral-300">
        <div className="bg-chessboard relative col-span-5 row-span-6 grid grid-cols-2 border-b border-neutral-300 bg-opacity-50 bg-cover p-8">
          <div className="bg-gradient-radial absolute inset-0 from-[#1B1B1BCC] to-[#333333] opacity-75"></div>
          <div className="flex flex-col justify-center">
            <h2 className="z-30 font-sans text-2xl font-medium text-white">
              Full of passion and dedication. Welcome to a chess school that is
              always ready to help you improve
            </h2>
            <p className="z-30 mt-4 font-sans text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h2 className="z-30 mt-6 font-sans font-bold text-white">
              BalkanDad Chess
            </h2>
          </div>
        </div>
        <div className="col-span-3 row-span-6 p-8">
          <h4 className="font-sans text-sm font-bold uppercase text-primary">
            meet balkandad
          </h4>
          <h2 className="mt-4 text-3xl font-semibold">
            The magic of chess. Both beauty and complexity.
          </h2>
          <p className="mt-4 font-sans text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="mt-6 flex flex-col space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-[#1b1b1b] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-white"
                >
                  <title>chess-king</title>
                  <path d="M19,22H5V20H19V22M17,10C15.58,10 14.26,10.77 13.55,12H13V7H16V5H13V2H11V5H8V7H11V12H10.45C9.35,10.09 6.9,9.43 5,10.54C3.07,11.64 2.42,14.09 3.5,16C4.24,17.24 5.57,18 7,18H17A4,4 0 0,0 21,14A4,4 0 0,0 17,10Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="font-sans text-lg font-semibold">
                  Personal Coach
                </h6>
                <p className="font-sans text-sm text-muted-foreground">
                  Dignissim mus orci pretium leo nascetur nam aliquet metus
                  feugiat faucibus luctus
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <div className="bg-[#1b1b1b] p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-8 w-8 fill-white"
                >
                  <title>chess-queen</title>
                  <path d="M18,3A2,2 0 0,1 20,5C20,5.81 19.5,6.5 18.83,6.82L17,13.15V18H7V13.15L5.17,6.82C4.5,6.5 4,5.81 4,5A2,2 0 0,1 6,3A2,2 0 0,1 8,5C8,5.5 7.82,5.95 7.5,6.3L10.3,9.35L10.83,5.62C10.33,5.26 10,4.67 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.67 13.67,5.26 13.17,5.62L13.7,9.35L16.47,6.29C16.18,5.94 16,5.5 16,5A2,2 0 0,1 18,3M5,20H19V22H5V20Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <h6 className="font-sans text-lg font-semibold">
                  Everything Chess
                </h6>
                <p className="font-sans text-sm text-muted-foreground">
                  Dignissim mus orci pretium leo nascetur nam aliquet metus
                  feugiat faucibus luctus
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
