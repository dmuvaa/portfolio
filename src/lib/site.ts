export const site = {
  name: "Dennis Muvaa",
  handle: "dmuvaa",
  tagline: "Software engineer · technical writer",
  email: "dmuvaa70@gmail.com",
  phone: "+254 728921448",
  links: {
    linkedin: "https://www.linkedin.com/in/dennis-muvaa-76b84416b",
    github: "https://github.com/dmuvaa",
    blog: "https://www.techlivened.com",
  },
} as const

export const navItems = [
  { href: "/software-engineering", label: "Engineering", index: "01" },
  { href: "/technical-writing", label: "Writing", index: "02" },
  { href: "/about", label: "About", index: "03" },
  { href: "/contact", label: "Contact", index: "04" },
] as const
