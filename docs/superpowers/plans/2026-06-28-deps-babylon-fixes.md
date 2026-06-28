# Dependency Updates + react-babylonjs Migration + Bug Fixes — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the broken redirect in vercel.json, update all packages to their latest versions, migrate the Babylon.js integration from raw imperative `useEffect` to declarative `react-babylonjs`, and update the stale brain infrastructure note.

**Architecture:** Three independent concerns executed sequentially — (1) quick bug fixes, (2) dependency version bumps with Tailwind v4 migration, (3) full `BabylonSceneCanvas.tsx` rewrite using `react-babylonjs` declarative scene components. The `BabylonScene.tsx` wrapper stays untouched (it only handles dynamic import + SSR). All 15 scene variants must be ported.

**Tech Stack:** Next.js 16, React 19, TypeScript 5, Tailwind CSS 4, react-babylonjs 4.0.2, @babylonjs/core 9.14.0, @babylonjs/gui 9.14.0, framer-motion 12.42.0, lenis 1.3.25

---

## Task 1: Fix broken redirect in vercel.json

**Files:**
- Modify: `vercel.json`

- [ ] **Step 1: Fix the stale redirect destination**

The redirect `/services/seo` → `/services/seo-services` points to a non-existent slug. The actual page is at `/services/seo-marketing`. Open `vercel.json` and replace:

```json
{
  "source": "/services/seo",
  "destination": "/services/seo-services",
  "permanent": true
}
```

with:

```json
{
  "source": "/services/seo",
  "destination": "/services/seo-marketing",
  "permanent": true
}
```

- [ ] **Step 2: Verify the fix**

```bash
cat vercel.json | grep -A4 '"source": "/services/seo"'
```

Expected output:
```
"source": "/services/seo",
"destination": "/services/seo-marketing",
"permanent": true
```

- [ ] **Step 3: Commit**

```bash
git add vercel.json
git commit -m "fix: correct broken /services/seo redirect to /services/seo-marketing"
```

---

## Task 2: Update all dependencies to latest versions

**Files:**
- Modify: `package.json`
- Modify: `postcss.config.mjs` (Tailwind v4 requires `@tailwindcss/postcss` plugin instead of `tailwindcss`)
- Modify: `tailwind.config.ts` → rename to `tailwind.config.ts` (v4 still supports JS config but CSS-first is preferred; keep JS config for now since custom tokens are complex)

> **Critical:** Tailwind CSS v4 is a major breaking change. The PostCSS plugin is now `@tailwindcss/postcss` (separate package), not `tailwindcss`. The `tailwind.config.ts` JS config still works in v4 via `@config` directive in CSS but requires `@import "tailwindcss"` in globals.css instead of the old `@tailwind` directives. We will keep the JS config (custom colors + fonts are too complex to migrate to CSS variables right now) and only update what's required to keep v4 working.

- [ ] **Step 1: Install all updated dependencies**

```bash
cd /path/to/officialwebsite

npm install \
  next@16.2.9 \
  react@19.2.7 \
  react-dom@19.2.7 \
  @babylonjs/core@9.14.0 \
  @babylonjs/gui@9.14.0 \
  react-babylonjs@4.0.2 \
  framer-motion@12.42.0 \
  lenis@1.3.25 \
  clsx@2.1.1 \
  tailwind-merge@3.6.0 \
  nodemailer@9.0.1 \
  @vercel/analytics@2.0.1 \
  @vercel/speed-insights@2.0.0 \
  --save

npm install \
  tailwindcss@4.3.1 \
  @tailwindcss/postcss@4.3.1 \
  typescript@6.0.3 \
  @types/node@26.0.1 \
  @types/react@19.2.17 \
  @types/react-dom@19.2.3 \
  @types/nodemailer@7.0.11 \
  autoprefixer@10.5.2 \
  postcss@8.5.15 \
  --save-dev
```

- [ ] **Step 2: Update postcss.config.mjs for Tailwind v4**

Tailwind v4 uses `@tailwindcss/postcss` instead of `tailwindcss` as the PostCSS plugin. Replace the entire file:

```js
// postcss.config.mjs
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}
export default config
```

- [ ] **Step 3: Update globals.css for Tailwind v4 directives**

Open `app/globals.css`. Tailwind v4 replaces `@tailwind base/components/utilities` with a single `@import "tailwindcss"`. Find the existing Tailwind directives at the top of the file and replace them.

