import { create } from "zustand";
import { createEmptyBoard } from "@/utils/gameUtils";

export enum GameState {
  Playing = "playing",
  GameOver = "gameover",
}

export type GameStore = {
  state: GameState;
  board: Board;
  currentTurn: number;
  players: [Player, Player];
  updateGame: (updates: Partial<GameStore>) => void;
  winner?: number;
  autoProgress: boolean;
};

export const useGameStore = create<GameStore>((set) => ({
  state: GameState.Playing,
  board: createEmptyBoard(),
  currentTurn: 0,
  players: [
    { type: "human", piece: "X", title: "Player" },
    { type: "computer", piece: "Circle", title: "COM" },
  ],
  autoProgress: true,
  updateGame: (updates) => set((state) => ({ ...state, ...updates })),
}));
