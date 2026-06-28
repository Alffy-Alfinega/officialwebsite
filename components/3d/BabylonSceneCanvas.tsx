'use client'

// react-babylonjs 4.x — declarative React renderer for Babylon.js
// Replaces the previous manual useEffect/Engine/Scene imperative pattern
import { Engine, Scene, useBeforeRender } from 'react-babylonjs'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { Tools } from '@babylonjs/core/Misc/tools'
import { Nullable } from '@babylonjs/core/types'
import { Mesh } from '@babylonjs/core/Meshes/mesh'
import { useRef } from 'react'

export type SceneVariant =
  | 'home' | 'about' | 'contact' | 'services'
  | 'web-design' | 'seo-marketing' | 'branding-design'
  | 'media-production' | 'arch-vis' | 'cybersecurity'
  | 'blog' | 'portfolio' | 'pricing' | 'careers' | 'legal'

// ─── Shared helpers ───────────────────────────────────────────────────────────

const ZERO = Vector3.Zero()
const UP   = new Vector3(0, 1, 0)
const TRANSPARENT = new Color4(0, 0, 0, 0)

function c3(r: number, g: number, b: number) { return new Color3(r, g, b) }

// ─── Scene components ─────────────────────────────────────────────────────────

function HomeScene() {
  const boxRef    = useRef<Nullable<Mesh>>(null)
  const sphereRef = useRef<Nullable<Mesh>>(null)
  const torusRef  = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    const box = boxRef.current; const sph = sphereRef.current; const tor = torusRef.current
    if (box) { box.rotation.x += 0.005; box.rotation.y += 0.01; box.position.y = Math.sin(tc * 0.8) * 0.3 }
    if (sph) { sph.rotation.x += 0.003; sph.rotation.z += 0.007; sph.position.y = Math.sin(tc * 0.6 + 1) * 0.3 }
    if (tor) { tor.rotation.x += 0.008; tor.rotation.y += 0.005; tor.position.y = Math.sin(tc * 0.7 + 2) * 0.3 }
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

function AboutScene() {
  const coreRef = useRef<Nullable<Mesh>>(null)
  const ringRef = useRef<Nullable<Mesh>>(null)
  const o0 = useRef<Nullable<Mesh>>(null); const o1 = useRef<Nullable<Mesh>>(null); const o2 = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.008
    const tc = t.current
    if (coreRef.current) coreRef.current.rotation.y += 0.005
    if (ringRef.current) ringRef.current.rotation.y += 0.003
    const orbs = [o0.current, o1.current, o2.current]
    orbs.forEach((orb, i) => {
      if (!orb) return
      const a = tc * 0.6 + (i * 2 * Math.PI / 3)
      orb.position.x = Math.cos(a) * 1.3; orb.position.z = Math.sin(a) * 1.3
      orb.position.y = Math.sin(tc * 0.5 + i * 1.5) * 0.3; orb.rotation.y += 0.02
    })
  })

  const orbColors: [number, number, number][] = [[0.83, 0.65, 0.2], [0.2, 0.75, 0.85], [0.65, 0.35, 0.85]]
  const orbRefs = [o0, o1, o2]

  return (
    <>
      <sphere name="core" diameter={0.55} segments={16} ref={coreRef}>
        <standardMaterial name="cm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.9} />
      </sphere>
      <torus name="oring" diameter={2.6} thickness={0.02} ref={ringRef} rotation={new Vector3(Math.PI / 2, 0, 0)}>
        <standardMaterial name="rm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.2} />
      </torus>
      {orbColors.map(([r, g, b], i) => (
        <sphere key={i} name={`orb${i}`} diameter={0.22} ref={orbRefs[i]}>
          <standardMaterial name={`om${i}`} diffuseColor={c3(r, g, b)} alpha={0.8} />
        </sphere>
      ))}
    </>
  )
}

