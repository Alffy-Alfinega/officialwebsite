'use client'

import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color4, Color3 } from '@babylonjs/core/Maths/math'
import { useScene } from 'react-babylonjs'
import { useEffect, useRef } from 'react'
import type { SceneVariant } from './BabylonHero'

// ─── Shared helpers ────────────────────────────────────────────────────────────

function useAnimation(fn: (t: number) => void) {
  const scene = useScene()
  const tRef = useRef(0)
  useEffect(() => {
    if (!scene) return
    const obs = scene.registerBeforeRender(() => {
      tRef.current += 0.01
      fn(tRef.current)
    })
    return () => { scene.unregisterBeforeRender(obs as unknown as () => void) }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scene])
}

const BLUE   = new Color3(0.17, 0.44, 0.93)
const GOLD   = new Color3(0.83, 0.65, 0.20)
const GREEN  = new Color3(0.20, 0.75, 0.50)
const PURPLE = new Color3(0.65, 0.35, 0.85)
const CYAN   = new Color3(0.20, 0.75, 0.85)
const RED    = new Color3(0.90, 0.40, 0.30)
const WHITE  = new Color3(0.88, 0.88, 0.94)
const GREY   = new Color3(0.45, 0.45, 0.55)

const stdCam = (radius = 6) => (
  <arcRotateCamera name="cam" alpha={-0.45} beta={1.1} radius={radius} target={Vector3.Zero()} />
)
const stdLight = () => <hemisphericLight name="l" intensity={0.88} direction={new Vector3(0, 1, 0)} />

// ─── 01. HOME — "The Build": assembling agency disciplines ───────────────────

function HomeScene() {
  const panelRef = useRef<any>(null)
  const orbRef   = useRef<any>(null)
  const ringRef  = useRef<any>(null)
  const blockRef = useRef<any>(null)
  const scanRef  = useRef<any>(null)

  useAnimation((t) => {
    if (panelRef.current) {
      const a = t * 0.4
      panelRef.current.position.x = Math.cos(a) * 1.5
      panelRef.current.position.z = Math.sin(a) * 1.5
      panelRef.current.position.y = Math.sin(t * 0.6) * 0.25
      panelRef.current.rotation.y = a + Math.PI / 2
    }
    if (orbRef.current) {
      const a = t * 0.55 + 2.1
      orbRef.current.position.x = Math.cos(a) * 1.1
      orbRef.current.position.z = Math.sin(a) * 1.1
      orbRef.current.position.y = Math.sin(t * 0.5 + 1) * 0.3
      orbRef.current.rotation.y += 0.01
    }
    if (ringRef.current) {
      const a = t * 0.35 + 4.2
      ringRef.current.position.x = Math.cos(a) * 1.9
      ringRef.current.position.z = Math.sin(a) * 1.9
      ringRef.current.position.y = Math.sin(t * 0.45 + 2) * 0.2
      ringRef.current.rotation.x += 0.012
      ringRef.current.rotation.y += 0.008
    }
    if (blockRef.current) {
      const a = t * 0.48 + 0.8
      blockRef.current.position.x = Math.cos(a) * 0.85
      blockRef.current.position.z = Math.sin(a) * 0.85
      blockRef.current.position.y = -0.3 + Math.sin(t * 0.55 + 3) * 0.15
      blockRef.current.rotation.y += 0.006
    }
    if (scanRef.current) {
      scanRef.current.rotation.y += 0.018
      scanRef.current.scaling.setAll(1 + Math.sin(t * 1.1) * 0.04)
    }
  })

  return (
    <>
      {stdLight()}
      {stdCam(6.5)}
      <box ref={panelRef} name="panel" width={0.62} height={0.42} depth={0.03}>
        <standardMaterial name="pm" diffuseColor={BLUE} alpha={0.82} />
      </box>
      <sphere ref={orbRef} name="orb" diameter={0.4}>
        <standardMaterial name="om" diffuseColor={GOLD} alpha={0.85} />
      </sphere>
      <torus ref={ringRef} name="ring" diameter={0.5} thickness={0.12}>
        <standardMaterial name="rm" diffuseColor={GREEN} alpha={0.82} />
      </torus>
      <box ref={blockRef} name="block" width={0.32} height={0.55} depth={0.32}>
        <standardMaterial name="bm" diffuseColor={PURPLE} alpha={0.78} />
      </box>
      <torus ref={scanRef} name="scan" diameter={2.6} thickness={0.012} tessellation={64}>
        <standardMaterial name="sm" diffuseColor={BLUE} alpha={0.28} />
      </torus>
    </>
  )
}

// ─── 02. ABOUT HUB — leadership constellation ─────────────────────────────────

function AboutHubScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const sizes = [0.5, 0.4, 0.4]
  const colors = [GOLD, BLUE, BLUE]
  const radii = [0, 1.4, 1.9]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      if (i === 0) {
        r.current.rotation.y += 0.005
        r.current.position.y = Math.sin(t * 0.6) * 0.12
        return
      }
      const a = t * (0.3 + i * 0.12) + i * 2.4
      r.current.position.x = Math.cos(a) * radii[i]
      r.current.position.z = Math.sin(a) * radii[i]
      r.current.position.y = Math.sin(t * 0.5 + i) * 0.25
      r.current.rotation.y += 0.008
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(6)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`p${i}`} diameter={sizes[i]} segments={16}>
          <standardMaterial name={`pm${i}`} diffuseColor={colors[i]} alpha={0.85} />
        </sphere>
      ))}
      <torus name="orbit" diameter={3.8} thickness={0.012}>
        <standardMaterial name="om" diffuseColor={BLUE} alpha={0.15} />
      </torus>
    </>
  )
}

// ─── 03. ABOUT/STORY — rising spiral timeline ─────────────────────────────────

function AboutStoryScene() {
  const markerRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    markerRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.35 + i * 1.15
      const radius = 0.6 + i * 0.22
      const y = -0.9 + i * 0.45
      r.current.position.x = Math.cos(a) * radius
      r.current.position.z = Math.sin(a) * radius
      r.current.position.y = y + Math.sin(t * 0.6 + i) * 0.05
      r.current.rotation.y += 0.01
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(6)}
      {markerRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`m${i}`} diameter={0.22 + i * 0.03}>
          <standardMaterial name={`mm${i}`} diffuseColor={i === markerRefs.length - 1 ? GOLD : BLUE} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 04. ABOUT/TEAM — three leaders, fixed triangle formation ────────────────

function AboutTeamScene() {
  const ceoRef = useRef<any>(null)
  const ctoRef = useRef<any>(null)
  const mdRef  = useRef<any>(null)

  useAnimation((t) => {
    if (ceoRef.current) { ceoRef.current.position.y = 0.55 + Math.sin(t * 0.5) * 0.1; ceoRef.current.rotation.y += 0.006 }
    if (ctoRef.current) { ctoRef.current.position.y = -0.35 + Math.sin(t * 0.55 + 1.3) * 0.1; ctoRef.current.rotation.y += 0.007 }
    if (mdRef.current)  { mdRef.current.position.y  = -0.35 + Math.sin(t * 0.6 + 2.6) * 0.1;  mdRef.current.rotation.y += 0.007 }
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      <sphere ref={ceoRef} name="ceo" diameter={0.55} position={new Vector3(0, 0.55, 0)}>
        <standardMaterial name="ceom" diffuseColor={GOLD} alpha={0.88} />
      </sphere>
      <sphere ref={ctoRef} name="cto" diameter={0.45} position={new Vector3(-1.1, -0.35, 0.3)}>
        <standardMaterial name="ctom" diffuseColor={BLUE} alpha={0.85} />
      </sphere>
      <sphere ref={mdRef} name="md" diameter={0.45} position={new Vector3(1.1, -0.35, -0.3)}>
        <standardMaterial name="mdm" diffuseColor={BLUE} alpha={0.85} />
      </sphere>
    </>
  )
}

// ─── 05. ABOUT/WHY — jagged vs smooth duel ────────────────────────────────────

function AboutWhyScene() {
  const jaggedRef = useRef<any>(null)
  const smoothRef = useRef<any>(null)

  useAnimation((t) => {
    if (jaggedRef.current) {
      const a = t * 0.6
      jaggedRef.current.position.x = Math.cos(a) * 1.2
      jaggedRef.current.position.z = Math.sin(a) * 1.2
      jaggedRef.current.rotation.x += 0.02
      jaggedRef.current.rotation.y += 0.015
    }
    if (smoothRef.current) {
      const a = t * 0.6 + Math.PI
      smoothRef.current.position.x = Math.cos(a) * 1.2
      smoothRef.current.position.z = Math.sin(a) * 1.2
      smoothRef.current.rotation.y += 0.008
      smoothRef.current.scaling.setAll(1 + Math.sin(t * 0.4) * 0.06)
    }
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      <sphere ref={jaggedRef} name="jagged" diameter={0.55} segments={2}>
        <standardMaterial name="jm" diffuseColor={RED} alpha={0.75} />
      </sphere>
      <sphere ref={smoothRef} name="smooth" diameter={0.55} segments={32}>
        <standardMaterial name="sm" diffuseColor={GOLD} alpha={0.88} />
      </sphere>
    </>
  )
}

// ─── 06. SERVICES HUB — six disciplines in a ring ─────────────────────────────

function ServicesHubScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const colors = [BLUE, GREEN, GOLD, RED, PURPLE, CYAN]
  const shapes: ('box' | 'sphere' | 'torus')[] = ['box', 'sphere', 'torus', 'box', 'sphere', 'torus']

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.x += 0.005 + i * 0.001
      r.current.rotation.y += 0.008 + i * 0.002
      r.current.position.y = Math.sin(t * 0.6 + i * 1.05) * 0.3
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(7)}
      {refs.map((r, i) => {
        const a = (i / 6) * Math.PI * 2
        const pos = new Vector3(Math.cos(a) * 2, 0, Math.sin(a) * 2)
        if (shapes[i] === 'box') return <box ref={r} key={i} name={`s${i}`} size={0.38} position={pos}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.82} /></box>
        if (shapes[i] === 'torus') return <torus ref={r} key={i} name={`s${i}`} diameter={0.4} thickness={0.1} position={pos}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.82} /></torus>
        return <sphere ref={r} key={i} name={`s${i}`} diameter={0.4} position={pos}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.82} /></sphere>
      })}
    </>
  )
}

