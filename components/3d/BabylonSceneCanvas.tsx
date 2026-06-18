'use client'

import { useEffect, useRef } from 'react'
import { Engine } from '@babylonjs/core/Engines/engine'
import { Scene } from '@babylonjs/core/scene'
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
import { Color3, Color4 } from '@babylonjs/core/Maths/math.color'
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'
import { Tools } from '@babylonjs/core/Misc/tools'

export type SceneVariant =
  | 'home' | 'about' | 'contact' | 'services'
  | 'web-design' | 'seo-marketing' | 'branding-design'
  | 'media-production' | 'arch-vis' | 'cybersecurity'
  | 'blog' | 'portfolio' | 'pricing' | 'careers' | 'legal'

// Helper: create a StandardMaterial with diffuse color + alpha
function mkMat(name: string, scene: Scene, r: number, g: number, b: number, a = 0.75): StandardMaterial {
  const m = new StandardMaterial(name, scene)
  m.diffuseColor = new Color3(r, g, b)
  m.alpha = a
  return m
}

// ─────────────────────────────────────────────────────────────────────────────
// Scene builders — each receives the Scene and registers its own beforeRender
// ─────────────────────────────────────────────────────────────────────────────

// HOME: abstract floating geometry — brand introduction
function buildHomeScene(scene: Scene): void {
  const box = MeshBuilder.CreateBox('box', { size: 0.4 }, scene)
  box.position = new Vector3(-0.9, 0, 0)
  box.material = mkMat('bm', scene, 0.17, 0.43, 0.93)

  const sphere = MeshBuilder.CreateSphere('sph', { diameter: 0.35 }, scene)
  sphere.position = new Vector3(0.9, 0, 0)
  sphere.material = mkMat('sm', scene, 0.93, 0.55, 0.2)

  const torus = MeshBuilder.CreateTorus('tor', { diameter: 0.4, thickness: 0.1 }, scene)
  torus.position = new Vector3(0, 0, -0.9)
  torus.material = mkMat('tm', scene, 0.3, 0.85, 0.5)

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.01
    box.rotation.x += 0.005; box.rotation.y += 0.01
    box.position.y = Math.sin(t * 0.8) * 0.3
    sphere.rotation.x += 0.003; sphere.rotation.z += 0.007
    sphere.position.y = Math.sin(t * 0.6 + 1) * 0.3
    torus.rotation.x += 0.008; torus.rotation.y += 0.005
    torus.position.y = Math.sin(t * 0.7 + 2) * 0.3
  })
}

// ABOUT: central company sphere + 3 orbiting team spheres
function buildAboutScene(scene: Scene): void {
  const core = MeshBuilder.CreateSphere('core', { diameter: 0.55, segments: 16 }, scene)
  core.material = mkMat('cm', scene, 0.17, 0.43, 0.93, 0.9)

  const ring = MeshBuilder.CreateTorus('oring', { diameter: 2.6, thickness: 0.02 }, scene)
  ring.material = mkMat('rm', scene, 0.17, 0.43, 0.93, 0.2)
  ring.rotation.x = Math.PI / 2

  const orbColors = [[0.83, 0.65, 0.2], [0.2, 0.75, 0.85], [0.65, 0.35, 0.85]]
  const orbs = orbColors.map(([r, g, b], i) => {
    const s = MeshBuilder.CreateSphere(`orb${i}`, { diameter: 0.22 }, scene)
    s.material = mkMat(`om${i}`, scene, r, g, b, 0.8)
    return s
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.008
    core.rotation.y += 0.005
    ring.rotation.y += 0.003
    orbs.forEach((orb, i) => {
      const a = t * 0.6 + (i * 2 * Math.PI / 3)
      orb.position.x = Math.cos(a) * 1.3
      orb.position.z = Math.sin(a) * 1.3
      orb.position.y = Math.sin(t * 0.5 + i * 1.5) * 0.3
      orb.rotation.y += 0.02
    })
  })
}

