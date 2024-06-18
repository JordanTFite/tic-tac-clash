import { FC } from "react";
import { X, Circle, Cat, Heart, Plus, Gem, Pyramid } from "lucide-react-native";
import { useGameStore } from "@/stores/gameStore";
import Animated, { ZoomIn } from "react-native-reanimated";

type PieceProps = {
  player: number;
};

export const Piece: FC<PieceProps> = ({ player }) => {
  const { players } = useGameStore();
  const size = 48;

  const red = "#ef4444";
  const blue = "#3b82f6";

  const color = player === 0 ? blue : red;

  return (
    <Animated.View entering={ZoomIn.springify()}>
      {players[player].piece === "X" && <X color={color} size={size} />}
      {players[player].piece === "Circle" && (
        <Circle color={color} size={size} />
      )}
      {players[player].piece === "Cat" && <Cat color={color} size={size} />}
      {players[player].piece === "Heart" && <Heart color={color} size={size} />}
      {players[player].piece === "Plus" && <Plus color={color} size={size} />}
      {players[player].piece === "Gem" && <Gem color={color} size={size} />}
      {players[player].piece === "Pyramid" && (
        <Pyramid color={color} size={size} />
      )}
    </Animated.View>
  );
};
