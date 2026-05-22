import Link from "next/link"
import { site } from "@/lib/site"

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-6">
        <p className="font-mono text-xs text-muted">
          <span className="text-accent">$</span> echo &quot;© {new Date().getFullYear()} {site.name}&quot;
        </p>
        <div className="flex flex-wrap gap-4 font-mono text-xs">
          <Link href={site.links.github} className="text-muted transition-colors hover:text-accent">
            github
          </Link>
          <Link href={site.links.linkedin} className="text-muted transition-colors hover:text-accent">
            linkedin
          </Link>
          <Link href={site.links.blog} className="text-muted transition-colors hover:text-accent">
            blog
          </Link>
        </div>
      </div>
    </footer>
  )
}
