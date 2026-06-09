// @ts-nocheck
//
// BabylonSceneCanvas.tsx
// ----------------------
// Purpose: Renders an interactive 3D scene using Babylon.js inside a <canvas> element.
// This component is the core 3D visual on the page — it creates a Babylon Engine, Scene,
// Camera, Lights, and animated meshes (box, sphere, torus). All lifecycle management
// (setup, render loop, resize handling, cleanup) happens inside a React useEffect.
//

// React hooks — useEffect runs side effects after render; useRef holds a mutable reference
// to the <canvas> DOM element so Babylon can draw into it.
import { useEffect, useRef } from 'react'

// Babylon.js core modules (lazy-imported individually for tree-shaking):
// Engine is the "driver" that runs the WebGL render loop on a <canvas> element.
import { Engine } from '@babylonjs/core/Engines/engine'
// Scene is the container that holds all objects (meshes, cameras, lights).
import { Scene } from '@babylonjs/core/scene'
// ArcRotateCamera orbits a target point — the user can click-drag to rotate and scroll to zoom.
import { ArcRotateCamera } from '@babylonjs/core/Cameras/arcRotateCamera'
// HemisphericLight simulates ambient sky/ground light — it has no position, only a direction.
import { HemisphericLight } from '@babylonjs/core/Lights/hemisphericLight'
// Vector3 represents a 3D coordinate (x, y, z) used for positions, directions, etc.
import { Vector3 } from '@babylonjs/core/Maths/math.vector'
// Color3 represents an RGB color (r, g, b) with values from 0 to 1.
import { Color3 } from '@babylonjs/core/Maths/math.color'
// MeshBuilder provides factory methods to create primitive shapes (box, sphere, torus, etc.).
import { MeshBuilder } from '@babylonjs/core/Meshes/meshBuilder'
// StandardMaterial controls how a mesh surface looks — diffuse color, alpha, texture, etc.
import { StandardMaterial } from '@babylonjs/core/Materials/standardMaterial'
// Tools provides utility helpers such as ToRadians (converts degrees → radians).
import { Tools } from '@babylonjs/core/Misc/tools'

/**
 * BabylonSceneCanvas
 * -------------------
 * A React component that mounts a full Babylon.js 3D scene into a <canvas>.
 *
 * The flow:
 *   1. A <canvas> is rendered with a ref so we can hand it to Babylon.
 *   2. On mount (useEffect), we construct Engine → Scene → Camera → Light → Meshes.
 *   3. A per-frame callback rotates and bobs each mesh up/down using sine waves.
 *   4. The engine runs a continuous render loop that re-draws the scene every frame.
 *   5. On unmount, we tear down the render loop, scene, and engine to free GPU memory.
 */
