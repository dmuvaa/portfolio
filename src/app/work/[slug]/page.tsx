import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { readFile } from "node:fs/promises"
import path from "node:path"
import { compileMDX } from "next-mdx-remote/rsc"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"
import CaseStudyLayout from "@/components/CaseStudyLayout"
import Callout from "@/components/mdx/Callout"
import ArchitectureDiagram from "@/components/mdx/ArchitectureDiagram"
import Decision from "@/components/mdx/Decision"
import MetricGrid from "@/components/mdx/MetricGrid"
import JsonLd from "@/components/JsonLd"
import { getProject, projects } from "@content/projects"
import { site } from "@content/site"

const toc = [
  { id: "the-problem", title: "The problem" },
  { id: "approach", title: "Approach" },
  { id: "architecture", title: "Architecture" },
  { id: "key-decisions", title: "Key decisions" },
  { id: "results", title: "Results" },
  { id: "what-id-do-next", title: "What I'd do next" },
]

const mdxComponents = {
  Callout,
  ArchitectureDiagram,
  Decision,
  MetricGrid,
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => {
    const text = String(children)
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
    const index = toc.findIndex((item) => item.id === id)
    return (
      <h2
        id={id}
        className="mt-14 scroll-mt-28 text-2xl font-semibold tracking-tight text-fg first:mt-0"
        {...props}
      >
        <span className="mr-3 font-mono text-sm text-accent">
          {String(index >= 0 ? index + 1 : 0).padStart(2, "0")} /
        </span>
        {children}
      </h2>
    )
  },
  p: (props: React.ComponentProps<"p">) => (
    <p className="mt-4 text-[17px] leading-[1.8] text-muted" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul className="mt-4 space-y-2 text-[17px] leading-[1.8] text-muted" {...props} />
  ),
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li className="flex gap-3" {...props}>
      <span className="font-mono text-accent">-</span>
      <span>{children}</span>
    </li>
  ),
  a: (props: React.ComponentProps<"a">) => (
    <a className="text-accent underline-offset-4 hover:underline" {...props} />
  ),
  pre: (props: React.ComponentProps<"pre">) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl border border-line bg-surface-2 p-5 font-mono text-[13px] leading-7 text-muted"
      {...props}
    />
  ),
  code: (props: React.ComponentProps<"code">) => (
    <code className="font-mono text-[0.95em]" {...props} />
  ),
}

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return {}

  return {
    title: `${project.name} case study`,
    description: project.summary,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      type: "article",
      title: `${project.name} case study`,
      description: project.summary,
      url: `/work/${project.slug}`,
    },
  }
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project?.caseStudy) notFound()

  const filePath = path.join(
    process.cwd(),
    "content/case-studies",
    `${slug}.mdx`
  )
  let source: string
  try {
    source = await readFile(filePath, "utf8")
  } catch {
    notFound()
  }

  const { content } = await compileMDX({
    source,
    components: mdxComponents,
  })

  const caseStudies = projects.filter((item) => item.caseStudy)
  const index = caseStudies.findIndex((item) => item.slug === slug)
  const prev = index > 0 ? caseStudies[index - 1] : null
  const next =
    index >= 0 && index < caseStudies.length - 1 ? caseStudies[index + 1] : null

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type":
          project.category === "product" ? "SoftwareApplication" : "CreativeWork",
        name: project.name,
        description: project.summary,
        url: project.liveUrl || `${site.url}/work/${project.slug}`,
        image: project.image ? `${site.url}${project.image.src}` : undefined,
        author: { "@type": "Person", name: site.name, url: site.url },
        dateCreated: project.year,
        keywords: project.stack.join(", "),
        ...(project.category === "product"
          ? { applicationCategory: "WebApplication" }
          : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Work",
            item: `${site.url}/work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: `${site.url}/work/${project.slug}`,
          },
        ],
      },
    ],
  }

  return (
    <div className="relative flex min-h-screen flex-col">
      <JsonLd data={jsonLd} />
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-40"
        aria-hidden="true"
      />
      <SiteHeader />
      <main id="main" className="relative flex-1">
        <CaseStudyLayout
          project={project}
          toc={toc}
          prev={prev}
          next={next}
          stats={
            slug === "excelbeam"
              ? [
                  { label: "exercises", value: "31" },
                  { label: "topics", value: "7" },
                  { label: "hint levels", value: "4" },
                  { label: "shortcut drills", value: "18" },
                ]
              : undefined
          }
        >
          {content}
        </CaseStudyLayout>
      </main>
      <SiteFooter />
    </div>
  )
}
