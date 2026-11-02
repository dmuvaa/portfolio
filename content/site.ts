export const site = {
  name: "Dennis Muvaa",
  handle: "dmuvaa",
  url: "https://portfolio-chi-three-20.vercel.app", // swap for custom domain later
  role: "Software engineer and technical SEO",
  location: "Nairobi, Kenya",
  email: "dmuvaa70@gmail.com",
  whatsapp: "https://wa.me/254728921448", // fixed: the old link was missing 254
  linkedin: "https://www.linkedin.com/in/dennis-muvaa-76b84416b",
  github: "https://github.com/dmuvaa",
  blog: "https://www.techlivened.com",
  availability: undefined as string | undefined, // I will fill this in, hide UI if undefined
  responseTime: undefined as string | undefined,
  resumeUrl: undefined as string | undefined,
}

export const navItems = [
  { href: "/work", label: "work", index: "01" },
  { href: "/#services", label: "services", index: "02" },
  { href: "/technical-writing", label: "writing", index: "03" },
  { href: "/about", label: "about", index: "04" },
] as const
