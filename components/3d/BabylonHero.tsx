'use client'

// ─────────────────────────────────────────────────────────────────────────────
// BabylonHero — declarative react-babylonjs scene
//
// HEIGHT FIX (critical):
// The <Engine> component renders <canvas style={{width:'100%', height:'100%'}} />
// `height: 100%` requires every ancestor to have a computed pixel height.
// We receive a containerStyle prop and apply it to the outer wrapper.
// The caller (HeroSection) must pass height: '100vh' or an explicit pixel value.
// NEVER rely on min-h-screen — it does not propagate into absolute children.
// ─────────────────────────────────────────────────────────────────────────────

import dynamic from 'next/dynamic'
import type { CSSProperties } from 'react'

// SSR-safe: Babylon.js uses WebGL/window — cannot run server-side
const BabylonSceneInner = dynamic(() => import('./BabylonSceneInner'), {
  ssr: false,
  loading: () => null,
})

export type SceneVariant =
  | 'home'
  | 'about-hub' | 'about-story' | 'about-team' | 'about-why'
  | 'services-hub' | 'svc-web' | 'svc-seo' | 'svc-branding' | 'svc-media' | 'svc-archviz' | 'svc-security'
  | 'portfolio-hub' | 'portfolio-web' | 'portfolio-branding' | 'portfolio-video'
  | 'blog-hub' | 'blog-website' | 'blog-seo' | 'blog-branding' | 'blog-ads' | 'blog-nextjs' | 'blog-vitals'
  | 'pricing' | 'careers' | 'contact'
  | 'legal-privacy' | 'legal-terms' | 'legal-data'

interface BabylonHeroProps {
  variant?: SceneVariant
  /** Must include an explicit pixel height, e.g. { height: '100vh' } */
  containerStyle?: CSSProperties
  className?: string
}

export default function BabylonHero({
  variant = 'home',
  containerStyle,
  className,
}: BabylonHeroProps) {
  return (
    <div
      className={className}
      style={{ width: '100%', height: '100%', ...containerStyle }}
    >
      <BabylonSceneInner variant={variant} />
    </div>
  )
}