// ─── 07. SERVICES/WEB-DESIGN — stacked browser panels ─────────────────────────

function SvcWebScene() {
  const cfg = [
    { pos: new Vector3(-1.0, 0.15, 0.2), ry: -0.35 },
    { pos: new Vector3(0.1, 0, -0.3), ry: 0.05 },
    { pos: new Vector3(1.0, -0.15, 0.15), ry: 0.4 },
  ]
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.y = cfg[i].ry + Math.sin(t * 0.3 + i * 1.1) * 0.07
      r.current.position.y = cfg[i].pos.y + Math.sin(t * 0.6 + i * 1.2) * 0.15
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      {refs.map((r, i) => (
        <box ref={r} key={i} name={`scr${i}`} width={0.78} height={0.54} depth={0.04} position={cfg[i].pos} rotation={new Vector3(0, cfg[i].ry, 0)}>
          <standardMaterial name={`scrm${i}`} diffuseColor={BLUE} alpha={0.25 + i * 0.22} wireframe={i === 0} />
        </box>
      ))}
    </>
  )
}

// ─── 08. SERVICES/SEO — bar chart + search ring ───────────────────────────────

function SvcSeoScene() {
  const barData = [{ h: 0.6, x: -1.0 }, { h: 1.0, x: -0.4 }, { h: 1.5, x: 0.2 }, { h: 0.85, x: 0.8 }]
  const barRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const ringRef = useRef<any>(null)

  useAnimation((t) => {
    barRefs.forEach((r, i) => {
      if (!r.current) return
      r.current.scaling.y = 1 + Math.sin(t * 0.5 + i * 0.8) * 0.05
    })
    if (ringRef.current) { ringRef.current.rotation.z += 0.012; ringRef.current.position.x = 0.9 + Math.cos(t * 0.4) * 0.3 }
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      {barRefs.map((r, i) => (
        <cylinder ref={r} key={i} name={`bar${i}`} height={barData[i].h} diameter={0.26} tessellation={12} position={new Vector3(barData[i].x, -0.8 + barData[i].h / 2, 0)}>
          <standardMaterial name={`bm${i}`} diffuseColor={GREEN} alpha={0.85} />
        </cylinder>
      ))}
      <torus ref={ringRef} name="ring" diameter={0.7} thickness={0.05} position={new Vector3(0.9, 0.6, 0.3)}>
        <standardMaterial name="rm" diffuseColor={BLUE} alpha={0.7} />
      </torus>
    </>
  )
}

// ─── 09. SERVICES/BRANDING — irregular polyhedra cycling colors ──────────────

function SvcBrandingScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const cfgs = [
    { pos: new Vector3(-0.8, 0.15, -0.3), c: BLUE },
    { pos: new Vector3(0.85, -0.1, 0.4), c: GOLD },
    { pos: new Vector3(0.05, 0.5, -0.8), c: WHITE },
    { pos: new Vector3(0.4, -0.45, 0.8), c: PURPLE },
  ]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.x += 0.006 + i * 0.002
      r.current.rotation.y += 0.009
      r.current.position.y = cfgs[i].pos.y + Math.sin(t * 0.6 + i * 1.3) * 0.18
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`p${i}`} diameter={0.3 + i * 0.05} segments={3} position={cfgs[i].pos}>
          <standardMaterial name={`pm${i}`} diffuseColor={cfgs[i].c} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 10. SERVICES/MEDIA — film reel with drifting play marker ────────────────

