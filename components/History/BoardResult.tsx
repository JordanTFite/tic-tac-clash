import { FC } from "react";
import { View } from "react-native";
import { BoardRow } from "./BoardRow";

type BoardResultProps = {
  board: Board;
};

export const BoardResult: FC<BoardResultProps> = ({ board }) => {
  return (
    <View className="aspect-square flex-col">
      <BoardRow row={board[0]} />
      <BoardRow row={board[1]} />
      <BoardRow row={board[2]} />
    </View>
  );
};
