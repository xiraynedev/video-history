/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    port: process.env.PORT,
    nodeEnv: process.env.NODE_ENV,
    videoHistoryDbHost: process.env.VIDEO_HISTORY_DB_HOST,
    videoHistoryDbCollection: process.env.VIDEO_HISTORY_DB_COLLECTION,
  },
};

module.exports = nextConfig;
