import type { MetadataRoute } from "next"
import { site } from "@content/site"
import { projects } from "@content/projects"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const staticRoutes = ["", "/work", "/technical-writing", "/about", "/contact"].map(
    (route) => ({
      url: `${site.url}${route || "/"}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })
  )

  const caseStudies = projects
    .filter((project) => project.caseStudy)
    .map((project) => ({
      url: `${site.url}/work/${project.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))

  return [...staticRoutes, ...caseStudies]
}
