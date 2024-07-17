import React, { type LegacyRef } from "react";
import { useDrag } from "react-dnd";
import Image from "next/image";
import { type ChessPieceProps } from "./types";

const DraggableChessPiece: React.FC<ChessPieceProps> = ({
  piece,
  position,
  onSelect,
}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "chessPiece",
    item: () => {
      onSelect(position);
      return { piece, position };
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag as unknown as LegacyRef<HTMLDivElement>}
      style={{ opacity: isDragging ? 0.7 : 1 }}
      className="relative h-full w-full cursor-grab active:cursor-grabbing"
      onClick={() => onSelect(position)}
    >
      <Image
        className="pointer-events-none"
        src={`/${piece}.png`}
        alt={piece}
        fill
      />
    </div>
  );
};

export default DraggableChessPiece;
