'use client'

import { Engine, Scene } from 'react-babylonjs'
import { Vector3, Color4, Color3 } from '@babylonjs/core/Maths/math'
import { useScene } from 'react-babylonjs'
import { useEffect, useRef } from 'react'
import type { SceneVariant } from './BabylonHero'

// ─── Per-variant animation hook ──────────────────────────────────────────────

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

// ─── HOME scene ───────────────────────────────────────────────────────────────

function HomeScene() {
  const boxRef    = useRef<any>(null)
  const sphereRef = useRef<any>(null)
  const torusRef  = useRef<any>(null)

  useAnimation((t) => {
    if (boxRef.current) {
      boxRef.current.rotation.y += 0.008
      boxRef.current.rotation.x += 0.004
      boxRef.current.position.y = Math.sin(t * 0.7) * 0.4
    }
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.006
      sphereRef.current.position.y = Math.sin(t * 0.5 + 1) * 0.4
    }
    if (torusRef.current) {
      torusRef.current.rotation.x += 0.007
      torusRef.current.rotation.y += 0.005
      torusRef.current.position.y = Math.sin(t * 0.6 + 2) * 0.3
    }
  })

  return (
    <>
      <hemisphericLight name="light" intensity={0.9} direction={new Vector3(0, 1, 0)} />
      <arcRotateCamera
        name="cam"
        alpha={-0.5}
        beta={1.1}
        radius={6}
        target={Vector3.Zero()}
      />
      <box
        ref={boxRef}
        name="box"
        size={0.5}
        position={new Vector3(-1.2, 0, 0)}
      >
        <standardMaterial
          name="box-mat"
          diffuseColor={new Color3(0.17, 0.44, 0.93)}
          alpha={0.8}
        />
      </box>
      <sphere
        ref={sphereRef}
        name="sphere"
        diameter={0.5}
        position={new Vector3(1.2, 0, 0)}
      >
        <standardMaterial
          name="sph-mat"
          diffuseColor={new Color3(0.83, 0.65, 0.2)}
          alpha={0.8}
        />
      </sphere>
      <torus
        ref={torusRef}
        name="torus"
        diameter={0.55}
        thickness={0.14}
        position={new Vector3(0, 0, -1)}
      >
        <standardMaterial
          name="tor-mat"
          diffuseColor={new Color3(0.3, 0.85, 0.5)}
          alpha={0.8}
        />
      </torus>
    </>
  )
}

// ─── ABOUT scene ──────────────────────────────────────────────────────────────

function AboutScene() {
  const coreRef = useRef<any>(null)
  const o1Ref   = useRef<any>(null)
  const o2Ref   = useRef<any>(null)
  const o3Ref   = useRef<any>(null)
  const ringRef = useRef<any>(null)

  useAnimation((t) => {
    if (coreRef.current) coreRef.current.rotation.y += 0.006
    if (ringRef.current) ringRef.current.rotation.y += 0.003
    const orbs = [o1Ref, o2Ref, o3Ref]
    orbs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.55 + (i * Math.PI * 2) / 3
      r.current.position.x = Math.cos(a) * 1.4
      r.current.position.z = Math.sin(a) * 1.4
      r.current.position.y = Math.sin(t * 0.5 + i) * 0.3
    })
  })

  return (
    <>
      <hemisphericLight name="l" intensity={0.85} direction={new Vector3(0, 1, 0)} />
      <arcRotateCamera name="cam" alpha={-0.4} beta={1.15} radius={5.5} target={Vector3.Zero()} />
      <sphere ref={coreRef} name="core" diameter={0.65} segments={16}>
        <standardMaterial name="cm" diffuseColor={new Color3(0.17, 0.44, 0.93)} alpha={0.9} />
      </sphere>
      <torus ref={ringRef} name="ring" diameter={3} thickness={0.025} tessellation={64}>
        <standardMaterial name="rm" diffuseColor={new Color3(0.17, 0.44, 0.93)} alpha={0.2} />
      </torus>
      {[o1Ref, o2Ref, o3Ref].map((r, i) => (
        <sphere ref={r} key={i} name={`orb${i}`} diameter={0.22}>
          <standardMaterial
            name={`om${i}`}
            diffuseColor={[new Color3(0.83,0.65,0.2), new Color3(0.2,0.75,0.85), new Color3(0.65,0.35,0.85)][i]}
            alpha={0.85}
          />
        </sphere>
      ))}
    </>
  )
}

// ─── SERVICES scene ───────────────────────────────────────────────────────────

