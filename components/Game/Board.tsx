import React, { useEffect } from "react";
import { useGameStore } from "@/stores/gameStore";
import { Cell } from "@/components/Game/Cell";
import Animated, { LinearTransition } from "react-native-reanimated";
import { useGameLogic } from "@/hooks/useGameLogic";

export const Board = () => {
  const { updateGame, state, board, currentTurn, players, autoProgress } =
    useGameStore();
  const { takeTurn, takeComputerTurn } = useGameLogic();

  useEffect(() => {
    if (state === "gameover") return;

    const handleComputerTurn = () => {
      if (players[currentTurn].type === "computer" && autoProgress) {
        const timeout = setTimeout(async () => {
          await takeComputerTurn();
        }, 500);
        return () => clearTimeout(timeout);
      }
    };

    const cleanupComputerTurn = handleComputerTurn();

    return cleanupComputerTurn;
  }, [autoProgress, currentTurn, players, state, takeComputerTurn, updateGame]);

  return (
    <Animated.View
      layout={LinearTransition}
      className="flex flex-row flex-wrap justify-center aspect-square px-1"
    >
      {board.map((row, rowIndex) =>
        row.map((cell, cellIndex) => (
          <Cell
            key={`${rowIndex}-${cellIndex}`}
            value={cell}
            onPress={async () => {
              await takeTurn(rowIndex, cellIndex);
            }}
            disabled={
              state === "gameover" || players[currentTurn].type === "computer"
            }
          />
        )),
      )}
    </Animated.View>
  );
};
