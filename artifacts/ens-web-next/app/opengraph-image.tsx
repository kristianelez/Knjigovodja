import { ImageResponse } from "next/og";
import fs from "fs";
import path from "path";

export const alt = "ENS d.o.o. — Računovodstvo i Knjigovodstvo Sarajevo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  // Read logo file at runtime and embed as base64
  const logoPath = path.join(process.cwd(), "public", "logo-transparent.png");
  const logoBuffer = fs.readFileSync(logoPath);
  const logoSrc = `data:image/png;base64,${logoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ffffff 0%, #fafafa 60%, #f4f4f5 100%)",
          fontFamily: "Inter, sans-serif",
          padding: "60px",
          position: "relative",
        }}
      >
        {/* Subtle brand accent stripe on top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#c0392b",
          }}
        />

        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt="ENS"
          width={640}
          height={210}
          style={{ marginBottom: 40 }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 44,
            fontWeight: 700,
            color: "#111827",
            textAlign: "center",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Računovodstvo i Knjigovodstvo
        </div>

        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            color: "#6b7280",
            textAlign: "center",
          }}
        >
          Sarajevo · Bosna i Hercegovina
        </div>

        {/* Footer with URL + phone */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 24,
            fontSize: 22,
            color: "#9ca3af",
            fontWeight: 500,
          }}
        >
          <span>ens.ba</span>
          <span style={{ color: "#d1d5db" }}>•</span>
          <span>+387 61 158 271</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