// CONTACT: pulsing hub + orbit ring + 4 satellite signal nodes
function buildContactScene(scene: Scene): void {
  const hub = MeshBuilder.CreateSphere('hub', { diameter: 0.5, segments: 16 }, scene)
  hub.material = mkMat('hm', scene, 0.17, 0.43, 0.93, 0.9)

  const ring = MeshBuilder.CreateTorus('cring', { diameter: 2.4, thickness: 0.025 }, scene)
  ring.material = mkMat('crm', scene, 0.17, 0.43, 0.93, 0.3)
  ring.rotation.x = Math.PI / 6

  const sats = [0, 1, 2, 3].map(i => {
    const s = MeshBuilder.CreateSphere(`sat${i}`, { diameter: 0.14 + i * 0.04 }, scene)
    s.material = mkMat(`satm${i}`, scene, 0.83, 0.65 - i * 0.05, 0.2 + i * 0.15, 0.8)
    return s
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.01
    hub.scaling.setAll(1 + Math.sin(t * 1.8) * 0.06)
    hub.rotation.y += 0.007
    ring.rotation.z += 0.003
    sats.forEach((sat, i) => {
      const r = 0.85 + i * 0.2
      const spd = 0.5 + i * 0.2
      sat.position.x = Math.cos(t * spd + i * 1.57) * r
      sat.position.z = Math.sin(t * spd + i * 1.57) * r
      sat.position.y = Math.sin(t * 0.8 + i) * 0.35
    })
  })
}

// SERVICES: 6 distinct shapes in a circle, one per service
function buildServicesScene(scene: Scene): void {
  const configs = [
    { fn: () => MeshBuilder.CreateBox('sv0', { size: 0.32 }, scene), c: [0.17, 0.43, 0.93] },
    { fn: () => MeshBuilder.CreateSphere('sv1', { diameter: 0.35 }, scene), c: [0.83, 0.65, 0.2] },
    { fn: () => MeshBuilder.CreateTorus('sv2', { diameter: 0.38, thickness: 0.1 }, scene), c: [0.65, 0.35, 0.85] },
    { fn: () => MeshBuilder.CreateCylinder('sv3', { diameter: 0.28, height: 0.45 }, scene), c: [0.2, 0.75, 0.5] },
    { fn: () => MeshBuilder.CreateSphere('sv4', { diameter: 0.3, segments: 2 }, scene), c: [0.9, 0.4, 0.3] },
    { fn: () => MeshBuilder.CreateSphere('sv5', { diameter: 0.3, segments: 3 }, scene), c: [0.2, 0.75, 0.85] },
  ]
  const meshes = configs.map(({ fn, c: [r, g, b] }, i) => {
    const mesh = fn()
    const a = (i / 6) * Math.PI * 2
    mesh.position = new Vector3(Math.cos(a) * 1.8, 0, Math.sin(a) * 1.8)
    mesh.material = mkMat(`svm${i}`, scene, r, g, b)
    return mesh
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.008
    meshes.forEach((mesh, i) => {
      mesh.rotation.x += 0.005 + i * 0.002
      mesh.rotation.y += 0.008 + i * 0.003
      mesh.position.y = Math.sin(t * 0.7 + i * 1.05) * 0.3
    })
  })
}

// WEB DESIGN: floating monitor-like thin boxes + cursor tracer
function buildWebDesignScene(scene: Scene): void {
  const scrnCfg = [
    { pos: new Vector3(-1.0, 0.1, 0.2), ry: -0.35 },
    { pos: new Vector3(0.05, 0, -0.3), ry: 0.05 },
    { pos: new Vector3(1.0, -0.1, 0.1), ry: 0.4 },
  ]
  const screens = scrnCfg.map(({ pos, ry }, i) => {
    const s = MeshBuilder.CreateBox(`scr${i}`, { width: 0.75, height: 0.52, depth: 0.04 }, scene)
    s.position = pos.clone()
    s.rotation.y = ry
    const m = mkMat(`scrm${i}`, scene, 0.17, 0.43, 0.93, 0.25 + i * 0.2)
    m.wireframe = i === 0
    s.material = m
    return s
  })
  const cursor = MeshBuilder.CreateSphere('cur', { diameter: 0.07 }, scene)
  cursor.material = mkMat('curm', scene, 0.93, 0.93, 1, 0.9)

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.01
    screens.forEach((s, i) => {
      s.rotation.y = scrnCfg[i].ry + Math.sin(t * 0.3 + i * 1.1) * 0.06
      s.position.y = scrnCfg[i].pos.y + Math.sin(t * 0.6 + i * 1.2) * 0.15
    })
    cursor.position.x = Math.sin(t * 0.8) * 0.7
    cursor.position.y = Math.cos(t * 1.1) * 0.45
    cursor.position.z = Math.sin(t * 0.5) * 0.3
  })
}