function ContactScene() {
  const hubRef = useRef<Nullable<Mesh>>(null)
  const ringRef = useRef<Nullable<Mesh>>(null)
  const s0 = useRef<Nullable<Mesh>>(null); const s1 = useRef<Nullable<Mesh>>(null)
  const s2 = useRef<Nullable<Mesh>>(null); const s3 = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01
    const tc = t.current
    const hub = hubRef.current
    if (hub) { hub.scaling.setAll(1 + Math.sin(tc * 1.8) * 0.06); hub.rotation.y += 0.007 }
    if (ringRef.current) ringRef.current.rotation.z += 0.003
    const sats = [s0.current, s1.current, s2.current, s3.current]
    sats.forEach((sat, i) => {
      if (!sat) return
      const r = 0.85 + i * 0.2; const spd = 0.5 + i * 0.2
      sat.position.x = Math.cos(tc * spd + i * 1.57) * r
      sat.position.z = Math.sin(tc * spd + i * 1.57) * r
      sat.position.y = Math.sin(tc * 0.8 + i) * 0.35
    })
  })

  const satRefs = [s0, s1, s2, s3]

  return (
    <>
      <sphere name="hub" diameter={0.5} segments={16} ref={hubRef}>
        <standardMaterial name="hm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.9} />
      </sphere>
      <torus name="cring" diameter={2.4} thickness={0.025} ref={ringRef} rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="crm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.3} />
      </torus>
      {satRefs.map((ref, i) => (
        <sphere key={i} name={`sat${i}`} diameter={0.14 + i * 0.04} ref={ref}>
          <standardMaterial name={`satm${i}`} diffuseColor={c3(0.83, 0.65 - i * 0.05, 0.2 + i * 0.15)} alpha={0.8} />
        </sphere>
      ))}
    </>
  )
}

function ServicesScene() {
  const refs = Array.from({ length: 6 }, () => useRef<Nullable<Mesh>>(null))
  const t = useRef(0)
  const positions = Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2; return new Vector3(Math.cos(a) * 1.8, 0, Math.sin(a) * 1.8)
  })
  const colors: [number, number, number][] = [
    [0.17, 0.43, 0.93], [0.83, 0.65, 0.20], [0.65, 0.35, 0.85],
    [0.20, 0.75, 0.50], [0.90, 0.40, 0.30], [0.20, 0.75, 0.85],
  ]

  useBeforeRender(() => {
    t.current += 0.008
    refs.forEach(({ current: m }, i) => {
      if (!m) return
      m.rotation.x += 0.005 + i * 0.002; m.rotation.y += 0.008 + i * 0.003
      m.position.y = Math.sin(t.current * 0.7 + i * 1.05) * 0.3
    })
  })

  return (
    <>
      <box name="sv0" size={0.32} position={positions[0]} ref={refs[0]}><standardMaterial name="svm0" diffuseColor={c3(...colors[0])} alpha={0.75} /></box>
      <sphere name="sv1" diameter={0.35} position={positions[1]} ref={refs[1]}><standardMaterial name="svm1" diffuseColor={c3(...colors[1])} alpha={0.75} /></sphere>
      <torus name="sv2" diameter={0.38} thickness={0.1} position={positions[2]} ref={refs[2]}><standardMaterial name="svm2" diffuseColor={c3(...colors[2])} alpha={0.75} /></torus>
      <cylinder name="sv3" diameter={0.28} height={0.45} position={positions[3]} ref={refs[3]}><standardMaterial name="svm3" diffuseColor={c3(...colors[3])} alpha={0.75} /></cylinder>
      <sphere name="sv4" diameter={0.3} segments={2} position={positions[4]} ref={refs[4]}><standardMaterial name="svm4" diffuseColor={c3(...colors[4])} alpha={0.75} /></sphere>
      <sphere name="sv5" diameter={0.3} segments={3} position={positions[5]} ref={refs[5]}><standardMaterial name="svm5" diffuseColor={c3(...colors[5])} alpha={0.75} /></sphere>
    </>
  )
}

