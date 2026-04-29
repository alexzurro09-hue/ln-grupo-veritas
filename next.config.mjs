/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },

  async redirects() {
    return [
      // www → apex (unifica autoridad SEO en el dominio sin www)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lngrupoveritas.es' }],
        destination: 'https://lngrupoveritas.es/:path*',
        permanent: true,
      },
      // Preview/staging Vercel → producción
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'ln-grupo-veritas.vercel.app' }],
        destination: 'https://lngrupoveritas.es/:path*',
        permanent: true,
      },
    ];
  },

  async headers() {
    const securityHeaders = [
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload',
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff',
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN',
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block',
      },
      {
        key: 'Referrer-Policy',
        value: 'strict-origin-when-cross-origin',
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()',
      },
    ];

    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
      // Caché larga para activos estáticos inmutables
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
