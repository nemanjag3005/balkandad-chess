import React, { type LegacyRef } from "react";
import { useDrop } from "react-dnd";
import DraggableChessPiece from "./DraggableChessPiece";
import { type ChessSquareProps, type Position } from "./types";

const ChessSquare: React.FC<ChessSquareProps> = ({
  color,
  piece,
  position,
  isValidMove,
  isSelected,
  onMove,
  onSelect,
}) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "chessPiece",
    drop: (item: { position: Position }) => onMove(item.position, position),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const squareColor = isSelected
    ? "bg-yellow-300"
    : color === "white"
      ? "bg-white"
      : "bg-primary";

  return (
    <div
      ref={drop as unknown as LegacyRef<HTMLDivElement>}
      className={`relative ${squareColor} ${
        isOver ? "border-4 border-neutral-300" : ""
      } h-18 w-18`}
    >
      {isValidMove && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-1/3 w-1/3 rounded-full bg-gray-500 opacity-50" />
        </div>
      )}
      {piece && (
        <DraggableChessPiece
          piece={piece}
          position={position}
          onSelect={() => onSelect(piece, position)}
        />
      )}
    </div>
  );
};

export default ChessSquare;
