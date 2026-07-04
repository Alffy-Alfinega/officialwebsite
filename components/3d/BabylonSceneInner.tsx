'use client'

import { Engine, Scene } from 'react-babylonjs'
import { Color4 } from '@babylonjs/core/Maths/math'
import { Suspense, lazy } from 'react'
import type { SceneVariant } from './BabylonHero'

// ─── Lazy-loaded scene groups — each is a separate JS chunk ──────────────────
// Next.js code-splits these automatically. Only the group matching the current
// page variant is downloaded; the other 5 groups are never fetched.

const HomeScenes      = lazy(() => import('./scenes/scenes-home'))
const AboutScenes     = lazy(() => import('./scenes/scenes-about'))
const ServiceScenes   = lazy(() => import('./scenes/scenes-services'))
const PortfolioScenes = lazy(() => import('./scenes/scenes-portfolio'))
const BlogScenes      = lazy(() => import('./scenes/scenes-blog'))
const MiscScenes      = lazy(() => import('./scenes/scenes-misc'))

function getSceneGroup(variant: SceneVariant) {
  if (variant === 'home')                                    return 'home'
  if (variant.startsWith('about-'))                          return 'about'
  if (variant === 'services-hub' || variant.startsWith('svc-')) return 'services'
  if (variant.startsWith('portfolio-'))                      return 'portfolio'
  if (variant.startsWith('blog-'))                           return 'blog'
  return 'misc'
}

function SceneContent({ variant }: { variant: SceneVariant }) {
  const group = getSceneGroup(variant)
  return (
    <Suspense fallback={null}>
      {group === 'home'      && <HomeScenes />}
      {group === 'about'     && <AboutScenes     variant={variant} />}
      {group === 'services'  && <ServiceScenes   variant={variant} />}
      {group === 'portfolio' && <PortfolioScenes  variant={variant} />}
      {group === 'blog'      && <BlogScenes       variant={variant} />}
      {group === 'misc'      && <MiscScenes       variant={variant} />}
    </Suspense>
  )
}

export default function BabylonSceneInner({ variant }: { variant: SceneVariant }) {
  return (
    <Engine antialias adaptToDeviceRatio style={{ width: '100%', height: '100%', display: 'block' }}>
      <Scene clearColor={new Color4(0, 0, 0, 0)}>
        <SceneContent variant={variant} />
      </Scene>
    </Engine>
  )
}
