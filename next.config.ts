/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config:any, { isServer }:any) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        async_hooks: false,
        fs: false,
        net: false,
        tls: false,
      };
    }
    return config;
  },
  turbopack: {},
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