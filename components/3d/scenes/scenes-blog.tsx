'use client'
import { useRef } from 'react'
import { Vector3 } from '@babylonjs/core/Maths/math'
import type { Mesh } from '@babylonjs/core/Meshes/mesh'
import { useAnimation, BLUE, GOLD, GREEN, CYAN, RED, WHITE, stdCam, stdLight } from '../babylon-shared'
import type { SceneVariant } from '../BabylonHero'

function BlogHubScene() {
  const refs = Array.from({ length: 6 }, () => useRef<Mesh | null>(null))
  useAnimation((t) => { refs.forEach((r, i) => { if (r.current) r.current.position.y = Math.sin(t * 0.5 + i * 0.8) * 0.12 }) })
  return (
    <>{stdLight()}{stdCam(6)}{refs.map((r, i) => {
      const angle = (i - 2.5) * 0.28
      return (
        <box ref={r} key={i} name={`pg${i}`} width={0.55} height={0.75} depth={0.02}
          position={new Vector3(Math.sin(angle) * 1.6, 0, -Math.cos(angle) * 1.6 + 1.4)}
          rotation={new Vector3(0, -angle, 0)}>
          <standardMaterial name={`pgm${i}`} diffuseColor={CYAN} alpha={0.3 + (i % 3) * 0.15} />
        </box>
      )
    })}</>
  )
}

function BlogWebsiteScene() {
  const panelRef = useRef<Mesh | null>(null)
  const cursorRef = useRef<Mesh | null>(null)
  useAnimation((t) => {
    if (panelRef.current) panelRef.current.rotation.y = Math.sin(t * 0.25) * 0.15
    if (cursorRef.current) { cursorRef.current.position.x = Math.sin(t * 0.8) * 0.6; cursorRef.current.position.y = Math.cos(t * 1.1) * 0.4 }
  })
  return (
    <>{stdLight()}{stdCam(4.5)}
    <box ref={panelRef} name="panel" width={1.3} height={0.85} depth={0.03}><standardMaterial name="pm" diffuseColor={BLUE} alpha={0.3} wireframe /></box>
    <sphere ref={cursorRef} name="cursor" diameter={0.08} position={new Vector3(0, 0, 0.1)}><standardMaterial name="cm" diffuseColor={WHITE} alpha={0.9} /></sphere>
    </>
  )
}

function BlogSeoScene() {
  const pinRef = useRef<Mesh | null>(null)
  const ring1Ref = useRef<Mesh | null>(null)
  const ring2Ref = useRef<Mesh | null>(null)
  useAnimation((t) => {
    if (pinRef.current) pinRef.current.position.y = Math.sin(t * 0.7) * 0.1
    const p1 = (t * 0.4) % 1, p2 = ((t * 0.4) + 0.5) % 1
    if (ring1Ref.current) { ring1Ref.current.scaling.setAll(0.3 + p1 * 1.6); if (ring1Ref.current.material) (ring1Ref.current.material as any).alpha = 0.5 * (1 - p1) }
    if (ring2Ref.current) { ring2Ref.current.scaling.setAll(0.3 + p2 * 1.6); if (ring2Ref.current.material) (ring2Ref.current.material as any).alpha = 0.5 * (1 - p2) }
  })
  return (
    <>{stdLight()}{stdCam(4.5)}
    <cylinder ref={pinRef} name="pin" diameterTop={0} diameterBottom={0.35} height={0.5} tessellation={24} rotation={new Vector3(Math.PI, 0, 0)}><standardMaterial name="pinm" diffuseColor={GREEN} alpha={0.9} /></cylinder>
    <torus ref={ring1Ref} name="r1" diameter={0.9} thickness={0.025} rotation={new Vector3(Math.PI / 2, 0, 0)}><standardMaterial name="r1m" diffuseColor={GREEN} alpha={0.5} /></torus>
    <torus ref={ring2Ref} name="r2" diameter={0.9} thickness={0.025} rotation={new Vector3(Math.PI / 2, 0, 0)}><standardMaterial name="r2m" diffuseColor={GREEN} alpha={0.5} /></torus>
    </>
  )
}