// SEO / MARKETING: bar chart of rising cylinders + trending peak dot
function buildSeoScene(scene: Scene): void {
  const barData = [
    { h: 0.65, x: -1.6, b: 0.55 },
    { h: 1.1,  x: -0.8, b: 0.65 },
    { h: 1.6,  x:  0,   b: 1.0  },
    { h: 0.9,  x:  0.8, b: 0.6  },
    { h: 1.4,  x:  1.6, b: 0.85 },
  ]
  const bars = barData.map(({ h, x, b }, i) => {
    const bar = MeshBuilder.CreateCylinder(`bar${i}`, { height: h, diameter: 0.28, tessellation: 12 }, scene)
    bar.position = new Vector3(x, -1.0 + h / 2, 0)
    bar.material = mkMat(`barm${i}`, scene, 0.1, 0.35 * b, 0.9 * b, 0.85)
    return bar
  })
  const ground = MeshBuilder.CreateBox('gnd', { width: 4.2, height: 0.04, depth: 0.4 }, scene)
  ground.position.y = -1.0
  ground.material = mkMat('gm', scene, 0.17, 0.43, 0.93, 0.3)
  const peak = MeshBuilder.CreateSphere('peak', { diameter: 0.13 }, scene)
  peak.material = mkMat('pm', scene, 0.83, 0.65, 0.2, 0.9)

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.008
    bars.forEach((bar, i) => {
      bar.rotation.y += 0.005
      bar.scaling.y = 1 + Math.sin(t * 0.5 + i * 0.8) * 0.04
    })
    peak.position.x = 0
    peak.position.y = -1.0 + barData[2].h + 0.15 + Math.sin(t * 1.5) * 0.1
  })
}

// BRANDING & DESIGN: brand-color palette spheres + orbiting accent dots
function buildBrandingScene(scene: Scene): void {
  const palette = [
    { r: 0.17, g: 0.43, b: 0.93, sz: 0.46, bx: -0.8,  bz: -0.3 },
    { r: 0.83, g: 0.65, b: 0.2,  sz: 0.35, bx:  0.85, bz:  0.4 },
    { r: 0.92, g: 0.92, b: 0.94, sz: 0.28, bx:  0.05, bz: -0.8 },
    { r: 0.65, g: 0.35, b: 0.85, sz: 0.3,  bx:  0.4,  bz:  0.8 },
  ]
  const baseY = [0.15, -0.1, 0.5, -0.45]
  const spheres = palette.map(({ r, g, b, sz, bx, bz }, i) => {
    const s = MeshBuilder.CreateSphere(`pal${i}`, { diameter: sz, segments: 16 }, scene)
    s.position = new Vector3(bx, baseY[i], bz)
    s.material = mkMat(`pm${i}`, scene, r, g, b, 0.88)
    return s
  })
  const dots = [0, 1, 2].map(i => {
    const d = MeshBuilder.CreateSphere(`dot${i}`, { diameter: 0.07 }, scene)
    d.material = mkMat(`dm${i}`, scene, 0.83, 0.65, 0.2, 0.7)
    return d
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.009
    spheres.forEach((s, i) => {
      s.rotation.y += 0.007
      s.position.y = baseY[i] + Math.sin(t * 0.6 + i * 1.3) * 0.2
    })
    dots.forEach((d, i) => {
      const a = t * 1.2 + i * 2.09
      d.position.x = Math.cos(a) * 1.5
      d.position.y = Math.sin(a * 0.5) * 0.5
      d.position.z = Math.sin(a) * 1.5
    })
  })
}

// MEDIA PRODUCTION: film reels (tori) + play-button cone + camera lens
function buildMediaScene(scene: Scene): void {
  const reel = MeshBuilder.CreateTorus('reel', { diameter: 1.4, thickness: 0.12, tessellation: 48 }, scene)
  reel.material = mkMat('rlm', scene, 0.17, 0.43, 0.93, 0.78)
  reel.rotation.x = Math.PI / 6

  const reel2 = MeshBuilder.CreateTorus('reel2', { diameter: 0.85, thickness: 0.07, tessellation: 32 }, scene)
  reel2.material = mkMat('rl2m', scene, 0.83, 0.65, 0.2, 0.55)
  reel2.rotation.x = -Math.PI / 4

  // Triangle play button — cone with 3 sides rotated to face sideways
  const play = MeshBuilder.CreateCylinder('play', {
    diameterBottom: 0, diameterTop: 0.38, height: 0.44, tessellation: 3,
  }, scene)
  play.rotation.z = -Math.PI / 2
  play.rotation.y = Math.PI / 6
  play.material = mkMat('plm', scene, 0.83, 0.65, 0.2, 0.9)

  const lens = MeshBuilder.CreateSphere('lens', { diameter: 0.26 }, scene)
  lens.position = new Vector3(-0.7, 0.5, -0.3)
  lens.material = mkMat('lnm', scene, 0.2, 0.75, 0.85, 0.75)

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.01
    reel.rotation.y += 0.012
    reel2.rotation.y -= 0.018
    reel2.rotation.z += 0.007
    play.rotation.y += 0.007
    lens.position.y = 0.5 + Math.sin(t * 1.1) * 0.15
    lens.rotation.x += 0.01
  })
}

