// Define global types here
declare global {
  type Space = number | null;

  type Board = [
    [Space, Space, Space],
    [Space, Space, Space],
    [Space, Space, Space],
  ];

  type Piece = "X" | "Circle" | "Cat" | "Heart" | "Plus" | "Gem" | "Pyramid";

  type Player = {
    type: "human" | "computer";
    piece: Piece;
    title: string;
  };

  type Result = {
    winner: Player | null;
    winningColor?: "Red" | "Blue";
    board: Board;
    date: Date;
    tie: boolean;
  };
}

export {};
