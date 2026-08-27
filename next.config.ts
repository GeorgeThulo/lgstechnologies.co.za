import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

// next.config.js
module.exports = {
  output: 'standalone',
}

export default nextConfig;
