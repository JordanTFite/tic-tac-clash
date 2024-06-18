import { View, Text } from "react-native";
import { HeartCrack } from "lucide-react-native";
import { Button } from "../Button";
import { router } from "expo-router";

export const EmptyResults = () => (
  <View className="flex-1 justify-center items-center">
    <HeartCrack size={64} />
    <Text className="text-lg font-bold mt-4">No results found</Text>
    <Text className="text-gray-500">
      Play a game and check back here after!
    </Text>
    <Button
      className="w-full mt-4"
      title="New Game"
      onPress={() => {
        router.back();
        setTimeout(() => {
          router.push("/new-game");
        }, 50);
      }}
    />
  </View>
);
