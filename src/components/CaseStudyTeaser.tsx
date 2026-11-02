import Image from "next/image"
import Link from "next/link"
import type { Project } from "@content/projects"
import SectionLabel from "@/components/SectionLabel"

export default function CaseStudyTeaser({
  project,
  stats,
  paragraph,
}: {
  project: Project
  stats: { label: string; value: string }[]
  paragraph: string
}) {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-16 md:px-8 md:py-24">
      <div className="grid items-center gap-12 rounded-3xl border border-line bg-gradient-to-br from-surface to-bg p-6 md:p-12 lg:grid-cols-2">
        <div>
          <SectionLabel n="03" text="case study" className="text-accent" />
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            ExcelBeam: grading real Excel formulas in the browser.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">{paragraph}</p>
          {stats.length ? (
            <dl className="mt-8 grid grid-cols-3 gap-4 border-y border-line py-6">
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
          {project.outcome ? (
            <p className="mt-5 text-sm text-muted">
              Result: {project.outcome.value} {project.outcome.label}
            </p>
          ) : null}
          <Link
            href={`/work/${project.slug}`}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3 font-semibold text-bg transition-opacity hover:opacity-90"
          >
            Read the case study →
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-2xl shadow-black/60">
          <div className="flex items-center gap-1.5 border-b border-line px-3 py-2">
            <span className="inline-block size-[9px] rounded-full bg-line-2" />
            <span className="inline-block size-[9px] rounded-full bg-line-2" />
            <span className="inline-block size-[9px] rounded-full bg-line-2" />
            <span className="ml-3 truncate font-mono text-[11px] text-subtle">
              excel-beam.vercel.app
            </span>
          </div>
          {project.image ? (
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              className="block aspect-[16/10] w-full object-cover object-top"
              sizes="(min-width:1024px) 520px, 100vw"
            />
          ) : null}
        </div>
      </div>
    </section>
  )
}
