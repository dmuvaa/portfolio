import Image from "next/image"
import Link from "next/link"
import type { Project } from "@content/projects"

function hostLabel(url?: string) {
  if (!url) return "project"
  try {
    return new URL(url).host
  } catch {
    return url
  }
}

function BrowserFrame({
  url,
  children,
  badge,
}: {
  url?: string
  children: React.ReactNode
  badge?: string
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-line bg-surface">
      <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
        <span className="inline-block size-[9px] rounded-full bg-line-2" />
        <span className="inline-block size-[9px] rounded-full bg-line-2" />
        <span className="inline-block size-[9px] rounded-full bg-line-2" />
        <span className="ml-3 truncate font-mono text-[11px] text-subtle">
          {hostLabel(url)}
        </span>
      </div>
      {badge ? (
        <span className="absolute right-3 top-12 z-10 rounded bg-accent-dim px-2 py-0.5 font-mono text-[11px] uppercase tracking-wider text-accent">
          {badge}
        </span>
      ) : null}
      {children}
    </div>
  )
}

function ProjectImage({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Image
        src={project.image.src}
        alt={project.image.alt}
        width={project.image.width}
        height={project.image.height}
        className="block aspect-[16/10] w-full object-cover object-top"
        sizes="(min-width:1024px) 380px, (min-width:768px) 50vw, 100vw"
      />
    )
  }

  return (
    <div className="flex aspect-[16/10] w-full items-center justify-center bg-surface-2">
      <p className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">
        {project.name}
      </p>
    </div>
  )
}

function cardLabel(project: Project) {
  return project.caseStudy
    ? `Read ${project.name} case study`
    : `View ${project.name} live site`
}

export default function ProjectCard({
  project,
  variant = "default",
}: {
  project: Project
  variant?: "default" | "featured"
}) {
  const href = project.caseStudy
    ? `/work/${project.slug}`
    : project.liveUrl || project.repoUrl
  const categoryLabel = project.category
  const external = Boolean(href?.startsWith("http"))
  const linkProps = href
    ? {
        href,
        target: external ? ("_blank" as const) : undefined,
        rel: external ? "noopener" : undefined,
        "aria-label": cardLabel(project),
      }
    : null

  if (variant === "featured") {
    const content = (
      <>
        <BrowserFrame url={project.liveUrl || project.repoUrl}>
          <ProjectImage project={project} />
        </BrowserFrame>
        <div className="flex flex-col gap-4 p-3 lg:pr-6">
          <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-wider">
            <span className="rounded bg-accent-dim px-2 py-0.5 text-accent">
              featured
            </span>
            <span className="text-subtle">
              {categoryLabel} · {project.year}
            </span>
          </div>
          <h3 className="text-3xl font-semibold tracking-tight">{project.name}</h3>
          <p className="text-lg leading-relaxed text-muted">{project.summary}</p>
          <ul className="space-y-2 text-[15px]">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="font-mono text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
          {project.outcome ? (
            <p className="flex flex-wrap items-center gap-2 text-sm">
              <span className="font-mono text-[11px] text-subtle">outcome:</span>
              <span>
                {project.outcome.value} {project.outcome.label}
              </span>
            </p>
          ) : null}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <ul className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 4).map((item) => (
                <li
                  key={item}
                  className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
            {href ? (
              <span className="font-mono text-sm text-accent">
                {project.caseStudy ? "case study →" : "view live ↗"}
              </span>
            ) : null}
          </div>
        </div>
      </>
    )

    const className =
      "grid grid-cols-1 gap-8 rounded-2xl border border-line bg-surface p-3 transition hover:border-accent/50 md:p-4 lg:grid-cols-[1.35fr_1fr] lg:items-center"

    if (linkProps) {
      return (
        <Link {...linkProps} className={`${className} cursor-pointer`}>
          {content}
        </Link>
      )
    }

    return <article className={className}>{content}</article>
  }

  const content = (
    <>
      <BrowserFrame
        url={project.liveUrl || project.repoUrl}
        badge={project.caseStudy ? "case study" : undefined}
      >
        <ProjectImage project={project} />
      </BrowserFrame>
      <div className="flex flex-1 flex-col gap-3 p-3 pt-5">
        <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-subtle">
          <span>
            {categoryLabel} · {project.year}
          </span>
          {href ? (
            <span className="text-accent">
              {project.caseStudy ? "case study →" : "live ↗"}
            </span>
          ) : null}
        </div>
        <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
        <p className="text-[15px] leading-relaxed text-muted">{project.summary}</p>
        {project.outcome ? (
          <p className="flex items-center gap-2 text-sm">
            <span className="font-mono text-[11px] text-subtle">outcome:</span>
            <span>
              {project.outcome.value} {project.outcome.label}
            </span>
          </p>
        ) : null}
        <div className="mt-auto pt-2">
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map((item) => (
              <li
                key={item}
                className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )

  const className =
    "group relative flex flex-col rounded-2xl border border-line bg-surface p-3 transition hover:border-accent/50"

  if (linkProps) {
    return (
      <Link {...linkProps} className={`${className} cursor-pointer`}>
        {content}
      </Link>
    )
  }

  return <article className={className}>{content}</article>
}
