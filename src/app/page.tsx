import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, Globe, Linkedin } from "lucide-react"
import PageShell from "./components/PageShell"
import Hero from "./components/Hero"
import SectionHeading from "./components/SectionHeading"
import { site } from "@/lib/site"

const focusAreas = [
  {
    index: "01",
    title: "Software Engineering",
    description:
      "Scalable backends, full-stack apps, and systems that hold up under real traffic.",
    href: "/software-engineering",
    cta: "view projects",
  },
  {
    index: "02",
    title: "Technical Writing",
    description:
      "Documentation, SEO strategy, and articles that make complex topics legible.",
    href: "/technical-writing",
    cta: "read samples",
  },
]

const socials = [
  { label: "LinkedIn", href: site.links.linkedin, icon: Linkedin },
  { label: "GitHub", href: site.links.github, icon: Github },
  { label: "Blog", href: site.links.blog, icon: Globe },
]

export default function Home() {
  return (
    <PageShell>
      <Hero
        title="Dennis Muvaa"
        description="I build scalable software and write about it clearly. Backend-leaning full-stack engineer with two years shipping production systems — from APIs and infra to docs that actually get read."
        buttonText="explore about"
        buttonLink="#about"
      />

      <section id="about" className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            index="00"
            title="About"
            description="Full-stack developer with backend specialization. I care about performance, maintainability, and the kind of documentation that saves the next person three hours."
          />

          <div className="grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
            <div className="panel panel-hover mx-auto w-fit overflow-hidden p-1 md:mx-0">
              <Image
                src="/profile.jpg"
                alt={site.name}
                width={200}
                height={250}
                className="size-[200px] object-cover md:size-[220px]"
              />
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-muted md:text-lg">
                I am a full stack developer specializing in scalable, high-performance
                applications. From dynamic web apps to deep technical content, my work
                balances robust engineering with clear communication — because good code
                and good docs should ship together.
              </p>

              <Link href="/about" className="link-arrow">
                full profile
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            index="01"
            title="Focus Areas"
            description="Two lanes, one obsession: building things that work and explaining how they work."
          />

          <div className="grid gap-4 md:grid-cols-2">
            {focusAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="panel panel-hover group flex flex-col justify-between p-6 md:p-8"
              >
                <div>
                  <p className="section-label mb-4">{area.index}</p>
                  <h3 className="text-xl font-medium text-foreground">{area.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                </div>
                <span className="link-arrow mt-8 opacity-70 transition-opacity group-hover:opacity-100">
                  {area.cta}
                  <ArrowUpRight className="size-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
          <SectionHeading
            index="02"
            title="Connect"
            description="Always open to engineering conversations, writing collaborations, or a good debate about caching strategies."
          />

          <div className="flex flex-wrap gap-3">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="panel panel-hover inline-flex items-center gap-2 px-4 py-3 font-mono text-sm text-muted transition-colors hover:text-foreground"
              >
                <Icon className="size-4 text-accent" />
                {label.toLowerCase()}
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
