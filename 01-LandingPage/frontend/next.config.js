/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [process.env.ORIGIN],
    },
  },
}

module.exports = nextConfig
