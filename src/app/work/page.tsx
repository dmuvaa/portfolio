import Link from "next/link"
import { Suspense } from "react"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"
import Container from "@/components/Container"
import ProjectCard from "@/components/ProjectCard"
import ProjectFilter from "@/components/ProjectFilter"
import JsonLd from "@/components/JsonLd"
import {
  projects,
  projectsByCategory,
  type ProjectCategory,
} from "@content/projects"
import { site } from "@content/site"

const sections: {
  id: ProjectCategory
  index: string
  title: string
  description: string
  grid: string
}[] = [
  {
    id: "product",
    index: "01",
    title: "Products & platforms",
    description: "SaaS, AI apps, and systems designed and shipped end to end.",
    grid: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
  },
  {
    id: "tool",
    index: "02",
    title: "SEO & agent tools",
    description: "Technical SEO checkers and utilities for humans and machines.",
    grid: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
  },
  {
    id: "game",
    index: "03",
    title: "Games",
    description: "Browser games with maps, Wikipedia hops, and word puzzles.",
    grid: "mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4",
  },
]

export default function WorkPage() {
  const counts = {
    all: projects.length,
    product: projectsByCategory("product").length,
    tool: projectsByCategory("tool").length,
    game: projectsByCategory("game").length,
  }

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: project.caseStudy
        ? `${site.url}/work/${project.slug}`
        : project.liveUrl || `${site.url}/work`,
    })),
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <JsonLd data={itemListJsonLd} />
      <SiteHeader />
      <main id="main" className="relative flex-1">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[420px] grid-bg"
          aria-hidden="true"
        />
        <Container className="relative pb-24 pt-16 md:pt-20">
          <nav className="font-mono text-[12px] text-subtle" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-fg">
              ~
            </Link>{" "}
            / <span className="text-fg">work</span>
          </nav>

          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-sm text-muted">
                <span className="text-accent">$</span> ls ./work --all
              </p>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-6xl">
                {projects.length} builds, shipped and live.
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-muted">
                Products, SEO tools, and browser games. Most run on Next.js,
                TypeScript, Supabase, and AI APIs. Click a card for the live build,
                or read the case study.
              </p>
            </div>
            <dl className="grid grid-cols-3 gap-px overflow-hidden rounded-xl border border-line bg-line">
              {(
                [
                  ["products", counts.product],
                  ["tools", counts.tool],
                  ["games", counts.game],
                ] as const
              ).map(([label, value]) => (
                <div key={label} className="bg-surface p-4">
                  <dt className="font-mono text-[11px] text-subtle">{label}</dt>
                  <dd className="mt-1 text-2xl font-semibold">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Suspense fallback={null}>
            <ProjectFilter counts={counts} />
          </Suspense>

          {sections.map((section) => {
            const items = projectsByCategory(section.id)
            return (
              <section
                key={section.id}
                className="mt-20"
                data-project-section={section.id}
                aria-labelledby={`sec-${section.id}`}
              >
                <div className="flex items-end justify-between gap-6 border-b border-line pb-5">
                  <div>
                    <p className="font-mono text-[12px] text-accent">
                      {section.index}{" "}
                      <span className="text-subtle">/ {items.length} builds</span>
                    </p>
                    <h2
                      id={`sec-${section.id}`}
                      className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl"
                    >
                      {section.title}
                    </h2>
                  </div>
                  <p className="hidden max-w-sm text-right text-muted md:block">
                    {section.description}
                  </p>
                </div>
                <div className={section.grid}>
                  {items.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            )
          })}
        </Container>
      </main>
      <SiteFooter />
    </div>
  )
}
