import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Link, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="game"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="new-game"
          options={{
            title: "New Game",
            headerLeft: () => <Link href="../">Cancel</Link>,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="piece-selector/[id]"
          options={{
            title: "Piece Selector",
            headerLeft: () => <Link href="../">Cancel</Link>,
            presentation: "modal",
          }}
        />
        <Stack.Screen
          name="history"
          options={{
            title: "Match History",
            headerLeft: () => <Link href="../">Back</Link>,
            presentation: "modal",
          }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
