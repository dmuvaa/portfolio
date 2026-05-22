import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { site } from "@/lib/site"

interface HeroProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export default function Hero({ title, description, buttonText, buttonLink }: HeroProps) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-3xl">
          <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-accent">
            <span className="text-muted">&gt;</span> whoami
            <span className="ml-1 inline-block h-4 w-2 animate-blink bg-accent align-middle" />
          </p>

          <h1 className="text-4xl font-medium tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            {title}
          </h1>

          <p className="mt-4 font-mono text-sm text-accent">{site.tagline}</p>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>

          <Link href={buttonLink} className="link-arrow mt-10">
            {buttonText}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
