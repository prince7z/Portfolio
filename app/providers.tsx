"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import SmoothScrollProvider from "@/app/components/SmoothScrollProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScrollProvider>{children}</SmoothScrollProvider>
    </NextThemesProvider>
  );
}