function WebDesignScene() {
  type PCfg = { pos: Vector3; ry: number }
  const cfg: PCfg[] = [
    { pos: new Vector3(-1.0, 0.1, 0.2), ry: -0.35 },
    { pos: new Vector3(0.05, 0, -0.3),  ry:  0.05 },
    { pos: new Vector3(1.0, -0.1, 0.1), ry:  0.40 },
  ]
  const screenRefs = cfg.map(() => useRef<Nullable<Mesh>>(null))
  const curRef = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01; const tc = t.current
    screenRefs.forEach(({ current: s }, i) => {
      if (!s) return
      s.rotation.y = cfg[i].ry + Math.sin(tc * 0.3 + i * 1.1) * 0.06
      s.position.y = cfg[i].pos.y + Math.sin(tc * 0.6 + i * 1.2) * 0.15
    })
    const cur = curRef.current
    if (cur) { cur.position.x = Math.sin(tc * 0.8) * 0.7; cur.position.y = Math.cos(tc * 1.1) * 0.45; cur.position.z = Math.sin(tc * 0.5) * 0.3 }
  })

  return (
    <>
      {cfg.map(({ pos, ry }, i) => (
        <box key={i} name={`scr${i}`} width={0.75} height={0.52} depth={0.04} position={pos} rotation={new Vector3(0, ry, 0)} ref={screenRefs[i]}>
          <standardMaterial name={`scrm${i}`} diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.25 + i * 0.2} wireframe={i === 0} />
        </box>
      ))}
      <sphere name="cur" diameter={0.07} ref={curRef}>
        <standardMaterial name="curm" diffuseColor={c3(0.93, 0.93, 1)} alpha={0.9} />
      </sphere>
    </>
  )
}

