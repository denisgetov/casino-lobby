/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'imageapi.bpsgameserver.com',
      // Add any other image hostnames you might use
    ],
    // Optional: Add remotePatterns for more granular control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'imageapi.bpsgameserver.com',
        port: '',
        pathname: '/v3/bgr/**',
      },
    ],
  },
  // Additional Next.js configurations can go here
};

module.exports = nextConfig;