"use client";

import Link from "next/link";

export default function ScrollDownArrow() {
  return (
    <div className="absolute left-1/2 bottom-2 z-10 -translate-x-1/2 lg:bottom-8">
      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 shadow-md dark:bg-black/70">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-6 w-6 animate-bounce-slow text-gray-800 transition-transform group-hover:translate-y-1 dark:text-gray-100"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}
