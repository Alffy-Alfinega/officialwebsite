// @ts-nocheck
'use client'

import { Canvas } from '@react-three/fiber'
import type { SceneVariant } from './FloatingGeometryWrapper'
import {
  AfricaGlobeScene, HelixScene, NetworkScene, ShieldScene,
  OrbitalScene, ServiceSlugScene, PortfolioScene, CrystalScene,
  BlogScene, TextWaveScene, RadarScene, CareersScene, LegalScene,
} from './SceneVariants'

interface Props {
  className?: string
  variant: SceneVariant
  slug?: string
}

function Scene({ variant, slug }: { variant: SceneVariant; slug?: string }) {
  switch (variant) {
    case 'about':        return <AfricaGlobeScene />
    case 'story':        return <HelixScene />
    case 'team':         return <NetworkScene />
    case 'why':          return <ShieldScene />
    case 'services':     return <OrbitalScene />
    case 'service-slug': return <ServiceSlugScene slug={slug ?? ''} />
    case 'portfolio':    return <PortfolioScene />
    case 'pricing':      return <CrystalScene />
    case 'blog':         return <BlogScene />
    case 'blog-slug':    return <TextWaveScene />
    case 'contact':      return <RadarScene />
    case 'careers':      return <CareersScene />
    case 'legal':        return <LegalScene />
    default:             return <AfricaGlobeScene />
  }
}

export function SceneCanvas({ className = '', variant, slug }: Props) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: false, alpha: true }}
      dpr={[1, 1.5]}
      className={className}
      style={{ background: 'transparent' }}
    >
      <Scene variant={variant} slug={slug} />
    </Canvas>
  )
}
