import { ImageResponse } from "next/og";
import { getSiteUrl, siteConfig } from "./lib/site";

export const runtime = "edge";

export const alt = "Prince Sahu | Full Stack Developer";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  const siteUrl = getSiteUrl();
  const faceImage = new URL("/android-chrome-512x512.png", siteUrl).toString();

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "42px",
          background:
            "linear-gradient(135deg, #0f0f10 0%, #181511 48%, #e88d67 130%)",
          color: "#fff",
          padding: "64px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: "40px",
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(18px)",
            padding: "56px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 260,
              height: 260,
              flexShrink: 0,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.28)",
              boxShadow: "0 24px 60px rgba(0,0,0,0.28)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={faceImage}
              alt="Prince Sahu"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "18px", maxWidth: 760 }}>
            <div style={{ fontSize: 26, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.8 }}>
              Prince Sahu
            </div>
            <div style={{ fontSize: 68, lineHeight: 1.02, fontWeight: 700, maxWidth: 720 }}>
              Full Stack Developer
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.35, maxWidth: 760, opacity: 0.92 }}>
              {siteConfig.description}
            </div>
            <div style={{ fontSize: 22, letterSpacing: "0.12em", textTransform: "uppercase", opacity: 0.75 }}>
              Next.js • TypeScript • AWS • DevOps
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}