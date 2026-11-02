export type ProjectCategory = "product" | "game" | "tool" | "client"

export type Project = {
  title: string
  category: ProjectCategory
  date: string
  description: string
  points: string[]
  technologies?: string
  url: string
  image?: string
}

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "all" },
  { id: "product", label: "products" },
  { id: "game", label: "games" },
  { id: "tool", label: "tools" },
  { id: "client", label: "client sites" },
]

export const projects: Project[] = [
  {
    title: "ExcelBeam",
    category: "product",
    date: "2026",
    description:
      "Interactive Excel learning platform with a live browser spreadsheet, deterministic formula grading, progressive hints, and an optional AI tutor.",
    points: [
      "Univer-powered spreadsheet with real formula checking — ranges, functions, and hardcodes",
      "31 lessons plus free intro drills for keyboard shortcuts",
      "OpenRouter-backed AI tutor that explains mistakes without replacing the grader",
    ],
    technologies: "Next.js · TypeScript · Univer · Tailwind · OpenRouter",
    url: "https://excel-beam.vercel.app",
  },
  {
    title: "FitGrit AI",
    category: "product",
    date: "2026",
    description:
      "AI fitness coach that builds personalized workout and meal plans from user goals, with a mobile app and admin dashboard.",
    points: [
      "React Native / Expo mobile app plus Next.js admin dashboard",
      "Supabase auth, Postgres, and Edge Functions for the backend",
      "OpenRouter (GPT / Claude) for coaching plans and feedback loops",
    ],
    technologies: "React Native · Expo · Next.js · Supabase · OpenRouter",
    url: "https://fitgritai.vercel.app",
  },
  {
    title: "BlitzGeo",
    category: "product",
    date: "2026",
    description:
      "AI brand visibility audit platform — measure how brands appear across ChatGPT, Gemini, Claude, and Perplexity.",
    points: [
      "Multi-model audits with a unified Blitz Score and citation extraction",
      "Index Knowledge Graph for recall boundaries, concept anchors, and gaps",
      "Geo Chat for conversational analysis of audit results",
    ],
    technologies: "Next.js · TypeScript · AI APIs · Tailwind",
    url: "https://blitzgeo.vercel.app",
  },
  {
    title: "LeadLoop",
    category: "product",
    date: "2026",
    description:
      "AI B2B opportunity finder that researches companies, scores ICP fit, and drafts outreach from verified evidence.",
    points: [
      "Live company research with verified / inferred / unknown claim labels",
      "First-email drafts grounded in site research, not invented facts",
      "Optional Gmail SMTP sending with explicit approval and daily caps",
    ],
    technologies: "Next.js · OpenAI / Anthropic · Nodemailer",
    url: "https://leadloop-teal.vercel.app",
  },
  {
    title: "ProspectDyno",
    category: "product",
    date: "2026",
    description:
      "AI prospect intelligence platform — describe an ICP, discover companies, and review evidence-backed opportunities.",
    points: [
      "CSV import, Apify discovery, and website analysis pipelines",
      "BullMQ worker with Supabase polling fallback for job processing",
      "Metered AI analysis with shared engine packages",
    ],
    technologies: "Next.js · Supabase · BullMQ · Apify · OpenAI",
    url: "https://github.com/dmuvaa/prospectdyno",
  },
  {
    title: "AstraGBP",
    category: "product",
    date: "2026",
    description:
      "Multi-tenant Google Business Profile management for agencies and local businesses.",
    points: [
      "Review inbox with AI-assisted reply drafts and one-click publishing",
      "Post scheduling, profile audits, and local SEO insights",
      "Background GBP sync with multi-location workspaces",
    ],
    technologies: "Next.js 16 · Supabase · Google GBP API · OpenAI",
    url: "https://astragbp.vercel.app",
  },
  {
    title: "OutsideIR35",
    category: "product",
    date: "2026",
    description:
      "UK contractor job portal for Outside IR35, SC/DV cleared, and high-paying contract roles.",
    points: [
      "Live contract search with IR35 status and clearance filters",
      "Company pages, guides, and contractor profiles",
      "Supabase auth plus Apify-powered scraping for admins",
    ],
    technologies: "Next.js · Supabase · Apify · TypeScript",
    url: "https://outsideir35.vercel.app",
  },
  {
    title: "Sytegy",
    category: "product",
    date: "2026",
    description:
      "AI YouTube strategy engine for content repurposing, competitor tracking, trend discovery, and planning.",
    points: [
      "Repurpose videos into blogs, threads, newsletters, and summaries",
      "Competitor tracking, niche agents, and Kanban content planner",
      "Supabase auth with Lemon Squeezy subscriptions",
    ],
    technologies: "Next.js · Supabase · Recharts · Lemon Squeezy",
    url: "https://sytegy.vercel.app",
  },
  {
    title: "Thesis25",
    category: "product",
    date: "2025",
    description:
      "Essay and dissertation writing platform for academic research workflows.",
    points: [
      "Structured writing workspace for theses and dissertations",
      "Academic-focused UX for long-form research output",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://thesis25.vercel.app",
  },
  {
    title: "Webprismio",
    category: "product",
    date: "2026",
    description:
      "Agency platform for high-performance website development, AI integrations, and digital growth across Kenya and Africa.",
    points: [
      "Service, pricing, and portfolio site for Nairobi-based web + AI work",
      "Positioned around M-Pesa, WhatsApp funnels, and local SEO",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://web-prismio.vercel.app",
  },
  {
    title: "Defined Recipe",
    category: "product",
    date: "2024 – 2025",
    description:
      "Personalized AI recipe generator focused on cost savings and food waste reduction.",
    points: [
      "Next.js product with Paystack payments",
      "Recipe generation tuned for household budgets and leftovers",
    ],
    technologies: "Next.js · TypeScript · Paystack",
    url: "https://www.definedrecipe.com",
    image: "/images/definedrecipe.png",
  },
  {
    title: "Waymarktrace",
    category: "game",
    date: "2026",
    description:
      "Geography history game — name the historical figure from birth and death places and years.",
    points: [
      "MapLibre-powered interactive map gameplay",
      "Generated figure dataset with fuzzy answer matching",
      "Vitest coverage for scoring and game logic",
    ],
    technologies: "Next.js · MapLibre · Vitest",
    url: "https://waymarktrace.vercel.app",
  },
  {
    title: "GeoTease",
    category: "game",
    date: "2026",
    description:
      "Globe-based geography game — read the place, place a pin, and learn how the world fits together.",
    points: [
      "Daily challenges with shared rounds and leaderboard",
      "Proximity scoring on a MapLibre globe",
      "Dark/light themes and friend challenges",
    ],
    technologies: "Next.js · MapLibre · Supabase",
    url: "https://geotease.vercel.app",
  },
  {
    title: "SpeedWikipedia",
    category: "game",
    date: "2026",
    description:
      "Race through real Wikipedia pages — hop from start article to target using only in-page links.",
    points: [
      "Live Wikimedia article content under CC BY-SA",
      "Quick play, custom races, and local score tracking",
      "No database — scores stay in the browser",
    ],
    technologies: "Next.js · TypeScript · Wikimedia APIs",
    url: "https://speedwikipedia.vercel.app",
  },
  {
    title: "WordlePros",
    category: "game",
    date: "2026",
    description:
      "Infinite Wordle clone and solver with variable word lengths, difficulty modes, and a built-in hint system.",
    points: [
      "4–7 letter modes with easy / medium / hard rules",
      "Advanced solver with green / yellow / gray filters",
      "Dictionary lookups and SEO-friendly pattern word lists",
    ],
    technologies: "Next.js · React 19 · Tailwind v4",
    url: "https://wordlepros.vercel.app",
  },
  {
    title: "Agent Search Console",
    category: "tool",
    date: "2026",
    description:
      "Technical SEO checkers for humans and AI agents — indexability, schema, robots, sitemaps, headers, and more.",
    points: [
      "Full SEO report with section scores and prioritized action plan",
      "WebMCP tools so ChatGPT / Chrome agents can run the same diagnostics",
      "In-memory crawling — no permanent page storage",
    ],
    technologies: "Next.js · TypeScript · WebMCP",
    url: "https://agent-search-console.vercel.app",
  },
  {
    title: "Free SEO Tools",
    category: "tool",
    date: "2026",
    description:
      "Suite of free technical SEO utilities to audit, preview, and optimize web pages instantly.",
    points: [
      "Page audits and SERP-oriented optimization helpers",
      "Cheerio + Chromium-backed extraction with AI assist",
      "Supabase-backed tooling where persistence is needed",
    ],
    technologies: "Next.js · Cheerio · Chromium · OpenRouter · Supabase",
    url: "https://freeseotools-sigma.vercel.app",
  },
  {
    title: "Atandi Motors",
    category: "client",
    date: "2026",
    description:
      "Car dealership site for quality used cars and luxury imports in Nairobi.",
    points: [
      "Inventory browsing by make and body style",
      "Sourcing, services, and contact flows for showroom visits",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://atandi-motors.vercel.app",
  },
  {
    title: "Essokim Ltd",
    category: "client",
    date: "2026",
    description:
      "Corporate site for a Nairobi chemical manufacturer and supplier.",
    points: [
      "Product catalog for industrial, medical, and cleaning chemicals",
      "Local SEO for Nairobi dispatch and countrywide delivery",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://essokim.vercel.app",
  },
  {
    title: "Springboard Investment",
    category: "client",
    date: "2026",
    description:
      "Property sourcing and advisory site for verified opportunities across Kenya.",
    points: [
      "Coverage across Nairobi, Kiambu, Kajiado, Nakuru, and Mombasa",
      "Due diligence–focused positioning for buyers and investors",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://springboardke.vercel.app",
  },
  {
    title: "Petite Puppy Co.",
    category: "client",
    date: "2026",
    description:
      "Boutique puppy breeder site for Cavapoos, Mini Goldendoodles, and French Bulldogs in Greenville, SC.",
    points: [
      "Warm, conversion-focused marketing site for a US breeder",
      "Breed showcase and inquiry-oriented UX",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://lilpuppy.vercel.app",
  },
  {
    title: "Dapan Engineering",
    category: "client",
    date: "2026",
    description:
      "Consultancy site for civil and structural engineering services in Kenya.",
    points: [
      "Structural design, EIA, and project management service pages",
      "Nairobi-focused professional services branding",
    ],
    technologies: "Next.js · JavaScript",
    url: "https://dapan-engineering.vercel.app",
  },
  {
    title: "ACK St Paul's South C",
    category: "client",
    date: "2026",
    description:
      "Modern parish website for ACK St Paul's in South C, Nairobi.",
    points: [
      "Worship, community, and parish information architecture",
      "Clean church site with local SEO grounding",
    ],
    technologies: "Next.js · TypeScript · Tailwind",
    url: "https://ackstpaulssouthc.vercel.app",
  },
  {
    title: "Serenity Social Club",
    category: "client",
    date: "2026",
    description:
      "Community platform for a Nairobi social club focused on mindful living, events, and connection.",
    points: [
      "Events, activities, gallery, and contact with parallax storytelling",
      "Custom warm design system with Framer Motion",
    ],
    technologies: "Next.js 16 · Tailwind v4 · Framer Motion",
    url: "https://serenity-opal.vercel.app",
  },
]

export const currentProjectNames = [
  "ExcelBeam",
  "FitGrit AI",
  "BlitzGeo",
  "LeadLoop",
  "AstraGBP",
  "OutsideIR35",
  "Sytegy",
  "Thesis25",
] as const
