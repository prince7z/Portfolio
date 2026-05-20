"use client";

import React, { useEffect, useState } from "react";
import SplashScreen from "./SplashScreen";

const FALLBACK_DURATION_MS = 4600;

const SplashScreenManager = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const isLoadedPage = window.location.pathname === "/";
    setIsLoading(isLoadedPage);
    if (isLoadedPage) {
      const timer = setTimeout(() => setIsLoading(false), FALLBACK_DURATION_MS);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {children}
      {isLoading ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : null}
    </>
  );
};

export default SplashScreenManager;
