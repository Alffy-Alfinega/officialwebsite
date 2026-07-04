'use client'

import React from 'react'

interface State { hasError: boolean }

/**
 * Wraps any Babylon scene. If WebGL is unavailable or the scene crashes,
 * renders null (transparent fallback) so the parent section's CSS background
 * still shows. Logs the error for debugging.
 */
export class BabylonErrorBoundary extends React.Component<
  { children: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode }) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  componentDidCatch(error: Error) {
    // Surface to console for debugging; never crash the page
    console.warn('[BabylonHero] 3D scene failed to initialise:', error.message)
  }

  render() {
    if (this.state.hasError) return null
    return this.props.children
  }
}
