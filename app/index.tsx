import { View, SafeAreaView, Image } from "react-native";
import { Button } from "@/components/Button";
import { Link } from "expo-router";
import ExpoStatusBar from "expo-status-bar/build/ExpoStatusBar";

export default function Home() {
  return (
    <SafeAreaView className="flex flex-1 w-full h-full bg-white">
      <ExpoStatusBar style="dark" />
      <View className="flex flex-1 w-full bg-white justify-between items-center p-2">
        <Image
          source={require("@/assets/images/tictacclash.png")}
          className="aspect-square w-[50%] h-[50%]"
        />
        <View className="flex-col w-full gap-y-2">
          <Link href="/new-game" asChild>
            <Button title="New Game" />
          </Link>
          <Link href="/history" asChild>
            <Button title="Match History" variant="outline" />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
}
