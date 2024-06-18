// Contains utility functions for the game logic.

export class InvalidMoveError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "InvalidMoveError";
  }
}

type PlacePieceParams = {
  board: Board;
  row: number;
  col: number;
  player: number;
};

/**
 * Places a piece on a 3x3 board.
 * @param board The board to place the piece on.
 * @param row The row to place the piece in.
 * @param col The column to place the piece in.
 * @param player The player to place the piece for.
 * @returns The new board with the piece placed.
 * @throws {InvalidMoveError} If the move is invalid.
 */
export const placePiece = ({
  board,
  row,
  col,
  player,
}: PlacePieceParams): Board => {
  try {
    if (row < 0 || row > 2 || col < 0 || col > 2) {
      throw new InvalidMoveError("Invalid row or column");
    }

    if (board[row][col] !== null) {
      throw new InvalidMoveError("Cell is not empty");
    }

    const newBoard = board.map((r) => [...r]) as Board;
    newBoard[row][col] = player;

    return newBoard;
  } catch (e) {
    if (e instanceof InvalidMoveError) {
      throw e;
    } else {
      throw new Error("An unexpected error occurred while placing a piece");
    }
  }
};

/**
 * Checks a 3x3 board for a win.
 * @param board The board to check.
 * @param player The player to check for.
 * @returns True if the player has won, false otherwise.
 */
export const checkForWin = (board: Board, player: number): boolean => {
  try {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (board[i].every((cell) => cell === player)) {
        return true;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (board.every((row) => row[i] === player)) {
        return true;
      }
    }

    // Check diagonals
    if (board.every((row, i) => row[i] === player)) {
      return true;
    } else if (board.every((row, i) => row[2 - i] === player)) {
      return true;
    }

    return false;
  } catch (e) {
    throw new Error("An unexpected error occurred while checking for a win");
  }
};

/**
 * Creates an empty 3x3 board.
 * @returns An empty 3x3 board.
 */
export const createEmptyBoard = (): Board => {
  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
};

/**
 * Checks if a 3x3 board is full.
 * @param board The board to check.
 * @returns True if the board is full, false otherwise.
 */
export const isBoardFull = (board: Board): boolean => {
  try {
    return board.every((row) => row.every((cell) => cell !== null));
  } catch (e) {
    throw new Error(
      "An unexpected error occurred while checking if the board is full",
    );
  }
};
