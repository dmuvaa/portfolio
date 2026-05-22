import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import PageShell from "../components/PageShell"
import SectionHeading from "../components/SectionHeading"
import { site } from "@/lib/site"

const projects = [
  {
    title: "SEO Content Strategy — Hidden Lemur Media",
    date: "Feb 2021 - Sep 2022",
    points: [
      "Developed and implemented a comprehensive SEO strategy that increased organic traffic by 150% over six months",
      "Conducted comprehensive site audits and implemented strategic SEO improvements",
      "Directed content creation and editorial processes for over 100 high-quality articles",
      "Boosted organic search traffic by 335% through targeted keyword research using Ahrefs",
    ],
  },
  {
    title: "Technical Writing — Cloud Infrastructure Services",
    date: "July 2022 - April 2024",
    points: [
      "Authored over 200 blog articles on diverse tech topics, driving a 400% increase in website traffic",
      "Improved user engagement and comprehension through clear, concise, and accurate technical writing",
      "Enhanced the company's authority in the tech industry through in-depth coverage of Ubuntu, Node.js, Nginx, AWS, and more",
      "Developed content that effectively reduced customer support inquiries by 30%",
    ],
  },
  {
    title: "Cloud Writer — nOps.io",
    date: "May 2021 - May 2022",
    points: [
      "Produced detailed documentation on AWS Cloud Services, significantly reducing integration time",
      "Created and optimized a glossary page, improving search engine rankings by 525%",
      "Improved SEO performance, resulting in a 1000% increase in organic traffic within six months",
      "Developed technical documentation that reduced customer support inquiries by 30%",
    ],
  },
]

const seoExpertise = [
  {
    title: "Programmatic SEO",
    side: "left" as const,
    points: [
      "Creates and manages large-scale programmatic SEO campaigns, automating content creation across numerous pages",
      "Utilizes data-driven approaches to generate pages targeting long-tail keywords",
      "Integrates with CMS to dynamically generate optimized content",
      "Monitors performance using analytics tools, adjusting strategies to maximize organic traffic",
    ],
  },
  {
    title: "Site Audits",
    side: "right" as const,
    points: [
      "Performs comprehensive site audits using Ahrefs, SEMrush, and Google Search Console",
      "Analyzes on-page elements like meta tags, headers, and content structure",
      "Optimizes site speed, mobile usability, and security",
      "Provides actionable audit reports to improve site health and search visibility",
    ],
  },
  {
    title: "Keyword Research",
    side: "left" as const,
    points: [
      "Conducts thorough keyword research to uncover high-value keywords aligned with business goals",
      "Analyzes search intent to ensure content meets user expectations",
      "Tracks keyword rankings and trends to refine strategies",
      "Balances short-term wins with long-term growth",
    ],
  },
  {
    title: "Server Side Rendering (Next.js)",
    side: "right" as const,
    points: [
      "Implements SSR with Next.js to enhance page load speed and SEO performance",
      "Ensures content is fully rendered on the server before delivery",
      "Optimizes SSR configurations to balance performance with resource usage",
      "Continuously refines SSR setups to adapt to search engine algorithm changes",
    ],
  },
  {
    title: "Featured Snippets",
    side: "left" as const,
    points: [
      "Structures content to target and capture featured snippets",
      "Uses schema markup and formatting to make content more attractive for snippet inclusion",
      "Crafts concise answers to common queries",
      "Monitors snippet performance to maintain visibility",
    ],
  },
]

const seoProjects = [
  {
    title: "nOps.io",
    points: [
      "Part of the SEO strategy focusing on keyword optimization",
      "Increased organic traffic by optimizing site structure and content for key industry terms",
      "Implemented advanced keyword strategies aligned with business goals",
      "Regularly monitored SEO performance, making adjustments to maintain rankings",
    ],
  },
  {
    title: "Hiddenlemur Media",
    points: [
      "Developed and executed comprehensive SEO strategies including content creation and keyword optimization",
      "Conducted regular site audits and keyword research",
      "Tracked KPIs to measure the success of SEO initiatives",
    ],
  },
  {
    title: "Cloud Infrastructure Services Ltd",
    points: [
      "Drove SEO efforts through server-side rendering, site audits, and content optimization",
      "Strategically targeted high-value search queries",
      "Enhanced technical SEO aspects like site speed, mobile optimization, and security",
      "Analyzed SEO performance data for continuous improvement",
    ],
  },
]

