import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // Disable Next.js image optimization for static exports
  },
};

export default nextConfig;