export function BabylonSceneCanvas() {
  // canvasRef holds a reference to the actual <canvas> DOM element after React mounts it.
  const canvasRef = useRef(null)

  // All Babylon.js setup runs once when the component mounts (empty dependency array).
  useEffect(() => {
    // --- Grab the canvas element ---
    const canvas = canvasRef.current
    if (!canvas) return

    // --- Engine: the core renderer ---
    // Engine(canvas, antialias, options) creates a WebGL context bound to the <canvas>.
    // "true" enables antialiasing for smoother edges.
    // preserveDrawingBuffer: true is needed if you ever want to capture the canvas as an image.
    // stencil: true enables stencil buffer (used for advanced rendering effects).
    const engine = new Engine(canvas, true, { preserveDrawingBuffer: true, stencil: true })

    // --- Scene: the world container ---
    // A Scene holds all objects and manages the render graph.
    const scene = new Scene(engine)
    // Set the background "clear" color to black (RGB 0, 0, 0).
    scene.clearColor = new Color3(0, 0, 0)

    // --- Camera: how we view the scene ---
    // ArcRotateCamera(name, alpha, beta, radius, target, scene):
    //   - alpha = horizontal rotation angle (radians) — -30° from behind
    //   - beta  = vertical angle (radians) — 65° looking down
    //   - radius = distance from target
    //   - target = Vector3 the camera orbits around (origin in this case)
    //   - scene = which scene the camera belongs to
    // Tools.ToRadians converts degrees to radians for convenience.
    const camera = new ArcRotateCamera('camera', Tools.ToRadians(-30), Tools.ToRadians(65), 5, Vector3.Zero(), scene)
    // Attaches mouse/touch controls to the canvas so the user can orbit and zoom.
    // The second parameter "true" means noPreventDefault = true (keeps default browser behavior).
    camera.attachControl(canvas, true)

    // --- Light: illumination ---
    // HemisphericLight(name, direction, scene):
    // Shines from the given direction (Vector3(0, 1, 0) = straight down).
    // It provides a soft ambient fill — diffuse from above, ground color from below.
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), scene)
    light.intensity = 0.8

    // ============================================================
    //  Mesh Creation — building the 3D objects in the scene
    // ============================================================

    // --- Box (left) ---
    // MeshBuilder.CreateBox(name, options, scene) creates a cube mesh.
    // "size: 0.4" means each side is 0.4 Babylon units long — small enough
    // to read as a decoration rather than dominate the scene.
    const box = MeshBuilder.CreateBox('box', { size: 0.4 }, scene)
    box.position = new Vector3(-0.9, 0, 0)

    // A StandardMaterial defines how light interacts with the mesh surface.
    const boxMat = new StandardMaterial('boxMat', scene)
    boxMat.diffuseColor = new Color3(0.2, 0.45, 0.93) // Blue-ish tint
    boxMat.alpha = 0.7 // 70% opacity (semi-transparent)
    box.material = boxMat

    // --- Sphere (right) ---
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 0.35 }, scene)
    sphere.position = new Vector3(0.9, 0, 0)

    const sphereMat = new StandardMaterial('sphereMat', scene)
    sphereMat.diffuseColor = new Color3(0.93, 0.55, 0.2) // Orange tint
    sphereMat.alpha = 0.7
    sphere.material = sphereMat

    // --- Torus (center-back) ---
    // MeshBuilder.CreateTorus(name, { diameter, thickness }, scene).
    const torus = MeshBuilder.CreateTorus('torus', { diameter: 0.35, thickness: 0.08 }, scene)
    torus.position = new Vector3(0, 0, -0.9) // -Z = "into the screen"

    const torusMat = new StandardMaterial('torusMat', scene)
    torusMat.diffuseColor = new Color3(0.3, 0.85, 0.5) // Green tint
    torusMat.alpha = 0.7
    torus.material = torusMat

    // ============================================================
    //  Animation — per-frame updates
    // ============================================================

    // elapsed tracks total time (in arbitrary units) for sine-wave motion.
    let elapsed = 0

    // scene.registerBeforeRender(callback) registers a function that runs every frame
    // BEFORE the scene is rendered. This is where you update positions, rotations, etc.
    scene.registerBeforeRender(() => {
      elapsed += 0.01

      // Box: rotate on X and Y axes, and bob up/down with a sine wave.
      box.rotation.x += 0.005
      box.rotation.y += 0.01
      box.position.y = Math.sin(elapsed * 0.8) * 0.3

      // Sphere: rotate on X and Z, bob with a different phase offset (+1).
      sphere.rotation.x += 0.003
      sphere.rotation.z += 0.007
      sphere.position.y = Math.sin(elapsed * 0.6 + 1) * 0.3

      // Torus: rotate on X and Y, bob with yet another phase offset (+2).
      torus.rotation.x += 0.008
      torus.rotation.y += 0.005
      torus.position.y = Math.sin(elapsed * 0.7 + 2) * 0.3
    })

    // ============================================================
    //  Render Loop — the heartbeat of Babylon.js
    // ============================================================

    // engine.runRenderLoop(callback) tells the browser "call this function every frame".
    // scene.render() draws the entire scene once (clearing, drawing meshes, applying materials).
    engine.runRenderLoop(() => scene.render())

    // ============================================================
    //  Resize Handling
    // ============================================================

    // When the browser window resizes, tell the engine to match the new canvas size.
    const resize = () => engine.resize()
    window.addEventListener('resize', resize)

    // ============================================================
    //  Cleanup / Teardown
    // ============================================================

    // The function returned from useEffect runs when the component unmounts.
    // This is critical — without it, the WebGL context would leak GPU memory.
    return () => {
      // Remove the resize listener so we don't try to resize a destroyed engine.
      window.removeEventListener('resize', resize)

      // Stop the render loop — no more frames will be requested.
      engine.stopRenderLoop()

      // scene.dispose() frees all GPU resources held by the scene (meshes, materials, textures).
      scene.dispose()

      // engine.dispose() destroys the WebGL context and releases the GPU.
      engine.dispose()
    }
    // Empty dependency array — this effect runs only once on mount and cleans up on unmount.
  }, [])

  // Render a full-size <canvas> element that Babylon.js will draw into.
  return <canvas ref={canvasRef} className="w-full h-full" />
}