function ServicesScene() {
  const meshRefs = [useRef<any>(null), useRef<any>(null), useRef<any>(null),
                    useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    meshRefs.forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.x += 0.005 + i * 0.002
      r.current.rotation.y += 0.007 + i * 0.003
      r.current.position.y = Math.sin(t * 0.65 + i * 1.05) * 0.35
    })
  })

  const colors = [
    new Color3(0.17,0.44,0.93),
    new Color3(0.83,0.65,0.2),
    new Color3(0.65,0.35,0.85),
    new Color3(0.2,0.75,0.5),
    new Color3(0.9,0.4,0.3),
    new Color3(0.2,0.75,0.85),
  ]

  return (
    <>
      <hemisphericLight name="l" intensity={0.85} direction={new Vector3(0,1,0)} />
      <arcRotateCamera name="cam" alpha={-0.3} beta={1.1} radius={7} target={Vector3.Zero()} />
      {meshRefs.map((r, i) => {
        const a = (i / 6) * Math.PI * 2
        const pos = new Vector3(Math.cos(a) * 2, 0, Math.sin(a) * 2)
        return (
          <sphere ref={r} key={i} name={`s${i}`} diameter={0.42} position={pos}>
            <standardMaterial name={`sm${i}`} diffuseColor={colors[i]} alpha={0.8} />
          </sphere>
        )
      })}
    </>
  )
}

// ─── CONTACT scene ────────────────────────────────────────────────────────────

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
      <hemisphericLight name="l" intensity={0.85} direction={new Vector3(0,1,0)} />
      <arcRotateCamera name="cam" alpha={-0.4} beta={1.1} radius={5.5} target={Vector3.Zero()} />
      <sphere ref={hubRef} name="hub" diameter={0.55} segments={16}>
        <standardMaterial name="hm" diffuseColor={new Color3(0.17,0.44,0.93)} alpha={0.9} />
      </sphere>
      <torus ref={ringRef} name="ring" diameter={2.6} thickness={0.025}>
        <standardMaterial name="rinm" diffuseColor={new Color3(0.17,0.44,0.93)} alpha={0.25} />
      </torus>
      {satRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`sat${i}`} diameter={0.14 + i * 0.04}>
          <standardMaterial name={`satm${i}`} diffuseColor={new Color3(0.83, 0.6 - i*0.05, 0.2 + i*0.15)} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── PRICING scene ────────────────────────────────────────────────────────────

function PricingScene() {
  const g1 = useRef<any>(null)
  const g2 = useRef<any>(null)
  const g3 = useRef<any>(null)

  useAnimation((t) => {
    ;[g1, g2, g3].forEach((r, i) => {
      if (!r.current) return
      r.current.rotation.x += 0.006 + i * 0.003
      r.current.rotation.y += 0.01 + i * 0.004
      r.current.position.y = [-0.1, 0.2, 0][i] + Math.sin(t * 0.7 + i * 1.4) * 0.22
    })
  })

  return (
    <>
      <hemisphericLight name="l" intensity={0.85} direction={new Vector3(0,1,0)} />
      <arcRotateCamera name="cam" alpha={-0.3} beta={1.1} radius={6} target={Vector3.Zero()} />
      <sphere ref={g1} name="g1" diameter={0.42} segments={2} position={new Vector3(-1.2,-0.1,0)}>
        <standardMaterial name="gm1" diffuseColor={new Color3(0.65,0.35,0.85)} alpha={0.88} />
      </sphere>
      <sphere ref={g2} name="g2" diameter={0.62} segments={2} position={new Vector3(0,0.2,0)}>
        <standardMaterial name="gm2" diffuseColor={new Color3(0.17,0.44,0.93)} alpha={0.88} />
      </sphere>
      <sphere ref={g3} name="g3" diameter={0.48} segments={2} position={new Vector3(1.2,0,0)}>
        <standardMaterial name="gm3" diffuseColor={new Color3(0.83,0.65,0.2)} alpha={0.88} />
      </sphere>
    </>
  )
}

// ─── CYBERSECURITY scene ──────────────────────────────────────────────────────

