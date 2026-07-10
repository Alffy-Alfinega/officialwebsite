'use client'
import { useRef } from 'react'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import type { Mesh } from '@babylonjs/core/Meshes/mesh'
import { useAnimation, BLUE, GOLD, GREEN, PURPLE, CYAN, RED, WHITE, stdCam, stdLight } from '../babylon-shared'
import type { SceneVariant } from '../BabylonHero'

function ServicesHubScene() {
  const refs = Array.from({ length: 6 }, () => useRef<Mesh | null>(null))
  const colors = [BLUE, GREEN, GOLD, RED, PURPLE, CYAN]
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
      {stdLight()}{stdCam(7)}
      {refs.map((r, i) => {
        const a = (i / 6) * Math.PI * 2
        const pos = new Vector3(Math.cos(a) * 2, 0, Math.sin(a) * 2)
        if (i === 0 || i === 3) return <box ref={r} key={i} name={`s${i}`} size={0.38} position={pos}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.82} /></box>
        if (i === 2 || i === 5) return <torus ref={r} key={i} name={`s${i}`} diameter={0.4} thickness={0.1} position={pos}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.82} /></torus>
        return <sphere ref={r} key={i} name={`s${i}`} diameter={0.4} position={pos}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.82} /></sphere>
      })}
    </>
  )
}

function SvcWebScene() {
  const cfg = [{ pos: new Vector3(-1.0, 0.15, 0.2), ry: -0.35 }, { pos: new Vector3(0.1, 0, -0.3), ry: 0.05 }, { pos: new Vector3(1.0, -0.15, 0.15), ry: 0.4 }]
  const refs = Array.from({ length: 3 }, () => useRef<Mesh | null>(null))
  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.y = cfg[i].ry + Math.sin(t * 0.3 + i * 1.1) * 0.07
      r.current.position.y = cfg[i].pos.y + Math.sin(t * 0.6 + i * 1.2) * 0.15
    })
  })
  return (
    <>
      {stdLight()}{stdCam(5.5)}
      {refs.map((r, i) => (
        <box ref={r} key={i} name={`scr${i}`} width={0.78} height={0.54} depth={0.04} position={cfg[i].pos} rotation={new Vector3(0, cfg[i].ry, 0)}>
          <standardMaterial name={`scrm${i}`} diffuseColor={BLUE} alpha={0.25 + i * 0.22} wireframe={i === 0} />
        </box>
      ))}
    </>
  )
}

function SvcSeoScene() {
  const barData = [{ h: 0.6, x: -1.0 }, { h: 1.0, x: -0.4 }, { h: 1.5, x: 0.2 }, { h: 0.85, x: 0.8 }]
  const barRefs = Array.from({ length: 4 }, () => useRef<Mesh | null>(null))
  const ringRef = useRef<Mesh | null>(null)
  useAnimation((t) => {
    barRefs.forEach((r, i) => { if (r.current) r.current.scaling.y = 1 + Math.sin(t * 0.5 + i * 0.8) * 0.05 })
    if (ringRef.current) { ringRef.current.rotation.z += 0.012; ringRef.current.position.x = 0.9 + Math.cos(t * 0.4) * 0.3 }
  })
  return (
    <>
      {stdLight()}{stdCam(5.5)}
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

function SvcBrandingScene() {
  const refs = Array.from({ length: 4 }, () => useRef<Mesh | null>(null))
  const cfgs = [{ pos: new Vector3(-0.8, 0.15, -0.3), c: BLUE }, { pos: new Vector3(0.85, -0.1, 0.4), c: GOLD }, { pos: new Vector3(0.05, 0.5, -0.8), c: WHITE }, { pos: new Vector3(0.4, -0.45, 0.8), c: PURPLE }]
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
      {stdLight()}{stdCam(5.5)}
      {refs.map((r, i) => (
        <sphere ref={r} key={i} name={`p${i}`} diameter={0.3 + i * 0.05} segments={3} position={cfgs[i].pos}>
          <standardMaterial name={`pm${i}`} diffuseColor={cfgs[i].c} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

function SvcMediaScene() {
  const reelRef = useRef<Mesh | null>(null)
  const reel2Ref = useRef<Mesh | null>(null)
  const playRef = useRef<Mesh | null>(null)
  useAnimation((t) => {
    if (reelRef.current)  reelRef.current.rotation.y += 0.012
    if (reel2Ref.current) { reel2Ref.current.rotation.y -= 0.018; reel2Ref.current.rotation.z += 0.006 }
    if (playRef.current)  { playRef.current.position.y = 0.3 + Math.sin(t * 0.9) * 0.4; playRef.current.rotation.y += 0.01 }
  })
  return (
    <>
      {stdLight()}{stdCam(5.5)}
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

function SvcArchVizScene() {
  const bldgs = [{ w:0.5, h:1.3, d:0.5, x:-1.1, z:0.3 }, { w:0.65, h:1.9, d:0.6, x:0, z:-0.3 }, { w:0.4, h:0.85, d:0.45, x:1.1, z:0.2 }]
  const refs = Array.from({ length: 3 }, () => useRef<Mesh | null>(null))
  useAnimation(() => { if (refs[1].current) refs[1].current.rotation.y += 0.003 })
  return (
    <>
      {stdLight()}{stdCam(6)}
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

function SvcSecurityScene() {
  const shieldRef = useRef<Mesh | null>(null)
  const orbit1Ref = useRef<Mesh | null>(null)
  const orbit2Ref = useRef<Mesh | null>(null)
  const nodeRefs  = Array.from({ length: 6 }, () => useRef<Mesh | null>(null))
  useAnimation((t) => {
    if (shieldRef.current) { shieldRef.current.rotation.x += 0.004; shieldRef.current.rotation.y += 0.007; shieldRef.current.scaling.setAll(1 + Math.sin(t * 1.5) * 0.03) }
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
      {stdLight()}{stdCam(6)}
      <sphere ref={shieldRef} name="shield" diameter={0.6} segments={3}><standardMaterial name="shm" diffuseColor={BLUE} alpha={0.88} /></sphere>
      <torus ref={orbit1Ref} name="r1" diameter={2.4} thickness={0.022}><standardMaterial name="rm1" diffuseColor={BLUE} alpha={0.3} /></torus>
      <torus ref={orbit2Ref} name="r2" diameter={3.5} thickness={0.015}><standardMaterial name="rm2" diffuseColor={BLUE} alpha={0.15} /></torus>
      {nodeRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`nd${i}`} diameter={0.1}><standardMaterial name={`nm${i}`} diffuseColor={WHITE} alpha={0.85} /></sphere>
      ))}
    </>
  )
}

export default function ServiceScenes({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'svc-web':      return <SvcWebScene />
    case 'svc-seo':      return <SvcSeoScene />
    case 'svc-branding': return <SvcBrandingScene />
    case 'svc-media':    return <SvcMediaScene />
    case 'svc-archviz':  return <SvcArchVizScene />
    case 'svc-security': return <SvcSecurityScene />
    default:             return <ServicesHubScene />
  }
}
