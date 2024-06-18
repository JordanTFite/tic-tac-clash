import { TouchableOpacity, View } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

type PieceSelectorButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

export const PieceSelectorButton: React.FC<PieceSelectorButtonProps> = ({
  onPress,
  children,
}) => {
  return (
    <View className="p-1 w-[25%]">
      <TouchableOpacity
        onPress={onPress}
        className="bg-white p-6 aspect-square rounded justify-center items-center"
      >
        {children}
      </TouchableOpacity>
    </View>
  );
};
