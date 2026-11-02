import { ImageResponse } from "next/og"

export const size = { width: 32, height: 32 }
export const contentType = "image/png"

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0c",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "ui-monospace, monospace",
            fontSize: 16,
            fontWeight: 700,
            color: "#6ee7a8",
            letterSpacing: "-0.04em",
          }}
        >
          <span style={{ color: "#6ee7a8" }}>{">"}</span>
          <span
            style={{
              width: 7,
              height: 14,
              marginLeft: 2,
              background: "#6ee7a8",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
