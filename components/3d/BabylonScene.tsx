'use client'

import dynamic from 'next/dynamic'
import type { SceneVariant } from './BabylonSceneCanvas'

export type { SceneVariant }

const SceneCanvas = dynamic<{ variant?: SceneVariant }>(
  () => import('./BabylonSceneCanvas').then((m) => m.BabylonSceneCanvas),
  { ssr: false, loading: () => null },
)

export function BabylonScene({ className, variant = 'home' }: { className?: string; variant?: SceneVariant }) {
  return (
    <div className={className}>
      <SceneCanvas variant={variant} />
    </div>
  )
}
