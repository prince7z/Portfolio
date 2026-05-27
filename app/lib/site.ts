export const siteConfig = {
  name: "Prince Sahu | Software Engineer & Freelance Developer",
  description:
    "Prince Sahu is a freelance software engineer and full stack developer from India focused on scalable backend systems, modern web applications, ecommerce platforms, and cloud infrastructure using Node.js, Next.js, TypeScript, PostgreSQL, Redis, and AWS.",
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