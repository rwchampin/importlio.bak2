/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: 'src/',
  experimental: {
    // appDir: true,
    serverActions: true
  }
};

module.exports = nextConfig;
