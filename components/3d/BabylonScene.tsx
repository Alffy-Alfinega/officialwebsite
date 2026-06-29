'use client'

// BabylonScene — SSR-safe wrapper for BabylonSceneCanvas.
// Dynamic import with ssr: false prevents Babylon.js (which uses browser APIs
// like WebGL and window) from running during server-side rendering, which would
// cause a build-time crash. The canvas only renders in the browser.

import dynamic from 'next/dynamic'
import type { SceneVariant } from './BabylonSceneCanvas'

export type { SceneVariant }

const SceneCanvas = dynamic<{ variant?: SceneVariant }>(
  () => import('./BabylonSceneCanvas').then((m) => m.BabylonSceneCanvas),
  { ssr: false, loading: () => null },
)

// className is forwarded to the wrapper div so callers can set size.
// The canvas inside fills 100% of the wrapper via `w-full h-full`.
// The wrapper must have a defined height for the canvas to expand into.
export function BabylonScene({
  className,
  variant = 'home',
}: {
  className?: string
  variant?: SceneVariant
}) {
  return (
    <div className={className} style={{ width: '100%', height: '100%' }}>
      <SceneCanvas variant={variant} />
    </div>
  )
}