function CybersecurityScene() {
  const shieldRef = useRef<any>(null)
  const ring1Ref  = useRef<any>(null)
  const ring2Ref  = useRef<any>(null)
  const nodeRefs  = [useRef<any>(null), useRef<any>(null), useRef<any>(null),
                     useRef<any>(null), useRef<any>(null), useRef<any>(null)]

  useAnimation((t) => {
    if (shieldRef.current) {
      shieldRef.current.rotation.x += 0.004
      shieldRef.current.rotation.y += 0.007
      shieldRef.current.scaling.setAll(1 + Math.sin(t * 1.5) * 0.03)
    }
    if (ring1Ref.current) ring1Ref.current.rotation.y += 0.006
    if (ring2Ref.current) ring2Ref.current.rotation.y -= 0.004
    nodeRefs.forEach((r, i) => {
      if (!r.current) return
      const a = t * 0.75 + (i * Math.PI) / 3
      r.current.position.x = Math.cos(a) * 1.2
      r.current.position.z = Math.sin(a) * 1.2
      r.current.position.y = Math.sin(t * 1.1 + i) * 0.18
    })
  })

  return (
    <>
      <hemisphericLight name="l" intensity={0.85} direction={new Vector3(0,1,0)} />
      <arcRotateCamera name="cam" alpha={-0.4} beta={1.1} radius={6} target={Vector3.Zero()} />
      <sphere ref={shieldRef} name="shield" diameter={0.6} segments={3}>
        <standardMaterial name="shm" diffuseColor={new Color3(0.17,0.44,0.93)} alpha={0.88} />
      </sphere>
      <torus ref={ring1Ref} name="r1" diameter={2.4} thickness={0.022}>
        <standardMaterial name="rm1" diffuseColor={new Color3(0.17,0.44,0.93)} alpha={0.3} />
      </torus>
      <torus ref={ring2Ref} name="r2" diameter={3.5} thickness={0.015}>
        <standardMaterial name="rm2" diffuseColor={new Color3(0.17,0.44,0.93)} alpha={0.15} />
      </torus>
      {nodeRefs.map((r, i) => (
        <sphere ref={r} key={i} name={`nd${i}`} diameter={0.1}>
          <standardMaterial name={`nm${i}`} diffuseColor={new Color3(0.85,0.9,1)} alpha={0.85} />
        </sphere>
      ))}
    </>
  )
}

// ─── GENERIC fallback scene ───────────────────────────────────────────────────

function GenericScene({ color }: { color: Color3 }) {
  const meshRef = useRef<any>(null)
  useAnimation(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.008
    }
  })
  return (
    <>
      <hemisphericLight name="l" intensity={0.85} direction={new Vector3(0,1,0)} />
      <arcRotateCamera name="cam" alpha={-0.4} beta={1.15} radius={5} target={Vector3.Zero()} />
      <torus ref={meshRef} name="t" diameter={1.2} thickness={0.3}>
        <standardMaterial name="m" diffuseColor={color} alpha={0.8} />
      </torus>
    </>
  )
}

// ─── Variant dispatcher ────────────────────────────────────────────────────────

function SceneContent({ variant }: { variant: SceneVariant }) {
  switch (variant) {
    case 'about':          return <AboutScene />
    case 'contact':        return <ContactScene />
    case 'services':       return <ServicesScene />
    case 'pricing':        return <PricingScene />
    case 'cybersecurity':  return <CybersecurityScene />
    case 'web-design':     return <GenericScene color={new Color3(0.17,0.44,0.93)} />
    case 'seo-marketing':  return <GenericScene color={new Color3(0.2,0.75,0.5)} />
    case 'branding-design':return <GenericScene color={new Color3(0.83,0.65,0.2)} />
    case 'media-production':return <GenericScene color={new Color3(0.9,0.4,0.3)} />
    case 'arch-vis':       return <GenericScene color={new Color3(0.65,0.35,0.85)} />
    case 'blog':           return <GenericScene color={new Color3(0.2,0.75,0.85)} />
    case 'portfolio':      return <GenericScene color={new Color3(0.17,0.44,0.93)} />
    case 'careers':        return <GenericScene color={new Color3(0.3,0.85,0.5)} />
    case 'legal':          return <GenericScene color={new Color3(0.5,0.5,0.7)} />
    default:               return <HomeScene />
  }
}

// ─── Root component (exported) ─────────────────────────────────────────────────

export default function BabylonSceneInner({ variant }: { variant: SceneVariant }) {
  return (
    /*
      HEIGHT FIX:
      Engine renders: <canvas style={{ width:'100%', height:'100%' }} />
      This wrapper div is 100% of whatever its parent is.
      The parent (BabylonHero > wrapper div) must already have a pixel height.
      HeroSection ensures this by using `height: 100vh` on the section.
    */
    <Engine
      antialias
      adaptToDeviceRatio
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        <SceneContent variant={variant} />
      </Scene>
    </Engine>
  )
}
