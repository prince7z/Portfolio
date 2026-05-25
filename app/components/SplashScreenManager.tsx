"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

// Reduced fallback so the splash doesn't hold the page too long
const FALLBACK_DURATION_MS = 5000;

const SplashScreenManager = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), FALLBACK_DURATION_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        className={`transition-opacity duration-300 ${isLoading ? "pointer-events-none opacity-0" : "opacity-100"}`}
        aria-hidden={isLoading}
      >
        {children}
      </div>
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : null}
    </>
  );
};

export default SplashScreenManager;
