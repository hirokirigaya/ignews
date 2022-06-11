/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STRIP_API_KEY: process.env.STRIP_API_KEY
  }
}

module.exports = nextConfig
