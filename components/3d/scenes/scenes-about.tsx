'use client'
import { useRef } from 'react'
import { Vector3 } from '@babylonjs/core/Maths/math'
import type { AbstractMesh } from '@babylonjs/core/Meshes/abstractMesh'
import { useAnimation, BLUE, GOLD, RED, stdCam, stdLight } from '../babylon-shared'
import type { SceneVariant } from '../BabylonHero'

function AboutHubScene() {
  const refs = [useRef<AbstractMesh | null>(null), useRef<AbstractMesh | null>(null), useRef<AbstractMesh | null>(null)]
  const sizes = [0.5, 0.4, 0.4]
  const colors = [GOLD, BLUE, BLUE]
  const radii = [0, 1.4, 1.9]
  useAnimation((t) => {
    refs.forEach((r, i) => {
      if (!r.current) return
      if (i === 0) { r.current.rotation.y += 0.005; r.current.position.y = Math.sin(t * 0.6) * 0.12; return }
      const a = t * (0.3 + i * 0.12) + i * 2.4
      r.current.position.x = Math.cos(a) * radii[i]
      r.current.position.z = Math.sin(a) * radii[i]
      r.current.position.y = Math.sin(t * 0.5 + i) * 0.25
      r.current.rotation.y += 0.008
    })
  })
  return (
    <>
      {stdLight()}{stdCam(6)}
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

function AboutStoryScene() {
  const markerRefs = Array.from({ length: 5 }, () => useRef<AbstractMesh | null>(null))
  useAnimation((t) => {
    markerRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.35 + i * 1.15
      const radius = 0.6 + i * 0.22
      r.current.position.x = Math.cos(a) * radius
      r.current.position.z = Math.sin(a) * radius
      r.current.position.y = -0.9 + i * 0.45 + Math.sin(t * 0.6 + i) * 0.05
      r.current.rotation.y += 0.01
    })
  })
  return (
    <>
      {stdLight()}{stdCam(6)}
      {markerRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`m${i}`} diameter={0.22 + i * 0.03}>
          <standardMaterial name={`mm${i}`} diffuseColor={i === 4 ? GOLD : BLUE} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

function AboutTeamScene() {
  const ceoRef = useRef<AbstractMesh | null>(null)
  const ctoRef = useRef<AbstractMesh | null>(null)
  const mdRef  = useRef<AbstractMesh | null>(null)
  useAnimation((t) => {
    if (ceoRef.current) { ceoRef.current.position.y = 0.55 + Math.sin(t * 0.5) * 0.1; ceoRef.current.rotation.y += 0.006 }
    if (ctoRef.current) { ctoRef.current.position.y = -0.35 + Math.sin(t * 0.55 + 1.3) * 0.1; ctoRef.current.rotation.y += 0.007 }
    if (mdRef.current)  { mdRef.current.position.y  = -0.35 + Math.sin(t * 0.6 + 2.6) * 0.1; mdRef.current.rotation.y += 0.007 }
  })
  return (
    <>
      {stdLight()}{stdCam(5.5)}
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

function AboutWhyScene() {
  const jaggedRef = useRef<AbstractMesh | null>(null)
  const smoothRef = useRef<AbstractMesh | null>(null)
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
      {stdLight()}{stdCam(5.5)}
      <sphere ref={jaggedRef} name="jagged" diameter={0.55} segments={2}>
        <standardMaterial name="jm" diffuseColor={RED} alpha={0.75} />
      </sphere>
      <sphere ref={smoothRef} name="smooth" diameter={0.55} segments={32}>
        <standardMaterial name="sm" diffuseColor={GOLD} alpha={0.88} />
      </sphere>
    </>
  )
}

export default function AboutScenes({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'about-story': return <AboutStoryScene />
    case 'about-team':  return <AboutTeamScene />
    case 'about-why':   return <AboutWhyScene />
    default:            return <AboutHubScene />
  }
}
