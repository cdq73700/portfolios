/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: [
        'localhost:3000',
        process.env.NEXT_PUBLIC_ALLOWED_ORIGIN,
      ],
    },
  },
}

module.exports = nextConfig
