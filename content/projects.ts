export type ProjectCategory = "product" | "tool" | "game"

export type Metric = {
  value: string
  label: string
  source?: string
}

export type Project = {
  slug: string
  name: string
  year: string
  category: ProjectCategory
  summary: string
  highlights: string[]
  stack: string[]
  liveUrl?: string
  repoUrl?: string
  image?: { src: string; alt: string; width: number; height: number }
  featured?: boolean
  featuredOrder?: number
  outcome?: Metric
  metrics?: Metric[]
  role?: string
  timeline?: string
  caseStudy?: boolean
  status?: "live" | "in-development" | "archived"
}

function shot(slug: string, name: string) {
  return {
    src: `/work/${slug}.jpg`,
    alt: `Screenshot of ${name} homepage`,
    width: 960,
    height: 600,
  }
}

export const projects: Project[] = [
  {
    slug: "excelbeam",
    name: "ExcelBeam",
    year: "2026",
    category: "product",
    summary:
      "Interactive Excel learning platform with a live browser spreadsheet, deterministic formula grading, progressive hints, and an optional AI tutor.",
    highlights: [
      "Univer-powered spreadsheet with real formula checking: ranges, functions, and hardcodes",
      "31 lessons plus free intro drills for keyboard shortcuts",
      "OpenRouter-backed AI tutor that explains mistakes without replacing the grader",
    ],
    stack: ["Next.js", "TypeScript", "Univer", "Tailwind", "OpenRouter"],
    liveUrl: "https://excel-beam.vercel.app",
    image: shot("excelbeam", "ExcelBeam"),
    caseStudy: true,
    status: "live",
  },
  {
    slug: "fitgrit-ai",
    name: "FitGrit AI",
    year: "2026",
    category: "product",
    summary:
      "AI fitness coach that builds personalized workout and meal plans from user goals, with a mobile app and admin dashboard.",
    highlights: [
      "React Native / Expo mobile app plus Next.js admin dashboard",
      "Supabase auth, Postgres, and Edge Functions for the backend",
      "OpenRouter (GPT / Claude) for coaching plans and feedback loops",
    ],
    stack: ["React Native", "Expo", "Next.js", "Supabase", "OpenRouter"],
    liveUrl: "https://fitgritai.vercel.app",
    image: shot("fitgrit", "FitGrit AI"),
    status: "live",
  },
  {
    slug: "blitzgeo",
    name: "BlitzGeo",
    year: "2026",
    category: "product",
    summary:
      "AI brand visibility audit platform: measure how brands appear across ChatGPT, Gemini, Claude, and Perplexity.",
    highlights: [
      "Multi-model audits with a unified Blitz Score and citation extraction",
      "Index Knowledge Graph for recall boundaries, concept anchors, and gaps",
      "Geo Chat for conversational analysis of audit results",
    ],
    stack: ["Next.js", "TypeScript", "AI APIs", "Tailwind"],
    liveUrl: "https://blitzgeo.vercel.app",
    image: shot("blitzgeo", "BlitzGeo"),
    featured: true,
    featuredOrder: 1,
    status: "live",
  },
  {
    slug: "leadloop",
    name: "LeadLoop",
    year: "2026",
    category: "product",
    summary:
      "AI B2B opportunity finder that researches companies, scores ICP fit, and drafts outreach from verified evidence.",
    highlights: [
      "Live company research with verified / inferred / unknown claim labels",
      "First-email drafts grounded in site research, not invented facts",
      "Optional Gmail SMTP sending with explicit approval and daily caps",
    ],
    stack: ["Next.js", "OpenAI", "Anthropic", "Nodemailer"],
    liveUrl: "https://leadloop-teal.vercel.app",
    image: shot("leadloop", "LeadLoop"),
    featured: true,
    featuredOrder: 4,
    status: "live",
  },
  {
    slug: "prospectdyno",
    name: "ProspectDyno",
    year: "2026",
    category: "product",
    summary:
      "AI prospect intelligence platform: describe an ICP, discover companies, and review evidence-backed opportunities.",
    highlights: [
      "CSV import, Apify discovery, and website analysis pipelines",
      "BullMQ worker with Supabase polling fallback for job processing",
      "Metered AI analysis with shared engine packages",
    ],
    stack: ["Next.js", "Supabase", "BullMQ", "Apify", "OpenAI"],
    liveUrl: "https://prospectdyno.vercel.app",
    repoUrl: "https://github.com/dmuvaa/prospectdyno",
    status: "live",
  },
  {
    slug: "astragbp",
    name: "AstraGBP",
    year: "2026",
    category: "product",
    summary:
      "Multi-tenant Google Business Profile management for agencies and local businesses.",
    highlights: [
      "Review inbox with AI-assisted reply drafts and one-click publishing",
      "Post scheduling, profile audits, and local SEO insights",
      "Background GBP sync with multi-location workspaces",
    ],
    stack: ["Next.js 16", "Supabase", "Google GBP API", "OpenAI"],
    liveUrl: "https://astragbp.vercel.app",
    image: shot("astragbp", "AstraGBP"),
    featured: true,
    featuredOrder: 2,
    status: "live",
  },
  {
    slug: "outsideir35",
    name: "OutsideIR35",
    year: "2026",
    category: "product",
    summary:
      "UK contractor job portal for Outside IR35, SC/DV cleared, and high-paying contract roles.",
    highlights: [
      "Live contract search with IR35 status and clearance filters",
      "Company pages, guides, and contractor profiles",
      "Supabase auth plus Apify-powered scraping for admins",
    ],
    stack: ["Next.js", "Supabase", "Apify", "TypeScript"],
    liveUrl: "https://outsideir35.vercel.app",
    image: shot("outsideir35", "OutsideIR35"),
    status: "live",
  },
  {
    slug: "sytegy",
    name: "Sytegy",
    year: "2026",
    category: "product",
    summary:
      "AI YouTube strategy engine for content repurposing, competitor tracking, trend discovery, and planning.",
    highlights: [
      "Repurpose videos into blogs, threads, newsletters, and summaries",
      "Competitor tracking, niche agents, and Kanban content planner",
      "Supabase auth with Lemon Squeezy subscriptions",
    ],
    stack: ["Next.js", "Supabase", "Recharts", "Lemon Squeezy"],
    liveUrl: "https://sytegy.vercel.app",
    image: shot("sytegy", "Sytegy"),
    status: "live",
  },
  {
    slug: "thesis25",
    name: "Thesis25",
    year: "2025",
    category: "product",
    summary:
      "Essay and dissertation writing platform for academic research workflows.",
    highlights: [
      "Structured writing workspace for theses and dissertations",
      "Academic-focused UX for long-form research output",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://thesis25.vercel.app",
    image: shot("thesis25", "Thesis25"),
    status: "live",
  },
  {
    slug: "webprismio",
    name: "Webprismio",
    year: "2026",
    category: "product",
    summary:
      "Agency platform for high-performance website development, AI integrations, and digital growth across Kenya and Africa.",
    highlights: [
      "Service, pricing, and portfolio site for Nairobi-based web + AI work",
      "Positioned around M-Pesa, WhatsApp funnels, and local SEO",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://web-prismio.vercel.app",
    image: shot("webprismio", "Webprismio"),
    status: "live",
  },
  {
    slug: "defined-recipe",
    name: "Defined Recipe",
    year: "2024-2025",
    category: "product",
    summary:
      "Personalized AI recipe generator focused on cost savings and food waste reduction.",
    highlights: [
      "Next.js product with Paystack payments",
      "Recipe generation tuned for household budgets and leftovers",
    ],
    stack: ["Next.js", "TypeScript", "Paystack"],
    liveUrl: "https://www.definedrecipe.com",
    image: shot("definedrecipe", "Defined Recipe"),
    status: "live",
  },
  {
    slug: "waymarktrace",
    name: "Waymarktrace",
    year: "2026",
    category: "game",
    summary:
      "Geography history game: name the historical figure from birth and death places and years.",
    highlights: [
      "MapLibre-powered interactive map gameplay",
      "Generated figure dataset with fuzzy answer matching",
      "Vitest coverage for scoring and game logic",
    ],
    stack: ["Next.js", "MapLibre", "Vitest"],
    liveUrl: "https://waymarktrace.vercel.app",
    image: shot("waymarktrace", "Waymarktrace"),
    status: "live",
  },
  {
    slug: "geotease",
    name: "GeoTease",
    year: "2026",
    category: "game",
    summary:
      "Globe-based geography game: read the place, place a pin, and learn how the world fits together.",
    highlights: [
      "Daily challenges with shared rounds and leaderboard",
      "Proximity scoring on a MapLibre globe",
      "Dark/light themes and friend challenges",
    ],
    stack: ["Next.js", "MapLibre", "Supabase"],
    liveUrl: "https://geotease.vercel.app",
    image: shot("geotease", "GeoTease"),
    status: "live",
  },
  {
    slug: "speedwikipedia",
    name: "SpeedWikipedia",
    year: "2026",
    category: "game",
    summary:
      "Race through real Wikipedia pages: hop from start article to target using only in-page links.",
    highlights: [
      "Live Wikimedia article content under CC BY-SA",
      "Quick play, custom races, and local score tracking",
      "No database: scores stay in the browser",
    ],
    stack: ["Next.js", "TypeScript", "Wikimedia APIs"],
    liveUrl: "https://speedwikipedia.vercel.app",
    image: shot("speedwikipedia", "SpeedWikipedia"),
    status: "live",
  },
  {
    slug: "wordlepros",
    name: "WordlePros",
    year: "2026",
    category: "game",
    summary:
      "Infinite Wordle clone and solver with variable word lengths, difficulty modes, and a built-in hint system.",
    highlights: [
      "4-7 letter modes with easy / medium / hard rules",
      "Advanced solver with green / yellow / gray filters",
      "Dictionary lookups and SEO-friendly pattern word lists",
    ],
    stack: ["Next.js", "React 19", "Tailwind v4"],
    liveUrl: "https://wordlepros.vercel.app",
    image: shot("wordlepros", "WordlePros"),
    status: "live",
  },
  {
    slug: "agent-search-console",
    name: "Agent Search Console",
    year: "2026",
    category: "tool",
    summary:
      "Technical SEO checkers for humans and AI agents: indexability, schema, robots, sitemaps, headers, and more.",
    highlights: [
      "Full SEO report with section scores and prioritized action plan",
      "WebMCP tools so ChatGPT / Chrome agents can run the same diagnostics",
      "In-memory crawling: no permanent page storage",
    ],
    stack: ["Next.js", "TypeScript", "WebMCP"],
    liveUrl: "https://agent-search-console.vercel.app",
    image: shot("agentsearchconsole", "Agent Search Console"),
    featured: true,
    featuredOrder: 3,
    status: "live",
  },
  {
    slug: "free-seo-tools",
    name: "Free SEO Tools",
    year: "2026",
    category: "tool",
    summary:
      "Suite of free technical SEO utilities to audit, preview, and optimize web pages instantly.",
    highlights: [
      "Page audits and SERP-oriented optimization helpers",
      "Cheerio + Chromium-backed extraction with AI assist",
      "Supabase-backed tooling where persistence is needed",
    ],
    stack: ["Next.js", "Cheerio", "Chromium", "OpenRouter", "Supabase"],
    liveUrl: "https://freeseotools-sigma.vercel.app",
    image: shot("freeseotools", "Free SEO Tools"),
    status: "live",
  },
]

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug)

export const featuredProjects = () =>
  projects
    .filter((project) => project.featured)
    .sort((a, b) => (a.featuredOrder ?? 99) - (b.featuredOrder ?? 99))

export const projectsByCategory = (category: ProjectCategory) =>
  projects.filter((project) => project.category === category)

export const projectCount = () => projects.length

export const productCount = () =>
  projects.filter((project) => project.category === "product").length

export const toolCount = () =>
  projects.filter((project) => project.category === "tool").length

export const gameCount = () =>
  projects.filter((project) => project.category === "game").length
