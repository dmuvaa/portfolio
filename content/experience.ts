export type Role = {
  title: string
  company: string
  location: string
  start: string
  end?: string
  highlights: string[]
}

export const experience: Role[] = [
  {
    title: "Junior Software Engineer",
    company: "Dencloud Technologies",
    location: "Nairobi, Kenya",
    start: "May 2024",
    end: undefined,
    highlights: [
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
    start: "July 2022",
    end: "April 2024",
    highlights: [
      "Created and maintained comprehensive documentation, improving user comprehension by 30%",
      "Developed SEO guidelines, increasing organic traffic by 35% within six months",
      "Produced 200+ blog articles, boosting website traffic by 400%",
    ],
  },
  {
    title: "Content Writer & SEO Manager",
    company: "Hidden Lemur - Travel Media Company",
    location: "San Francisco (Remote)",
    start: "Feb 2021",
    end: "Sep 2022",
    // TODO(dennis): reconcile with /technical-writing (over 100 articles / 150% traffic)
    highlights: [
      "Boosted organic search traffic by 335% through targeted keyword research using Ahrefs",
      "Achieved 200% increase in organic search rankings and 25% uplift in website traffic",
      "Directed content teams to produce 850+ high-quality articles, reducing publishing timelines by 60%",
    ],
  },
]

export function formatRoleDates(role: Role) {
  return role.end ? `${role.start} - ${role.end}` : `${role.start} - Present`
}