// ARCHITECTURAL VISUALISATION: wireframe building cluster + ground + scale indicator
function buildArchVisScene(scene: Scene): void {
  const bldgs = [
    { w: 0.5,  h: 1.4, d: 0.5,  x: -1.2, z:  0.3 },
    { w: 0.65, h: 2.0, d: 0.6,  x:  0,   z: -0.3 },
    { w: 0.4,  h: 0.9, d: 0.45, x:  1.2, z:  0.2 },
  ]
  bldgs.forEach(({ w, h, d, x, z }, i) => {
    const b = MeshBuilder.CreateBox(`bld${i}`, { width: w, height: h, depth: d }, scene)
    b.position = new Vector3(x, -1.0 + h / 2, z)
    const m = mkMat(`bldm${i}`, scene, 0.17, 0.43, 0.93, 0.85)
    m.wireframe = true
    b.material = m
  })
  const ground = MeshBuilder.CreateBox('gnd', { width: 4, height: 0.04, depth: 2.5 }, scene)
  ground.position.y = -1.0
  ground.material = mkMat('gm', scene, 0.17, 0.43, 0.93, 0.2)

  const mline = MeshBuilder.CreateBox('ml', { width: 0.02, height: 2.1, depth: 0.02 }, scene)
  mline.position = new Vector3(-2.0, -1.0 + 1.05, -0.8)
  mline.material = mkMat('mlm', scene, 0.83, 0.65, 0.2, 0.7)

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.006
    // subtle sway on the tallest building
    const bld1 = scene.getMeshByName('bld1')
    if (bld1) bld1.rotation.y = Math.sin(t * 0.3) * 0.012
  })
}

// CYBERSECURITY: faceted shield sphere + dual orbit rings + 6 scanning nodes
function buildCybersecurityScene(scene: Scene): void {
  const shield = MeshBuilder.CreateSphere('shield', { diameter: 0.55, segments: 3 }, scene)
  shield.material = mkMat('shm', scene, 0.17, 0.43, 0.93, 0.88)

  const orbit1 = MeshBuilder.CreateTorus('orb1', { diameter: 2.2, thickness: 0.02 }, scene)
  orbit1.material = mkMat('ob1m', scene, 0.17, 0.43, 0.93, 0.35)
  orbit1.rotation.x = Math.PI / 6

  const orbit2 = MeshBuilder.CreateTorus('orb2', { diameter: 3.2, thickness: 0.015 }, scene)
  orbit2.material = mkMat('ob2m', scene, 0.17, 0.43, 0.93, 0.18)
  orbit2.rotation.x = -Math.PI / 4

  const nodes = [0, 1, 2, 3, 4, 5].map(i => {
    const n = MeshBuilder.CreateSphere(`nd${i}`, { diameter: 0.1 }, scene)
    n.material = mkMat(`ndm${i}`, scene, 0.85, 0.9, 1, 0.85)
    return n
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.01
    shield.rotation.x += 0.004
    shield.rotation.y += 0.007
    shield.scaling.setAll(1 + Math.sin(t * 1.5) * 0.03)
    orbit1.rotation.y += 0.006
    orbit2.rotation.y -= 0.003
    nodes.forEach((n, i) => {
      const a = t * 0.8 + (i * Math.PI / 3)
      n.position.x = Math.cos(a) * 1.1
      n.position.z = Math.sin(a) * 1.1
      n.position.y = Math.sin(t * 1.2 + i) * 0.15
    })
  })
}

