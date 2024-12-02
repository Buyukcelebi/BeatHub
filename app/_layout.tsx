import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import ThemeProvider from "@/theme/ThemeProvider";

import "@/lang";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState<boolean | null>(
    null
  );

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    checkOnboarding();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const checkOnboarding = async () => {
    try {
      const value = await AsyncStorage.getItem("hasSeenOnboarding");
      setHasSeenOnboarding(!!value);

      if (!value) {
        router.push("/onboarding");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (!loaded || hasSeenOnboarding === null) {
    return null;
  }

  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="onboarding" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
