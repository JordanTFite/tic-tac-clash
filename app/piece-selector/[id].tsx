import { SafeAreaView, View } from "react-native";
import { X, Circle, Cat, Heart, Plus, Gem, Pyramid } from "lucide-react-native";
import { PieceSelectorButton } from "@/components/PieceSelector/PieceSelectorButton";
import { router, useLocalSearchParams } from "expo-router";
import { useGameStore } from "@/stores/gameStore";

const PieceSelector = () => {
  const { id } = useLocalSearchParams();
  const size = 40;
  const color = "#000";

  const { players, updateGame } = useGameStore();

  const playerSelecting = players[id === "0" ? 0 : 1];
  const otherPlayer = players[id === "0" ? 1 : 0];

  const pieces = {
    X: <X size={size} color={color} />,
    Circle: <Circle size={size} color={color} />,
    Cat: <Cat size={size} color={color} />,
    Heart: <Heart size={size} color={color} />,
    Plus: <Plus size={size} color={color} />,
    Gem: <Gem size={size} color={color} />,
    Pyramid: <Pyramid size={size} color={color} />,
  };

  delete pieces[playerSelecting.piece];
  delete pieces[otherPlayer.piece];

  const selectPiece = (piece: Piece) => {
    const updatedPlayers: [Player, Player] = [
      id === "0" ? { ...players[0], piece } : players[0],
      id === "1" ? { ...players[1], piece } : players[1],
    ];

    updateGame({
      players: updatedPlayers,
    });

    router.replace("../");
  };

  return (
    <SafeAreaView>
      <View className="flex flex-row flex-wrap w-full items-center">
        {Object.entries(pieces).map(([key, value]) => (
          <PieceSelectorButton
            onPress={() => {
              selectPiece(key as Piece);
            }}
            key={key}
          >
            {value}
          </PieceSelectorButton>
        ))}
      </View>
    </SafeAreaView>
  );
};

export default PieceSelector;
