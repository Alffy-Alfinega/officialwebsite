'use client'
import { useRef } from 'react'
import { Vector3 } from '@babylonjs/core/Maths/math'
import type { Mesh } from '@babylonjs/core/Meshes/mesh'
import { useAnimation, BLUE, GOLD, PURPLE, WHITE, RED, stdCam, stdLight } from '../babylon-shared'
import type { SceneVariant } from '../BabylonHero'

function PortfolioHubScene() {
  const refs = Array.from({ length: 8 }, () => useRef<Mesh | null>(null))
  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.y = Math.sin(t * 0.3 + i * 0.9) * 0.25
      r.current.position.y = -0.6 + (i % 4) * 0.4 + Math.sin(t * 0.45 + i) * 0.08
    })
  })
  return (
    <>
      {stdLight()}{stdCam(7)}
      {refs.map((r, i) => {
        const col = i % 4, row = Math.floor(i / 4)
        return (
          <box ref={r} key={i} name={`f${i}`} width={0.42} height={0.3} depth={0.02}
            position={new Vector3((col - 1.5) * 0.85, -0.6 + row * 0.4, row === 0 ? -0.3 : 0.3)}>
            <standardMaterial name={`fm${i}`} diffuseColor={i % 2 === 0 ? BLUE : GOLD} alpha={0.3 + (i % 3) * 0.15} />
          </box>
        )
      })}
    </>
  )
}

function PortfolioWebScene() {
  const panelRef = useRef<Mesh | null>(null)
  useAnimation((t) => {
    if (panelRef.current) { panelRef.current.rotation.y = t * 0.5; panelRef.current.position.y = Math.sin(t * 0.5) * 0.15 }
  })
  return (
    <>{stdLight()}{stdCam(5)}<box ref={panelRef} name="panel" width={1.4} height={0.9} depth={0.04}><standardMaterial name="pm" diffuseColor={BLUE} alpha={0.55} wireframe /></box></>
  )
}

function PortfolioBrandingScene() {
  const refs = Array.from({ length: 3 }, () => useRef<Mesh | null>(null))
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
    <>{stdLight()}{stdCam(5)}{refs.map((r, i) => (
      <sphere ref={r} key={i} name={`c${i}`} diameter={0.55} segments={20}><standardMaterial name={`cm${i}`} diffuseColor={colors[i]} alpha={0.7} /></sphere>
    ))}</>
  )
}

function PortfolioVideoScene() {
  const reelRef = useRef<Mesh | null>(null)
  const frameRefs = Array.from({ length: 3 }, () => useRef<Mesh | null>(null))
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
      {stdLight()}{stdCam(5.5)}
      <torus ref={reelRef} name="reel" diameter={1.1} thickness={0.1} tessellation={40}><standardMaterial name="rm" diffuseColor={RED} alpha={0.8} /></torus>
      {frameRefs.map((r, i) => (
        <box ref={r} key={i} name={`fr${i}`} width={0.3} height={0.2} depth={0.02}><standardMaterial name={`frm${i}`} diffuseColor={WHITE} alpha={0.5 - i * 0.12} /></box>
      ))}
    </>
  )
}

export default function PortfolioScenes({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'portfolio-web':      return <PortfolioWebScene />
    case 'portfolio-branding': return <PortfolioBrandingScene />
    case 'portfolio-video':    return <PortfolioVideoScene />
    default:                   return <PortfolioHubScene />
  }
}
