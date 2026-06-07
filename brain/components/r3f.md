# R3F 3D Scenes

Rendered via [[components/overview#Hierarchy]] — each page has a scene variant. The component architecture uses `FloatingGeometryWrapper` → `SceneCanvas` → scene variant.
All R3F files use `// @ts-nocheck` (type declarations in [[foundation/configuration#Type Declarations]]). Three.js is transpiled via `next.config.ts` (see [[foundation/configuration#next.config.ts]]).

## Architecture
```
FloatingGeometryWrapper (client boundary, no SSR)
└── SceneCanvas (dynamic import, Canvas wrapper)
    └── Scene (variant switch → one of 13+ scenes)
```

All scenes: `antialias: false`, `alpha: true`, `dpr: [1, 1.5]`, default camera `[0, 0, 6] fov: 50`. Use `useFrame(({ clock }) => ...)` with colors from [[foundation/design]] (`#2C6FED`, `#4A90F5`, `#D4A843`).

## Scene Variants

| Variant | Page ([[routes/map]]) | Visual |
|---|---|---|
| `about` | `/about` | 3,200 Fibonacci points, Africa highlighted, 2 torus rings |
| `story` | `/about/story` | DNA double helix |
| `team` | `/about/team` | 28 nodes + edges, 4 gold = leads ([[business/team]]) |
| `why` | `/about/why` | 4 hexagon rings + wireframe cylinder |
| `services` | `/services` | 3 rings, 12 spheres ([[business/services]]) |
| `service-slug` | `/services/[slug]` | Per-service scene (see below) |
| `portfolio` | `/portfolio` | 6 floating frames ([[business/portfolio]]) |
| `pricing` | `/pricing` | 7 crystals, 1 gold center ([[business/pricing]]) |
| `blog` | `/blog` | 8 document shapes |
| `blog-slug` | `/blog/[slug]` | 12 rows sine wave lines |
| `contact` | `/contact` | 5 expanding ring pulses + sweep |
| `careers` | `/careers` | 180 particles + 5 arrows ([[business/careers]]) |
| `legal` | legal pages | 4 rings ([[business/legal]]) |

## Hero Particle Wave (`ParticleWave.tsx`)
**Not** routed through `FloatingGeometryWrapper`. 128×128 = 16,384 instanced sphere particles (single draw call), 4 sine/cosine wave layers, mouse interaction, depth fog. Camera: `[0, 8, 12] fov: 55`.

## Per-Service Slug Scenes (12)
See [[business/services]] for service data.

| Slug | Scene | Visual |
|---|---|---|
| `seo-services` | RadarScene | Same as contact |
| `branding` | CrystalScene | Same as pricing |
| `digital-marketing` | SignalScene | 6 wave circles |
| `video-editing` | FilmReelScene | Reel, 8 spokes |
| `animation` | SpiralScene | 4 intertwined spirals |
| `architectural-design` | GridBoxScene | 3D wireframe |
| `graphic-design` | PrismScene | 2 stacked prisms |
| `cybersecurity` | ShieldScene | Same as why |
| `data-entry` | DataStreamScene | 8 column particles |
| `content-creation` | TextWaveScene | Same as blog |
| `image-editing` | LensScene | 8-blade aperture |
| `website-design` (fallback) | OrbitalScene | Same as services |
