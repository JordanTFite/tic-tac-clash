import { View } from "react-native";
import { Button } from "../Button";
import { GameState, useGameStore } from "@/stores/gameStore";
import { createEmptyBoard } from "@/utils/gameUtils";
import { router } from "expo-router";

export const GameEndOptions = () => {
  const { updateGame } = useGameStore();

  return (
    <View
      key="play-again"
      className="p-2 pt-0 flex gap-y-2 items-center justify-between rounded border border-transparentDark bg-white mt-2 mx-2"
    >
      <Button
        title="Play Again"
        className="w-full"
        onPress={() =>
          updateGame({
            state: GameState.Playing,
            board: createEmptyBoard(),
            currentTurn: 0,
          })
        }
      />
      <Button
        title="Change Settings"
        className="w-full"
        variant="outline"
        onPress={() => router.replace("../new-game")}
      />
    </View>
  );
};
