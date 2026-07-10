'use client'

import { Vector3, Color3 } from '@babylonjs/core/Maths/math'
import { useScene } from 'react-babylonjs'
import { useEffect, useRef } from 'react'
import type { Mesh } from '@babylonjs/core/Meshes/mesh'

// ─── Animation hook ────────────────────────────────────────────────────────────

export function useAnimation(fn: (t: number) => void) {
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

// ─── Typed mesh ref ────────────────────────────────────────────────────────────

export function useMeshRef() {
  return useRef<Mesh | null>(null)
}

// ─── Shared palette ────────────────────────────────────────────────────────────

export const BLUE   = new Color3(0.17, 0.44, 0.93)
export const GOLD   = new Color3(0.83, 0.65, 0.20)
export const GREEN  = new Color3(0.20, 0.75, 0.50)
export const PURPLE = new Color3(0.65, 0.35, 0.85)
export const CYAN   = new Color3(0.20, 0.75, 0.85)
export const RED    = new Color3(0.90, 0.40, 0.30)
export const WHITE  = new Color3(0.88, 0.88, 0.94)
export const GREY   = new Color3(0.45, 0.45, 0.55)

// ─── Scene primitives ──────────────────────────────────────────────────────────

export const stdCam = (radius = 6) => (
  <arcRotateCamera name="cam" alpha={-0.45} beta={1.1} radius={radius} target={Vector3.Zero()} />
)
export const stdLight = () => (
  <hemisphericLight name="l" intensity={0.88} direction={new Vector3(0, 1, 0)} />
)
