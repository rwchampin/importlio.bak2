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
    domains: [`https://d3mjdbr3lj24xr.cloudfront.net\`],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd3mjdbr3lj24xr.cloudfront.net',
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
