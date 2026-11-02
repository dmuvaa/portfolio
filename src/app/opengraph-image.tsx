import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "Dennis Muvaa, software engineer and technical SEO in Nairobi"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function loadFonts() {
  const [sans, mono] = await Promise.all([
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/space-grotesk@latest/latin-700-normal.woff"
    ).then((res) => res.arrayBuffer()),
    fetch(
      "https://cdn.jsdelivr.net/fontsource/fonts/jetbrains-mono@latest/latin-500-normal.woff"
    ).then((res) => res.arrayBuffer()),
  ])
  return { sans, mono }
}

export default async function OpenGraphImage() {
  const fonts = await loadFonts()

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0a0a0c",
          color: "#ececef",
          padding: "64px",
          fontFamily: "Space Grotesk",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            opacity: 0.5,
          }}
        />
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 28,
            color: "#8b8b96",
          }}
        >
          <span style={{ color: "#6ee7a8" }}>~/</span>dmuvaa
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            Dennis Muvaa
          </div>
          <div style={{ fontSize: 32, color: "#a1a1aa" }}>
            Software engineer · Technical SEO · Writing
          </div>
          <div
            style={{
              width: 160,
              height: 8,
              background: "#6ee7a8",
              marginTop: 12,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            color: "#8b8b96",
          }}
        >
          Nairobi, Kenya
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Space Grotesk",
          data: fonts.sans,
          style: "normal",
          weight: 700,
        },
        {
          name: "JetBrains Mono",
          data: fonts.mono,
          style: "normal",
          weight: 500,
        },
      ],
    }
  )
}