function SvcMediaScene() {
  const reelRef = useRef<any>(null)
  const reel2Ref = useRef<any>(null)
  const playRef = useRef<any>(null)

  useAnimation((t) => {
    if (reelRef.current)  reelRef.current.rotation.y += 0.012
    if (reel2Ref.current) { reel2Ref.current.rotation.y -= 0.018; reel2Ref.current.rotation.z += 0.006 }
    if (playRef.current) { playRef.current.position.y = 0.3 + Math.sin(t * 0.9) * 0.4; playRef.current.rotation.y += 0.01 }
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      <torus ref={reelRef} name="reel" diameter={1.5} thickness={0.13} tessellation={48} rotation={new Vector3(Math.PI / 6, 0, 0)}>
        <standardMaterial name="rlm" diffuseColor={RED} alpha={0.78} />
      </torus>
      <torus ref={reel2Ref} name="reel2" diameter={0.9} thickness={0.07} tessellation={32} rotation={new Vector3(-Math.PI / 4, 0, 0)}>
        <standardMaterial name="rl2m" diffuseColor={GOLD} alpha={0.55} />
      </torus>
      <cylinder ref={playRef} name="play" diameterBottom={0} diameterTop={0.36} height={0.4} tessellation={3} position={new Vector3(-0.6, 0.3, 0.2)} rotation={new Vector3(0, Math.PI / 6, -Math.PI / 2)}>
        <standardMaterial name="plm" diffuseColor={WHITE} alpha={0.9} />
      </cylinder>
    </>
  )
}

// ─── 11. SERVICES/ARCH-VIZ — low-poly skyline ─────────────────────────────────

function SvcArchVizScene() {
  const bldgs = [
    { w: 0.5, h: 1.3, d: 0.5, x: -1.1, z: 0.3 },
    { w: 0.65, h: 1.9, d: 0.6, x: 0, z: -0.3 },
    { w: 0.4, h: 0.85, d: 0.45, x: 1.1, z: 0.2 },
  ]
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    if (refs[1].current) refs[1].current.rotation.y = Math.sin(t * 0.3) * 0.015
  })

  return (
    <>
      {stdLight()}
      {stdCam(6)}
      {refs.map((r, i) => (
        <box ref={r} key={i} name={`bld${i}`} width={bldgs[i].w} height={bldgs[i].h} depth={bldgs[i].d} position={new Vector3(bldgs[i].x, -0.9 + bldgs[i].h / 2, bldgs[i].z)}>
          <standardMaterial name={`bm${i}`} diffuseColor={BLUE} alpha={0.85} wireframe />
        </box>
      ))}
      <box name="gnd" width={3.6} height={0.04} depth={2.2} position={new Vector3(0, -0.9, 0)}>
        <standardMaterial name="gm" diffuseColor={BLUE} alpha={0.18} />
      </box>
    </>
  )
}

// ─── 12. SERVICES/CYBERSECURITY — shield + orbiting nodes ─────────────────────

function SvcSecurityScene() {
  const shieldRef = useRef<any>(null)
  const orbit1Ref = useRef<any>(null)
  const orbit2Ref = useRef<any>(null)
  const nodeRefs  = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.x += 0.004
      shieldRef.current.rotation.y += 0.007
      shieldRef.current.scaling.setAll(1 + Math.sin(t * 1.5) * 0.03)
    }
    if (orbit1Ref.current) orbit1Ref.current.rotation.y += 0.006
    if (orbit2Ref.current) orbit2Ref.current.rotation.y -= 0.003
    nodeRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.8 + (i * Math.PI) / 3
      r.current.position.x = Math.cos(a) * 1.1
      r.current.position.z = Math.sin(a) * 1.1
      r.current.position.y = Math.sin(t * 1.2 + i) * 0.15
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(6)}
      <sphere ref={shieldRef} name="shield" diameter={0.6} segments={3}>
        <standardMaterial name="shm" diffuseColor={BLUE} alpha={0.88} />
      </sphere>
      <torus ref={orbit1Ref} name="r1" diameter={2.4} thickness={0.022}>
        <standardMaterial name="rm1" diffuseColor={BLUE} alpha={0.3} />
      </torus>
      <torus ref={orbit2Ref} name="r2" diameter={3.5} thickness={0.015}>
        <standardMaterial name="rm2" diffuseColor={BLUE} alpha={0.15} />
      </torus>
      {nodeRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`nd${i}`} diameter={0.1}>
          <standardMaterial name={`nm${i}`} diffuseColor={WHITE} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 13. PORTFOLIO HUB — gallery of 8 floating frames ─────────────────────────

function PortfolioHubScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.y = Math.sin(t * 0.3 + i * 0.9) * 0.25
      r.current.position.y = -0.6 + (i % 4) * 0.4 + Math.sin(t * 0.45 + i) * 0.08
    })
  })

  const cols = 4
  return (
    <>
      {stdLight()}
      {stdCam(7)}
      {refs.map((r, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const x = (col - (cols - 1) / 2) * 0.85
        const z = row === 0 ? -0.3 : 0.3
        return (
          <box ref={r} key={i} name={`f${i}`} width={0.42} height={0.3} depth={0.02} position={new Vector3(x, -0.6 + row * 0.4, z)}>
            <standardMaterial name={`fm${i}`} diffuseColor={i % 2 === 0 ? BLUE : GOLD} alpha={0.3 + (i % 3) * 0.15} />
          </box>
        )
      })}
    </>
  )
}

// ─── 14. PORTFOLIO/WEB-DESIGN — single rotating panel ─────────────────────────

function PortfolioWebScene() {
  const panelRef = useRef<any>(null)
  useAnimation((t) => {
    if (panelRef.current) {
      panelRef.current.rotation.y = t * 0.5
      panelRef.current.position.y = Math.sin(t * 0.5) * 0.15
    }
  })
  return (
    <>
      {stdLight()}
      {stdCam(5)}
      <box ref={panelRef} name="panel" width={1.4} height={0.9} depth={0.04}>
        <standardMaterial name="pm" diffuseColor={BLUE} alpha={0.55} wireframe />
      </box>
    </>
  )
}

// ─── 15. PORTFOLIO/BRANDING — three blending color swatches ───────────────────

function PortfolioBrandingScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const colors = [BLUE, GOLD, PURPLE]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.5 + (i * Math.PI * 2) / 3
      r.current.position.x = Math.cos(a) * 0.7
      r.current.position.z = Math.sin(a) * 0.7
      r.current.position.y = Math.sin(t * 0.6 + i) * 0.2
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(5)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`c${i}`} diameter={0.55} segments={20}>
          <standardMaterial name={`cm${i}`} diffuseColor={colors[i]} alpha={0.7} />
        </sphere>
      ))}
    </>
  )
}

// ─── 16. PORTFOLIO/VIDEO — spinning reel with trailing frames ────────────────

function PortfolioVideoScene() {
  const reelRef = useRef<any>(null)
  const frameRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    if (reelRef.current) reelRef.current.rotation.y += 0.015
    frameRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.4 - i * 0.5
      r.current.position.x = Math.cos(a) * 1.5
      r.current.position.z = Math.sin(a) * 1.5
      r.current.rotation.y = a + Math.PI / 2
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      <torus ref={reelRef} name="reel" diameter={1.1} thickness={0.1} tessellation={40}>
        <standardMaterial name="rm" diffuseColor={RED} alpha={0.8} />
      </torus>
      {frameRefs.map((r, i) => (
        <box ref={r} key={i} name={`fr${i}`} width={0.3} height={0.2} depth={0.02}>
          <standardMaterial name={`frm${i}`} diffuseColor={WHITE} alpha={0.5 - i * 0.12} />
        </box>
      ))}
    </>
  )
}

// ─── 17. BLOG HUB — fanned stack of 6 articles ────────────────────────────────

function BlogHubScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.position.y = Math.sin(t * 0.5 + i * 0.8) * 0.12
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(6)}
      {refs.map((r, i) => {
        const angle = (i - 2.5) * 0.28
        return (
          <box ref={r} key={i} name={`pg${i}`} width={0.55} height={0.75} depth={0.02}
            position={new Vector3(Math.sin(angle) * 1.6, 0, -Math.cos(angle) * 1.6 + 1.4)}
            rotation={new Vector3(0, -angle, 0)}
          >
            <standardMaterial name={`pgm${i}`} diffuseColor={CYAN} alpha={0.3 + (i % 3) * 0.15} />
          </box>
        )
      })}
    </>
  )
}

// ─── 18. BLOG/WEBSITE — flat panel with orbiting cursor ───────────────────────