// BLOG: floating document panels (thin boxes) + drifting text-line indicators
function buildBlogScene(scene: Scene): void {
  const pgCfg = [
    { pos: new Vector3(-0.75, 0.2,  0.1), ry: -0.3  },
    { pos: new Vector3( 0.1,  0,   -0.45), ry:  0.08 },
    { pos: new Vector3( 0.85,-0.15, 0.25), ry:  0.35 },
  ]
  const pages = pgCfg.map(({ pos, ry }, i) => {
    const p = MeshBuilder.CreateBox(`pg${i}`, { width: 0.65, height: 0.88, depth: 0.03 }, scene)
    p.position = pos.clone()
    p.rotation.y = ry
    const m = mkMat(`pgm${i}`, scene, 0.75 - i * 0.08, 0.78 - i * 0.04, 0.95, 0.35 + i * 0.12)
    m.wireframe = i === 0
    p.material = m
    return p
  })
  const lines = [0, 1, 2].map(i => {
    const l = MeshBuilder.CreateBox(`tl${i}`, { width: 0.42, height: 0.025, depth: 0.02 }, scene)
    l.material = mkMat(`tlm${i}`, scene, 0.17, 0.43, 0.93, 0.5)
    l.position = new Vector3(-0.25 + i * 0.18, 0.55 - i * 0.28, -0.65)
    return l
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.008
    pages.forEach((p, i) => {
      p.rotation.y = pgCfg[i].ry + Math.sin(t * 0.5 + i * 1.5) * 0.08
      p.position.y = pgCfg[i].pos.y + Math.sin(t * 0.6 + i * 1.1) * 0.15
    })
    lines.forEach((l, i) => {
      l.position.x = -0.25 + i * 0.18 + Math.sin(t * 0.4 + i) * 0.05
    })
  })
}

// PORTFOLIO: staggered gallery panels in 3D space — a showreel frozen mid-motion
function buildPortfolioScene(scene: Scene): void {
  const panelCfg = [
    { pos: new Vector3(-1.1,  0.3,  0.2), ry: -0.3  },
    { pos: new Vector3(-0.2,  0,   -0.5), ry:  0.1  },
    { pos: new Vector3( 0.9,  0.2,  0.1), ry:  0.35 },
    { pos: new Vector3( 0.25,-0.4,  0.65), ry: -0.15 },
  ]
  const panels = panelCfg.map(({ pos, ry }, i) => {
    const p = MeshBuilder.CreateBox(`pnl${i}`, { width: 0.7, height: 0.5, depth: 0.03 }, scene)
    p.position = pos.clone()
    p.rotation.y = ry
    const m = mkMat(`pnm${i}`, scene, 0.1 + i * 0.05, 0.15 + i * 0.08, 0.3 + i * 0.12, 0.22 + i * 0.12)
    if (i < 2) m.wireframe = true
    p.material = m
    return p
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.007
    panels.forEach((p, i) => {
      p.rotation.y = panelCfg[i].ry + Math.sin(t * 0.4 + i * 1.3) * 0.06
      p.position.y = panelCfg[i].pos.y + Math.sin(t * 0.5 + i * 0.9) * 0.12
    })
  })
}

// PRICING: 3 gem-like low-poly spheres (segments:2 = octahedron shape) — tier hierarchy
function buildPricingScene(scene: Scene): void {
  const tiers = [
    { sz: 0.38, x: -1.1, y: -0.1, r: 0.7,  gc: 0.5,  b: 0.9  },
    { sz: 0.56, x:  0,   y:  0.15, r: 0.17, gc: 0.43, b: 0.93 },
    { sz: 0.44, x:  1.1, y:  0,   r: 0.83, gc: 0.65, b: 0.2  },
  ]
  const gems = tiers.map(({ sz, x, y, r, gc, b }, i) => {
    const gem = MeshBuilder.CreateSphere(`gm${i}`, { diameter: sz, segments: 2 }, scene)
    gem.position = new Vector3(x, y, 0)
    gem.material = mkMat(`gmm${i}`, scene, r, gc, b, 0.85)
    return gem
  })
  tiers.forEach(({ sz, x, y, r, gc, b }, i) => {
    const gl = MeshBuilder.CreateTorus(`gl${i}`, { diameter: sz * 3.5, thickness: 0.01 }, scene)
    gl.position = new Vector3(x, y - sz * 0.7, 0)
    gl.rotation.x = Math.PI / 2
    gl.material = mkMat(`glm${i}`, scene, r, gc, b, 0.22)
  })

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.01
    gems.forEach((gem, i) => {
      gem.rotation.x += 0.007 + i * 0.003
      gem.rotation.y += 0.012 + i * 0.005
      gem.position.y = tiers[i].y + Math.sin(t * 0.8 + i * 1.4) * 0.2
    })
  })
}

