import Image from "next/image"
import Link from "next/link"
import type { Project } from "@content/projects"
import Container from "@/components/Container"
import ContactCTA from "@/components/ContactCTA"

export default function CaseStudyLayout({
  project,
  toc,
  stats,
  children,
  prev,
  next,
}: {
  project: Project
  toc: { id: string; title: string }[]
  stats?: { label: string; value: string }[]
  children: React.ReactNode
  prev?: Project | null
  next?: Project | null
}) {
  const categoryLabel = project.category

  return (
    <>
      <Container className="pb-16 pt-16 md:pb-24 md:pt-20">
        <nav className="font-mono text-[12px] text-subtle" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-fg">
            ~
          </Link>{" "}
          /{" "}
          <Link href="/work" className="hover:text-fg">
            work
          </Link>{" "}
          / <span className="text-fg">{project.slug}</span>
        </nav>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-[12px] uppercase tracking-[0.18em]">
              <span className="rounded bg-accent-dim px-2 py-0.5 text-accent">
                case study
              </span>
              <span className="text-subtle">
                {categoryLabel} · {project.year}
              </span>
            </div>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-5xl">
              {project.slug === "excelbeam"
                ? "ExcelBeam: grading the formula, not just the answer."
                : project.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
              {project.summary}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener"
                  className="btn-accent"
                  aria-label={`View ${project.name} live site`}
                >
                  View live ↗
                </Link>
              ) : null}
              {project.repoUrl ? (
                <Link
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-lg border border-line-2 bg-surface px-5 py-3 font-medium"
                  aria-label={`View ${project.name} source repository`}
                >
                  Source ↗
                </Link>
              ) : null}
            </div>
          </div>

          <aside className="rounded-2xl border border-line bg-surface p-6">
            {project.role ? (
              <div className="mb-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  Role
                </p>
                <p className="mt-1 text-sm text-muted">{project.role}</p>
              </div>
            ) : null}
            {project.timeline ? (
              <div className="mb-4">
                <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  Timeline
                </p>
                <p className="mt-1 text-sm text-muted">{project.timeline}</p>
              </div>
            ) : null}
            <div>
              <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                Stack
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        {project.image ? (
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
              <span className="inline-block size-[9px] rounded-full bg-line-2" />
              <span className="inline-block size-[9px] rounded-full bg-line-2" />
              <span className="inline-block size-[9px] rounded-full bg-line-2" />
              <span className="ml-3 truncate font-mono text-[11px] text-subtle">
                {project.liveUrl?.replace(/^https?:\/\//, "") || project.name}
              </span>
            </div>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="block aspect-[16/10] w-full object-cover object-top"
              sizes="(min-width:1200px) 1120px, 100vw"
              priority
            />
          </div>
        ) : null}

        {stats && stats.length ? (
          <dl className="mt-8 grid grid-cols-2 gap-4 border border-line bg-surface p-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[11px] uppercase tracking-wider text-subtle">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-3xl font-semibold">{stat.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}

        <div className="mt-16 grid gap-12 lg:grid-cols-[220px_minmax(0,1fr)]">
          <nav className="hidden lg:block" aria-label="On this page">
            <div className="sticky top-24">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-subtle">
                on this page
              </p>
              <ul className="mt-4 space-y-3">
                {toc.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="font-mono text-xs text-muted transition-colors hover:text-accent"
                    >
                      {String(index + 1).padStart(2, "0")} {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <article className="case-study-prose max-w-3xl">{children}</article>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
          <Link href="/work" className="font-mono text-sm text-muted hover:text-accent">
            ← Back to all work
          </Link>
          {next ? (
            <Link
              href={`/work/${next.slug}`}
              className="font-mono text-sm text-accent hover:underline"
            >
              Next: {next.name} →
            </Link>
          ) : prev ? (
            <Link
              href={`/work/${prev.slug}`}
              className="font-mono text-sm text-accent hover:underline"
            >
              Prev: {prev.name} →
            </Link>
          ) : null}
        </div>
      </Container>
      <ContactCTA />
    </>
  )
}
