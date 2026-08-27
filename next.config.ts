import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'standalone',  
    images: {
    unoptimized: true,
    domains: ["lgstechnologies.co.za"], // allow your domain
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
