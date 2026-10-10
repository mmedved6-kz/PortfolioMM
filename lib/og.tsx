import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Satori (next/og) has no access to CSS variables, so the dark theme palette is repeated here.
const C = { bg: "#0B1220", surface: "#111827", text: "#E5E7EB", muted: "#94A3B8", border: "#1F2A3C", accent: "#60A5FA" };

export function renderOg({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: `radial-gradient(circle at 85% 0%, rgba(96,165,250,0.18), transparent 55%), ${C.bg}`,
          color: C.text,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 28, letterSpacing: 4, textTransform: "uppercase", color: C.accent }}>{eyebrow}</div>
          <div style={{ marginTop: 24, fontSize: title.length > 40 ? 64 : 80, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          {subtitle ? <div style={{ marginTop: 28, fontSize: 32, color: C.muted, lineHeight: 1.4 }}>{subtitle}</div> : null}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderTop: `2px solid ${C.border}`, paddingTop: 28, fontSize: 26, color: C.muted }}>
          <div style={{ display: "flex", color: C.text, fontWeight: 600 }}>Medet Murzakhanov</div>
          <div style={{ display: "flex" }}>portfolio-medmur.vercel.app</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
