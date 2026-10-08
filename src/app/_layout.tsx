import { ConvexProvider, ConvexReactClient } from "convex/react";
import { Stack } from "expo-router";
import { env } from "../env";
import "../globals.css";

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
