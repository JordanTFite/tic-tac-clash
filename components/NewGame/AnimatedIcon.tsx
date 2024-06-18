import Animated, { FadeInDown, FadeOutUp } from "react-native-reanimated";
import { User, Bot } from "lucide-react-native";

type AnimatedIconProps = {
  type: "player" | "computer";
};

export const AnimatedIcon = ({ type }: AnimatedIconProps) => {
  return (
    <Animated.View entering={FadeInDown.delay(50)} exiting={FadeOutUp}>
      {type === "player" ? <User size={48} /> : <Bot size={48} />}
    </Animated.View>
  );
};