Find (at top of `app/globals.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Replace with:
```css
@import "tailwindcss";
@config "../tailwind.config.ts";
```

> **Note:** The `@config` directive tells Tailwind v4 where your JS config lives (required when using CSS-first import with a JS config file).

- [ ] **Step 4: Verify Tailwind v4 config file still imports correctly**

Tailwind v4 still reads `tailwind.config.ts` when pointed to via `@config`. No changes needed to the config file itself. Run a quick type check to confirm no TS breakage from the version bumps:

```bash
npx tsc --noEmit 2>&1 | head -30
```

Expected: zero errors, or only pre-existing errors unrelated to this task. If TypeScript 6 introduces any new strict errors in your source files, they will appear here — note them but do not fix them in this task.

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json postcss.config.mjs app/globals.css
git commit -m "chore: update all dependencies to latest versions; migrate to Tailwind v4 + @tailwindcss/postcss"
```

---

## Task 3: Migrate BabylonSceneCanvas to react-babylonjs

**Files:**
- Modify: `components/3d/BabylonSceneCanvas.tsx` (full rewrite)
- No changes to: `components/3d/BabylonScene.tsx` (wrapper is fine as-is)

**Background:** `react-babylonjs` is a React renderer for Babylon.js. It provides declarative JSX components like `<Engine>`, `<Scene>`, `<arcRotateCamera>`, `<hemisphericLight>`, `<box>`, `<sphere>`, `<torus>`, `<cylinder>` etc. Mesh names in JSX are camelCase versions of the Babylon class names. The library handles engine/scene lifecycle automatically.

Key react-babylonjs API:
- `<Engine antialias adaptToDeviceRatio canvasId="myCanvas">` — creates the engine and canvas
- `<Scene clearColor={new Color4(0,0,0,0)}>` — wraps all scene content
- `<arcRotateCamera name="cam" target={Vector3.Zero()} alpha={...} beta={...} radius={5} />` 
- `<hemisphericLight name="light" direction={new Vector3(0,1,0)} intensity={0.8} />`
- `<box name="box" size={0.4}>` with a child `<standardMaterial name="mat" diffuseColor={new Color3(r,g,b)} alpha={0.75} />`
- `<sphere name="sph" diameter={0.35}>`
- `<torus name="tor" diameter={0.4} thickness={0.1}>`
- `<cylinder name="cyl" diameter={0.28} height={0.45}>`
- Animation is done via `useBeforeRender` hook from `react-babylonjs`
- Mesh refs via `useRef<Nullable<Mesh>>(null)` and `ref={meshRef}` prop

**Important:** `react-babylonjs` does NOT support `<canvas>` directly — it renders the canvas itself inside `<Engine>`. The outer `<div>` wrapper in `BabylonScene.tsx` provides sizing; the `<Engine>` must fill it.

- [ ] **Step 1: Write the new BabylonSceneCanvas.tsx**

Replace the entire file `components/3d/BabylonSceneCanvas.tsx` with the following:

```tsx
'use client'

// react-babylonjs: declarative React renderer for Babylon.js
// Replaces the manual useEffect/Engine/Scene imperative setup
import { Engine, Scene, useBeforeRender } from 'react-babylonjs'
import { Vector3, Color3, Color4 } from '@babylonjs/core/Maths/math.vector'
// Color4 is in math.color in newer babylon, but re-exported from math.vector too
import { Tools } from '@babylonjs/core/Misc/tools'
import { Nullable } from '@babylonjs/core/types'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { useRef } from 'react'

export type SceneVariant =
  | 'home' | 'about' | 'contact' | 'services'
  | 'web-design' | 'seo-marketing' | 'branding-design'
  | 'media-production' | 'arch-vis' | 'cybersecurity'
  | 'blog' | 'portfolio' | 'pricing' | 'careers' | 'legal'

// ─── Shared math ─────────────────────────────────────────────────────────────

const ZERO = Vector3.Zero()
const UP   = new Vector3(0, 1, 0)

function c3(r: number, g: number, b: number) { return new Color3(r, g, b) }

// ─── Scene components ─────────────────────────────────────────────────────────

// HOME: 3 abstract shapes (box, sphere, torus) floating + rotating
function HomeScene() {
  const boxRef    = useRef<Nullable<Mesh>>(null)
  const sphereRef = useRef<Nullable<Mesh>>(null)
  const torusRef  = useRef<Nullable<Mesh>>(null)
  const t         = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const box = boxRef.current
    const sph = sphereRef.current
    const tor = torusRef.current
    if (!box || !sph || !tor) return
    box.rotation.x += 0.005; box.rotation.y += 0.01
    box.position.y = Math.sin(t.current * 0.8) * 0.3
    sph.rotation.x += 0.003; sph.rotation.z += 0.007
    sph.position.y = Math.sin(t.current * 0.6 + 1) * 0.3
    tor.rotation.x += 0.008; tor.rotation.y += 0.005
    tor.position.y = Math.sin(t.current * 0.7 + 2) * 0.3
  })

  return (
    <>
      <box name="box" size={0.4} position={new Vector3(-0.9, 0, 0)} ref={boxRef}>
        <standardMaterial name="bm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.75} />
      </box>
      <sphere name="sph" diameter={0.35} position={new Vector3(0.9, 0, 0)} ref={sphereRef}>
        <standardMaterial name="sm" diffuseColor={c3(0.93, 0.55, 0.2)} alpha={0.75} />
      </sphere>
      <torus name="tor" diameter={0.4} thickness={0.1} position={new Vector3(0, 0, -0.9)} ref={torusRef}>
        <standardMaterial name="tm" diffuseColor={c3(0.3, 0.85, 0.5)} alpha={0.75} />
      </torus>
    </>
  )
}

// ABOUT: core sphere + orbit ring + 3 orbiting spheres
function AboutScene() {
  const coreRef = useRef<Nullable<Mesh>>(null)
  const ringRef = useRef<Nullable<Mesh>>(null)
  const orb0Ref = useRef<Nullable<Mesh>>(null)
  const orb1Ref = useRef<Nullable<Mesh>>(null)
  const orb2Ref = useRef<Nullable<Mesh>>(null)
  const t       = useRef(0)

  useBeforeRender(() => {
    t.current += 0.008
    const tc = t.current
    coreRef.current && (coreRef.current.rotation.y += 0.005)
    ringRef.current && (ringRef.current.rotation.y += 0.003)
    const orbs = [orb0Ref.current, orb1Ref.current, orb2Ref.current]
    orbs.forEach((orb, i) => {
      if (!orb) return
      const a = tc * 0.6 + (i * 2 * Math.PI / 3)
      orb.position.x = Math.cos(a) * 1.3
      orb.position.z = Math.sin(a) * 1.3
      orb.position.y = Math.sin(tc * 0.5 + i * 1.5) * 0.3
      orb.rotation.y += 0.02
    })
  })

  const orbColors: [number, number, number][] = [
    [0.83, 0.65, 0.2],
    [0.2,  0.75, 0.85],
    [0.65, 0.35, 0.85],
  ]

  return (
    <>
      <sphere name="core" diameter={0.55} segments={16} ref={coreRef}>
        <standardMaterial name="cm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.9} />
      </sphere>
      <torus name="oring" diameter={2.6} thickness={0.02} ref={ringRef}
        rotation={new Vector3(Math.PI / 2, 0, 0)}>
        <standardMaterial name="rm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.2} />
      </torus>
      {orbColors.map(([r, g, b], i) => (
        <sphere key={i} name={`orb${i}`} diameter={0.22}
          ref={[orb0Ref, orb1Ref, orb2Ref][i]}>
          <standardMaterial name={`om${i}`} diffuseColor={c3(r, g, b)} alpha={0.8} />
        </sphere>
      ))}
    </>
  )
}

// CONTACT: pulsing hub + tilted ring + 4 orbiting satellites
function ContactScene() {
  const hubRef  = useRef<Nullable<Mesh>>(null)
  const ringRef = useRef<Nullable<Mesh>>(null)
  const satRefs = [
    useRef<Nullable<Mesh>>(null),
    useRef<Nullable<Mesh>>(null),
    useRef<Nullable<Mesh>>(null),
    useRef<Nullable<Mesh>>(null),
  ]
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    const hub = hubRef.current
    if (hub) {
      const s = 1 + Math.sin(tc * 1.8) * 0.06
      hub.scaling.setAll(s)
      hub.rotation.y += 0.007
    }
    ringRef.current && (ringRef.current.rotation.z += 0.003)
    satRefs.forEach(({ current: sat }, i) => {
      if (!sat) return
      const r   = 0.85 + i * 0.2
      const spd = 0.5  + i * 0.2
      sat.position.x = Math.cos(tc * spd + i * 1.57) * r
      sat.position.z = Math.sin(tc * spd + i * 1.57) * r
      sat.position.y = Math.sin(tc * 0.8 + i) * 0.35
    })
  })

  return (
    <>
      <sphere name="hub" diameter={0.5} segments={16} ref={hubRef}>
        <standardMaterial name="hm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.9} />
      </sphere>
      <torus name="cring" diameter={2.4} thickness={0.025} ref={ringRef}
        rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="crm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.3} />
      </torus>
      {satRefs.map((ref, i) => (
        <sphere key={i} name={`sat${i}`} diameter={0.14 + i * 0.04} ref={ref}>
          <standardMaterial name={`satm${i}`}
            diffuseColor={c3(0.83, 0.65 - i * 0.05, 0.2 + i * 0.15)} alpha={0.8} />
        </sphere>
      ))}
    </>
  )
}

// SERVICES: 6 shapes in a circle, one per service
function ServicesScene() {
  const meshRefs = Array.from({ length: 6 }, () => useRef<Nullable<Mesh>>(null))
  const t        = useRef(0)

  const positions = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2
    return new Vector3(Math.cos(a) * 1.8, 0, Math.sin(a) * 1.8)
  })

  const colors: [number, number, number][] = [
    [0.17, 0.43, 0.93],
    [0.83, 0.65, 0.20],
    [0.65, 0.35, 0.85],
    [0.20, 0.75, 0.50],
    [0.90, 0.40, 0.30],
    [0.20, 0.75, 0.85],
  ]

  useBeforeRender(() => {
    t.current += 0.008
    meshRefs.forEach(({ current: m }, i) => {
      if (!m) return
      m.rotation.x += 0.005 + i * 0.002
      m.rotation.y += 0.008 + i * 0.003
      m.position.y  = Math.sin(t.current * 0.7 + i * 1.05) * 0.3
    })
  })

  return (
    <>
      <box        name="sv0" size={0.32}       position={positions[0]} ref={meshRefs[0]}><standardMaterial name="svm0" diffuseColor={c3(...colors[0])} alpha={0.75} /></box>
      <sphere     name="sv1" diameter={0.35}   position={positions[1]} ref={meshRefs[1]}><standardMaterial name="svm1" diffuseColor={c3(...colors[1])} alpha={0.75} /></sphere>
      <torus      name="sv2" diameter={0.38} thickness={0.1} position={positions[2]} ref={meshRefs[2]}><standardMaterial name="svm2" diffuseColor={c3(...colors[2])} alpha={0.75} /></torus>
      <cylinder   name="sv3" diameter={0.28} height={0.45}  position={positions[3]} ref={meshRefs[3]}><standardMaterial name="svm3" diffuseColor={c3(...colors[3])} alpha={0.75} /></cylinder>
      <sphere     name="sv4" diameter={0.3}  segments={2}   position={positions[4]} ref={meshRefs[4]}><standardMaterial name="svm4" diffuseColor={c3(...colors[4])} alpha={0.75} /></sphere>
      <sphere     name="sv5" diameter={0.3}  segments={3}   position={positions[5]} ref={meshRefs[5]}><standardMaterial name="svm5" diffuseColor={c3(...colors[5])} alpha={0.75} /></sphere>
    </>
  )
}

// WEB DESIGN: 3 floating screen panels + cursor tracer
function WebDesignScene() {
  type PanelCfg = { pos: Vector3; ry: number }
  const panelCfg: PanelCfg[] = [
    { pos: new Vector3(-1.0,  0.1, 0.2), ry: -0.35 },
    { pos: new Vector3( 0.05, 0,  -0.3), ry:  0.05 },
    { pos: new Vector3( 1.0, -0.1, 0.1), ry:  0.40 },
  ]
  const scnRefs = panelCfg.map(() => useRef<Nullable<Mesh>>(null))
  const curRef  = useRef<Nullable<Mesh>>(null)
  const t       = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    scnRefs.forEach(({ current: s }, i) => {
      if (!s) return
      s.rotation.y = panelCfg[i].ry + Math.sin(tc * 0.3 + i * 1.1) * 0.06
      s.position.y = panelCfg[i].pos.y + Math.sin(tc * 0.6 + i * 1.2) * 0.15
    })
    const cur = curRef.current
    if (cur) {
      cur.position.x = Math.sin(tc * 0.8) * 0.7
      cur.position.y = Math.cos(tc * 1.1) * 0.45
      cur.position.z = Math.sin(tc * 0.5) * 0.3
    }
  })

  return (
    <>
      {panelCfg.map(({ pos, ry }, i) => (
        <box key={i} name={`scr${i}`} width={0.75} height={0.52} depth={0.04}
          position={pos} rotation={new Vector3(0, ry, 0)} ref={scnRefs[i]}>
          <standardMaterial name={`scrm${i}`}
            diffuseColor={c3(0.17, 0.43, 0.93)}
            alpha={0.25 + i * 0.2}
            wireframe={i === 0} />
        </box>
      ))}
      <sphere name="cur" diameter={0.07} ref={curRef}>
        <standardMaterial name="curm" diffuseColor={c3(0.93, 0.93, 1)} alpha={0.9} />
      </sphere>
    </>
  )
}

// SEO: bar chart of rising cylinders
function SeoScene() {
  type BarCfg = { h: number; x: number; b: number }
  const barData: BarCfg[] = [
    { h: 0.65, x: -1.6, b: 0.55 },
    { h: 1.1,  x: -0.8, b: 0.65 },
    { h: 1.6,  x:  0,   b: 1.0  },
    { h: 0.9,  x:  0.8, b: 0.6  },
    { h: 1.4,  x:  1.6, b: 0.85 },
  ]
  const barRefs = barData.map(() => useRef<Nullable<Mesh>>(null))
  const peakRef = useRef<Nullable<Mesh>>(null)
  const t       = useRef(0)

  useBeforeRender(() => {
    t.current += 0.008
    barRefs.forEach(({ current: bar }, i) => {
      if (!bar) return
      bar.rotation.y += 0.005
      bar.scaling.y = 1 + Math.sin(t.current * 0.5 + i * 0.8) * 0.04
    })
    const peak = peakRef.current
    if (peak) {
      peak.position.y = -1.0 + barData[2].h + 0.15 + Math.sin(t.current * 1.5) * 0.1
    }
  })

  return (
    <>
      {barData.map(({ h, x, b }, i) => (
        <cylinder key={i} name={`bar${i}`} height={h} diameter={0.28} tessellation={12}
          position={new Vector3(x, -1.0 + h / 2, 0)} ref={barRefs[i]}>
          <standardMaterial name={`barm${i}`} diffuseColor={c3(0.1, 0.35 * b, 0.9 * b)} alpha={0.85} />
        </cylinder>
      ))}
      <box name="gnd" width={4.2} height={0.04} depth={0.4} position={new Vector3(0, -1.0, 0)}>
        <standardMaterial name="gm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.3} />
      </box>
      <sphere name="peak" diameter={0.13} position={new Vector3(0, -1.0, 0)} ref={peakRef}>
        <standardMaterial name="pm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.9} />
      </sphere>
    </>
  )
}

// BRANDING: palette spheres + orbiting accent dots
function BrandingScene() {
  type PalCfg = { r:number; g:number; b:number; sz:number; bx:number; bz:number; baseY:number }
  const palette: PalCfg[] = [
    { r:0.17, g:0.43, b:0.93, sz:0.46, bx:-0.8,  bz:-0.3, baseY: 0.15  },
    { r:0.83, g:0.65, b:0.2,  sz:0.35, bx: 0.85, bz: 0.4, baseY:-0.10  },
    { r:0.92, g:0.92, b:0.94, sz:0.28, bx: 0.05, bz:-0.8, baseY: 0.50  },
    { r:0.65, g:0.35, b:0.85, sz:0.30, bx: 0.4,  bz: 0.8, baseY:-0.45  },
  ]
  const sphRefs = palette.map(() => useRef<Nullable<Mesh>>(null))
  const dotRefs = [0,1,2].map(() => useRef<Nullable<Mesh>>(null))
  const t       = useRef(0)

  useBeforeRender(() => {
    t.current += 0.009
    const tc = t.current
    sphRefs.forEach(({ current: s }, i) => {
      if (!s) return
      s.rotation.y += 0.007
      s.position.y = palette[i].baseY + Math.sin(tc * 0.6 + i * 1.3) * 0.2
    })
    dotRefs.forEach(({ current: d }, i) => {
      if (!d) return
      const a = tc * 1.2 + i * 2.09
      d.position.x = Math.cos(a) * 1.5
      d.position.y = Math.sin(a * 0.5) * 0.5
      d.position.z = Math.sin(a) * 1.5
    })
  })

  return (
    <>
      {palette.map(({ r, g, b, sz, bx, bz, baseY }, i) => (
        <sphere key={i} name={`pal${i}`} diameter={sz} segments={16}
          position={new Vector3(bx, baseY, bz)} ref={sphRefs[i]}>
          <standardMaterial name={`pm${i}`} diffuseColor={c3(r, g, b)} alpha={0.88} />
        </sphere>
      ))}
      {dotRefs.map((ref, i) => (
        <sphere key={i} name={`dot${i}`} diameter={0.07} ref={ref}>
          <standardMaterial name={`dm${i}`} diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.7} />
        </sphere>
      ))}
    </>
  )
}

// MEDIA: film reels + play button cone + lens sphere
function MediaScene() {
  const reel1Ref = useRef<Nullable<Mesh>>(null)
  const reel2Ref = useRef<Nullable<Mesh>>(null)
  const playRef  = useRef<Nullable<Mesh>>(null)
  const lensRef  = useRef<Nullable<Mesh>>(null)
  const t        = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    reel1Ref.current && (reel1Ref.current.rotation.y += 0.012)
    const r2 = reel2Ref.current
    if (r2) { r2.rotation.y -= 0.018; r2.rotation.z += 0.007 }
    playRef.current && (playRef.current.rotation.y += 0.007)
    const lens = lensRef.current
    if (lens) { lens.position.y = 0.5 + Math.sin(tc * 1.1) * 0.15; lens.rotation.x += 0.01 }
  })

  return (
    <>
      <torus name="reel" diameter={1.4} thickness={0.12} tessellation={48} ref={reel1Ref}
        rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="rlm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.78} />
      </torus>
      <torus name="reel2" diameter={0.85} thickness={0.07} tessellation={32} ref={reel2Ref}
        rotation={new Vector3(-Math.PI / 4, 0, 0)}>
        <standardMaterial name="rl2m" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.55} />
      </torus>
      {/* Play triangle: cone with 3 tessellation sides, rotated sideways */}
      <cylinder name="play" diameterBottom={0} diameterTop={0.38} height={0.44} tessellation={3}
        rotation={new Vector3(0, Math.PI / 6, -Math.PI / 2)} ref={playRef}>
        <standardMaterial name="plm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.9} />
      </cylinder>
      <sphere name="lens" diameter={0.26} position={new Vector3(-0.7, 0.5, -0.3)} ref={lensRef}>
        <standardMaterial name="lnm" diffuseColor={c3(0.2, 0.75, 0.85)} alpha={0.75} />
      </sphere>
    </>
  )
}

// ARCH VIS: wireframe buildings + ground + scale indicator
function ArchVisScene() {
  type BldCfg = { w:number; h:number; d:number; x:number; z:number; wire:boolean }
  const bldgs: BldCfg[] = [
    { w:0.5,  h:1.4, d:0.5,  x:-1.2, z: 0.3, wire:true  },
    { w:0.65, h:2.0, d:0.6,  x: 0,   z:-0.3, wire:true  },
    { w:0.4,  h:0.9, d:0.45, x: 1.2, z: 0.2, wire:true  },
  ]
  const bld1Ref = useRef<Nullable<Mesh>>(null)
  const t       = useRef(0)

  useBeforeRender(() => {
    t.current += 0.006
    bld1Ref.current && (bld1Ref.current.rotation.y = Math.sin(t.current * 0.3) * 0.012)
  })

  return (
    <>
      {bldgs.map(({ w, h, d, x, z, wire }, i) => (
        <box key={i} name={`bld${i}`} width={w} height={h} depth={d}
          position={new Vector3(x, -1.0 + h / 2, z)}
          ref={i === 1 ? bld1Ref : undefined}>
          <standardMaterial name={`bldm${i}`} diffuseColor={c3(0.17, 0.43, 0.93)}
            alpha={0.85} wireframe={wire} />
        </box>
      ))}
      <box name="gnd" width={4} height={0.04} depth={2.5} position={new Vector3(0, -1.0, 0)}>
        <standardMaterial name="gm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.2} />
      </box>
      <box name="ml" width={0.02} height={2.1} depth={0.02}
        position={new Vector3(-2.0, -1.0 + 1.05, -0.8)}>
        <standardMaterial name="mlm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.7} />
      </box>
    </>
  )
}

// CYBERSECURITY: faceted shield + dual orbit rings + 6 scanning nodes
function CybersecurityScene() {
  const shieldRef = useRef<Nullable<Mesh>>(null)
  const orb1Ref   = useRef<Nullable<Mesh>>(null)
  const orb2Ref   = useRef<Nullable<Mesh>>(null)
  const nodeRefs  = Array.from({ length: 6 }, () => useRef<Nullable<Mesh>>(null))
  const t         = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    const sh = shieldRef.current
    if (sh) {
      sh.rotation.x += 0.004; sh.rotation.y += 0.007
      sh.scaling.setAll(1 + Math.sin(tc * 1.5) * 0.03)
    }
    orb1Ref.current && (orb1Ref.current.rotation.y += 0.006)
    orb2Ref.current && (orb2Ref.current.rotation.y -= 0.003)
    nodeRefs.forEach(({ current: n }, i) => {
      if (!n) return
      const a = tc * 0.8 + (i * Math.PI / 3)
      n.position.x = Math.cos(a) * 1.1
      n.position.z = Math.sin(a) * 1.1
      n.position.y = Math.sin(tc * 1.2 + i) * 0.15
    })
  })

  return (
    <>
      <sphere name="shield" diameter={0.55} segments={3} ref={shieldRef}>
        <standardMaterial name="shm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.88} />
      </sphere>
      <torus name="orbit1" diameter={2.2} thickness={0.02} ref={orb1Ref}
        rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="ob1m" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.35} />
      </torus>
      <torus name="orbit2" diameter={3.2} thickness={0.015} ref={orb2Ref}
        rotation={new Vector3(-Math.PI / 4, 0, 0)}>
        <standardMaterial name="ob2m" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.18} />
      </torus>
      {nodeRefs.map((ref, i) => (
        <sphere key={i} name={`nd${i}`} diameter={0.1} ref={ref}>
          <standardMaterial name={`ndm${i}`} diffuseColor={c3(0.85, 0.9, 1)} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// BLOG: floating document panels + text-line indicators
function BlogScene() {
  type PgCfg = { pos: Vector3; ry: number }
  const pgCfg: PgCfg[] = [
    { pos: new Vector3(-0.75,  0.2,  0.1), ry: -0.3  },
    { pos: new Vector3( 0.1,   0,   -0.45), ry:  0.08 },
    { pos: new Vector3( 0.85, -0.15, 0.25), ry:  0.35 },
  ]
  const pgRefs  = pgCfg.map(() => useRef<Nullable<Mesh>>(null))
  const lineRefs = [0, 1, 2].map(() => useRef<Nullable<Mesh>>(null))
  const t        = useRef(0)

  useBeforeRender(() => {
    t.current += 0.008
    const tc = t.current
    pgRefs.forEach(({ current: p }, i) => {
      if (!p) return
      p.rotation.y  = pgCfg[i].ry + Math.sin(tc * 0.5 + i * 1.5) * 0.08
      p.position.y  = pgCfg[i].pos.y + Math.sin(tc * 0.6 + i * 1.1) * 0.15
    })
    lineRefs.forEach(({ current: l }, i) => {
      if (!l) return
      l.position.x = -0.25 + i * 0.18 + Math.sin(tc * 0.4 + i) * 0.05
    })
  })

  return (
    <>
      {pgCfg.map(({ pos, ry }, i) => (
        <box key={i} name={`pg${i}`} width={0.65} height={0.88} depth={0.03}
          position={pos} rotation={new Vector3(0, ry, 0)} ref={pgRefs[i]}>
          <standardMaterial name={`pgm${i}`}
            diffuseColor={c3(0.75 - i * 0.08, 0.78 - i * 0.04, 0.95)}
            alpha={0.35 + i * 0.12}
            wireframe={i === 0} />
        </box>
      ))}
      {lineRefs.map((ref, i) => (
        <box key={i} name={`tl${i}`} width={0.42} height={0.025} depth={0.02}
          position={new Vector3(-0.25 + i * 0.18, 0.55 - i * 0.28, -0.65)} ref={ref}>
          <standardMaterial name={`tlm${i}`} diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.5} />
        </box>
      ))}
    </>
  )
}

// PORTFOLIO: staggered gallery panels
function PortfolioScene() {
  type PanelCfg = { pos: Vector3; ry: number; wire: boolean }
  const panelCfg: PanelCfg[] = [
    { pos: new Vector3(-1.1,  0.3,  0.2),  ry: -0.3,   wire: true  },
    { pos: new Vector3(-0.2,  0,   -0.5),  ry:  0.1,   wire: true  },
    { pos: new Vector3( 0.9,  0.2,  0.1),  ry:  0.35,  wire: false },
    { pos: new Vector3( 0.25,-0.4,  0.65), ry: -0.15,  wire: false },
  ]
  const panelRefs = panelCfg.map(() => useRef<Nullable<Mesh>>(null))
  const t         = useRef(0)

  useBeforeRender(() => {
    t.current += 0.007
    const tc = t.current
    panelRefs.forEach(({ current: p }, i) => {
      if (!p) return
      p.rotation.y = panelCfg[i].ry + Math.sin(tc * 0.4 + i * 1.3) * 0.06
      p.position.y = panelCfg[i].pos.y + Math.sin(tc * 0.5 + i * 0.9) * 0.12
    })
  })

  return (
    <>
      {panelCfg.map(({ pos, ry, wire }, i) => (
        <box key={i} name={`pnl${i}`} width={0.7} height={0.5} depth={0.03}
          position={pos} rotation={new Vector3(0, ry, 0)} ref={panelRefs[i]}>
          <standardMaterial name={`pnm${i}`}
            diffuseColor={c3(0.1 + i * 0.05, 0.15 + i * 0.08, 0.3 + i * 0.12)}
            alpha={0.22 + i * 0.12}
            wireframe={wire} />
        </box>
      ))}
    </>
  )
}

// PRICING: 3 gem spheres + glow rings
function PricingScene() {
  type TierCfg = { sz:number; x:number; y:number; r:number; gc:number; b:number }
  const tiers: TierCfg[] = [
    { sz:0.38, x:-1.1, y:-0.1,  r:0.70, gc:0.50, b:0.90 },
    { sz:0.56, x: 0,   y: 0.15, r:0.17, gc:0.43, b:0.93 },
    { sz:0.44, x: 1.1, y: 0,    r:0.83, gc:0.65, b:0.20 },
  ]
  const gemRefs = tiers.map(() => useRef<Nullable<Mesh>>(null))
  const t       = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    gemRefs.forEach(({ current: gem }, i) => {
      if (!gem) return
      gem.rotation.x += 0.007 + i * 0.003
      gem.rotation.y += 0.012 + i * 0.005
      gem.position.y  = tiers[i].y + Math.sin(tc * 0.8 + i * 1.4) * 0.2
    })
  })

  return (
    <>
      {tiers.map(({ sz, x, y, r, gc, b }, i) => (
        <>
          <sphere key={`gm${i}`} name={`gm${i}`} diameter={sz} segments={2}
            position={new Vector3(x, y, 0)} ref={gemRefs[i]}>
            <standardMaterial name={`gmm${i}`} diffuseColor={c3(r, gc, b)} alpha={0.85} />
          </sphere>
          <torus key={`gl${i}`} name={`gl${i}`} diameter={sz * 3.5} thickness={0.01}
            position={new Vector3(x, y - sz * 0.7, 0)} rotation={new Vector3(Math.PI / 2, 0, 0)}>
            <standardMaterial name={`glm${i}`} diffuseColor={c3(r, gc, b)} alpha={0.22} />
          </torus>
        </>
      ))}
    </>
  )
}

// CAREERS: ascending cylinders + gold star
function CareersScene() {
  const levels = [0.4, 0.72, 1.1, 1.5, 1.9]
  const xPos   = [-1.6, -0.8, 0, 0.8, 1.6]
  const barRefs = levels.map(() => useRef<Nullable<Mesh>>(null))
  const starRef  = useRef<Nullable<Mesh>>(null)
  const t        = useRef(0)

  useBeforeRender(() => {
    t.current += 0.009
    const tc = t.current
    barRefs.forEach(({ current: c }, i) => {
      if (!c) return
      c.rotation.y += 0.004 + i * 0.002
      c.scaling.y   = 1 + Math.sin(tc * 0.5 + i * 0.7) * 0.03
    })
    const star = starRef.current
    if (star) {
      star.rotation.x += 0.01; star.rotation.y += 0.015
      star.position.y = -1.0 + levels[4] + 0.2 + Math.sin(tc * 1.8) * 0.1
    }
  })

  return (
    <>
      {levels.map((h, i) => {
        const bv = 0.4 + (i / 4) * 0.6
        return (
          <cylinder key={i} name={`lv${i}`} height={h} diameter={0.3} tessellation={16}
            position={new Vector3(xPos[i], -1.0 + h / 2, 0)} ref={barRefs[i]}>
            <standardMaterial name={`lvm${i}`} diffuseColor={c3(0.1, 0.28 + bv * 0.18, bv)} alpha={0.88} />
          </cylinder>
        )
      })}
      <box name="cg" width={4.2} height={0.04} depth={0.6} position={new Vector3(0, -1.0, 0)}>
        <standardMaterial name="cgm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.25} />
      </box>
      <sphere name="cstar" diameter={0.18} segments={2}
        position={new Vector3(1.6, -1.0 + 1.9 + 0.2, 0)} ref={starRef}>
        <standardMaterial name="stm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.9} />
      </sphere>
    </>
  )
}

// LEGAL: faceted sphere + outer wireframe shell
function LegalScene() {
  const icoRef   = useRef<Nullable<Mesh>>(null)
  const shellRef = useRef<Nullable<Mesh>>(null)
  const t        = useRef(0)

  useBeforeRender(() => {
    t.current += 0.005
    const ico = icoRef.current
    if (ico) {
      ico.rotation.x += 0.003; ico.rotation.y += 0.005; ico.rotation.z += 0.002
    }
    const shell = shellRef.current
    if (shell) { shell.rotation.x -= 0.002; shell.rotation.y += 0.003 }
  })

  return (
    <>
      <sphere name="ico" diameter={0.6} segments={3} ref={icoRef}>
        <standardMaterial name="im" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.65} />
      </sphere>
      <sphere name="shell" diameter={1.05} segments={4} ref={shellRef}>
        <standardMaterial name="shlm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.12} wireframe={true} />
      </sphere>
    </>
  )
}

// ─── Scene dispatcher ─────────────────────────────────────────────────────────

function SceneContent({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'about':            return <AboutScene />
    case 'contact':          return <ContactScene />
    case 'services':         return <ServicesScene />
    case 'web-design':       return <WebDesignScene />
    case 'seo-marketing':    return <SeoScene />
    case 'branding-design':  return <BrandingScene />
    case 'media-production': return <MediaScene />
    case 'arch-vis':         return <ArchVisScene />
    case 'cybersecurity':    return <CybersecurityScene />
    case 'blog':             return <BlogScene />
    case 'portfolio':        return <PortfolioScene />
    case 'pricing':          return <PricingScene />
    case 'careers':          return <CareersScene />
    case 'legal':            return <LegalScene />
    default:                 return <HomeScene />
  }
}

// ─── Root component ───────────────────────────────────────────────────────────

export function BabylonSceneCanvas({ variant = 'home' }: { variant?: SceneVariant }) {
  return (
    <Engine antialias adaptToDeviceRatio canvasId={`babylon-${variant}`}
      engineOptions={{ preserveDrawingBuffer: true, stencil: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}>
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        <arcRotateCamera
          name="camera"
          target={ZERO}
          alpha={Tools.ToRadians(-30)}
          beta={Tools.ToRadians(65)}
          radius={5}
        />
        <hemisphericLight name="light" direction={UP} intensity={0.8} />
        <SceneContent variant={variant} />
      </Scene>
    </Engine>
  )
}
```

- [ ] **Step 2: Run TypeScript check**

```bash
npx tsc --noEmit 2>&1 | grep -E "(error|BabylonScene)" | head -30
```

Expected: No errors in `components/3d/BabylonSceneCanvas.tsx`. Fix any that appear — common issues:
- `Color4` import path: if `Color4` is not exported from `math.vector`, add `import { Color4 } from '@babylonjs/core/Maths/math.color'`
- `Nullable` type: import from `@babylonjs/core/types`
- JSX element names for react-babylonjs: `<box>`, `<sphere>`, `<torus>`, `<cylinder>`, `<arcRotateCamera>`, `<hemisphericLight>`, `<standardMaterial>` are all valid lowercase JSX in react-babylonjs

- [ ] **Step 3: Fix Color4 import if needed**

If the typecheck shows `Color4` not found in `math.vector`, update the import at the top of `BabylonSceneCanvas.tsx`:

```tsx
import { Vector3, Color3 } from '@babylonjs/core/Maths/math.vector'
import { Color4 } from '@babylonjs/core/Maths/math.color'
```

- [ ] **Step 4: Commit**

```bash
git add components/3d/BabylonSceneCanvas.tsx
git commit -m "feat: migrate Babylon.js scenes to react-babylonjs declarative renderer (all 15 variants)"
```

---

## Task 4: Update stale brain notes

**Files:**
- Modify: `brain/foundation/infrastructure.md`
- Modify: `brain/changelog/2026-06-28-session-audit.md`

- [ ] **Step 1: Update infrastructure.md — fix stale git state note**

In `brain/foundation/infrastructure.md`, find and replace the stale Git State section:

Find:
```markdown
## Git State

- Single commit (`bf3d2b6`), all files untracked — treat as fresh scaffold.
- See [[changelog/_index]] for session history.
```

Replace with:
```markdown
## Git State

- Multi-commit history (10+ commits as of 2026-06-28). See `git log --oneline` for current state.
- Latest: `403fc6a stability push`
- See [[changelog/_index]] for session history.
```

- [ ] **Step 2: Add session completion entry to changelog**

Append to `brain/changelog/2026-06-28-session-audit.md`:

```markdown
## Completed

All four tasks executed:
1. `vercel.json` — fixed `/services/seo` → `/services/seo-marketing` redirect
2. `package.json` — all deps updated to latest (Next 16.2.9, React 19.2.7, Babylon 9.14.0, Tailwind 4.3.1, etc.)
3. `postcss.config.mjs` + `app/globals.css` — migrated to Tailwind v4 (`@tailwindcss/postcss`, `@import "tailwindcss"`)
4. `components/3d/BabylonSceneCanvas.tsx` — full rewrite to `react-babylonjs` 4.0.2 declarative renderer (15 variants)

## Packages added
- `react-babylonjs@4.0.2`
- `@babylonjs/gui@9.14.0` (required peer dep of react-babylonjs)
- `@tailwindcss/postcss@4.3.1` (Tailwind v4 PostCSS plugin)
```

- [ ] **Step 3: Commit brain updates**

```bash
git add brain/
git commit -m "docs(brain): update infrastructure note + mark 2026-06-28 session complete"
```

---

## Self-Review

**Spec coverage check:**
- ✅ Broken redirect fixed (Task 1)
- ✅ All packages updated to latest (Task 2)
- ✅ Tailwind v4 migration included (Task 2 — required by version bump)
- ✅ react-babylonjs migration: all 15 scene variants ported (Task 3)
- ✅ Brain stale note corrected (Task 4)

**Placeholder scan:** None found. All code is complete.

**Type consistency:**
- `SceneVariant` type exported from `BabylonSceneCanvas.tsx` — `BabylonScene.tsx` imports it via re-export, unchanged.
- All `useRef<Nullable<Mesh>>(null)` patterns are consistent across scenes.
- `c3()` helper used consistently for all `Color3` construction.

**Risk flag — Tailwind v4 `@config` directive:** Tailwind v4 CSS-first mode with `@config "../tailwind.config.ts"` requires the path to be relative to the CSS file (`app/globals.css`). The path `"../tailwind.config.ts"` resolves to the project root — correct. If the build fails with "config not found", change to `"../tailwind.config.ts"` → `"tailwind.config.ts"` (try both).
