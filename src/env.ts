import { createEnv } from "@t3-oss/env-core";
import { z } from "zod/mini";

export const env = createEnv({
  clientPrefix: "EXPO_PUBLIC_",
  client: {
    EXPO_PUBLIC_CONVEX_URL: z.url(),
  },
  runtimeEnvStrict: {
    EXPO_PUBLIC_CONVEX_URL: process.env.EXPO_PUBLIC_CONVEX_URL,
  },
  isServer: false,
  emptyStringAsUndefined: true,
});
