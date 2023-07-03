/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true
  },
  domains: [
    'https://',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3mjdbr3lj24xr.cloudfront.net',
        cloudfront: true,
        port: '',
        pathname: '/my-bucket/**',
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(frag|vert)$/,
      type: 'asset/source'
    })
    return config
  }
};

module.exports = nextConfig;
