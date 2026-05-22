import Image from "next/image"
import { ArrowUpRight, Calendar, ExternalLink, MapPin } from "lucide-react"
import PageShell from "../components/PageShell"
import SectionHeading from "../components/SectionHeading"

const projects = [
  {
    title: "Defined Recipe",
    image: "/images/definedrecipe.png",
    date: "June 2024 - Present",
    description: "Personalized AI recipe generator with cost savings and food waste reduction.",
    points: [
      "Developed with 40% potential cost savings and 25% food waste reduction",
      "Designed intuitive UI using Sketch and Figma",
      "Engineered robust Next.js backend for 100,000+ daily users",
      "Integrated Paystack for streamlined payments",
    ],
    url: "https://definedrecipe.com",
  },
  {
    title: "Smart Brain Quiz",
    image: "/images/smart-brain-quiz.png",
    date: "March 2024 - Present",
    description: "Scalable quiz app with real-time interaction and enhanced user engagement.",
    points: [
      "Handles 100,000+ concurrent users with 40% reduced response time",
      "Implemented responsive design with Next.js",
      "Used Socket.io for real-time multiplayer capabilities",
      "Enhanced engagement with Three.js leaderboard",
    ],
    url: "https://github.com/dmuvaa/quiz-app",
  },
  {
    title: "Globe Translator",
    image: "/images/globe-translator.png",
    date: "June 2024 - July 2024",
    description: "Multi-language translation tool with AI integration and high user adoption.",
    points: [
      "Achieved 10,000+ users in first month with 99+ languages",
      "Integrated OpenAI and Stable Fusion APIs",
      "Engineered for 99.9% uptime under high traffic",
      "Increased user engagement by 30% with intuitive UI",
    ],
    url: "https://globetranslator.com",
  },
  {
    title: "PataDoc",
    image: "/images/patadoc.jpg",
    date: "November 2023 - January 2024",
    description: "Appointment scheduling system with Calendly integration and performance optimization.",
    points: [
      "Reduced scheduling time by 40% with Calendly integration",
      "Increased user adoption by 25% through targeted marketing",
      "Enhanced system performance by 30% with backend optimization",
    ],
    url: "https://github.com/dmuvaa/PataDoc",
  },
  {
    title: "Workspaces App",
    image: "/images/workspaces-app.png",
    date: "October 2024 - Present",
    description: "An app that lists all coworking spaces worldwide, enabling users to explore and discover the perfect workspace for their needs.",
    points: [
      "Comprehensive database of coworking spaces",
      "Search and filtering capabilities",
      "Responsive design for mobile and desktop users",
      "Secure authentication and user management",
    ],
    technologies: "Node.js, Next.js, Supabase, Postgres, Tailwind, Prisma",
    url: "https://workspaces-app.vercel.app/",
  },
  {
    title: "Next.js Boilerplate",
    image: "/images/next-boilerplate.png",
    date: "December 2024 - Present",
    description: "A comprehensive starter template for modern web development, featuring an array of tools and technologies for rapid application development.",
    points: [
      "Next.js 15 for latest optimizations",
      "React 19 with enhanced capabilities",
      "Supabase for authentication and database management",
      "Prisma ORM for simplified database operations",
      "ShadCN UI Components for elegant and customizable design",
    ],
    technologies: "Next.js 15, React 19, Supabase, Prisma, ShadCN UI",
    url: "https://github.com/dmuvaa/next-boilerplate",
  },
  {
    title: "Itinerary Place",
    image: "/images/itinerary-place.png",
    date: "November 2024 - Present",
    description: "An app that compiles travel itineraries from around the world, helping travelers plan their perfect trips.",
    points: [
      "Extensive travel itinerary database",
      "User-contributed itineraries with reviews",
      "Advanced filtering and search",
    ],
    technologies: "Node.js, React, Postgres, Tailwind CSS",
    url: "https://github.com/dmuvaa",
  },
  {
    title: "Coursework AI",
    image: "/images/coursework-ai.png",
    date: "2023",
    description: "An AI-powered tool for students to assist with coursework, offering intelligent recommendations and resources.",
    points: [
      "AI-driven assistance for assignments and projects",
      "Integration with educational resources and tools",
      "Responsive and accessible design",
    ],
    technologies: "Next.js, OpenAI API, Tailwind CSS",
    url: "#",
  },
]

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
  "Database modeling with Prisma and Postgres",
  "Containerization with Docker and Kubernetes",
  "CI/CD with GitHub Actions; monitoring with Grafana, Prometheus, Datadog, ELK",
  "Testing with Mocha, unit tests, and Cypress",
]

export default function SoftwareEngineering() {
  return (
    <PageShell>
      <div className="mx-auto max-w-5xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          index="00"
          title="Software Engineering"
          description="I build scalable, user-friendly applications with modern technologies and a results-driven approach — from APIs and databases to the front-end polish."
        />

        <section className="mb-16">
          <p className="section-label mb-4">stack</p>
          <ul className="space-y-2 border border-border bg-surface p-6">
            {capabilities.map((item) => (
              <li key={item} className="flex gap-3 font-mono text-xs leading-relaxed text-muted md:text-sm">
                <span className="text-accent">→</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <SectionHeading index="01" title="Featured Projects" />
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="panel panel-hover overflow-hidden">
                <div className="relative h-48 overflow-hidden border-b border-border">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={300}
                    className="h-full w-full object-cover opacity-80 transition-opacity hover:opacity-100"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-foreground">{project.title}</h3>
                  <p className="meta mt-2 flex items-center gap-2">
                    <Calendar className="size-3" />
                    {project.date}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>
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
                  {project.url !== "#" && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow mt-6"
                    >
                      view project
                      <ExternalLink className="size-4" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <SectionHeading index="02" title="Experience" />
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
          <SectionHeading index="03" title="Technical Skills" />
          <div className="grid gap-4 md:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.title} className="panel p-6">
                <h3 className="font-mono text-sm text-accent">{group.title.toLowerCase()}</h3>
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
