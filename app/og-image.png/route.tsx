import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #f59e0b 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginRight: 20 }}
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="18"
              rx="2"
              stroke="white"
              strokeWidth="2"
            />
            <line x1="3" y1="10" x2="21" y2="10" stroke="white" strokeWidth="2" />
            <line x1="8" y1="2" x2="8" y2="6" stroke="white" strokeWidth="2" />
            <line x1="16" y1="2" x2="16" y2="6" stroke="white" strokeWidth="2" />
          </svg>
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              stroke="white"
              strokeWidth="2"
              fill="rgba(255,255,255,0.2)"
            />
          </svg>
        </div>
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "white",
            marginBottom: 20,
            textShadow: "0 4px 20px rgba(0,0,0,0.2)",
          }}
        >
          Voile Drift
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Capture Life&apos;s Moments, Get Intelligent Insights
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
