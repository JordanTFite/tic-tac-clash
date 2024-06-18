import {
  checkForWin,
  createEmptyBoard,
  placePiece,
  InvalidMoveError,
} from "../gameUtils";

describe("checkForWin", () => {
  it("should return false if no values are placed", () => {
    const board: Board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(checkForWin(board, 0)).toBe(false);
  });

  it("should return true if a player has won horizontally", () => {
    const board: Board = [
      [0, 0, 0],
      [null, null, null],
      [null, null, null],
    ];
    expect(checkForWin(board, 0)).toBe(true);

    const board2: Board = [
      [null, null, null],
      [0, 0, 0],
      [null, null, null],
    ];
    expect(checkForWin(board2, 0)).toBe(true);

    const board3: Board = [
      [null, null, null],
      [null, null, null],
      [0, 0, 0],
    ];
    expect(checkForWin(board3, 0)).toBe(true);
  });

  it("should return true if a player has won vertically", () => {
    const board: Board = [
      [0, null, null],
      [0, null, null],
      [0, null, null],
    ];
    expect(checkForWin(board, 0)).toBe(true);

    const board2: Board = [
      [null, 0, null],
      [null, 0, null],
      [null, 0, null],
    ];
    expect(checkForWin(board2, 0)).toBe(true);

    const board3: Board = [
      [null, null, 0],
      [null, null, 0],
      [null, null, 0],
    ];
    expect(checkForWin(board3, 0)).toBe(true);
  });

  it("should return true if a player has won diagonally", () => {
    const board: Board = [
      [0, null, null],
      [null, 0, null],
      [null, null, 0],
    ];
    expect(checkForWin(board, 0)).toBe(true);

    const board2: Board = [
      [null, null, 0],
      [null, 0, null],
      [0, null, null],
    ];
    expect(checkForWin(board2, 0)).toBe(true);
  });

  it("should return false if a player has not won", () => {
    const board: Board = [
      [0, null, null],
      [null, 0, null],
      [null, null, null],
    ];
    expect(checkForWin(board, 0)).toBe(false);

    const board2: Board = [
      [0, null, null],
      [null, 0, null],
      [null, null, 1],
    ];
    expect(checkForWin(board2, 0)).toBe(false);
    expect(checkForWin(board2, 1)).toBe(false);

    const board3: Board = [
      [0, 0, 1],
      [1, 1, 0],
      [0, 1, 0],
    ];
    expect(checkForWin(board3, 0)).toBe(false);
    expect(checkForWin(board3, 1)).toBe(false);
  });
});

describe("createEmptyBoard", () => {
  it("should return an empty board", () => {
    const board = createEmptyBoard();
    expect(board).toEqual([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  });
});

describe("placePiece", () => {
  it("should place a piece on the board", () => {
    const board: Board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    const newBoard = placePiece({ board, row: 0, col: 0, player: 0 });
    expect(newBoard).toEqual([
      [0, null, null],
      [null, null, null],
      [null, null, null],
    ]);
  });

  it("should throw an error if the cell is not empty", () => {
    const board: Board = [
      [0, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(() => placePiece({ board, row: 0, col: 0, player: 0 })).toThrow(
      InvalidMoveError,
    );
  });

  it("should throw an error if the cell is out of bounds", () => {
    const board: Board = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
    expect(() => placePiece({ board, row: 3, col: 0, player: 0 })).toThrow(
      InvalidMoveError,
    );
  });
});
