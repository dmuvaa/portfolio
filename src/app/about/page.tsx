import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import PageShell from "../components/PageShell"
import SectionLabel from "@/components/SectionLabel"
import { projects } from "@content/projects"

export const metadata: Metadata = {
  title: "About",
  description:
    "Dennis Muvaa is a backend-leaning full-stack engineer in Nairobi with a background in technical writing, SEO, and shipping production systems.",
  alternates: { canonical: "/about" },
}

const sections = [
  {
    index: "01",
    title: "Personal",
    body: "I'm a developer and technical writer on a journey to create impactful solutions and share knowledge. With a background in technical writing and growing expertise in software engineering, I'm constantly exploring new technologies and pushing my boundaries.",
  },
  {
    index: "02",
    title: "Background",
    items: [
      "Started as a technical writer at nOps, igniting my passion for understanding technology deeper",
      "Joined ALX for a comprehensive software engineering course",
      "Built and launched various projects, showcasing them in my portfolio",
      "Continuously expanding my skills and taking on new challenges in the tech world",
    ],
  },
  {
    index: "03",
    title: "Current Projects",
    projects: projects
      .filter((project) => project.featured || project.caseStudy)
      .map((project) => ({
        name: project.name,
        status: project.status,
      })),
  },
  {
    index: "04",
    title: "Hobbies",
    items: [
      "Playing soccer (7-aside)",
      "Go Karting",
      "Hiking",
      "Karaoke",
      "Reading books",
      "Watching sports: Soccer, NBA, Formula 1, WRC, MotoGP",
    ],
  },
  {
    index: "05",
    title: "Quotes",
    quotes: [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "In the middle of difficulty lies opportunity. - Albert Einstein",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    ],
  },
  {
    index: "06",
    title: "Hackathons",
    items: ["HackforClimate", "EdTech Series Kenya", "HackforPWDs"],
  },
]

function statusLabel(status?: string) {
  if (status === "in-development") return "in development"
  if (status === "archived") return "archived"
  if (status === "live") return "live"
  return undefined
}

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <SectionLabel n="00" text="about" />
        <h1 className="mt-4 heading-section font-semibold text-fg">About Me</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Engineer, writer, and perpetual learner. This page is the longer
          version.
        </p>

        <div className="mt-10 space-y-4">
          {sections.map((section) => (
            <section key={section.index} className="panel p-6 md:p-8">
              <p className="section-label mb-4">{section.index}</p>
              <h2 className="text-lg font-medium text-fg">{section.title}</h2>

              {"body" in section && section.body ? (
                <p className="mt-4 text-sm leading-relaxed text-muted">
                  {section.body}
                </p>
              ) : null}

              {"items" in section && section.items ? (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span className="font-mono text-accent">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {"projects" in section && section.projects ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {section.projects.map((project) => {
                    const label = statusLabel(project.status)
                    return (
                      <li key={project.name} className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="border-line bg-surface font-mono text-xs text-muted"
                        >
                          {project.name}
                        </Badge>
                        {label ? (
                          <span className="text-xs text-subtle">{label}</span>
                        ) : null}
                      </li>
                    )
                  })}
                </ul>
              ) : null}

              {"quotes" in section && section.quotes ? (
                <div className="mt-4 space-y-4">
                  {section.quotes.map((quote) => (
                    <blockquote
                      key={quote}
                      className="border-l border-accent/40 pl-4 text-sm italic text-muted"
                    >
                      {quote}
                    </blockquote>
                  ))}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
