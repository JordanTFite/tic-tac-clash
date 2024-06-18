import { FC } from "react";
import { TouchableOpacity, Text } from "react-native";

type PlayerCountButtonProps = {
  count: number;
  onPress: () => void;
  selected: boolean;
  isCenter?: boolean;
};

export const PlayerCountButton: FC<PlayerCountButtonProps> = ({
  count,
  onPress,
  selected,
  isCenter,
}) => (
  <TouchableOpacity
    onPress={onPress}
    className={`w-20 items-center p-2 bg-slate-200 ${isCenter && "border-x border-transparentDark"} ${selected && "bg-white"}`}
  >
    <Text
      className={`text-2xl text-slate-600 ${selected && "text-primary font-black"}`}
    >
      {count}
    </Text>
  </TouchableOpacity>
);
