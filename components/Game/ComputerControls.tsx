import React from "react";
import { View, Text, Switch } from "react-native";
import { Button } from "../Button";
import { useGameStore } from "@/stores/gameStore";
import { useGameLogic } from "@/hooks/useGameLogic";

export const ComputerControls = () => {
  const { players, currentTurn, autoProgress, updateGame } = useGameStore();
  const { takeComputerTurn } = useGameLogic();

  const computerTurnButtonEnabled =
    !autoProgress && players[currentTurn].type === "computer";

  const handleSwitchChange = (value: boolean) => {
    updateGame({ autoProgress: value });
  };

  return (
    <View className="px-2 mt-4 flex-row items-center justify-between rounded border border-transparentDark mx-2 bg-white">
      <View className="flex items-start gap-y-1 p-1">
        <Text className="">Auto Play COM Moves</Text>
        <Switch value={autoProgress} onValueChange={handleSwitchChange} />
      </View>
      <View key="play-com-turn">
        <Button
          disabled={!computerTurnButtonEnabled}
          title="Play COM turn"
          onPress={takeComputerTurn}
        />
      </View>
    </View>
  );
};