const articles = [
  {
    title: "Server-Side Rendering in Next.js for SEO",
    description: "Explore the benefits of SSR in Next.js and its impact on SEO performance.",
    url: "https://www.techlivened.com/server-side-rendering-in-nextjs-for-seo",
  },
  {
    title: "React Hooks Explained",
    description: "A comprehensive guide to understanding and using React Hooks effectively.",
    url: "https://www.techlivened.com/react-hooks-explained",
  },
  {
    title: "Microsoft Remote Desktop Services Security Best Practices",
    description: "Learn how to secure your Remote Desktop Services environment effectively.",
    url: "https://cloudinfrastructureservices.co.uk/microsoft-remote-desktop-services-security-best-practices/",
  },
  {
    title: "Implementing Caching in Node.js",
    description: "Discover techniques to improve Node.js application performance through caching.",
    url: "https://www.techlivened.com/implementing-caching-in-node-js",
  },
  {
    title: "NumPy vs Pandas in 2024",
    description: "A comparison of two popular Python libraries for data manipulation and analysis.",
    url: "https://www.techlivened.com/numpy-vs-pandas-in-2024",
  },
  {
    title: "Best AI Tools to Generate Images",
    description: "An overview of the top AI-powered image generation tools available in the market.",
    url: "https://www.techlivened.com/best-ai-tools-to-generate-images",
  },
  {
    title: "GitLab Integration: Integrating GitLab with Other Tools and Services",
    description: "Learn how to integrate GitLab with various development tools and services.",
    url: "https://cloudinfrastructureservices.co.uk/gitlab-integration-integrating-gitlab-with-other-tools-and-services/",
  },
]

const skillGroups = [
  {
    title: "Technical Writing",
    skills: [
      { name: "Markdown", logo: "/logos/markdown.svg" },
      { name: "GitHub", logo: "/logos/github.svg" },
      { name: "Microsoft Word", logo: "/logos/word.svg" },
    ],
  },
  {
    title: "SEO",
    skills: [
      { name: "Ahrefs", logo: "/logos/ahrefs.svg" },
      { name: "Google Analytics", logo: "/logos/google-analytics.svg" },
      { name: "WordPress", logo: "/logos/wordpress.svg" },
    ],
  },
  {
    title: "Content Creation",
    skills: [{ name: "Figma", logo: "/logos/figma.svg" }],
  },
]

export default function TechnicalWriting() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          index="00"
          title="Technical Writing"
          description="Documentation, SEO strategy, and content that makes complex technical concepts accessible — while driving organic traffic through targeted creation."
        />

        <section className="mb-16">
          <SectionHeading index="01" title="Experience" />
          <div className="grid gap-4 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="panel p-6">
                <h3 className="text-base font-medium leading-snug text-foreground">
                  {project.title}
                </h3>
                <p className="meta mt-2">{project.date}</p>
                <ul className="mt-4 space-y-2">
                  {project.points.map((point) => (
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

        <section className="mb-16">
          <SectionHeading index="02" title="SEO Expertise" />
          <div className="space-y-4">
            {seoExpertise.map((item, i) => (
              <article
                key={item.title}
                className={`panel p-6 md:w-[85%] ${item.side === "right" ? "md:ml-auto" : ""}`}
              >
                <p className="section-label mb-2">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="text-lg font-medium text-foreground">{item.title}</h3>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-2 text-sm text-muted">
                      <ArrowUpRight className="mt-0.5 size-3 shrink-0 text-accent" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading index="03" title="SEO Projects" />
          <div className="grid gap-4 md:grid-cols-3">
            {seoProjects.map((project) => (
              <article key={project.title} className="panel panel-hover p-6">
                <h3 className="font-mono text-sm text-accent">{project.title}</h3>
                <ul className="mt-4 space-y-2">
                  {project.points.map((point) => (
                    <li key={point} className="text-sm text-muted">
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading index="04" title="Article Samples" />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <article key={article.url} className="panel panel-hover flex flex-col p-6">
                <h3 className="text-base font-medium leading-snug text-foreground">
                  {article.title}
                </h3>
                <p className="mt-3 flex-1 text-sm text-muted">{article.description}</p>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-arrow mt-6"
                >
                  read article
                  <ExternalLink className="size-4" />
                </a>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href={site.links.blog} className="link-arrow justify-center">
              more on techlivened.com
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>

        <section>
          <SectionHeading index="05" title="Tools & Skills" />
          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="panel p-6">
                <h3 className="font-mono text-sm text-accent">{group.title.toLowerCase()}</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 border border-border bg-surface-hover px-3 py-1.5"
                    >
                      <Image src={skill.logo} alt={skill.name} width={18} height={18} />
                      <span className="font-mono text-xs text-muted">{skill.name}</span>
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