function SeoScene() {
  type Bar = { h: number; x: number; b: number }
  const bars: Bar[] = [{ h:0.65,x:-1.6,b:0.55},{h:1.1,x:-0.8,b:0.65},{h:1.6,x:0,b:1.0},{h:0.9,x:0.8,b:0.6},{h:1.4,x:1.6,b:0.85}]
  const barRefs = bars.map(() => useRef<Nullable<Mesh>>(null))
  const peakRef = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.008; const tc = t.current
    barRefs.forEach(({ current: bar }, i) => { if (!bar) return; bar.rotation.y += 0.005; bar.scaling.y = 1 + Math.sin(tc * 0.5 + i * 0.8) * 0.04 })
    if (peakRef.current) peakRef.current.position.y = -1.0 + bars[2].h + 0.15 + Math.sin(tc * 1.5) * 0.1
  })

  return (
    <>
      {bars.map(({ h, x, b }, i) => (
        <cylinder key={i} name={`bar${i}`} height={h} diameter={0.28} tessellation={12} position={new Vector3(x, -1.0 + h / 2, 0)} ref={barRefs[i]}>
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

function BrandingScene() {
  type Pal = { r:number;g:number;b:number;sz:number;bx:number;bz:number;baseY:number }
  const pal: Pal[] = [
    {r:0.17,g:0.43,b:0.93,sz:0.46,bx:-0.8, bz:-0.3,baseY:0.15},
    {r:0.83,g:0.65,b:0.2, sz:0.35,bx: 0.85,bz: 0.4,baseY:-0.10},
    {r:0.92,g:0.92,b:0.94,sz:0.28,bx: 0.05,bz:-0.8,baseY:0.50},
    {r:0.65,g:0.35,b:0.85,sz:0.30,bx: 0.4, bz: 0.8,baseY:-0.45},
  ]
  const sphRefs = pal.map(() => useRef<Nullable<Mesh>>(null))
  const dotRefs = [0,1,2].map(() => useRef<Nullable<Mesh>>(null))
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.009; const tc = t.current
    sphRefs.forEach(({ current: s }, i) => { if (!s) return; s.rotation.y += 0.007; s.position.y = pal[i].baseY + Math.sin(tc * 0.6 + i * 1.3) * 0.2 })
    dotRefs.forEach(({ current: d }, i) => {
      if (!d) return; const a = tc * 1.2 + i * 2.09
      d.position.x = Math.cos(a) * 1.5; d.position.y = Math.sin(a * 0.5) * 0.5; d.position.z = Math.sin(a) * 1.5
    })
  })

  return (
    <>
      {pal.map(({ r, g, b, sz, bx, bz, baseY }, i) => (
        <sphere key={i} name={`pal${i}`} diameter={sz} segments={16} position={new Vector3(bx, baseY, bz)} ref={sphRefs[i]}>
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

function MediaScene() {
  const r1 = useRef<Nullable<Mesh>>(null); const r2 = useRef<Nullable<Mesh>>(null)
  const playRef = useRef<Nullable<Mesh>>(null); const lensRef = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01; const tc = t.current
    if (r1.current) r1.current.rotation.y += 0.012
    if (r2.current) { r2.current.rotation.y -= 0.018; r2.current.rotation.z += 0.007 }
    if (playRef.current) playRef.current.rotation.y += 0.007
    if (lensRef.current) { lensRef.current.position.y = 0.5 + Math.sin(tc * 1.1) * 0.15; lensRef.current.rotation.x += 0.01 }
  })

  return (
    <>
      <torus name="reel" diameter={1.4} thickness={0.12} tessellation={48} ref={r1} rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="rlm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.78} />
      </torus>
      <torus name="reel2" diameter={0.85} thickness={0.07} tessellation={32} ref={r2} rotation={new Vector3(-Math.PI / 4, 0, 0)}>
        <standardMaterial name="rl2m" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.55} />
      </torus>
      <cylinder name="play" diameterBottom={0} diameterTop={0.38} height={0.44} tessellation={3} rotation={new Vector3(0, Math.PI / 6, -Math.PI / 2)} ref={playRef}>
        <standardMaterial name="plm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.9} />
      </cylinder>
      <sphere name="lens" diameter={0.26} position={new Vector3(-0.7, 0.5, -0.3)} ref={lensRef}>
        <standardMaterial name="lnm" diffuseColor={c3(0.2, 0.75, 0.85)} alpha={0.75} />
      </sphere>
    </>
  )
}

function ArchVisScene() {
  type B = { w:number;h:number;d:number;x:number;z:number }
  const bldgs: B[] = [{w:0.5,h:1.4,d:0.5,x:-1.2,z:0.3},{w:0.65,h:2.0,d:0.6,x:0,z:-0.3},{w:0.4,h:0.9,d:0.45,x:1.2,z:0.2}]
  const bld1Ref = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.006
    if (bld1Ref.current) bld1Ref.current.rotation.y = Math.sin(t.current * 0.3) * 0.012
  })

  return (
    <>
      {bldgs.map(({ w, h, d, x, z }, i) => (
        <box key={i} name={`bld${i}`} width={w} height={h} depth={d} position={new Vector3(x, -1.0 + h / 2, z)} ref={i === 1 ? bld1Ref : undefined}>
          <standardMaterial name={`bldm${i}`} diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.85} wireframe={true} />
        </box>
      ))}
      <box name="gnd" width={4} height={0.04} depth={2.5} position={new Vector3(0, -1.0, 0)}>
        <standardMaterial name="gm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.2} />
      </box>
      <box name="ml" width={0.02} height={2.1} depth={0.02} position={new Vector3(-2.0, -1.0 + 1.05, -0.8)}>
        <standardMaterial name="mlm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.7} />
      </box>
    </>
  )
}

function CybersecurityScene() {
  const shieldRef = useRef<Nullable<Mesh>>(null)
  const orb1Ref = useRef<Nullable<Mesh>>(null); const orb2Ref = useRef<Nullable<Mesh>>(null)
  const nodeRefs = Array.from({ length: 6 }, () => useRef<Nullable<Mesh>>(null))
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01; const tc = t.current
    const sh = shieldRef.current
    if (sh) { sh.rotation.x += 0.004; sh.rotation.y += 0.007; sh.scaling.setAll(1 + Math.sin(tc * 1.5) * 0.03) }
    if (orb1Ref.current) orb1Ref.current.rotation.y += 0.006
    if (orb2Ref.current) orb2Ref.current.rotation.y -= 0.003
    nodeRefs.forEach(({ current: n }, i) => {
      if (!n) return; const a = tc * 0.8 + (i * Math.PI / 3)
      n.position.x = Math.cos(a) * 1.1; n.position.z = Math.sin(a) * 1.1; n.position.y = Math.sin(tc * 1.2 + i) * 0.15
    })
  })

  return (
    <>
      <sphere name="shield" diameter={0.55} segments={3} ref={shieldRef}>
        <standardMaterial name="shm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.88} />
      </sphere>
      <torus name="orbit1" diameter={2.2} thickness={0.02} ref={orb1Ref} rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="ob1m" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.35} />
      </torus>
      <torus name="orbit2" diameter={3.2} thickness={0.015} ref={orb2Ref} rotation={new Vector3(-Math.PI / 4, 0, 0)}>
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

