/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   loader: "custom",
  // },
  trailingSlash: true,
  basePath: "/kandidatky-obecni",
  experimental: {
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
