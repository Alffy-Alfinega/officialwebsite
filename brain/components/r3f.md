# Babylon.js 3D Scenes (replaced R3F)

Previously used React Three Fiber (13 scene variants + particle wave). Replaced with Babylon.js for simpler maintenance and better SSR compatibility.

## Current architecture
All 3D logic lives in `components/3d/`:
- `BabylonSceneCanvas.tsx` — single rotating decoration (box, sphere, torus) using imperative Babylon.js API with `// @ts-nocheck`
- `BabylonScene.tsx` — wrapper using `next/dynamic({ ssr: false })` to avoid server-side WebGL errors

Rendered on most pages via `BabylonScene` as a decorative background element (right side of hero sections).

## Key differences from old R3F setup
- No per-page scene variants — same geometry on every page
- No particle wave on homepage hero
- Babylon.js used directly (no Reactylon wrapper — `babel-plugin-reactylon` was removed due to Turbopack SSR incompatibility)
- Colors follow [[foundation/design]] (`#2C6FED` primary)
- No separate type declarations needed

## Architecture
```
BabylonScene (dynamic, ssr: false)
└── BabylonSceneCanvas (imperative Babylon.js engine, scene, camera, mesh)
```
