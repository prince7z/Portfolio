"use client";

import { useEffect } from "react";

export default function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    let rafId: number;
    let lenis: any;

    let mounted = true;

    async function init() {
      try {
        const mod = await import("@studio-freight/lenis");
        if (!mounted) return;
        const Lenis = mod.default;
        lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };

        rafId = requestAnimationFrame(raf);
      } catch (err) {
        // lenis not available — fail gracefully
        // console.warn("Lenis not loaded:", err);
      }
    }

    init();

    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
