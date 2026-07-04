'use client'
import { useRef } from 'react'
import { useAnimation, useMeshRef, BLUE, GOLD, GREEN, PURPLE, stdCam, stdLight } from '../babylon-shared'
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'

export default function HomeScene() {
  const panelRef = useRef<AbstractMesh | null>(null)
  const orbRef   = useRef<AbstractMesh | null>(null)
  const ringRef  = useRef<AbstractMesh | null>(null)
  const blockRef = useRef<AbstractMesh | null>(null)
  const scanRef  = useRef<AbstractMesh | null>(null)

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
