# Configuration Files

The tech stack versions are in [[foundation/stack]]. Runtime env vars are in [[foundation/env]].

## `package.json`
- name: `alffy-v2`, version: `2.0.0`
- Scripts: `dev`, `build`, `start`, `lint`, `typecheck` (`tsc --noEmit`)
- Path alias: `@/*` maps to project root (used as `@/components/...`, `@/lib/...`)

## `next.config.ts`
```ts
transpilePackages: ['three', '@react-three/fiber', '@react-three/drei']
experimental: { optimizePackageImports: ['framer-motion'] }
```
Transpile config is required because Three.js is ESM-only — see [[components/r3f]].

## `tsconfig.json`
- `target: ES2017`, `strict: true`, `moduleResolution: bundler`
- Paths: `@/*` → `./*`
- Includes: `**/*.ts`, `**/*.tsx`, `.next/types/**/*.ts`, `types/**/*.d.ts`

Type declarations:
- `types/r3f.d.ts` — Three.js JSX intrinsics via `@react-three/fiber`
- `types/gtag.d.ts` — Global `gtag()` function for GA consent mode (see [[routes/analytics]])

## `tailwind.config.ts`
- Content: `./pages/**/*`, `./components/**/*`, `./app/**/*`
- Custom colors, fonts, sizes, animations — see [[foundation/design]]

## `postcss.config.mjs`
```js
plugins: { tailwindcss: {}, autoprefixer: {} }
```

## `.prettierrc`
```json
{ "semi": false, "singleQuote": true, "tabWidth": 2, "trailingComma": "all", "printWidth": 120 }
```

## `.env.example`
Committed template of all required env vars (see [[foundation/env]]).
