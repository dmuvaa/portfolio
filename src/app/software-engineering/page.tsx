import Image from "next/image"
import { ArrowUpRight, Calendar, ExternalLink, MapPin } from "lucide-react"
import PageShell from "../components/PageShell"
import SectionHeading from "../components/SectionHeading"
import { projects, type Project, type ProjectCategory } from "@/lib/projects"

const experience = [
  {
    title: "Junior Software Engineer",
    company: "Dencloud Technologies",
    location: "Nairobi, Kenya",
    date: "May 2024 - Present",
    points: [
      "Increased system efficiency by 15% using Python, JavaScript, and RESTful APIs",
      "Contributed to 25% increase in application efficiency and 20% reduction in bug resolution time",
      "Enhanced organic search visibility by 30% within two months using SEO-first strategies",
      "Achieved 95% client satisfaction rate and reduced project delivery timelines by 25%",
    ],
  },
  {
    title: "Technical Writer",
    company: "Cloud Infrastructure Services Ltd",
    location: "United Kingdom",
    date: "July 2022 - April 2024",
    points: [
      "Created and maintained comprehensive documentation, improving user comprehension by 30%",
      "Developed SEO guidelines, increasing organic traffic by 35% within six months",
      "Produced 200+ blog articles, boosting website traffic by 400%",
    ],
  },
  {
    title: "Content Writer & SEO Manager",
    company: "Hidden Lemur - Travel Media Company",
    location: "San Francisco (Remote)",
    date: "Feb 2021 - Sep 2022",
    points: [
      "Boosted organic search traffic by 335% through targeted keyword research using Ahrefs",
      "Achieved 200% increase in organic search rankings and 25% uplift in website traffic",
      "Directed content teams to produce 850+ high-quality articles, reducing publishing timelines by 60%",
    ],
  },
]

const skillGroups = [
  { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
  { title: "Backend", skills: ["Python", "Node.js", "Next.js", "MongoDB"] },
  { title: "DevOps", skills: ["Docker", "Kubernetes", "AWS", "Terraform"] },
  { title: "Systems", skills: ["Nginx", "Apache", "HAProxy", "Firewalls"] },
]

const capabilities = [
  "Developing scalable backend solutions using Node.js, Express, Django, FastAPI, and Go",
  "Core backend — Redis/Memcached caching, microservices, websockets, auth, pagination, i18n",
  "Full-stack development with Next.js and React",
  "Database modeling with Prisma, Postgres, and Supabase",
  "AI product work — OpenRouter, OpenAI, Anthropic, agent tooling",
  "Containerization with Docker and Kubernetes",
  "CI/CD with GitHub Actions; monitoring with Grafana, Prometheus, Datadog, ELK",
  "Testing with Vitest, Mocha, unit tests, and Cypress",
]

const categorySections: { id: ProjectCategory; title: string; index: string; description: string }[] = [
  {
    id: "product",
    title: "Products & Platforms",
    index: "01",
    description: "SaaS, AI apps, and systems I designed and shipped end to end.",
  },
  {
    id: "game",
    title: "Games",
    index: "02",
    description: "Browser games with maps, Wikipedia hops, and word puzzles.",
  },
  {
    id: "tool",
    title: "Tools",
    index: "03",
    description: "SEO and agent tooling for humans and machines.",
  },
  {
    id: "client",
    title: "Client Sites",
    index: "04",
    description: "Production websites for businesses and organizations.",
  },
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="panel panel-hover flex flex-col overflow-hidden">
      {project.image && (
        <div className="relative h-44 overflow-hidden border-b border-border">
          <Image
            src={project.image}
            alt={project.title}
            width={500}
            height={300}
            className="h-full w-full object-cover opacity-85 transition-opacity hover:opacity-100"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
          <span className="meta shrink-0">{project.date}</span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>
        <ul className="mt-4 space-y-2">
          {project.points.map((point) => (
            <li key={point} className="flex gap-2 text-sm text-muted">
              <ArrowUpRight className="mt-0.5 size-3 shrink-0 text-accent" />
              {point}
            </li>
          ))}
        </ul>
        {project.technologies && (
          <p className="meta mt-4">{project.technologies}</p>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="link-arrow mt-auto pt-6"
        >
          {project.url.includes("github.com") ? "view repo" : "view live"}
          <ExternalLink className="size-4" />
        </a>
      </div>
    </article>
  )
}

export default function SoftwareEngineering() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          index="00"
          title="Software Engineering"
          description={`${projects.length} recent builds — products, games, tools, and client sites. Stack leans Next.js, TypeScript, Supabase, and AI APIs.`}
        />

        <section className="mb-16">
          <p className="section-label mb-4">stack</p>
          <ul className="space-y-2 border border-border bg-surface p-6">
            {capabilities.map((item) => (
              <li
                key={item}
                className="flex gap-3 font-mono text-xs leading-relaxed text-muted md:text-sm"
              >
                <span className="text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {categorySections.map((section) => {
          const items = projects.filter((project) => project.category === section.id)
          return (
            <section key={section.id} className="mb-16">
              <SectionHeading
                index={section.index}
                title={section.title}
                description={section.description}
              />
              <div className="grid gap-4 md:grid-cols-2">
                {items.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </section>
          )
        })}

        <section className="mb-16">
          <SectionHeading index="05" title="Experience" />
          <div className="space-y-4">
            {experience.map((job) => (
              <article key={job.title} className="panel p-6 md:p-8">
                <h3 className="text-lg font-medium text-foreground">{job.title}</h3>
                <p className="meta mt-2 flex items-center gap-2">
                  <MapPin className="size-3" />
                  {job.company} · {job.location}
                </p>
                <p className="meta mt-1 flex items-center gap-2">
                  <Calendar className="size-3" />
                  {job.date}
                </p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <span className="font-mono text-accent">-</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading index="06" title="Technical Skills" />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="panel p-6">
                <h3 className="font-mono text-sm text-accent">
                  {group.title.toLowerCase()}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 border border-border bg-surface-hover px-3 py-1.5"
                    >
                      <Image
                        src={`/logos/${skill.toLowerCase().replace(".", "")}.svg`}
                        alt={skill}
                        width={18}
                        height={18}
                      />
                      <span className="font-mono text-xs text-muted">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageShell>
  )
}
