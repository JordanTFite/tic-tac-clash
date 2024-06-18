import React from "react";
import { View, Text } from "react-native";
import Animated, { LinearTransition } from "react-native-reanimated";
import { BackButton } from "./BackButton";
import { useGameStore } from "@/stores/gameStore";

export const ControlsHeader = () => {
  const { state, players, winner } = useGameStore();

  return (
    <Animated.View
      layout={LinearTransition}
      className="flex-row mb-6 px-2 items-center justify-between"
    >
      <BackButton />

      {state === "gameover" && winner !== null && (
        <View className=" border border-green-600 bg-green-200 px-2 rounded">
          <Text className="font-bold text-lg text-center text-green-600">
            Winner: {winner === 0 ? players[0].title : players[1].title}
          </Text>
        </View>
      )}
      {state === "gameover" && winner === null && (
        <View className=" border border-yellow-600 bg-yellow-200 px-2 rounded">
          <Text className="font-bold text-lg text-center text-yellow-600">
            TIE
          </Text>
        </View>
      )}
    </Animated.View>
  );
};
