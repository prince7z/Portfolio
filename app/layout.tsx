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
  title: siteConfig.name,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
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
    title: siteConfig.name,
    description: siteConfig.description,
    url: "/",
    type: "website",
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
    title: siteConfig.name,
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
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-WJFBFPE5FV"></script>
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-WJFBFPE5FV');` }} />
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
