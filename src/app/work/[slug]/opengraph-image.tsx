import { ImageResponse } from "next/og"
import { getProject } from "@content/projects"

export const runtime = "edge"
export const alt = "Project case study"
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

export default async function ProjectOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  const fonts = await loadFonts()
  const summary = project?.summary
    ? project.summary.length > 140
      ? `${project.summary.slice(0, 137)}...`
      : project.summary
    : ""

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
            display: "flex",
            fontFamily: "JetBrains Mono",
            fontSize: 24,
            color: "#8b8b96",
          }}
        >
          <span style={{ color: "#6ee7a8" }}>~/</span>dmuvaa / work / {slug}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 20,
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontFamily: "JetBrains Mono",
              fontSize: 22,
              color: "#6ee7a8",
              textTransform: "uppercase",
            }}
          >
            {project?.category || "project"} · {project?.year || ""}
          </div>
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
            }}
          >
            {project?.name || "Case study"}
          </div>
          <div style={{ fontSize: 28, color: "#a1a1aa", lineHeight: 1.4 }}>
            {summary}
          </div>
        </div>
        <div
          style={{
            width: 160,
            height: 8,
            background: "#6ee7a8",
          }}
        />
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
