/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
  },
};

module.exports = nextConfig;
