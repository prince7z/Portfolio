"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const HASH_LINK_SELECTOR = 'a[href^="#"], a[href^="/#"]';

const getScrollTarget = (hash: string) => {
  if (!hash || hash === "#") {
    return null;
  }

  return document.querySelector(hash);
};

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

    const handleHashNavigation = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest(HASH_LINK_SELECTOR) as HTMLAnchorElement | null;

      if (!link) {
        return;
      }

      const url = new URL(link.href, window.location.href);
      const isSamePage = url.pathname === window.location.pathname && url.search === window.location.search;

      if (!isSamePage) {
        return;
      }

      const targetElement = getScrollTarget(url.hash);

      if (!targetElement) {
        return;
      }

      event.preventDefault();

      const offset = 96;
      const targetTop = targetElement.getBoundingClientRect().top + window.scrollY - offset;

      gsap.to(window, {
        duration: 1.15,
        ease: "power2.out",
        scrollTo: { y: targetTop, autoKill: false },
        onComplete: () => {
          history.pushState(null, "", url.hash);
        },
      });
    };

    init();
    document.addEventListener("click", handleHashNavigation, true);

    if (window.location.hash) {
      const initialTarget = getScrollTarget(window.location.hash);

      if (initialTarget) {
        requestAnimationFrame(() => {
          const offset = 96;
          const targetTop = initialTarget.getBoundingClientRect().top + window.scrollY - offset;

          gsap.to(window, {
            duration: 1.15,
            ease: "power2.out",
            scrollTo: { y: targetTop, autoKill: false },
          });
        });
      }
    }

    return () => {
      mounted = false;
      if (rafId) cancelAnimationFrame(rafId);
      if (lenis && typeof lenis.destroy === "function") lenis.destroy();
      document.removeEventListener("click", handleHashNavigation, true);
    };
  }, []);

  return <>{children}</>;
}
