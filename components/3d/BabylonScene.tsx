'use client'

//
// BabylonScene.tsx
// -----------------
// Purpose: Thin wrapper that dynamically imports the Babylon.js 3D canvas
// (BabylonSceneCanvas) so it is NOT rendered on the server (SSR: false).
// Babylon.js requires the browser's WebGL API (window, canvas, WebGL context),
// which does not exist during Next.js server-side rendering. This wrapper
// prevents hydration errors by loading the 3D scene only on the client side.
//

// Next.js dynamic — loads a module at runtime (lazy-loading).
// "ssr: false" tells Next.js to skip server-side rendering for this component,
// so the import is deferred until the code runs in the browser.
import dynamic from 'next/dynamic'

// SceneCanvas is the client-only version of BabylonSceneCanvas.
// dynamic(() => import(...)) returns a React component that:
//   1. Renders nothing during SSR (server-side rendering).
//   2. On the client, asynchronously imports BabylonSceneCanvas.
//   3. While the import is loading, shows the "loading" fallback (null = nothing).
//   4. Once loaded, renders BabylonSceneCanvas normally.
const SceneCanvas = dynamic(
  () => import('./BabylonSceneCanvas').then((m) => m.BabylonSceneCanvas),
  { ssr: false, loading: () => null },
)

/**
 * BabylonScene
 * ------------
 * A React component that renders the Babylon.js 3D scene inside a container <div>.
 *
 * Usage:
 *   <BabylonScene className="h-screen w-full" />
 *
 * The className prop is passed to the outer <div> so the parent can control sizing.
 * The actual 3D canvas lives inside SceneCanvas (the dynamically imported component).
 */
export function BabylonScene({ className }: { className?: string }) {
  return (
    // The outer <div> acts as a sizing container — it determines the canvas dimensions.
    // BabylonSceneCanvas renders a <canvas> that fills this container with w-full h-full.
    <div className={className}>
      <SceneCanvas />
    </div>
  )
}
