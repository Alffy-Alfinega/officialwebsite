// @ts-nocheck
'use client'

import { Canvas } from '@react-three/fiber'
import { ParticleWave } from './ParticleWave'

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 8, 12], fov: 55 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      style={{ position: 'absolute', inset: 0 }}
    >
      <ambientLight intensity={0.5} />
      <ParticleWave />
      {/* Subtle fog for depth */}
      <fog attach="fog" args={['#04040C', 12, 30]} />
    </Canvas>
  )
}
