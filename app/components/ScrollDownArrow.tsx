"use client";

import Link from "next/link";

export default function ScrollDownArrow() {
  return (
    <div className="absolute left-1/2 -translate-x-1/2 bottom-8">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 dark:bg-black/70 shadow-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="w-6 h-6 text-gray-800 dark:text-gray-100 animate-bounce-slow group-hover:translate-y-1 transition-transform"
          >
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
    </div>
  );
}
