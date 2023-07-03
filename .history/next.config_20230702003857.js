/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: 'src/front-end',
  experimental: {
    appDir: true,
    serverActions: true
  }
};

module.exports = nextConfig;
