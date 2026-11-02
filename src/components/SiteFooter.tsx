import Link from "next/link"
import Container from "@/components/Container"
import { site } from "@content/site"

export default function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="font-mono text-xs text-subtle">
          <span className="text-accent">$</span> echo &quot;© {year} {site.name}{" "}
          · {site.location}&quot;
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-xs">
          <Link
            href={site.github}
            className="text-subtle transition-colors hover:text-accent"
            rel="noopener"
            target="_blank"
            aria-label="Dennis Muvaa on GitHub"
          >
            github
          </Link>
          <Link
            href={site.linkedin}
            className="text-subtle transition-colors hover:text-accent"
            rel="noopener"
            target="_blank"
            aria-label="Dennis Muvaa on LinkedIn"
          >
            linkedin
          </Link>
          <Link
            href={site.blog}
            className="text-subtle transition-colors hover:text-accent"
            rel="noopener"
            target="_blank"
            aria-label="Dennis Muvaa blog on Techlivened"
          >
            blog
          </Link>
          <Link
            href={`mailto:${site.email}`}
            className="text-subtle transition-colors hover:text-accent"
            aria-label={`Email ${site.email}`}
          >
            email
          </Link>
        </div>
      </Container>
    </footer>
  )
}
