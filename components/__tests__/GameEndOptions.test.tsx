import { GameEndOptions } from "../Game/GameEndOptions";
import { render, screen } from "@testing-library/react-native";

test("GameEndOptions renders correctly", () => {
  render(<GameEndOptions />);
  expect(screen.getByText("Play Again")).toBeTruthy();
  expect(screen.getByText("Change Settings")).toBeTruthy();
});
