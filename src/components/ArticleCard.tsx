import Link from "next/link"
import type { Article } from "@content/writing"

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener"
      className="group flex flex-col rounded-2xl border border-line bg-bg p-7 transition-colors hover:border-accent/50"
      aria-label={`Read ${article.title} on ${article.publication}`}
    >
      <p className="font-mono text-[12px] text-subtle">
        {article.publication.toLowerCase()} · {article.topic}
      </p>
      <h3 className="mt-4 text-xl font-semibold leading-snug tracking-tight transition-colors group-hover:text-accent">
        {article.title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-muted">{article.summary}</p>
      <p className="mt-6 flex items-center justify-between font-mono text-[12px]">
        <span className="text-accent">read article ↗</span>
        {article.date ? <span className="text-subtle">{article.date}</span> : null}
      </p>
    </Link>
  )
}
