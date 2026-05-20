"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const NAME = "PRINCE SAHU";
const LOADING_TEXT = "Becoming Beyond Static..";

const splitText = (text: string) => text.split("");

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  const [wipeOpen, setWipeOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const loadingRef = useRef<HTMLParagraphElement | null>(null);
  const nameChars = useMemo(() => splitText(NAME), []);
  const loadingChars = useMemo(() => splitText(LOADING_TEXT), []);

  useEffect(() => {
    const root = document.documentElement;

    const syncTheme = () => {
      setIsDarkTheme(root.classList.contains("dark"));
    };

    syncTheme();

    const observer = new MutationObserver(syncTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  const baseBackground = isDarkTheme ? "#050505" : "#f7f0e8";
  const revealBackground = isDarkTheme ? "#f7f0e8" : "#050505";
  const baseText = isDarkTheme ? "#f8f3ec" : "#111111";
  const revealText = isDarkTheme ? "#050505" : "#fafafa";

  useLayoutEffect(() => {
    const context = gsap.context(() => {
      const nameLetters = nameRef.current?.querySelectorAll("[data-char='name']") ?? [];
      const loadingLetters = loadingRef.current?.querySelectorAll("[data-char='loading']") ?? [];

      const timeline = gsap.timeline({ delay: 0 });

      timeline.fromTo(
        nameLetters,
        { opacity: 0, y: 24, scale: 0.98, color: baseText },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.055,
          ease: "power4.out",
        },
        0,
      );

      timeline.fromTo(
        loadingLetters,
        { opacity: 0, y: 8, color: baseText },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.045,
          ease: "power2.out",
        },
        "-=0.1",
      );

      timeline.to(
        loadingLetters,
        {
          opacity: 0.72,
          duration: 0.22,
          stagger: 0.03,
          repeat: 2,
          yoyo: true,
          ease: "sine.inOut",
        },
        "+=0.08",
      );

      timeline.to(
        [nameLetters, loadingLetters],
        {
          color: revealText,
          duration: 0.45,
          stagger: 0.025,
          ease: "power2.out",
        },
        "-=0.1",
      );

      timeline.to({}, { duration: 1 });

      timeline.to(
        contentRef.current,
        {
          scale: 1.28,
          opacity: 0,
          duration: 0.7,
          ease: "power3.in",
        },
        "+=0.05",
      );

      timeline.to(
        backdropRef.current,
        {
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
        },
        "<",
      );

      timeline.add(() => setWipeOpen(true), ">-0.05");
      timeline.to({}, { duration: 0.95 });
      timeline.add(() => finishLoading(), "+=0.05");
    });

    return () => context.revert();
  }, [baseText, revealText, finishLoading]);

  return (
    <section
      className="fixed inset-0 z-[9999] flex min-h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: baseBackground }}
    >
      <div ref={backdropRef} className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDarkTheme
              ? "radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_40%),radial-gradient(circle_at_bottom,rgba(232,141,103,0.18),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.05),transparent_20%,rgba(0,0,0,0.78))"
              : "radial-gradient(circle_at_top,rgba(255,255,255,0.45),transparent_40%),radial-gradient(circle_at_bottom,rgba(0,0,0,0.08),transparent_36%),linear-gradient(180deg,rgba(255,255,255,0.6),transparent_20%,rgba(255,255,255,0.92))",
          }}
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(120deg,transparent_0%,rgba(255,255,255,0.05)_24%,transparent_48%,rgba(255,255,255,0.08)_52%,transparent_78%)] bg-[length:200%_200%] animate-[sweep_2.8s_linear_infinite]"
          style={{
            opacity: isDarkTheme ? 0.35 : 0.16,
            mixBlendMode: isDarkTheme ? "screen" : "multiply",
          }}
        />
        <div className="noise-overlay absolute inset-0 opacity-40" />
      </div>

      <div ref={contentRef} className="relative z-20 flex w-full max-w-3xl flex-col items-center px-6 text-center">
        <h3
          ref={nameRef}
          className="mb-3 flex flex-wrap items-baseline justify-center gap-x-2 gap-y-1 text-[clamp(1.8rem,5vw,3.7rem)] font-normal uppercase leading-none tracking-[0.28em] sm:text-[clamp(2.1rem,4.2vw,4.2rem)]"
          aria-label={NAME}
        >
          {nameChars.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              data-char="name"
              className="inline-block font-normal"
              style={{ color: baseText, willChange: "transform,opacity,color" }}
            >
              {letter === " " ? <span className="inline-block w-[0.35em]" /> : letter}
            </span>
          ))}
        </h3>

        <p
          ref={loadingRef}
          className="flex items-center gap-1  px-4 py-2 text-[0.72rem] font-normal uppercase tracking-[0.42em] sm:px-5 sm:py-2.5 sm:text-[0.72rem] sm:tracking-[0.5em]"
          aria-label={LOADING_TEXT}
          style={{
            color: baseText,
            textShadow: isDarkTheme              ? "0 0 4px rgba(232,141,103,0.48), 0 0 8px rgba(232,141,103,0.32)"
              : "0 0 4px rgba(232,141,103,0.32), 0 0 8px rgba(232,141,103,0.16)",
          }}
        >
          {loadingChars.map((letter, index) => (
            <span
              key={`${letter}-${index}`}
              data-char="loading"
              className="inline-block min-w-[0.5ch] font-normal"
              style={{ color: baseText, willChange: "transform,opacity,color" }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </p>

      </div>

      <motion.div
        aria-hidden="true"
        className="absolute inset-0 z-[30]"
        style={{ backgroundColor: revealBackground }}
        initial={{ y: 0, scale: 1, opacity: 0 }}
        animate={{
          y: wipeOpen ? "-100%" : 0,
          scale: wipeOpen ? 1.04 : 1,
          opacity: wipeOpen ? 1 : 0,
        }}
        transition={{ duration: 1.05, ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: isDarkTheme
              ? "repeating-linear-gradient(180deg,rgba(255,255,255,0.85)_0,rgba(255,255,255,0.85)_7px,rgba(255,255,255,0.97)_7px,rgba(255,255,255,0.97)_14px)"
              : "repeating-linear-gradient(180deg,rgba(0,0,0,0.72)_0,rgba(0,0,0,0.72)_7px,rgba(0,0,0,0.18)_7px,rgba(0,0,0,0.18)_14px)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: isDarkTheme
              ? "linear-gradient(135deg,rgba(18,18,18,0.08),rgba(18,18,18,0)_35%,rgba(18,18,18,0.14)_70%,rgba(18,18,18,0.22))"
              : "linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0)_35%,rgba(255,255,255,0.22)_70%,rgba(255,255,255,0.32))",
          }}
        />
      </motion.div>
    </section>
  );
};

export default SplashScreen;
