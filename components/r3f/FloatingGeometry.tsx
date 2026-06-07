// @ts-nocheck
'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Africa outline — simplified coastal polygon (lat, lng)
const AFRICA_POLY: [number, number][] = [
  [35.9, -5.4],  [36.8, -2.0],  [37.0,  5.0],  [37.1, 10.2],
  [33.5, 25.0],  [31.2, 32.3],  [27.0, 34.0],  [23.5, 36.5],
  [22.0, 37.5],  [18.0, 40.0],  [11.5, 43.5],  [10.5, 44.0],
  [ 8.0, 45.0],  [ 4.5, 42.0],  [ 2.0, 41.5],  [-1.5, 40.5],
  [-4.7, 39.6],  [-8.0, 39.5],  [-11.0, 40.5], [-15.0, 40.0],
  [-18.0, 37.0], [-22.0, 35.5], [-26.0, 33.0], [-29.5, 31.0],
  [-34.8, 26.0], [-34.4, 20.0], [-34.8, 18.5], [-33.0, 17.9],
  [-28.5, 16.5], [-23.0, 14.5], [-17.0, 11.5], [-11.0, 10.5],
  [ -4.5,  8.5], [  0.5,  8.5], [  2.5,  9.5], [  4.0,  3.5],
  [  5.0,  1.0], [  5.5, -1.5], [  5.0, -4.0], [  4.5, -7.5],
  [  3.0,-10.0], [  7.5,-14.5], [ 10.5,-15.0], [ 12.0,-16.5],
  [ 14.5,-17.3], [ 15.5,-16.5], [ 18.0,-16.3], [ 20.5,-17.0],
  [ 27.5,-13.0], [ 30.0,-10.0], [ 35.9, -5.4],
]

// Ray-cast point-in-polygon
function inAfrica(lat: number, lng: number): boolean {
  let inside = false
  const p = AFRICA_POLY
  for (let i = 0, j = p.length - 1; i < p.length; j = i++) {
    const [yi, xi] = p[i]
    const [yj, xj] = p[j]
    if (((yi > lat) !== (yj > lat)) && (lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi)) {
      inside = !inside
    }
  }
  return inside
}

// Lat/lng → 3D sphere surface point (Africa centered toward +Z)
const AFRICA_CENTER_LNG = 22  // longitude center of Africa
function latLng(lat: number, lng: number, r: number): THREE.Vector3 {
  const adjLng = lng - AFRICA_CENTER_LNG  // rotate so Africa faces camera
  const phi   = (90 - lat)  * (Math.PI / 180)
  const theta = (adjLng + 180) * (Math.PI / 180)
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  )
}

const GLOBE_R  = 1.55
const N_DOTS   = 3200   // total Fibonacci sphere points

