export type PieceType = "p" | "r" | "n" | "b" | "q" | "k";
export type PieceColor = "w" | "b";
export type Position = string; // e.g., "a1", "e4", etc.

export interface ChessPieceProps {
  piece: string; // e.g., "wp" for white pawn
  position: Position;
  onSelect: (position: Position) => void;
}

export interface ChessSquareProps {
  color: "white" | "primary";
  piece?: string;
  position: Position;
  isValidMove: boolean;
  isSelected: boolean;
  onMove: (from: Position, to: Position) => void;
  onSelect: (piece: string, position: Position) => void;
}
