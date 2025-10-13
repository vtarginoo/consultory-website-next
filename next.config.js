// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: process.env.NODE_ENV === 'development' 
            ? 'no-store, no-cache, must-revalidate, max-age=0' // ⬅️ SEM cache em dev
            : 'public, max-age=3600' // ⬅️ 1 hora em produção
        }
      ]
    }
  ]
};

module.exports = nextConfig;