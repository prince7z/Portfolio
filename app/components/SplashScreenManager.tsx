"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const MAX_SPLASH_DURATION_MS = 2500;

const SplashScreenManager = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), MAX_SPLASH_DURATION_MS);
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
