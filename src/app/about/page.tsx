import { Badge } from "@/components/ui/badge"
import PageShell from "../components/PageShell"
import SectionHeading from "../components/SectionHeading"

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
    projects: ["Upcovered", "Global Workspaces", "Thesis Corner", "Coursework AI"],
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
      "The only way to do great work is to love what you do. — Steve Jobs",
      "In the middle of difficulty lies opportunity. — Albert Einstein",
      "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    ],
  },
  {
    index: "06",
    title: "Hackathons",
    items: ["HackforClimate", "EdTech Series Kenya", "HackforPWDs"],
  },
]

export default function AboutPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          index="00"
          title="About Me"
          description="Engineer, writer, and perpetual learner. This page is the longer version."
        />

        <div className="space-y-4">
          {sections.map((section) => (
            <section key={section.index} className="panel p-6 md:p-8">
              <p className="section-label mb-4">{section.index}</p>
              <h2 className="text-lg font-medium text-foreground">{section.title}</h2>

              {"body" in section && (
                <p className="mt-4 text-sm leading-relaxed text-muted">{section.body}</p>
              )}

              {"items" in section && section.items && (
                <ul className="mt-4 space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <span className="font-mono text-accent">-</span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {"projects" in section && section.projects && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {section.projects.map((project) => (
                    <li key={project} className="flex items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-border bg-surface font-mono text-xs text-muted"
                      >
                        {project}
                      </Badge>
                      <span className="text-xs text-muted">in dev</span>
                    </li>
                  ))}
                </ul>
              )}

              {"quotes" in section && section.quotes && (
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
              )}
            </section>
          ))}
        </div>
      </div>
    </PageShell>
  )
}
