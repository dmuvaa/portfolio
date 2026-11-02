import type { Metadata } from "next"
import { projects } from "@content/projects"

export const metadata: Metadata = {
  title: "Projects",
  description: `${projects.length} products, SEO tools, and browser games built with Next.js, TypeScript, Supabase, and AI APIs.`,
  alternates: { canonical: "/work" },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
