import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Copyright from "./sections/Copyright";
import SplashScreenManager from "./components/SplashScreenManager";
import { Providers } from "./providers";
import { Archivo, Rubik, Sora } from "next/font/google";
import TopoWaves from "./components/TopoWaves";

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
  title: "Prince Sahu | Full Stack Developer",
  description:
    "Prince Sahu is a Full Stack Developer specializing in scalable backend systems, cloud infrastructure, and modern web applications using Next.js, Node.js, Express, Redis, AWS, PostgreSQL, and TypeScript. Explore projects, architecture designs, and production-grade applications built from scratch.",
  keywords: [
    "Prince Sahu",
    "Prince Sahu Portfolio",
    "PrinceSahu",
    "Full Stack Developer",
    "Backend Developer",
    "Software Engineer",
    "Node.js Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Express.js Developer",
    "Redis",
    "BullMQ",
    "AWS Developer",
    "Cloud Architecture",
    "System Design",
    "Microservices",
    "Event Driven Architecture",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Kubernetes",
    "DevOps",
    "Scalable Backend",
    "Production Grade Backend",
    "Web Developer",
    "Freelance Developer",
    "Ecommerce Developer",
    "Portfolio Website",
    "SalesaKart",
    "Pathpalz",
    "Vaurlis",
    "Hunter",
    "Fullstack Engineer",
    "Backend Architecture",
    "API Development",
    "REST API",
    "Web Application Development",
    "Linux",
    "CI/CD",
    "Terraform",
    "GitHub Actions",
    "Software Development",
    "CSE Student",
    "India Developer",
    "Open to Work",
    "Developer Portfolio",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Prince Sahu | Full Stack Developer",
    description:
      "Explore the portfolio of Prince Sahu — a Full Stack Developer focused on scalable backend systems, cloud infrastructure, system design, and modern web applications built with Next.js, Node.js, Redis, AWS, and TypeScript.",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "https://yourdomain.com/og-image.png",
        alt: "Prince Sahu | Full Stack Developer Portfolio",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prince Sahu | Full Stack Developer",
    description:
      "Full Stack Developer building scalable backend systems, cloud-native applications, and modern web platforms using Next.js, Node.js, Redis, AWS, and TypeScript.",
    images: "https://yourdomain.com/og-image.png",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WJFBFPE5FV"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-WJFBFPE5FV');` }} />
      </head>
      <body
        className={`${rubik.variable} ${sora.variable} ${archivo.variable} bg-white font-sans antialiased overflow-x-hidden dark:bg-black`}
      >
        <Providers>
          <TopoWaves />
          <SplashScreenManager>
            <Navbar />
            <Sidebar />
            <main className="min-h-screen px-5 sm:px-12 dark:bg-black">{children}</main>
            <Copyright />
          </SplashScreenManager>
        </Providers>
      </body>
    </html>
  );
}
