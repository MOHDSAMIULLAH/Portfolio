import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    // Rewrites the barrel import so only the used Motion entry points ship.
    optimizePackageImports: ['motion'],
  },
}

export default nextConfig
