import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
}

export default nextConfig
