import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jocelyn Pang - Digital Commerce Strategist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          padding: "60px",
        }}
      >
        <div style={{ fontSize: 72, fontWeight: "bold", marginBottom: 16 }}>
          Jocelyn Pang
        </div>
        <div style={{ fontSize: 36, opacity: 0.9, marginBottom: 12 }}>
          Digital Commerce Strategist
        </div>
        <div style={{ fontSize: 24, opacity: 0.7 }}>
          Southeast Asia E-commerce Expert
        </div>
      </div>
    ),
    { ...size }
  );
}
