/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  //assetPrefix: "./",
  // images: {
  //   loader: "custom",
  // },
  trailingSlash: true,
  basePath: "/kandidatky-obecni",
  // webpack: config => {
  //   // this will override the experiments
  //   config.experiments = { ...config.experiments, ...{ topLevelAwait: true } };
  //   // this will just update topLevelAwait property of config.experiments
  //   // config.experiments.topLevelAwait = true
  //   return config;
  // },
};

module.exports = nextConfig;
