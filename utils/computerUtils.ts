// Used to help the computer player make decisions.

import { isBoardFull } from "./gameUtils";

/**
 * Chooses a random empty space on the board.
 * Given more time, this would include extra logic to prefer horizontal, vertical, or diagonal wins.
 * @param board The board to place the piece on.
 * @returns The row and column of the empty space.
 */
export const chooseRandomPlace = (board: Board) => {
  try {
    if (isBoardFull(board)) {
      throw new Error("The board is full");
    }

    const emptySpaces = [];

    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j] === null) {
          emptySpaces.push({ row: i, col: j });
        }
      }
    }

    const randomIndex = Math.floor(Math.random() * emptySpaces.length);
    return emptySpaces[randomIndex];
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    } else {
      throw new Error("An unexpected error occurred while placing a piece");
    }
  }
};
