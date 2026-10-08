import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { env } from "../env";
import "../globals.css";

SplashScreen.setOptions({ fade: true });

const convex = new ConvexReactClient(env.EXPO_PUBLIC_CONVEX_URL, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <Stack />
    </ConvexProvider>
  );
}
