import { useCallback, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Button } from "@/components/Button";
import { PlayerCountButton } from "@/components/PlayerCountButton";
import { AnimatedIcon } from "@/components/NewGame/AnimatedIcon";
import { Link, router } from "expo-router";
import { GameState, useGameStore } from "@/stores/gameStore";
import { createEmptyBoard } from "@/utils/gameUtils";
import { Piece } from "@/components/Game/Piece";

const NewGame = () => {
  const [playerCount, setPlayerCount] = useState(1);
  const { updateGame, players } = useGameStore();

  const getNames = useCallback(() => {
    if (playerCount === 0) {
      return ["COM 1", "COM 2"];
    } else if (playerCount === 1) {
      return ["Player", "COM"];
    } else {
      return ["Player 1", "Player 2"];
    }
  }, [playerCount]);

  const configureGame = useCallback(() => {
    const names = getNames();

    updateGame({
      state: GameState.Playing,
      board: createEmptyBoard(),
      players: [
        {
          piece: players[0].piece,
          type: playerCount === 0 ? "computer" : "human",
          title: names[0],
        },
        {
          piece: players[1].piece,
          type: playerCount === 2 ? "human" : "computer",
          title: names[1],
        },
      ],
      currentTurn: 0,
    });
  }, [getNames, playerCount, players, updateGame]);

  return (
    <View className="flex-1 items-center justify-center w-full p-8 px-2 pt-2">
      <View className="items-center flex-1 gap-y-2 justify-center">
        <Text className="text-lg font-bold">Number of Players</Text>

        <View className="flex-row items-center justify-between overflow-hidden rounded-lg">
          <View className="flex-row items-center">
            {playerCount === 0 && <AnimatedIcon type="computer" />}
            {(playerCount === 1 || playerCount === 2) && (
              <AnimatedIcon type="player" />
            )}
          </View>
          <Text className="text-lg mx-4">vs</Text>
          <View className="flex-row items-center">
            {(playerCount === 0 || playerCount === 1) && (
              <AnimatedIcon type="computer" />
            )}
            {playerCount === 2 && <AnimatedIcon type="player" />}
          </View>
        </View>

        <View className="flex-row border border-transparentDark items-center justify-between overflow-hidden rounded-lg">
          {[0, 1, 2].map((count) => (
            <PlayerCountButton
              key={count}
              count={count}
              selected={playerCount === count}
              onPress={() => setPlayerCount(count)}
              isCenter={count === 1}
            />
          ))}
        </View>

        <View className="items-center">
          <Text className="text-lg mt-8 font-bold">Pieces</Text>
          <View className="flex-row gap-x-8">
            {players.map((_player, index) => (
              <View key={index} className="items-center">
                <TouchableOpacity
                  onPress={() => {
                    router.push(`/piece-selector/${index}`);
                  }}
                  className="my-2 bg-white aspect-square rounded p-4"
                >
                  <Piece player={index} />
                </TouchableOpacity>
                <Text>Player {index + 1}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Link
        href="/game"
        onPress={configureGame}
        replace
        asChild
        className="w-full"
      >
        <Button title="Start Game" className="mt-8" />
      </Link>
    </View>
  );
};

export default NewGame;
