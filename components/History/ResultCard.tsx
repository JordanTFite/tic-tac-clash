import React, { FC } from "react";
import { View, Text } from "react-native";
import { BoardResult } from "./BoardResult";

type ResultCardProps = {
  result: Result;
  index: number;
};

export const ResultCard: FC<ResultCardProps> = ({ result, index }) => (
  <View
    key={`result-${index}`}
    className="w-full mb-2 p-4 bg-white rounded-lg shadow-sm"
  >
    <View className="flex-row justify-between items-start">
      <View>
        {result.winner && (
          <View className="flex-row items-center gap-x-1">
            <Text className="text-lg">Winner:</Text>
            <Text
              className={`text-lg font-black ${result.winningColor === "Blue" ? "text-blue-500" : "text-red-500"}`}
            >
              {result.winner.title}
            </Text>
          </View>
        )}
        {!result.winner && (
          <View className="bg-yellow-100 border border-yellow-500 rounded">
            <Text className="text-lg font-black text-yellow-500 text-center">
              Tie
            </Text>
          </View>
        )}
        <Text className="text-sm">
          Date: {new Date(result.date).toLocaleDateString()}
        </Text>
      </View>
      <BoardResult board={result.board} />
    </View>
  </View>
);
