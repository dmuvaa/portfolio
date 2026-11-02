export type Article = {
  title: string
  url: string
  publication: string
  topic: string
  summary: string
  date?: string
  featured?: boolean
  broken?: boolean
}

export const articles: Article[] = [
  {
    title: "Server-Side Rendering in Next.js for SEO",
    // TODO(dennis): fix URL
    url: "https://www.techlivened.com/server-side-rendering-in-nextjs-for-seo",
    publication: "Techlivened",
    topic: "Next.js / SEO",
    summary:
      "Explore the benefits of SSR in Next.js and its impact on SEO performance.",
    featured: true,
    broken: true,
  },
  {
    title: "React Hooks Explained",
    // TODO(dennis): fix URL
    url: "https://www.techlivened.com/react-hooks-explained",
    publication: "Techlivened",
    topic: "React",
    summary:
      "A comprehensive guide to understanding and using React Hooks effectively.",
    featured: true,
    broken: true,
  },
  {
    title: "Microsoft Remote Desktop Services Security Best Practices",
    url: "https://cloudinfrastructureservices.co.uk/microsoft-remote-desktop-services-security-best-practices/",
    publication: "Cloud Infrastructure Services",
    topic: "Security",
    summary:
      "Learn how to secure your Remote Desktop Services environment effectively.",
    featured: true,
  },
  {
    title: "Implementing Caching in Node.js",
    // TODO(dennis): fix URL
    url: "https://www.techlivened.com/implementing-caching-in-node-js",
    publication: "Techlivened",
    topic: "Node.js",
    summary:
      "Discover techniques to improve Node.js application performance through caching.",
    featured: true,
    broken: true,
  },
  {
    title: "NumPy vs Pandas in 2024",
    // TODO(dennis): fix URL
    url: "https://www.techlivened.com/numpy-vs-pandas-in-2024",
    publication: "Techlivened",
    topic: "Python",
    summary:
      "A comparison of two popular Python libraries for data manipulation and analysis.",
    broken: true,
  },
  {
    title: "Best AI Tools to Generate Images",
    // TODO(dennis): fix URL
    url: "https://www.techlivened.com/best-ai-tools-to-generate-images",
    publication: "Techlivened",
    topic: "AI",
    summary:
      "An overview of the top AI-powered image generation tools available in the market.",
    broken: true,
  },
  {
    title:
      "GitLab Integration: Integrating GitLab with Other Tools and Services",
    url: "https://cloudinfrastructureservices.co.uk/gitlab-integration-integrating-gitlab-with-other-tools-and-services/",
    publication: "Cloud Infrastructure Services",
    topic: "DevOps",
    summary:
      "Learn how to integrate GitLab with various development tools and services.",
    featured: true,
  },
]

export const featuredArticles = () =>
  articles.filter((article) => article.featured && !article.broken)

export const liveArticles = () => articles.filter((article) => !article.broken)