function BlogWebsiteScene() {
  const panelRef = useRef<any>(null)
  const cursorRef = useRef<any>(null)

  useAnimation((t) => {
    if (panelRef.current) panelRef.current.rotation.y = Math.sin(t * 0.25) * 0.15
    if (cursorRef.current) {
      cursorRef.current.position.x = Math.sin(t * 0.8) * 0.6
      cursorRef.current.position.y = Math.cos(t * 1.1) * 0.4
    }
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      <box ref={panelRef} name="panel" width={1.3} height={0.85} depth={0.03}>
        <standardMaterial name="pm" diffuseColor={BLUE} alpha={0.3} wireframe />
      </box>
      <sphere ref={cursorRef} name="cursor" diameter={0.08} position={new Vector3(0, 0, 0.1)}>
        <standardMaterial name="cm" diffuseColor={WHITE} alpha={0.9} />
      </sphere>
    </>
  )
}

// ─── 19. BLOG/LOCAL-SEO — map pin with expanding ping rings ───────────────────

function BlogSeoScene() {
  const pinRef = useRef<any>(null)
  const ring1Ref = useRef<any>(null)
  const ring2Ref = useRef<any>(null)

  useAnimation((t) => {
    if (pinRef.current) pinRef.current.position.y = Math.sin(t * 0.7) * 0.1
    const p1 = (t * 0.4) % 1
    const p2 = ((t * 0.4) + 0.5) % 1
    if (ring1Ref.current) { ring1Ref.current.scaling.setAll(0.3 + p1 * 1.6); if (ring1Ref.current.material) ring1Ref.current.material.alpha = 0.5 * (1 - p1) }
    if (ring2Ref.current) { ring2Ref.current.scaling.setAll(0.3 + p2 * 1.6); if (ring2Ref.current.material) ring2Ref.current.material.alpha = 0.5 * (1 - p2) }
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      <cylinder ref={pinRef} name="pin" diameterTop={0} diameterBottom={0.35} height={0.5} tessellation={24} rotation={new Vector3(Math.PI, 0, 0)}>
        <standardMaterial name="pinm" diffuseColor={GREEN} alpha={0.9} />
      </cylinder>
      <torus ref={ring1Ref} name="r1" diameter={0.9} thickness={0.025} rotation={new Vector3(Math.PI / 2, 0, 0)}>
        <standardMaterial name="r1m" diffuseColor={GREEN} alpha={0.5} />
      </torus>
      <torus ref={ring2Ref} name="r2" diameter={0.9} thickness={0.025} rotation={new Vector3(Math.PI / 2, 0, 0)}>
        <standardMaterial name="r2m" diffuseColor={GREEN} alpha={0.5} />
      </torus>
    </>
  )
}

// ─── 20. BLOG/BRANDING-STARTUP — three spheres merging to center ─────────────

function BlogBrandingScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const colors = [BLUE, GOLD, WHITE]

  useAnimation((t) => {
    const merge = (Math.sin(t * 0.4) + 1) / 2
    refs.forEach((r, i) => {
      if (!r.current) return
      const a = (i * Math.PI * 2) / 3
      const radius = 0.3 + merge * 0.9
      r.current.position.x = Math.cos(a) * radius
      r.current.position.z = Math.sin(a) * radius
      r.current.rotation.y += 0.01
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`s${i}`} diameter={0.4} segments={3}>
          <standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 21. BLOG/META-ADS — pulsing ad unit with orbiting particles ─────────────

function BlogAdsScene() {
  const adRef = useRef<any>(null)
  const particleRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    if (adRef.current) adRef.current.scaling.setAll(1 + Math.sin(t * 1.4) * 0.08)
    particleRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.6 + (i * Math.PI) / 2
      r.current.position.x = Math.cos(a) * 1.1
      r.current.position.z = Math.sin(a) * 1.1
      r.current.position.y = Math.sin(t * 0.7 + i) * 0.3
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      <box ref={adRef} name="ad" width={0.75} height={0.55} depth={0.04}>
        <standardMaterial name="adm" diffuseColor={RED} alpha={0.8} />
      </box>
      {particleRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`p${i}`} diameter={0.1}>
          <standardMaterial name={`pm${i}`} diffuseColor={GOLD} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 22. BLOG/NEXTJS-VS-WORDPRESS — sharp vs rounded duel ─────────────────────

function BlogNextjsScene() {
  const sharpRef = useRef<any>(null)
  const roundRef = useRef<any>(null)

  useAnimation((t) => {
    if (sharpRef.current) {
      const a = t * 0.5
      sharpRef.current.position.x = Math.cos(a) * 0.9
      sharpRef.current.rotation.y += 0.012
      sharpRef.current.rotation.x += 0.006
    }
    if (roundRef.current) {
      const a = t * 0.5 + Math.PI
      roundRef.current.position.x = Math.cos(a) * 0.9
      roundRef.current.rotation.y += 0.006
    }
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      <box ref={sharpRef} name="sharp" size={0.5}>
        <standardMaterial name="shm" diffuseColor={WHITE} alpha={0.7} wireframe />
      </box>
      <sphere ref={roundRef} name="round" diameter={0.55} segments={28}>
        <standardMaterial name="rdm" diffuseColor={BLUE} alpha={0.85} />
      </sphere>
    </>
  )
}

// ─── 23. BLOG/CORE-WEB-VITALS — three spheres bouncing at different speeds ────

function BlogVitalsScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const speeds = [1.6, 1.0, 2.2]
  const colors = [BLUE, GOLD, GREEN]
  const xs = [-0.9, 0, 0.9]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.position.y = -0.3 + Math.abs(Math.sin(t * speeds[i])) * 0.6
      r.current.rotation.y += 0.01
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`v${i}`} diameter={0.36} position={new Vector3(xs[i], 0, 0)}>
          <standardMaterial name={`vm${i}`} diffuseColor={colors[i]} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 24. PRICING — three-tier gem cluster ─────────────────────────────────────

function PricingScene() {
  const refs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const cfg = [
    { d: 0.42, x: -1.2, y: -0.1, c: PURPLE },
    { d: 0.62, x: 0, y: 0.2, c: BLUE },
    { d: 0.48, x: 1.2, y: 0, c: GOLD },
  ]

  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.x += 0.006 + i * 0.003
      r.current.rotation.y += 0.01 + i * 0.004
      r.current.position.y = cfg[i].y + Math.sin(t * 0.7 + i * 1.4) * 0.22
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(6)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`g${i}`} diameter={cfg[i].d} segments={2} position={new Vector3(cfg[i].x, cfg[i].y, 0)}>
          <standardMaterial name={`gm${i}`} diffuseColor={cfg[i].c} alpha={0.88} />
        </sphere>
      ))}
    </>
  )
}

// ─── 25. CAREERS — ascending staggered steps with climbing marker ────────────

function CareersScene() {
  const levels = [0.4, 0.7, 1.05, 1.45, 1.9]
  const xPos = [-1.6, -0.8, 0, 0.8, 1.6]
  const barRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const starRef = useRef<any>(null)

  useAnimation((t) => {
    barRefs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.y += 0.004 + i * 0.002
      r.current.scaling.y = 1 + Math.sin(t * 0.5 + i * 0.7) * 0.03
    })
    if (starRef.current) {
      starRef.current.rotation.x += 0.01
      starRef.current.rotation.y += 0.015
      starRef.current.position.y = -1.0 + levels[4] + 0.2 + Math.sin(t * 1.8) * 0.1
    }
  })

  return (
    <>
      {stdLight()}
      {stdCam(6.5)}
      {barRefs.map((r, i) => (
        <cylinder ref={r} key={i} name={`lv${i}`} height={levels[i]} diameter={0.3} tessellation={16} position={new Vector3(xPos[i], -1.0 + levels[i] / 2, 0)}>
          <standardMaterial name={`lvm${i}`} diffuseColor={GREEN} alpha={0.85} />
        </cylinder>
      ))}
      <sphere ref={starRef} name="star" diameter={0.18} segments={3} position={new Vector3(1.6, -1.0 + levels[4] + 0.2, 0)}>
        <standardMaterial name="stm" diffuseColor={GOLD} alpha={0.9} />
      </sphere>
    </>
  )
}

