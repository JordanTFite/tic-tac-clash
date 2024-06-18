import { ControlsHeader } from "../Game/ControlsHeader";
import { render, screen } from "@testing-library/react-native";

// TODO: Move this to a __mocks__ folder
jest.mock("@/stores/gameStore", () => ({
  useGameStore: () => ({
    autoProgress: false,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    currentTurn: 0,
    players: [
      { type: "human", piece: "X", title: "Player" },
      { type: "computer", piece: "Circle", title: "COM" },
    ],
    state: "gameover",
    updateGame: () => {},
  }),
}));

test("ControlsHeader renders correctly", () => {
  render(<ControlsHeader />);
  expect(screen.getByText("Back")).toBeTruthy();
  expect(screen.getByText("Winner", { exact: false })).toBeTruthy();
});
