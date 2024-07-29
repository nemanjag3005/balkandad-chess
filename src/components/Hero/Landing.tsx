/* eslint-disable @typescript-eslint/no-empty-function */
"use client";
import Link from "next/link";
import React, { useCallback, useState } from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import NorthStar from "../ui/Logos/NorthStar";
import Star2 from "../ui/Logos/Star2";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { type Position } from "./ChessBoard/types";
import ChessSquare from "./ChessBoard/ChessSquare";
import { Dialog, DialogContent, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";

const homeRoutes: { title: string; href: string }[] = [
  { title: "Home", href: "/" },
  { title: "Course", href: "/course" },
  { title: "Bio", href: "/bio" },
  { title: "Coach", href: "/coach" },
  { title: "Blog", href: "/blog" },
];

type Piece = string;

const Landing = () => {
  const [movesMade, setMovesMade] = useState<number>(0);
  const [selectedPiece, setSelectedPiece] = useState<Position | null>(null);
  const [validMoves, setValidMoves] = useState<Position[]>([]);

  const [openPromoDialog, setOpenPromoDialog] = useState(false);

  const isWhitePiece = (piece: Piece): boolean => {
    return piece.startsWith("w");
  };

  const isValidMove = useCallback(
    (piece: Piece, from: Position, to: Position): boolean => {
      if (!isWhitePiece(piece)) return false;

      const [fromFile, fromRank] = from.split("");
      const [toFile, toRank] = to.split("");

      if (piece === "wp") {
        // Move one square forward
        if (
          toFile === fromFile &&
          parseInt(toRank!) === parseInt(fromRank!) + 1
        ) {
          return true;
        }
        // Move two squares forward from starting position
        if (fromRank === "2" && toFile === fromFile && toRank === "4") {
          return true;
        }
      }

      // Knight movement
      if (piece === "wn" && toFile && fromFile) {
        const fileDiff = Math.abs(
          toFile.charCodeAt(0) - fromFile.charCodeAt(0),
        );
        const rankDiff = Math.abs(parseInt(toRank!) - parseInt(fromRank!));
        return (
          (fileDiff === 1 && rankDiff === 2) ||
          (fileDiff === 2 && rankDiff === 1)
        );
      }

      return false;
    },
    [],
  );

  const handlePieceSelect = (piece: Piece, position: Position) => {
    if (!isWhitePiece(piece)) {
      setSelectedPiece(null);
      setValidMoves([]);
      return;
    }

    setSelectedPiece(position);
    const newValidMoves = [
      "a3",
      "b3",
      "c3",
      "d3",
      "e3",
      "f3",
      "g3",
      "h3",
      "a4",
      "b4",
      "c4",
      "d4",
      "e4",
      "f4",
      "g4",
      "h4",
      "a5",
      "b5",
      "c5",
      "d5",
      "e5",
      "f5",
      "g5",
      "h5",
      "a6",
      "b6",
      "c6",
      "d6",
      "e6",
      "f6",
      "g6",
      "h6",
      "a7",
      "b7",
      "c7",
      "d7",
      "e7",
      "f7",
      "g7",
      "h7",
      "a8",
      "b8",
      "c8",
      "d8",
      "e8",
      "f8",
      "g8",
      "h8",
    ].filter((move) => isValidMove(piece, position, move));
    setValidMoves(newValidMoves);
  };

  const initialBoard: Record<Position, Piece | null> = {
    a8: "br",
    b8: "bn",
    c8: "bb",
    d8: "bq",
    e8: "bk",
    f8: "bb",
    g8: "bn",
    h8: "br",
    a7: "bp",
    b7: "bp",
    c7: "bp",
    d7: "bp",
    e7: "bp",
    f7: "bp",
    g7: "bp",
    h7: "bp",
    a6: null,
    b6: null,
    c6: null,
    d6: null,
    e6: null,
    f6: null,
    g6: null,
    h6: null,
    a5: null,
    b5: null,
    c5: null,
    d5: null,
    e5: null,
    f5: null,
    g5: null,
    h5: null,
    a4: null,
    b4: null,
    c4: null,
    d4: null,
    e4: null,
    f4: null,
    g4: null,
    h4: null,
    a3: null,
    b3: null,
    c3: null,
    d3: null,
    e3: null,
    f3: null,
    g3: null,
    h3: null,
    a2: "wp",
    b2: "wp",
    c2: "wp",
    d2: "wp",
    e2: "wp",
    f2: "wp",
    g2: "wp",
    h2: "wp",
    a1: "wr",
    b1: "wn",
    c1: "wb",
    d1: "wq",
    e1: "wk",
    f1: "wb",
    g1: "wn",
    h1: "wr",
  };

  const [board, setBoard] =
    useState<Record<Position, Piece | null>>(initialBoard);

  const getPieceAtPosition = (position: Position): Piece | undefined => {
    return board[position] ?? undefined;
  };

  const handleMove = (from: Position, to: Position) => {
    const piece = getPieceAtPosition(from);
    if (movesMade === 0 && isValidMove(piece!, from, to)) {
      const newBoard = { ...board, [from]: null, [to]: piece };
      //@ts-expect-error - TS doesn't know about the newBoard object
      setBoard(newBoard);

      setMovesMade(1);
      setOpenPromoDialog(true);
      console.log("First move made! Show pop-up dialog.");
    }
    setSelectedPiece(null);
    setValidMoves([]);
  };

  const renderChessboard = () => {
    const rows = ["8", "7", "6", "5", "4", "3", "2", "1"];
    const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];

    return rows.map((row, rowIndex) =>
      columns.map((col, colIndex) => {
        const position = `${col}${row}`;
        const piece = getPieceAtPosition(position);
        const color = (rowIndex + colIndex) % 2 === 0 ? "white" : "primary";

        return (
          <ChessSquare
            key={position}
            color={color}
            piece={piece}
            position={position}
            isSelected={selectedPiece === position}
            isValidMove={validMoves.includes(position)}
            onMove={handleMove}
            onSelect={piece ? (p, pos) => handlePieceSelect(p, pos) : () => {}}
          />
        );
      }),
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex items-center justify-center">
        <div className="grid w-full max-w-6xl grid-cols-8 grid-rows-6 border-t">
          {/* <div className="row-span-6 flex flex-col items-center border-r border-neutral-300 py-4">
            <h3 className="text-sm font-medium uppercase italic">STD. RANK</h3>
            <div className="relative my-4">
              <NorthStar className="h-20 w-20" />
              <span className="absolute inset-y-0 right-1/2 -rotate-45 place-content-center text-sm italic text-white">
                #
              </span>
            </div>
            <div className="my-44 flex flex-grow items-center justify-center">
              <div className="-rotate-90">
                <h3 className="pb-4 text-center text-6xl font-semibold">
                  Master
                </h3>
              </div>
            </div>

            <div className="relative my-4">
              <Star2 className="h-20 w-20" />
              <span className="absolute inset-y-0 right-1/3 -rotate-45 place-content-center text-sm italic text-white">
                2658
              </span>
            </div>
            <h3 className="text-sm font-medium uppercase italic">
              STD. RATING
            </h3>
          </div> */}
          <div className="col-span-4 row-span-2 grid grid-cols-1 grid-rows-3">
            <div className="row-span-2 flex flex-col items-center justify-center px-4">
              <h1 className="text-center text-5xl font-semibold">
                Lazar Vilotijević
              </h1>
              <h6 className="mt-4 font-sans text-lg font-bold text-primary">
                BalkanDad Chess
              </h6>
            </div>
            <ul className="flex w-full items-center justify-around border-t py-4 font-sans text-xs font-bold uppercase">
              {homeRoutes.map((route) => (
                <Link key={route.href} href={route.href}>
                  <li className="nav w-[100%] py-1">{route.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="col-span-4 row-span-6 grid grid-rows-2">
            <div className="bg-neutral-300"></div>
            <div className="flex flex-col items-center justify-center px-8 py-4">
              <h3 className="text-center text-2xl font-semibold leading-10">
                &quot;Without the Element Of Enjoyment, It Is Not Worth Trying
                To Excel At Anything&quot;
              </h3>
              <div className="mt-10">
                <div className="grid grid-cols-4 border border-black">
                  <a href="/" className="bg-black p-2">
                    <FaFacebook className="h-6 w-6 fill-white" />
                  </a>

                  <a href="/" className="bg-white p-2">
                    <FaTwitter className="h-6 w-6 fill-black" />
                  </a>
                  <a href="/" className="bg-black p-2">
                    <FaInstagram className="h-6 w-6 fill-white" />
                  </a>
                  <a href="/" className="bg-white p-2">
                    <FaYoutube className="h-6 w-6 fill-black" />
                  </a>
                </div>
                <div className="mt-4 flex w-full items-center">
                  <div className="h-[1px] flex-grow bg-black"></div>
                  <span className="mx-2 text-sm font-medium italic">
                    Follow Me
                  </span>
                  <div className="h-[1px] flex-grow bg-black"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4 row-span-4 grid h-[36rem] grid-cols-8 grid-rows-8 border">
            {renderChessboard()}
          </div>
        </div>
        <Dialog open={openPromoDialog} onOpenChange={setOpenPromoDialog}>
          <DialogContent className="sm:max-w-[425px]">
            <div className=""></div>
            <DialogFooter>
              <Button className="text-xs uppercase" variant="default">
                Learn now
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </DndProvider>
  );
};

export default Landing;
