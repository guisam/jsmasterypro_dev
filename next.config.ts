import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  serverExternalPackages: ["pino", "pino-pretty"],
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
        port: "",
        pathname: "/system/resources/thumbnails/**",
      },
      {
        protocol: "https",
        hostname: "cdn.devdojo.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