// ─── 26. CONTACT — hub + satellites ────────────────────────────────────────────

function ContactScene() {
  const hubRef  = useRef<any>(null)
  const satRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]
  const ringRef = useRef<any>(null)

  useAnimation((t) => {
    if (hubRef.current) {
      hubRef.current.scaling.setAll(1 + Math.sin(t * 1.5) * 0.05)
      hubRef.current.rotation.y += 0.007
    }
    if (ringRef.current) ringRef.current.rotation.z += 0.003
    satRefs.forEach((r, i) => {
      if (!r.current) return
      const spd = 0.5 + i * 0.2
      const rad = 0.9 + i * 0.22
      r.current.position.x = Math.cos(t * spd + i * 1.57) * rad
      r.current.position.z = Math.sin(t * spd + i * 1.57) * rad
      r.current.position.y = Math.sin(t * 0.8 + i) * 0.3
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(5.5)}
      <sphere ref={hubRef} name="hub" diameter={0.55} segments={16}>
        <standardMaterial name="hm" diffuseColor={BLUE} alpha={0.9} />
      </sphere>
      <torus ref={ringRef} name="ring" diameter={2.6} thickness={0.025}>
        <standardMaterial name="rinm" diffuseColor={BLUE} alpha={0.25} />
      </torus>
      {satRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`sat${i}`} diameter={0.14 + i * 0.04}>
          <standardMaterial name={`satm${i}`} diffuseColor={new Color3(0.83, 0.6 - i * 0.05, 0.2 + i * 0.15)} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── 27. LEGAL/PRIVACY — calm rotating lock ───────────────────────────────────

function LegalPrivacyScene() {
  const bodyRef = useRef<any>(null)
  const shackleRef = useRef<any>(null)

  useAnimation(() => {
    if (bodyRef.current) bodyRef.current.rotation.y += 0.004
    if (shackleRef.current) shackleRef.current.rotation.y += 0.004
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      <box ref={bodyRef} name="body" width={0.5} height={0.42} depth={0.3}>
        <standardMaterial name="bm" diffuseColor={BLUE} alpha={0.78} />
      </box>
      <torus ref={shackleRef} name="shackle" diameter={0.34} thickness={0.07} position={new Vector3(0, 0.32, 0)} rotation={new Vector3(Math.PI / 2, 0, 0)}>
        <standardMaterial name="shm" diffuseColor={GOLD} alpha={0.85} />
      </torus>
    </>
  )
}

// ─── 28. LEGAL/TERMS — calm rotating document tablet ──────────────────────────

function LegalTermsScene() {
  const docRef = useRef<any>(null)
  const lineRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation(() => {
    if (docRef.current) docRef.current.rotation.y += 0.0035
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.5)}
      <box ref={docRef} name="doc" width={0.55} height={0.72} depth={0.03}>
        <standardMaterial name="dm" diffuseColor={WHITE} alpha={0.18} />
      </box>
      {lineRefs.map((r, i) => (
        <box ref={r} key={i} name={`ln${i}`} width={0.36} height={0.025} depth={0.02} position={new Vector3(0, 0.18 - i * 0.16, 0.02)}>
          <standardMaterial name={`lnm${i}`} diffuseColor={BLUE} alpha={0.6} />
        </box>
      ))}
    </>
  )
}

// ─── 29. LEGAL/DATA-HANDLING — orbiting data block cluster ───────────────────

function LegalDataScene() {
  const coreRef = useRef<any>(null)
  const blockRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    if (coreRef.current) coreRef.current.rotation.y += 0.006
    blockRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.5 + (i * Math.PI) / 2
      r.current.position.x = Math.cos(a) * 0.95
      r.current.position.z = Math.sin(a) * 0.95
      r.current.position.y = Math.sin(t * 0.6 + i) * 0.2
      r.current.rotation.y += 0.012
    })
  })

  return (
    <>
      {stdLight()}
      {stdCam(4.8)}
      <sphere ref={coreRef} name="core" diameter={0.4}>
        <standardMaterial name="cm" diffuseColor={BLUE} alpha={0.85} />
      </sphere>
      {blockRefs.map((r, i) => (
        <box ref={r} key={i} name={`db${i}`} size={0.22}>
          <standardMaterial name={`dbm${i}`} diffuseColor={i % 2 === 0 ? GOLD : GREY} alpha={0.85} />
        </box>
      ))}
    </>
  )
}

