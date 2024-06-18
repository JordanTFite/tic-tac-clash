import {
  addMatchToHistory,
  clearMatchHistory,
  getMatchHistory,
} from "../historyUtils";
import { createEmptyBoard } from "../gameUtils";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

const {
  setItem,
  getItem,
  removeItem,
} = require("@react-native-async-storage/async-storage");

const result: Result = {
  board: createEmptyBoard(),
  date: new Date(),
  winner: {
    piece: "X",
    title: "Player",
    type: "human",
  },
  winningColor: "Red",
};

describe("addMatchToHistory", () => {
  it("should save the match result to the device's storage", async () => {
    setItem.mockResolvedValueOnce(null);

    await addMatchToHistory(result);
    expect(setItem).toHaveBeenCalledWith(
      "match-history",
      JSON.stringify([result]),
    );
  });

  it("should throw an error if an unexpected error occurs", async () => {
    setItem.mockRejectedValueOnce(new Error("Test error"));

    await expect(addMatchToHistory({} as Result)).rejects.toThrow(
      "An unexpected error occurred while saving the match history",
    );
  });
});

describe("getMatchHistory", () => {
  it("should retrieve an empty match history from the device's storage without error", async () => {
    getItem.mockResolvedValueOnce(JSON.stringify([]));

    const history = await getMatchHistory();
    expect(history).toEqual([]);
    expect(getItem).toHaveBeenCalledWith("match-history");
  });

  // This test checks that parsing the saved stringified object works correctly
  it("should retrieve a non-empty match history from the device's storage without error", async () => {
    getItem.mockResolvedValueOnce(JSON.stringify([result]));

    const history = await getMatchHistory();

    // The date is converted to a string when stored in AsyncStorage
    expect(history).toEqual([{ ...result, date: result.date.toISOString() }]);
    expect(getItem).toHaveBeenCalledWith("match-history");
  });
});

describe("clearMatchHistory", () => {
  it("should clear the match history from the device's storage without error", async () => {
    removeItem.mockResolvedValueOnce(null);

    await clearMatchHistory();
    expect(removeItem).toHaveBeenCalledWith("match-history");
  });

  it("should throw an error if an unexpected error occurs", async () => {
    removeItem.mockRejectedValueOnce(new Error("Test error"));

    await expect(clearMatchHistory()).rejects.toThrow(
      "An unexpected error occurred while clearing the match history",
    );
  });
});
