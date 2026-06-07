'use client'

import dynamic from 'next/dynamic'

// Lazy-load the heavy Canvas + Three.js scenes — never SSR
const SceneCanvas = dynamic(
  () => import('./SceneCanvas').then((m) => m.SceneCanvas),
  { ssr: false, loading: () => null }
)

export type SceneVariant =
  | 'about'        // Africa globe
  | 'story'        // DNA helix
  | 'team'         // Network nodes
  | 'why'          // Shield / hexagon
  | 'services'     // Orbital system
  | 'service-slug' // Per-service (pass slug)
  | 'portfolio'    // Floating frames
  | 'pricing'      // Crystals
  | 'blog'         // Floating documents
  | 'blog-slug'    // Flowing text lines
  | 'contact'      // Radar ping
  | 'careers'      // Rising particles
  | 'legal'        // Minimal floating rings

interface Props {
  className?: string
  variant?: SceneVariant
  slug?: string   // for service-slug variant
}

export function FloatingGeometryWrapper({ className = '', variant = 'about', slug }: Props) {
  return <SceneCanvas className={className} variant={variant} slug={slug} />
}
