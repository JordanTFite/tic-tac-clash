import React from "react";
import { Alert, TouchableOpacity, Text } from "react-native";
import { useGameStore, GameState } from "@/stores/gameStore";
import { router } from "expo-router";

export const BackButton = () => {
  const { state, updateGame } = useGameStore();

  const onBack = () => {
    if (state === "gameover") {
      router.replace("../");
      return;
    }

    Alert.alert("Are you sure you want to cancel the game?", "", [
      {
        text: "Yes",
        onPress: () => {
          updateGame({ state: GameState.GameOver });
          router.replace("../");
        },
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  };

  return (
    <TouchableOpacity
      onPress={onBack}
      className="w-20 items-center bg-slate-500 px-4 py-2 rounded-lg"
    >
      <Text className="text-white">
        {state === "gameover" ? "Back" : "Cancel"}
      </Text>
    </TouchableOpacity>
  );
};
