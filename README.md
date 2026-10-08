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

```sh
bun ios
```

## Quality

```sh
bun lint
bunx tsc --noEmit
```
