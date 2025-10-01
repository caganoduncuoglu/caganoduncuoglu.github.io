/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      resolveAlias: {},
    },
  },
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
