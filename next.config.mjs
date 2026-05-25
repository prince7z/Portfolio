import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["gsap", "@gsap/react", "@studio-freight/lenis"],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      gsap: path.join(__dirname, "node_modules/gsap"),
    };

    return config;
  },
  images: {
    unoptimized: true,
    domains: [
      "cdn.simpleicons.org",
      "media.licdn.com",
      "img.magnific.com",
      "api.iconify.design",
      "www.linkedin.com",
    ],
  },
};

export default nextConfig;
