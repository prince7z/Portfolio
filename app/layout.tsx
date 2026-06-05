import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { Archivo, Rubik, Sora } from "next/font/google";
import TopoWaves from "./components/TopoWaves";
import { getSiteUrl, siteConfig } from "./lib/site";

export const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-rubik",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sora",
});

export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-archivo",
});


export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: siteConfig.name,
    template: "%s | Prince Sahu",
  },
  description: siteConfig.description,
  applicationName: "Prince Sahu Portfolio",
  authors: [{ name: "Prince Sahu", url: getSiteUrl() }],
  creator: "Prince Sahu",
  publisher: "Prince Sahu",
  category: "Technology",
  alternates: {
    canonical: "/",
  },
  keywords: [
  // Branding
  "Prince Sahu",
  "Prince Sahu Portfolio",
  "Prince Sahu Developer",
  "Prince Sahu Software Engineer",
  "Prince Sahu Freelancer",

  // Core Identity
  "Full Stack Developer",
  "Full Stack Engineer",
  "Software Engineer",
  "Backend Developer",
  "Freelance Software Engineer",
  "Freelance Full Stack Developer",
  "Freelance Backend Developer",

  // Service Intent
  "Hire Full Stack Developer",
  "Hire Backend Developer",
  "Hire Freelance Developer",
  "Freelance Web Developer",
  "Ecommerce Developer",

  // Tech Stack
  "Node.js Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Express.js Developer",
  "PostgreSQL Developer",
  "MongoDB Developer",
  "Redis Developer",

  // Backend & Architecture
  "Scalable Backend",
  "Backend Architecture",
  "API Development",
  "REST API Development",
  "System Design",
  "Microservices",
  "Event Driven Architecture",

  // DevOps & Cloud
  "AWS Developer",
  "Docker",
  "Kubernetes",
  "DevOps Engineer",
  "CI/CD",
  "Terraform",
  "GitHub Actions",
  "Cloud Architecture",

  // Projects / Brands
  "SalesaKart",
  "Pathpalz",
  "Vaurlis",

  // Geographic SEO
  "Indian Software Engineer",
  "India Based Freelancer",
  "India Full Stack Developer",
  "Freelance Developer India",

  // Portfolio
  "Developer Portfolio",
  "Software Engineer Portfolio",
  "Full Stack Developer Portfolio",
  
  // Freelance Branding
  "Prince Sahu Freelancer",
  "Prince Sahu Freelance Developer",
  "Prince Sahu Freelance Software Engineer",

  // Hiring Intent
  "Hire Freelance Developer",
  "Hire Freelance Software Engineer",
  "Hire Full Stack Developer",
  "Hire Backend Developer",
  "Hire Node.js Developer",
  "Hire Next.js Developer",

  // Freelance Services
  "Freelance Full Stack Developer",
  "Freelance Backend Developer",
  "Freelance Web Developer",
  "Freelance MERN Stack Developer",
  "Freelance Node.js Developer",
  "Freelance Next.js Developer",
  "Freelance API Developer",
  "Freelance Ecommerce Developer",

  // Geographic Intent
  "Freelance Developer India",
  "Freelance Software Engineer India",
  "Indian Freelance Developer",
  "India Based Freelancer",
  "Remote Full Stack Developer",
  "Remote Backend Developer",

  // Business/Client Intent
  "Custom Web Application Developer",
  "Scalable Web Application Developer",
  "Backend System Developer",
  "Startup Software Developer",
  "Ecommerce Website Developer"
],



  robots: "index, follow",
  openGraph: {
    title: "Prince Sahu | Freelance Software Engineer",
    description: siteConfig.description,
    url: "/",
    type: "website",
    siteName: "Prince Sahu Portfolio",
    locale: "en_IN",
    images: [
      {
        url: "/opengraph-image",
        alt: siteConfig.name,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Sahu | Freelance Software Engineer",
    description: siteConfig.description,
    images: ["/twitter-image"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = getSiteUrl();

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Prince Sahu",
    url: siteUrl,
    image: `${siteUrl}/br.webp`,
    email: "mailto:contact@princesahu.me",
    jobTitle: "Freelance Software Engineer",
    description:
      "Prince Sahu is an India-based freelance software engineer specializing in scalable backend systems, cloud infrastructure, and modern web applications.",
    nationality: "Indian",
    homeLocation: {
      "@type": "Place",
      name: "India",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
    },
    sameAs: [
      "https://github.com/prince7z",
      "https://www.linkedin.com/in/princesahu7z",
      "https://x.com/princesahu69495",
      "https://www.instagram.com/prince.7z/",
    ],
    knowsAbout: [
      "Software Engineering",
      "Freelancing",
      "Full Stack Development",
      "Backend Engineering",
      "Next.js",
      "Node.js",
      "TypeScript",
      "Cloud Infrastructure",
      "System Design",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Independent / Global Clients",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Prince Sahu Portfolio",
    url: siteUrl,
    description: siteConfig.description,
    inLanguage: "en",
    areaServed: {
      "@type": "Country",
      name: "India",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WJFBFPE5FV"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-WJFBFPE5FV');` }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        />
      </head>
      <body
        className={`${rubik.variable} ${sora.variable} ${archivo.variable} w-full max-w-full bg-white font-sans antialiased overflow-x-clip dark:bg-black`}
      >
        <Providers>
          <TopoWaves />
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <main className="min-h-screen w-full max-w-full px-4 sm:px-8 lg:px-12 dark:bg-black">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
      </body>
    </html>
  );
}
