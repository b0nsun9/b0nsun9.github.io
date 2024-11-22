import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimisation
  },
  assetPrefix: isProd ? '/b0nsun9.github.io' : '',
  basePath: isProd ? '/b0nsun9.github.io' : '',
  output: 'export'
};

export default nextConfig;
