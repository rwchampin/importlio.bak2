/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  root: '/src/front-end',
  experimental: {
    appDir: true,
    serverActions: true
  }
};

module.exports = nextConfig;
