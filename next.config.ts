import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  transpilePackages: ['lenis'],
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
}

export default nextConfig