function BlogBrandingScene() {
  const refs = Array.from({ length: 3 }, () => useRef<Mesh | null>(null))
  const colors = [BLUE, GOLD, WHITE]
  useAnimation((t) => {
    const merge = (Math.sin(t * 0.4) + 1) / 2
    refs.forEach((r, i) => {
      if (!r.current) return
      const a = (i * Math.PI * 2) / 3
      r.current.position.x = Math.cos(a) * (0.3 + merge * 0.9)
      r.current.position.z = Math.sin(a) * (0.3 + merge * 0.9)
      r.current.rotation.y += 0.01
    })
  })
  return (<>{stdLight()}{stdCam(4.5)}{refs.map((r, i) => (<sphere ref={r} key={i} name={`s${i}`} diameter={0.4} segments={3}><standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.85} /></sphere>))}</>)
}

function BlogAdsScene() {
  const adRef = useRef<Mesh | null>(null)
  const particleRefs = Array.from({ length: 4 }, () => useRef<Mesh | null>(null))
  useAnimation((t) => {
    if (adRef.current) adRef.current.scaling.setAll(1 + Math.sin(t * 1.4) * 0.08)
    particleRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.6 + (i * Math.PI) / 2
      r.current.position.x = Math.cos(a) * 1.1; r.current.position.z = Math.sin(a) * 1.1; r.current.position.y = Math.sin(t * 0.7 + i) * 0.3
    })
  })
  return (<>{stdLight()}{stdCam(4.5)}<box ref={adRef} name="ad" width={0.75} height={0.55} depth={0.04}><standardMaterial name="adm" diffuseColor={RED} alpha={0.8} /></box>{particleRefs.map((r, i) => (<sphere ref={r} key={i} name={`p${i}`} diameter={0.1}><standardMaterial name={`pm${i}`} diffuseColor={GOLD} alpha={0.85} /></sphere>))}</>)
}

function BlogNextjsScene() {
  const sharpRef = useRef<Mesh | null>(null)
  const roundRef = useRef<Mesh | null>(null)
  useAnimation((t) => {
    if (sharpRef.current) { const a = t * 0.5; sharpRef.current.position.x = Math.cos(a) * 0.9; sharpRef.current.rotation.y += 0.012; sharpRef.current.rotation.x += 0.006 }
    if (roundRef.current) { const a = t * 0.5 + Math.PI; roundRef.current.position.x = Math.cos(a) * 0.9; roundRef.current.rotation.y += 0.006 }
  })
  return (<>{stdLight()}{stdCam(4.5)}<box ref={sharpRef} name="sharp" size={0.5}><standardMaterial name="shm" diffuseColor={WHITE} alpha={0.7} wireframe /></box><sphere ref={roundRef} name="round" diameter={0.55} segments={28}><standardMaterial name="rdm" diffuseColor={BLUE} alpha={0.85} /></sphere></>)
}

function BlogVitalsScene() {
  const refs = Array.from({ length: 3 }, () => useRef<Mesh | null>(null))
  const speeds = [1.6, 1.0, 2.2], colors = [BLUE, GOLD, GREEN], xs = [-0.9, 0, 0.9]
  useAnimation((t) => { refs.forEach((r, i) => { if (r.current) { r.current.position.y = -0.3 + Math.abs(Math.sin(t * speeds[i])) * 0.6; r.current.rotation.y += 0.01 } }) })
  return (<>{stdLight()}{stdCam(4.5)}{refs.map((r, i) => (<sphere ref={r} key={i} name={`v${i}`} diameter={0.36} position={new Vector3(xs[i], 0, 0)}><standardMaterial name={`vm${i}`} diffuseColor={colors[i]} alpha={0.85} /></sphere>))}</>)
}

export default function BlogScenes({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'blog-website':  return <BlogWebsiteScene />
    case 'blog-seo':      return <BlogSeoScene />
    case 'blog-branding': return <BlogBrandingScene />
    case 'blog-ads':      return <BlogAdsScene />
    case 'blog-nextjs':   return <BlogNextjsScene />
    case 'blog-vitals':   return <BlogVitalsScene />
    default:              return <BlogHubScene />
  }
}
