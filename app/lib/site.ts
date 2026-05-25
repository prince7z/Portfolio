export const siteConfig = {
  name: "Prince Sahu | Full Stack Developer",
  description:
    "Prince Sahu is a Full Stack Developer specializing in scalable backend systems, cloud infrastructure, and modern web applications using Next.js, Node.js, Express, Redis, AWS, PostgreSQL, and TypeScript. Explore projects, architecture designs, and production-grade applications built from scratch.",
};

export const canonicalSiteUrl = "https://princesahu.me";

export const alternateSiteUrls = [
  "https://www.princesahu.me",
  "https://vercel.princesahu.app",
];

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (configuredUrl) {
    return configuredUrl.startsWith("http") ? configuredUrl : `https://${configuredUrl}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return canonicalSiteUrl;
}