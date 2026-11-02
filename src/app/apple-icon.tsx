import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
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
          borderRadius: 36,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontFamily: "ui-monospace, monospace",
            fontSize: 84,
            fontWeight: 700,
            color: "#6ee7a8",
            letterSpacing: "-0.04em",
          }}
        >
          <span>{">"}</span>
          <span
            style={{
              width: 36,
              height: 72,
              marginLeft: 10,
              background: "#6ee7a8",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  )
}
