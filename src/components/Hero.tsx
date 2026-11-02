import Link from "next/link"
import Container from "@/components/Container"
import TerminalCard from "@/components/TerminalCard"
import { projects } from "@content/projects"

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 grid-bg"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 hero-glow"
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 gap-12 pb-20 pt-16 md:pb-28 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-muted">
            <span className="text-accent">&gt;</span> whoami
          </p>
          <h1 className="mt-5 text-[40px] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[64px]">
            Fullstack Software Engineer
            <span className="text-accent">/</span>
            SEO Specialist
          </h1>
          <div className="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-muted">
            <p>
              I&apos;m Dennis Muvaa, a software engineer and SEO specialist based
              in Nairobi. I build reliable, scalable software products across the
              stack, from APIs and infrastructure to polished frontends.
            </p>
            <p>
              I also help businesses grow their organic traffic through technical
              SEO and content strategy.
            </p>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/#contact"
              className="btn-accent"
            >
              Start a project <span aria-hidden="true">→</span>
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 rounded-lg border border-line-2 bg-surface px-5 py-3 font-medium transition-colors hover:border-accent/60"
            >
              See all {projects.length} builds
            </Link>
          </div>
          <p className="mt-8 font-mono text-[13px] text-subtle">
            Previously: Dencloud Technologies · Cloud Infrastructure Services ·
            nOps · Hidden Lemur
          </p>
        </div>
        <TerminalCard />
      </Container>
    </section>
  )
}
