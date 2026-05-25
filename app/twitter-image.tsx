import { ImageResponse } from "next/og";
import { getSiteUrl, siteConfig } from "./lib/site";

export const runtime = "edge";

export const alt = "Prince Sahu | Full Stack Developer";
export const size = {
  width: 1200,
  height: 600,
};

export const contentType = "image/png";

export default function TwitterImage() {
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
          gap: "34px",
          background:
            "linear-gradient(135deg, #111111 0%, #1f1a17 45%, #e88d67 120%)",
          color: "#fff",
          padding: "56px",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            border: "1px solid rgba(255,255,255,0.14)",
            borderRadius: "36px",
            background: "rgba(255,255,255,0.05)",
            padding: "48px",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              width: 220,
              height: 220,
              flexShrink: 0,
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid rgba(255,255,255,0.26)",
              boxShadow: "0 20px 52px rgba(0,0,0,0.26)",
              background: "rgba(255,255,255,0.08)",
            }}
          >
            <img
              src={faceImage}
              alt="Prince Sahu"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "18px", maxWidth: 860 }}>
            <div style={{ fontSize: 24, letterSpacing: "0.18em", textTransform: "uppercase", opacity: 0.78 }}>
              Prince Sahu
            </div>
            <div style={{ fontSize: 64, lineHeight: 1.02, fontWeight: 700, maxWidth: 760 }}>
              Full Stack Developer
            </div>
            <div style={{ fontSize: 24, lineHeight: 1.35, maxWidth: 800, opacity: 0.92 }}>
              {siteConfig.description}
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}