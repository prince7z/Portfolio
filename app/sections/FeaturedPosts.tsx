"use client";

import { featurediframes } from "@/datas/data";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function FeaturedPosts() {
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setMounted(true);

    // Load twitter widgets safely
    const loadTwitter = async () => {
      try {
        if ((window as any).twttr?.widgets) {
          (window as any).twttr.widgets.load();
        }
      } catch (e) {
        console.log(e);
      }
    };

    loadTwitter();

    // Cinematic reveal
    gsap.fromTo(
      ".featured-card",
      {
        opacity: 0,
        y: 100,
        scale: 0.92,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 1.2,
        stagger: 0.15,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (!isMobile || featurediframes.length <= 1) return;

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % featurediframes.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [isMobile]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
    isDragging.current = true;
    setDragOffset(0);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || !isDragging.current) return;

    const currentX = event.touches[0]?.clientX ?? touchStartX.current;
    const deltaX = currentX - touchStartX.current;
    setDragOffset(deltaX);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;

    const threshold = 60;

    if (dragOffset < -threshold) {
      setActiveIndex((current) => (current + 1) % featurediframes.length);
    } else if (dragOffset > threshold) {
      setActiveIndex((current) => (current - 1 + featurediframes.length) % featurediframes.length);
    }

    touchStartX.current = null;
    isDragging.current = false;
    setDragOffset(0);
  };

  // Prevent hydration mismatch
  if (!mounted) return null;

  return (
    <section
      id="featured"
      className="
        relative
        overflow-hidden
        py-28
        mx-0
        md:mx-[7%]
        xl:mx-[10%]
      "
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-20 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-orange-300/10 blur-3xl" />
      </div>

      {/* Header */}
      <header className="mb-16 flex items-center gap-4">
        <span className="font-idgrotesk text-2xl italic sm:text-4xl">
          03. Featured Posts
        </span>

        <div className="h-px flex-1 bg-gradient-to-r from-orange-300/50 to-transparent" />
      </header>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <div className="overflow-hidden">
          <div
            className="flex touch-pan-y transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(calc(-${activeIndex * 100}% + ${dragOffset}px))`,
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            {featurediframes.map((f, i) => {
              const isLinkedIn = f.platform.toLowerCase().includes("linkedin");

              return (
                <article key={i} className="featured-card w-full flex-none px-1">
                  <div className="group relative overflow-hidden rounded-[28px] border border-black/5 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-orange-400 to-orange-200" />

                    <div className="absolute right-4 top-4 z-20 rounded-full border border-black/5 bg-white/80 px-3 py-1 text-xs uppercase tracking-widest backdrop-blur-md">
                      {f.platform}
                    </div>

                    <div className="relative z-10 p-4">
                      {isLinkedIn ? (
                        <a
                          href={f.href || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-[560px] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-orange-300/60 bg-gradient-to-br from-orange-50 via-white to-orange-100/40 p-8 text-center text-gray-700 dark:border-white/10 dark:from-white/5 dark:via-white/[0.03] dark:to-white/5 dark:text-gray-200"
                        >
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.975.784-1.768 1.75-1.768s1.75.793 1.75 1.768c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-4.894c0-1.167-.021-2.669-1.627-2.669-1.628 0-1.877 1.272-1.877 2.587V19h-3v-10h2.879v1.367h.041c.401-.758 1.379-1.555 2.838-1.555 3.033 0 3.593 1.997 3.593 4.594V19z" />
                            </svg>
                          </div>
                          <div className="space-y-2">
                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">View on LinkedIn</h3>
                            <p className="max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                              LinkedIn blocks iframe embeds in many browsers, so this opens the original post directly.
                            </p>
                          </div>
                          <span className="inline-flex items-center rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white shadow-sm">
                            Open post
                          </span>
                        </a>
                      ) : (
                        <div
                          className="overflow-hidden rounded-2xl [&_iframe]:w-full [&_iframe]:min-h-[560px] [&_iframe]:rounded-2xl [&_iframe]:border-0 [&_.twitter-tweet]:!m-0 [&_.twitter-tweet]:!w-full [&_.twitter-tweet]:!max-w-full"
                          suppressHydrationWarning
                          dangerouslySetInnerHTML={{ __html: f.frame }}
                        />
                      )}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {featurediframes.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveIndex(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === activeIndex ? "w-8 bg-orange-400" : "w-2 bg-orange-200"}`}
              aria-label={`Go to featured post ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop grid */}
      <div className="hidden grid-cols-1 gap-8 md:grid xl:grid-cols-3">
        {featurediframes.map((f, i) => {
          const isLinkedIn = f.platform.toLowerCase().includes("linkedin");

          return (
          <article
            key={i}
            className="
              featured-card
              group
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-black/5
              bg-white/70
              backdrop-blur-xl
              transition-all
              duration-700
              hover:-translate-y-3
              hover:shadow-[0_25px_100px_rgba(255,120,50,0.12)]
              dark:border-white/10
              dark:bg-white/[0.03]
            "
          >
            {/* Top Border */}
            <div
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-0
                bg-gradient-to-r
                from-orange-400
                to-orange-200
                transition-all
                duration-700
                group-hover:w-full
              "
            />

            {/* Platform Badge */}
            <div
              className="
                absolute
                right-4
                top-4
                z-20
                rounded-full
                border
                border-black/5
                bg-white/80
                px-3
                py-1
                text-xs
                uppercase
                tracking-widest
                backdrop-blur-md
              "
            >
              {f.platform}
            </div>

            {/* Content */}
            <div className="relative z-10 p-4">
              {isLinkedIn ? (
                <a
                  href={f.href || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[620px] w-full flex-col items-center justify-center gap-4 rounded-2xl border border-dashed border-orange-300/60 bg-gradient-to-br from-orange-50 via-white to-orange-100/40 p-8 text-center text-gray-700 transition-transform duration-300 hover:scale-[1.01] dark:border-white/10 dark:from-white/5 dark:via-white/[0.03] dark:to-white/5 dark:text-gray-200"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#0A66C2]/10 text-[#0A66C2]">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.975.784-1.768 1.75-1.768s1.75.793 1.75 1.768c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-4.894c0-1.167-.021-2.669-1.627-2.669-1.628 0-1.877 1.272-1.877 2.587V19h-3v-10h2.879v1.367h.041c.401-.758 1.379-1.555 2.838-1.555 3.033 0 3.593 1.997 3.593 4.594V19z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">View on LinkedIn</h3>
                    <p className="max-w-xs text-sm leading-6 text-gray-600 dark:text-gray-300">
                      LinkedIn blocks iframe embeds in many browsers, so this opens the original post directly.
                    </p>
                  </div>
                  <span className="inline-flex items-center rounded-full bg-[#0A66C2] px-4 py-2 text-sm font-medium text-white shadow-sm">
                    Open post
                  </span>
                </a>
              ) : (
                <div
                  className="
                    overflow-hidden
                    rounded-2xl

                    [&_iframe]:w-full
                    [&_iframe]:min-h-[620px]
                    [&_iframe]:rounded-2xl
                    [&_iframe]:border-0

                    [&_.twitter-tweet]:!m-0
                    [&_.twitter-tweet]:!w-full
                    [&_.twitter-tweet]:!max-w-full
                  "
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{
                    __html: f.frame,
                  }}
                />
              )}
            </div>

            {/* Glow */}
            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                left-1/2
                h-24
                w-[80%]
                -translate-x-1/2
                bg-orange-400/10
                opacity-0
                blur-3xl
                transition-opacity
                duration-700
                group-hover:opacity-100
              "
            />
          </article>
          );
        })}
      </div>
    </section>
  );
}