import { ConvexProvider, ConvexReactClient } from "convex/react";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useUniwind } from "uniwind";
import { env } from "../env";
import "../globals.css";

SplashScreen.setOptions({ fade: true });

const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  const { theme } = useUniwind();

  return (
    <ConvexProvider client={convex}>
      <ThemeProvider value={theme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar style="auto" />
        <Stack />
      </ThemeProvider>
    </ConvexProvider>
  );
}
