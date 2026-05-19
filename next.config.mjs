/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: [
      "cdn.simpleicons.org",
      "media.licdn.com",
      "img.magnific.com",
      "api.iconify.design",
    ],
  },
};

export default nextConfig;
