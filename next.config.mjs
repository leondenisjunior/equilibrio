/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    hostname: 'https://images.unsplash.com/',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'https://images.unsplash.com/',
      },
    ],
  },
}

export default nextConfig
