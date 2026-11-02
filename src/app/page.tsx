import Link from "next/link"
import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"
import Hero from "@/components/Hero"
import MetricsStrip from "@/components/MetricsStrip"
import ProjectCard from "@/components/ProjectCard"
import ServiceCard from "@/components/ServiceCard"
import CaseStudyTeaser from "@/components/CaseStudyTeaser"
import ArticleCard from "@/components/ArticleCard"
import Testimonial from "@/components/Testimonial"
import AboutCard from "@/components/AboutCard"
import ContactCTA from "@/components/ContactCTA"
import SectionLabel from "@/components/SectionLabel"
import Container from "@/components/Container"
import { featuredProjects, getProject, projects } from "@content/projects"
import { headlineMetrics } from "@content/metrics"
import { featuredArticles } from "@content/writing"
import { testimonials } from "@content/testimonials"

const services = [
  {
    n: "01",
    cmd: "$ build",
    title: "Product engineering",
    description: "Backend-first full-stack builds, from data model to deploy.",
    items: [
      "APIs, auth, background jobs, caching",
      "Next.js apps on Supabase and Postgres",
      "AI features with OpenAI, Anthropic, OpenRouter",
    ],
    stack: ["Node.js", "Python", "Next.js", "Supabase", "Docker"],
  },
  {
    n: "02",
    cmd: "$ rank",
    title: "Technical SEO",
    description:
      "Sites that search engines and AI assistants can crawl, understand, and cite.",
    items: [
      "Technical audits and fixes",
      "SSR, schema markup, sitemaps, Core Web Vitals",
      "Programmatic SEO and local SEO",
    ],
    stack: ["Search Console", "Ahrefs", "SEMrush", "Next.js"],
  },
  {
    n: "03",
    cmd: "$ explain",
    title: "Technical writing",
    description:
      "Docs, tutorials, and articles that make complex topics clear and bring in traffic.",
    items: [
      "Product and API documentation",
      "Developer tutorials and guides",
      "SEO content strategy",
    ],
    stack: ["Markdown", "WordPress", "Google Analytics"],
  },
]

export default function Home() {
  const featured = featuredProjects()
  const featuredMain = featured[0]
  const featuredRest = featured.slice(1, 4)
  const excelbeam = getProject("excelbeam")
  const writing = featuredArticles().slice(0, 3)

  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main id="main" className="relative flex-1">
        <Hero />
        <MetricsStrip metrics={headlineMetrics} />

        <section id="work" className="section-pad">
          <Container>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel n="01" text="selected work" />
                <h2 className="mt-4 heading-section font-semibold leading-tight">
                  Products I designed, built, and shipped.
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-muted">
                  AI tools, SEO software, and browser games running in production.
                  Each card links to a live build.
                </p>
              </div>
              <Link
                href="/work"
                className="shrink-0 font-mono text-sm text-accent hover:underline"
              >
                view all {projects.length} builds →
              </Link>
            </div>

            {featuredMain ? (
              <div className="mt-12">
                <ProjectCard project={featuredMain} variant="featured" />
              </div>
            ) : null}

            {featuredRest.length ? (
              <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {featuredRest.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            ) : null}
          </Container>
        </section>

        <section id="services" className="border-y border-line bg-surface/40">
          <Container className="section-pad">
            <SectionLabel n="02" text="what I do" />
            <h2 className="mt-4 max-w-3xl heading-section font-semibold leading-tight">
              One person who can build it, make it rank, and explain it.
            </h2>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {services.map((service) => (
                <ServiceCard key={service.n} {...service} />
              ))}
            </div>
          </Container>
        </section>

        {excelbeam ? (
          <CaseStudyTeaser
            project={excelbeam}
            paragraph="Most Excel courses check the number on screen. ExcelBeam checks the formula itself, so a hardcoded answer fails and a wrong range gets named. An AI tutor explains mistakes but never overrides the grader."
            stats={[
              { label: "exercises", value: "31" },
              { label: "topics", value: "7" },
              { label: "hint levels", value: "4" },
            ]}
          />
        ) : null}

        <section id="writing" className="border-y border-line bg-surface/40">
          <Container className="section-pad">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionLabel n="04" text="writing" />
                <h2 className="mt-4 heading-section font-semibold leading-tight">
                  200+ technical articles published.
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-muted">
                  On cloud infrastructure, Node.js, Next.js, and SEO, for nOps,
                  Cloud Infrastructure Services, and my own blog.
                </p>
              </div>
              <Link
                href="https://www.techlivened.com"
                target="_blank"
                rel="noopener"
                className="shrink-0 font-mono text-sm text-accent hover:underline"
                aria-label="More articles on techlivened.com"
              >
                more on techlivened.com ↗
              </Link>
            </div>
            {writing.length ? (
              <div className="mt-12 grid gap-5 md:grid-cols-3">
                {writing.map((article) => (
                  <ArticleCard key={article.url} article={article} />
                ))}
              </div>
            ) : null}
          </Container>
        </section>

        <section id="about" className="section-pad">
          <Container
            className={`grid gap-6 ${
              testimonials.length > 0 ? "lg:grid-cols-[1fr_1.1fr]" : ""
            }`}
          >
            {testimonials.length > 0
              ? testimonials.map((item) => (
                  <Testimonial
                    key={`${item.name}-${item.company}`}
                    testimonial={item}
                  />
                ))
              : null}
            <AboutCard />
          </Container>
        </section>

        <ContactCTA />
      </main>
      <SiteFooter />
    </div>
  )
}
