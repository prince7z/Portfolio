"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  chart: string;
  className?: string;
};

export default function MermaidRenderer({ chart, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [renderedId, setRenderedId] = useState<string | null>(null);

  useEffect(() => {
    // Try initial render automatically but safely
    renderDiagram();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chart]);

  const loadMermaid = async () => {
    if ((window as any).mermaid) return (window as any).mermaid;
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/mermaid@10/dist/mermaid.min.js";
      script.async = true;
      script.onload = () => resolve((window as any).mermaid);
      script.onerror = (e) => reject(new Error("Failed to load mermaid from CDN"));
      document.body.appendChild(script);
    });
  };

  const renderDiagram = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const mermaid = await loadMermaid();
      mermaid.initialize({ startOnLoad: false, theme: "neutral" });
      const id = `mermaid-${Math.random().toString(36).slice(2, 9)}`;
      setRenderedId(id);
      mermaid.render(id, chart, (svgCode: string) => {
        if (containerRef.current) containerRef.current.innerHTML = svgCode;
        setIsLoading(false);
      });
    } catch (err: any) {
      setError(err?.message || String(err));
      if (containerRef.current) containerRef.current.textContent = chart;
      setIsLoading(false);
    }
  };

  return (
    <div className={className}>
      <div ref={containerRef} />
      <div className="mt-3 flex items-center gap-3">
        <button
          onClick={() => renderDiagram()}
          className="px-3 py-1 rounded bg-slate-800 text-white"
          aria-pressed={isLoading}
          aria-label="Render Mermaid diagram"
        >
          {isLoading ? "Rendering…" : error ? "Retry render" : "Render"}
        </button>
        {error && (
          <div role="status" aria-live="polite" className="text-sm text-error-foreground">
            Failed to load diagram: {error}
          </div>
        )}
      </div>
    </div>
  );
}
