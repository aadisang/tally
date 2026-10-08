# Tally

A bill-splitting app built with Expo and Convex.

## Prerequisites

- Bun 1.3.14+
- Xcode for local iOS builds

## Development

```sh
bun install
bunx convex deployment select silent-whale-905
bun start
```

Expo and Convex run together. `Ctrl+C` stops both.

App code lives in `src/`; backend functions live in `convex/`.
The setup command writes `.env.local`. Public app variables are validated in
`src/env.ts` with T3 Env.

## iOS

Build a development client for your iPhone:

```sh
bun run build:ios
```

Follow the Apple sign-in and device registration prompts on the first build
(requires a paid Apple Developer account). Open the install link on your iPhone,
enable Developer Mode, then run `bun start` and scan the Expo QR code.
Keep your Mac and iPhone on the same network. Rebuild after native dependency
or app configuration changes.

For a local simulator build:

```sh
bun ios
```

## Quality

```sh
bun lint
bunx tsc --noEmit
```