// CAREERS: ascending cylinders (growth chart) + gold star on the peak
function buildCareersScene(scene: Scene): void {
  const levels = [0.4, 0.72, 1.1, 1.5, 1.9]
  const xPos   = [-1.6, -0.8, 0, 0.8, 1.6]
  const bars = levels.map((h, i) => {
    const c = MeshBuilder.CreateCylinder(`lv${i}`, { height: h, diameter: 0.3, tessellation: 16 }, scene)
    c.position = new Vector3(xPos[i], -1.0 + h / 2, 0)
    const b = 0.4 + (i / 4) * 0.6
    c.material = mkMat(`lvm${i}`, scene, 0.1, 0.28 + b * 0.18, b, 0.88)
    return c
  })
  const gnd = MeshBuilder.CreateBox('cg', { width: 4.2, height: 0.04, depth: 0.6 }, scene)
  gnd.position.y = -1.0
  gnd.material = mkMat('cgm', scene, 0.17, 0.43, 0.93, 0.25)
  const star = MeshBuilder.CreateSphere('cstar', { diameter: 0.18, segments: 2 }, scene)
  star.position = new Vector3(1.6, -1.0 + 1.9 + 0.2, 0)
  star.material = mkMat('stm', scene, 0.83, 0.65, 0.2, 0.9)

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.009
    bars.forEach((c, i) => {
      c.rotation.y += 0.004 + i * 0.002
      c.scaling.y = 1 + Math.sin(t * 0.5 + i * 0.7) * 0.03
    })
    star.rotation.x += 0.01
    star.rotation.y += 0.015
    star.position.y = -1.0 + levels[4] + 0.2 + Math.sin(t * 1.8) * 0.1
  })
}

// LEGAL: single slow-rotating faceted sphere + outer wireframe shell — minimal authority
function buildLegalScene(scene: Scene): void {
  const ico = MeshBuilder.CreateSphere('ico', { diameter: 0.6, segments: 3 }, scene)
  ico.material = mkMat('im', scene, 0.17, 0.43, 0.93, 0.65)

  const shell = MeshBuilder.CreateSphere('shell', { diameter: 1.05, segments: 4 }, scene)
  const shm = mkMat('shlm', scene, 0.17, 0.43, 0.93, 0.12)
  shm.wireframe = true
  shell.material = shm

  let t = 0
  scene.registerBeforeRender(() => {
    t += 0.005
    ico.rotation.x += 0.003
    ico.rotation.y += 0.005
    ico.rotation.z += 0.002
    shell.rotation.x -= 0.002
    shell.rotation.y += 0.003
  })
}

// ── Dispatch ─────────────────────────────────────────────────────────────────

function buildScene(variant: SceneVariant, scene: Scene): void {
  switch (variant) {
    case 'about':            return buildAboutScene(scene)
    case 'contact':          return buildContactScene(scene)
    case 'services':         return buildServicesScene(scene)
    case 'web-design':       return buildWebDesignScene(scene)
    case 'seo-marketing':    return buildSeoScene(scene)
    case 'branding-design':  return buildBrandingScene(scene)
    case 'media-production': return buildMediaScene(scene)
    case 'arch-vis':         return buildArchVisScene(scene)
    case 'cybersecurity':    return buildCybersecurityScene(scene)
    case 'blog':             return buildBlogScene(scene)
    case 'portfolio':        return buildPortfolioScene(scene)
    case 'pricing':          return buildPricingScene(scene)
    case 'careers':          return buildCareersScene(scene)
    case 'legal':            return buildLegalScene(scene)
    default:                 return buildHomeScene(scene)
  }
}

// ── Component ─────────────────────────────────────────────────────────────────

export function BabylonSceneCanvas({ variant = 'home' }: { variant?: SceneVariant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true, alpha: true })
    const scene = new Scene(engine)
    scene.clearColor = new Color4(0, 0, 0, 0)

    new ArcRotateCamera('camera', Tools.ToRadians(-30), Tools.ToRadians(65), 5, Vector3.Zero(), scene)

    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)
    light.intensity = 0.8

    buildScene(variant, scene)

    engine.runRenderLoop(() => scene.render())
    const onResize = () => engine.resize()
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      engine.stopRenderLoop()
      scene.dispose()
      engine.dispose()
    }
  }, [variant])

  return <canvas ref={canvasRef} className="w-full h-full" />
}