function BlogScene() {
  type P = { pos: Vector3; ry: number }
  const pgCfg: P[] = [
    {pos: new Vector3(-0.75, 0.2, 0.1),  ry: -0.3},
    {pos: new Vector3(0.1,  0,  -0.45),  ry:  0.08},
    {pos: new Vector3(0.85,-0.15, 0.25), ry:  0.35},
  ]
  const pgRefs = pgCfg.map(() => useRef<Nullable<Mesh>>(null))
  const lineRefs = [0,1,2].map(() => useRef<Nullable<Mesh>>(null))
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.008; const tc = t.current
    pgRefs.forEach(({ current: p }, i) => { if (!p) return; p.rotation.y = pgCfg[i].ry + Math.sin(tc * 0.5 + i * 1.5) * 0.08; p.position.y = pgCfg[i].pos.y + Math.sin(tc * 0.6 + i * 1.1) * 0.15 })
    lineRefs.forEach(({ current: l }, i) => { if (!l) return; l.position.x = -0.25 + i * 0.18 + Math.sin(tc * 0.4 + i) * 0.05 })
  })

  return (
    <>
      {pgCfg.map(({ pos, ry }, i) => (
        <box key={i} name={`pg${i}`} width={0.65} height={0.88} depth={0.03} position={pos} rotation={new Vector3(0, ry, 0)} ref={pgRefs[i]}>
          <standardMaterial name={`pgm${i}`} diffuseColor={c3(0.75 - i * 0.08, 0.78 - i * 0.04, 0.95)} alpha={0.35 + i * 0.12} wireframe={i === 0} />
        </box>
      ))}
      {lineRefs.map((ref, i) => (
        <box key={i} name={`tl${i}`} width={0.42} height={0.025} depth={0.02} position={new Vector3(-0.25 + i * 0.18, 0.55 - i * 0.28, -0.65)} ref={ref}>
          <standardMaterial name={`tlm${i}`} diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.5} />
        </box>
      ))}
    </>
  )
}

function PortfolioScene() {
  type P = { pos: Vector3; ry: number; wire: boolean }
  const panelCfg: P[] = [
    {pos: new Vector3(-1.1, 0.3,  0.2),  ry: -0.3,  wire: true},
    {pos: new Vector3(-0.2, 0,   -0.5),  ry:  0.1,  wire: true},
    {pos: new Vector3( 0.9, 0.2,  0.1),  ry:  0.35, wire: false},
    {pos: new Vector3( 0.25,-0.4, 0.65), ry: -0.15, wire: false},
  ]
  const panelRefs = panelCfg.map(() => useRef<Nullable<Mesh>>(null))
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.007; const tc = t.current
    panelRefs.forEach(({ current: p }, i) => { if (!p) return; p.rotation.y = panelCfg[i].ry + Math.sin(tc * 0.4 + i * 1.3) * 0.06; p.position.y = panelCfg[i].pos.y + Math.sin(tc * 0.5 + i * 0.9) * 0.12 })
  })

  return (
    <>
      {panelCfg.map(({ pos, ry, wire }, i) => (
        <box key={i} name={`pnl${i}`} width={0.7} height={0.5} depth={0.03} position={pos} rotation={new Vector3(0, ry, 0)} ref={panelRefs[i]}>
          <standardMaterial name={`pnm${i}`} diffuseColor={c3(0.1 + i * 0.05, 0.15 + i * 0.08, 0.3 + i * 0.12)} alpha={0.22 + i * 0.12} wireframe={wire} />
        </box>
      ))}
    </>
  )
}

