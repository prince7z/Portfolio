import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Prince Sahu",
  description:
    "Explore software engineering and freelance development projects by Prince Sahu, including scalable secure backend systems, cloud infrastructure, and full stack applications.",
  alternates: {
    canonical: "/projects",
  },
  keywords: [
    "Prince Sahu Projects",
    "Software Engineer Projects",
    "Freelancer Portfolio",
    "Full Stack Developer Projects",
    "Backend Projects",
    "Cloud Infrastructure Projects",
    "frontend Projects",
    "ecommerce Projects",
    
  ],
};

export default function ProjectLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
