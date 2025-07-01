import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  env: {
    PRIVATE_KEY: process.env.PRIVATE_KEY,
  },
  // output:'export'
}

export default nextConfig
