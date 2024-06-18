import { chooseRandomPlace } from "../computerUtils";

describe("chooseRandomPlace", () => {
  it("should return a random empty space on the board", () => {
    const board: Board = [
      [0, 1, 0],
      [1, 0, 1],
      [0, 1, null],
    ];

    const result = chooseRandomPlace(board);

    expect(result).toHaveProperty("row");
    expect(result).toHaveProperty("col");
    expect(typeof result.row).toBe("number");
    expect(typeof result.col).toBe("number");
  });

  it("should throw an error if the board is full", () => {
    const board: Board = [
      [0, 1, 0],
      [1, 0, 1],
      [1, 0, 1],
    ];

    expect(() => chooseRandomPlace(board)).toThrow("The board is full");
  });
});
