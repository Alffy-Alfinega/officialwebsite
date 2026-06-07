// @ts-nocheck
'use client'

import { useRef, useMemo, useCallback } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

const GRID = 128
const SPACING = 0.22   // tighter spacing to fill same visual area

export function ParticleWave() {
  const meshRef  = useRef<THREE.InstancedMesh>(null)
  const mouse    = useRef({ x: 0, y: 0 })          // smoothed
  const target   = useRef({ x: 0, y: 0 })          // raw
  const { gl }   = useThree()

  const count = GRID * GRID
  const dummy = useMemo(() => new THREE.Object3D(), [])

  // Base grid positions (flat XZ plane)
  const base = useMemo(() => {
    const arr: Float32Array = new Float32Array(count * 2)
    let idx = 0
    for (let i = 0; i < GRID; i++) {
      for (let j = 0; j < GRID; j++) {
        arr[idx++] = (i - GRID / 2) * SPACING
        arr[idx++] = (j - GRID / 2) * SPACING
      }
    }
    return arr
  }, [count])

  // Unique random phases per particle — organic variation
  const phases = useMemo(() => {
    const arr = new Float32Array(count * 4)
    for (let i = 0; i < count; i++) {
      arr[i * 4 + 0] = Math.random() * Math.PI * 2   // phase A
      arr[i * 4 + 1] = Math.random() * Math.PI * 2   // phase B
      arr[i * 4 + 2] = Math.random() * Math.PI * 2   // phase C (diagonal)
      arr[i * 4 + 3] = 0.85 + Math.random() * 0.3    // amplitude multiplier
    }
    return arr
  }, [count])

  const onMouseMove = useCallback((e: MouseEvent) => {
    const rect = gl.domElement.getBoundingClientRect()
    target.current.x = ((e.clientX - rect.left) / rect.width  - 0.5) * 2
    target.current.y = -((e.clientY - rect.top)  / rect.height - 0.5) * 2
  }, [gl])

  useMemo(() => {
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [onMouseMove])

  const $=useRef(0)
  useFrame((_, delta) => {
    $.current+=delta;if (!meshRef.current) return
    const t = $.current

    // Lag the mouse like water surface inertia
    const lf = 1 - Math.pow(0.028, delta)
    mouse.current.x += (target.current.x - mouse.current.x) * lf
    mouse.current.y += (target.current.y - mouse.current.y) * lf

    const mx = mouse.current.x * 6
    const my = mouse.current.y * 6

    for (let i = 0; i < count; i++) {
      const x  = base[i * 2]
      const z  = base[i * 2 + 1]
      const pA = phases[i * 4]
      const pB = phases[i * 4 + 1]
      const pC = phases[i * 4 + 2]
      const amp = phases[i * 4 + 3]

      // Four overlapping wave layers at different frequencies, speeds and directions
      const w1 = Math.sin(x * 0.50 + t * 0.45 + pA) * 0.13
      const w2 = Math.cos(z * 0.42 + t * 0.33 + pB) * 0.11
      const w3 = Math.sin((x + z) * 0.30 + t * 0.20 + pC) * 0.08
      const w4 = Math.cos((x - z) * 0.22 + t * 0.28 + pA * 0.5) * 0.06

      // Mouse ripple — wide spread, slow decay, natural attenuation
      const dx   = x - mx
      const dz   = z - my
      const dist = Math.sqrt(dx * dx + dz * dz)
      const ripple = Math.sin(dist * 1.0 - t * 1.6) * Math.exp(-dist * 0.10) * 0.5

      const y = (w1 + w2 + w3 + w4 + ripple) * amp

      dummy.position.set(x, y, z)

      // Particles swell gently at wave peaks
      const s = 0.028 + Math.abs(y) * 0.055
      dummy.scale.setScalar(s)
      dummy.updateMatrix()
      meshRef.current.setMatrixAt(i, dummy.matrix)
    }

    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} frustumCulled={false}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color="#2C6FED" />
    </instancedMesh>
  )
}
