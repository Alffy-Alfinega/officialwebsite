'use client'
import { useRef } from 'react'
import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import { useAnimation, BLUE, GOLD, GREEN, PURPLE, WHITE, GREY, stdCam, stdLight } from '../babylon-shared'
import type { SceneVariant } from '../BabylonHero'

function PricingScene() {
  const refs = Array.from({ length: 3 }, () => useRef<AbstractMesh | null>(null))
  const cfg = [{ d:0.42, x:-1.2, y:-0.1, c:PURPLE }, { d:0.62, x:0, y:0.2, c:BLUE }, { d:0.48, x:1.2, y:0, c:GOLD }]
  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.x += 0.006 + i * 0.003
      r.current.rotation.y += 0.01 + i * 0.004
      r.current.position.y = cfg[i].y + Math.sin(t * 0.7 + i * 1.4) * 0.22
    })
  })
  return (<>{stdLight()}{stdCam(6)}{refs.map((r, i) => (<sphere ref={r} key={i} name={`g${i}`} diameter={cfg[i].d} segments={2} position={new Vector3(cfg[i].x, cfg[i].y, 0)}><standardMaterial name={`gm${i}`} diffuseColor={cfg[i].c} alpha={0.88} /></sphere>))}</>)
}

function CareersScene() {
  const levels = [0.4, 0.7, 1.05, 1.45, 1.9], xPos = [-1.6, -0.8, 0, 0.8, 1.6]
  const barRefs = Array.from({ length: 5 }, () => useRef<AbstractMesh | null>(null))
  const starRef = useRef<AbstractMesh | null>(null)
  useAnimation((t) => {
    barRefs.forEach((r, i) => { if (r.current) { r.current.rotation.y += 0.004 + i * 0.002; r.current.scaling.y = 1 + Math.sin(t * 0.5 + i * 0.7) * 0.03 } })
    if (starRef.current) { starRef.current.rotation.x += 0.01; starRef.current.rotation.y += 0.015; starRef.current.position.y = -1.0 + levels[4] + 0.2 + Math.sin(t * 1.8) * 0.1 }
  })
  return (
    <>{stdLight()}{stdCam(6.5)}
    {barRefs.map((r, i) => (<cylinder ref={r} key={i} name={`lv${i}`} height={levels[i]} diameter={0.3} tessellation={16} position={new Vector3(xPos[i], -1.0 + levels[i] / 2, 0)}><standardMaterial name={`lvm${i}`} diffuseColor={GREEN} alpha={0.85} /></cylinder>))}
    <sphere ref={starRef} name="star" diameter={0.18} segments={3} position={new Vector3(1.6, -1.0 + levels[4] + 0.2, 0)}><standardMaterial name="stm" diffuseColor={GOLD} alpha={0.9} /></sphere>
    </>
  )
}

function ContactScene() {
  const hubRef  = useRef<AbstractMesh | null>(null)
  const satRefs = Array.from({ length: 4 }, () => useRef<AbstractMesh | null>(null))
  const ringRef = useRef<AbstractMesh | null>(null)
  useAnimation((t) => {
    if (hubRef.current) { hubRef.current.scaling.setAll(1 + Math.sin(t * 1.5) * 0.05); hubRef.current.rotation.y += 0.007 }
    if (ringRef.current) ringRef.current.rotation.z += 0.003
    satRefs.forEach((r, i) => {
      if (!r.current) return
      const spd = 0.5 + i * 0.2, rad = 0.9 + i * 0.22
      r.current.position.x = Math.cos(t * spd + i * 1.57) * rad
      r.current.position.z = Math.sin(t * spd + i * 1.57) * rad
      r.current.position.y = Math.sin(t * 0.8 + i) * 0.3
    })
  })
  return (
    <>{stdLight()}{stdCam(5.5)}
    <sphere ref={hubRef} name="hub" diameter={0.55} segments={16}><standardMaterial name="hm" diffuseColor={BLUE} alpha={0.9} /></sphere>
    <torus ref={ringRef} name="ring" diameter={2.6} thickness={0.025}><standardMaterial name="rinm" diffuseColor={BLUE} alpha={0.25} /></torus>
    {satRefs.map((r, i) => (<sphere ref={r} key={i} name={`sat${i}`} diameter={0.14 + i * 0.04}><standardMaterial name={`satm${i}`} diffuseColor={new Color3(0.83, 0.6 - i * 0.05, 0.2 + i * 0.15)} alpha={0.85} /></sphere>))}
    </>
  )
}

function LegalPrivacyScene() {
  const bodyRef = useRef<AbstractMesh | null>(null)
  const shackleRef = useRef<AbstractMesh | null>(null)
  useAnimation(() => { if (bodyRef.current) bodyRef.current.rotation.y += 0.004; if (shackleRef.current) shackleRef.current.rotation.y += 0.004 })
  return (<>{stdLight()}{stdCam(4.5)}
  <box ref={bodyRef} name="body" width={0.5} height={0.42} depth={0.3}><standardMaterial name="bm" diffuseColor={BLUE} alpha={0.78} /></box>
  <torus ref={shackleRef} name="shackle" diameter={0.34} thickness={0.07} position={new Vector3(0, 0.32, 0)} rotation={new Vector3(Math.PI / 2, 0, 0)}><standardMaterial name="shm" diffuseColor={GOLD} alpha={0.85} /></torus>
  </>)
}

function LegalTermsScene() {
  const docRef = useRef<AbstractMesh | null>(null)
  const lineRefs = Array.from({ length: 3 }, () => useRef<AbstractMesh | null>(null))
  useAnimation(() => { if (docRef.current) docRef.current.rotation.y += 0.0035 })
  return (<>{stdLight()}{stdCam(4.5)}
  <box ref={docRef} name="doc" width={0.55} height={0.72} depth={0.03}><standardMaterial name="dm" diffuseColor={WHITE} alpha={0.18} /></box>
  {lineRefs.map((r, i) => (<box ref={r} key={i} name={`ln${i}`} width={0.36} height={0.025} depth={0.02} position={new Vector3(0, 0.18 - i * 0.16, 0.02)}><standardMaterial name={`lnm${i}`} diffuseColor={BLUE} alpha={0.6} /></box>))}
  </>)
}

function LegalDataScene() {
  const coreRef = useRef<AbstractMesh | null>(null)
  const blockRefs = Array.from({ length: 4 }, () => useRef<AbstractMesh | null>(null))
  useAnimation((t) => {
    if (coreRef.current) coreRef.current.rotation.y += 0.006
    blockRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.5 + (i * Math.PI) / 2
      r.current.position.x = Math.cos(a) * 0.95; r.current.position.z = Math.sin(a) * 0.95
      r.current.position.y = Math.sin(t * 0.6 + i) * 0.2; r.current.rotation.y += 0.012
    })
  })
  return (<>{stdLight()}{stdCam(4.8)}
  <sphere ref={coreRef} name="core" diameter={0.4}><standardMaterial name="cm" diffuseColor={BLUE} alpha={0.85} /></sphere>
  {blockRefs.map((r, i) => (<box ref={r} key={i} name={`db${i}`} size={0.22}><standardMaterial name={`dbm${i}`} diffuseColor={i % 2 === 0 ? GOLD : GREY} alpha={0.85} /></box>))}
  </>)
}

export default function MiscScenes({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'careers':       return <CareersScene />
    case 'contact':       return <ContactScene />
    case 'legal-privacy': return <LegalPrivacyScene />
    case 'legal-terms':   return <LegalTermsScene />
    case 'legal-data':    return <LegalDataScene />
    default:              return <PricingScene />
  }
}