function PricingScene() {
  type T = { sz:number;x:number;y:number;r:number;gc:number;b:number }
  const tiers: T[] = [{sz:0.38,x:-1.1,y:-0.1,r:0.70,gc:0.50,b:0.90},{sz:0.56,x:0,y:0.15,r:0.17,gc:0.43,b:0.93},{sz:0.44,x:1.1,y:0,r:0.83,gc:0.65,b:0.20}]
  const gemRefs = tiers.map(() => useRef<Nullable<Mesh>>(null))
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.01; const tc = t.current
    gemRefs.forEach(({ current: gem }, i) => { if (!gem) return; gem.rotation.x += 0.007 + i * 0.003; gem.rotation.y += 0.012 + i * 0.005; gem.position.y = tiers[i].y + Math.sin(tc * 0.8 + i * 1.4) * 0.2 })
  })

  return (
    <>
      {tiers.map(({ sz, x, y, r, gc, b }, i) => (
        <>
          <sphere key={`g${i}`} name={`gm${i}`} diameter={sz} segments={2} position={new Vector3(x, y, 0)} ref={gemRefs[i]}>
            <standardMaterial name={`gmm${i}`} diffuseColor={c3(r, gc, b)} alpha={0.85} />
          </sphere>
          <torus key={`gl${i}`} name={`gl${i}`} diameter={sz * 3.5} thickness={0.01} position={new Vector3(x, y - sz * 0.7, 0)} rotation={new Vector3(Math.PI / 2, 0, 0)}>
            <standardMaterial name={`glm${i}`} diffuseColor={c3(r, gc, b)} alpha={0.22} />
          </torus>
        </>
      ))}
    </>
  )
}

function CareersScene() {
  const levels = [0.4, 0.72, 1.1, 1.5, 1.9]; const xPos = [-1.6, -0.8, 0, 0.8, 1.6]
  const barRefs = levels.map(() => useRef<Nullable<Mesh>>(null))
  const starRef = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.009; const tc = t.current
    barRefs.forEach(({ current: c }, i) => { if (!c) return; c.rotation.y += 0.004 + i * 0.002; c.scaling.y = 1 + Math.sin(tc * 0.5 + i * 0.7) * 0.03 })
    if (starRef.current) { starRef.current.rotation.x += 0.01; starRef.current.rotation.y += 0.015; starRef.current.position.y = -1.0 + levels[4] + 0.2 + Math.sin(tc * 1.8) * 0.1 }
  })

  return (
    <>
      {levels.map((h, i) => {
        const bv = 0.4 + (i / 4) * 0.6
        return (
          <cylinder key={i} name={`lv${i}`} height={h} diameter={0.3} tessellation={16} position={new Vector3(xPos[i], -1.0 + h / 2, 0)} ref={barRefs[i]}>
            <standardMaterial name={`lvm${i}`} diffuseColor={c3(0.1, 0.28 + bv * 0.18, bv)} alpha={0.88} />
          </cylinder>
        )
      })}
      <box name="cg" width={4.2} height={0.04} depth={0.6} position={new Vector3(0, -1.0, 0)}>
        <standardMaterial name="cgm" diffuseColor={c3(0.17, 0.43, 0.93)} alpha={0.25} />
      </box>
      <sphere name="cstar" diameter={0.18} segments={2} position={new Vector3(1.6, -1.0 + 1.9 + 0.2, 0)} ref={starRef}>
        <standardMaterial name="stm" diffuseColor={c3(0.83, 0.65, 0.2)} alpha={0.9} />
      </sphere>
    </>
  )
}

function LegalScene() {
  const icoRef = useRef<Nullable<Mesh>>(null); const shellRef = useRef<Nullable<Mesh>>(null)
  const t = useRef(0)

  useBeforeRender(() => {
    t.current += 0.005
    if (icoRef.current) { icoRef.current.rotation.x += 0.003; icoRef.current.rotation.y += 0.005; icoRef.current.rotation.z += 0.002 }
    if (shellRef.current) { shellRef.current.rotation.x -= 0.002; shellRef.current.rotation.y += 0.003 }
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

// ─── Root export ──────────────────────────────────────────────────────────────

export function BabylonSceneCanvas({ variant = 'home' }: { variant?: SceneVariant }) {
  return (
    <Engine antialias adaptToDeviceRatio canvasId={`babylon-${variant}`}
      engineOptions={{ preserveDrawingBuffer: true, stencil: true, alpha: true }}
      style={{ width: '100%', height: '100%' }}>
      <Scene clearColor={TRANSPARENT}>
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