function GlobeScene() {
  const groupRef      = useRef<THREE.Group>(null)
  const africaRef     = useRef<THREE.Points>(null)
  const pulseRef      = useRef<THREE.Mesh>(null)
  const ring1Ref      = useRef<THREE.Mesh>(null)
  const ring2Ref      = useRef<THREE.Mesh>(null)

  // Split Fibonacci sphere points into world vs Africa
  const { worldGeo, africaGeo, outlinePts } = useMemo(() => {
    const world: number[] = []
    const africa: number[] = []
    const PHI = Math.PI * (3 - Math.sqrt(5))

    for (let i = 0; i < N_DOTS; i++) {
      const y      = 1 - (i / (N_DOTS - 1)) * 2
      const r      = Math.sqrt(Math.max(0, 1 - y * y))
      const theta  = PHI * i
      const x = Math.cos(theta) * r
      const z = Math.sin(theta) * r

      // Cartesian → lat/lng (relative to adjusted frame)
      const lat = Math.asin(y) * (180 / Math.PI)
      // Reverse our adjustment: actual lng = atan2 in original frame
      const lng = Math.atan2(z, -x) * (180 / Math.PI) + AFRICA_CENTER_LNG

      const v = latLng(lat, lng - AFRICA_CENTER_LNG, GLOBE_R)

      if (inAfrica(lat, lng)) {
        africa.push(v.x, v.y, v.z)
      } else {
        world.push(v.x, v.y, v.z)
      }
    }

    // Africa outline as 3D line points
    const outlinePts = AFRICA_POLY.map(([lat, lng]) =>
      latLng(lat, lng - AFRICA_CENTER_LNG, GLOBE_R * 1.002)
    )

    const wGeo = new THREE.BufferGeometry()
    wGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(world), 3))

    const aGeo = new THREE.BufferGeometry()
    aGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(africa), 3))

    return { worldGeo: wGeo, africaGeo: aGeo, outlinePts }
  }, [])

  // Lat/lng grid lines
  const gridLines = useMemo(() => {
    const lines: THREE.BufferGeometry[] = []
    const SEGS = 80

    // Latitude lines every 30°
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = []
      for (let s = 0; s <= SEGS; s++) {
        const lng = -180 + (s / SEGS) * 360
        pts.push(latLng(lat, lng - AFRICA_CENTER_LNG, GLOBE_R * 1.001))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      lines.push(geo)
    }
    // Longitude lines every 30°
    for (let lng = 0; lng < 360; lng += 30) {
      const pts: THREE.Vector3[] = []
      for (let s = 0; s <= SEGS; s++) {
        const lat = -90 + (s / SEGS) * 180
        pts.push(latLng(lat, lng - AFRICA_CENTER_LNG, GLOBE_R * 1.001))
      }
      const geo = new THREE.BufferGeometry().setFromPoints(pts)
      lines.push(geo)
    }
    return lines
  }, [])

  // Africa border as closed line
  const africaOutlineGeo = useMemo(() => {
    return new THREE.BufferGeometry().setFromPoints(outlinePts)
  }, [outlinePts])

  const $=useRef(0)
  useFrame((_, d) => {
    $.current+=d;if (!groupRef.current) return
    const t = $.current

    // Slow continuous rotation + gentle float
    groupRef.current.rotation.y = t * 0.10
    groupRef.current.position.y = Math.sin(t * 0.35) * 0.12

    // Africa dot pulse — brightness cycles
    if (africaRef.current) {
      const mat = africaRef.current.material as THREE.PointsMaterial
      mat.opacity = 0.75 + Math.sin(t * 1.2) * 0.2
    }

    // Pulse sphere breathes
    if (pulseRef.current) {
      const s = 1 + Math.sin(t * 1.2) * 0.03
      pulseRef.current.scale.setScalar(s)
    }

    // Rings orbit
    if (ring1Ref.current) {
      ring1Ref.current.rotation.z = t * 0.22
      ring1Ref.current.rotation.x = Math.PI / 2 + Math.sin(t * 0.18) * 0.15
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = t * 0.16
      ring2Ref.current.rotation.z = Math.cos(t * 0.14) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      {/* World dots — dim */}
      <points geometry={worldGeo}>
        <pointsMaterial color="#2C6FED" size={0.018} transparent opacity={0.25} sizeAttenuation depthWrite={false} />
      </points>

      {/* Africa dots — bright, pulsing */}
      <points ref={africaRef} geometry={africaGeo}>
        <pointsMaterial color="#4A90F5" size={0.048} transparent opacity={0.92} sizeAttenuation depthWrite={false} />
      </points>

      {/* Africa border outline */}
      <line geometry={africaOutlineGeo}>
        <lineBasicMaterial color="#2C6FED" transparent opacity={0.9} linewidth={2} />
      </line>

      {/* Lat/lng grid lines — very faint */}
      {gridLines.map((geo, i) => (
        <line key={i} geometry={geo}>
          <lineBasicMaterial color="#2C6FED" transparent opacity={0.08} />
        </line>
      ))}

      {/* Transparent sphere base for depth */}
      <mesh>
        <sphereGeometry args={[GLOBE_R, 48, 48]} />
        <meshBasicMaterial color="#0A0A1E" transparent opacity={0.25} />
      </mesh>

      {/* Pulse sphere — Africa glow */}
      <mesh ref={pulseRef}>
        <sphereGeometry args={[GLOBE_R * 1.04, 32, 32]} />
        <meshBasicMaterial color="#2C6FED" transparent opacity={0.04} side={THREE.BackSide} />
      </mesh>

      {/* Ring A — equatorial, thin */}
      <mesh ref={ring1Ref} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[GLOBE_R * 1.35, 0.012, 6, 120]} />
        <meshBasicMaterial color="#2C6FED" transparent opacity={0.55} />
      </mesh>

      {/* Ring B — tilted orbit */}
      <mesh ref={ring2Ref} rotation={[0.8, 0, 0]}>
        <torusGeometry args={[GLOBE_R * 1.65, 0.008, 6, 120]} />
        <meshBasicMaterial color="#2C6FED" transparent opacity={0.30} />
      </mesh>
    </group>
  )
}

interface FloatingGeometryProps {
  className?: string
}

export function FloatingGeometryCanvas({ className = '' }: FloatingGeometryProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      className={className}
      style={{ background: 'transparent' }}
    >
      <GlobeScene />
    </Canvas>
  )
}