// ─── Variant dispatcher ─────────────────────────────────────────────────────────

function SceneContent({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'about-hub':           return <AboutHubScene />
    case 'about-story':         return <AboutStoryScene />
    case 'about-team':          return <AboutTeamScene />
    case 'about-why':           return <AboutWhyScene />
    case 'services-hub':        return <ServicesHubScene />
    case 'svc-web':             return <SvcWebScene />
    case 'svc-seo':             return <SvcSeoScene />
    case 'svc-branding':        return <SvcBrandingScene />
    case 'svc-media':           return <SvcMediaScene />
    case 'svc-archviz':         return <SvcArchVizScene />
    case 'svc-security':        return <SvcSecurityScene />
    case 'portfolio-hub':       return <PortfolioHubScene />
    case 'portfolio-web':       return <PortfolioWebScene />
    case 'portfolio-branding':  return <PortfolioBrandingScene />
    case 'portfolio-video':     return <PortfolioVideoScene />
    case 'blog-hub':            return <BlogHubScene />
    case 'blog-website':        return <BlogWebsiteScene />
    case 'blog-seo':            return <BlogSeoScene />
    case 'blog-branding':       return <BlogBrandingScene />
    case 'blog-ads':            return <BlogAdsScene />
    case 'blog-nextjs':         return <BlogNextjsScene />
    case 'blog-vitals':         return <BlogVitalsScene />
    case 'pricing':             return <PricingScene />
    case 'careers':             return <CareersScene />
    case 'contact':             return <ContactScene />
    case 'legal-privacy':       return <LegalPrivacyScene />
    case 'legal-terms':         return <LegalTermsScene />
    case 'legal-data':          return <LegalDataScene />
    default:                    return <HomeScene />
  }
}

// ─── Root component ────────────────────────────────────────────────────────────

export default function BabylonSceneInner({ variant }: { variant: SceneVariant }) {
  return (
    <Engine antialias adaptToDeviceRatio style={{ width: '100%', height: '100%', display: 'block' }}>
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        <SceneContent variant={variant} />
      </Scene>
    </Engine>
  )
}
