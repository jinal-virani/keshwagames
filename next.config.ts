/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 'play-lh.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',           // ← Added for YouTube thumbnails
      },
      {
        protocol: 'https',
        hostname: '*.ytimg.com',           // ← Covers i.ytimg.com and ytimg.com
      },
      {
        protocol: 'https',
        hostname: '**',                    // Temporary for development (remove in production)
      },
    ],
  },
};

module.exports = nextConfig;