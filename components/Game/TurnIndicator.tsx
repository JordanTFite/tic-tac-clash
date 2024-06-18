import { useGameStore } from "@/stores/gameStore";
import { Text } from "react-native";
import Animated, {
  FadeInDown,
  FadeInUp,
  FadeOutDown,
  FadeOutUp,
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const TurnIndicator = () => {
  const { currentTurn, players, state } = useGameStore();
  const { bottom } = useSafeAreaInsets();

  return (
    <>
      {state === "playing" && (
        <>
          {currentTurn === 1 && (
            <Animated.View
              entering={FadeInUp}
              exiting={FadeOutUp}
              className={`flex flex-row justify-center bg-red-500 absolute top-0 pt-14 w-full`}
            >
              <Text className={`text-xl font-bold`}>{players[1].title}</Text>
            </Animated.View>
          )}
          {currentTurn === 0 && (
            <Animated.View
              entering={FadeInDown}
              exiting={FadeOutDown}
              className={`w-full absolute bottom-0 items-center bg-blue-500 justify-start pt-4 pb-[${bottom}px]`}
            >
              <Text className="text-xl font-bold pb-6">{players[0].title}</Text>
            </Animated.View>
          )}
        </>
      )}
    </>
  );
};
