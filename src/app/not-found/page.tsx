import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import PageShell from "../components/PageShell"

export default function NotFound() {
  return (
    <PageShell>
      <div className="mx-auto flex max-w-5xl flex-col items-start px-4 py-24 md:px-6 md:py-32">
        <p className="section-label">error 404</p>
        <h1 className="mt-4 font-mono text-6xl text-accent md:text-8xl">404</h1>
        <h2 className="mt-4 text-2xl font-medium text-foreground">Page not found</h2>
        <p className="mt-3 max-w-md text-muted">
          The route you requested doesn&apos;t exist or has moved.
        </p>
        <Link href="/" className="link-arrow mt-10">
          return home
          <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </PageShell>
  )
}
