import { View, SafeAreaView } from "react-native";
import { useGameStore } from "@/stores/gameStore";
import { ControlsHeader } from "@/components/Game/ControlsHeader";
import { Board } from "@/components/Game/Board";
import { ComputerControls } from "@/components/Game/ComputerControls";
import { GameEndOptions } from "@/components/Game/GameEndOptions";
import { TurnIndicator } from "@/components/Game/TurnIndicator";

const Game = () => {
  const { state, players } = useGameStore();

  return (
    <SafeAreaView className="flex-1 justify-center bg-slate-300">
      <View className="flex flex-1 justify-center flex-col mb-auto">
        <ControlsHeader />
        <Board />
        {players.some((player: Player) => player.type === "computer") &&
          state === "playing" && <ComputerControls />}
        {state === "gameover" && <GameEndOptions />}
      </View>
      <TurnIndicator />
    </SafeAreaView>
  );
};

export default Game;
