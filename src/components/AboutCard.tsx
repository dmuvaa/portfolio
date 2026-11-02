import Image from "next/image"
import Link from "next/link"
import { experience, formatRoleDates } from "@content/experience"
import { site } from "@content/site"
import SectionLabel from "@/components/SectionLabel"

export default function AboutCard() {
  return (
    <div className="rounded-2xl border border-line bg-surface p-8">
      <SectionLabel n="05" text="about" className="text-accent" />
      <div className="mt-6 flex flex-col items-start gap-5 sm:flex-row">
        <Image
          src="/profile.jpg"
          alt={site.name}
          width={96}
          height={96}
          className="size-24 shrink-0 rounded-xl object-cover object-top ring-1 ring-line"
        />
        <p className="text-lg leading-relaxed text-muted">
          I started as a technical writer, moved into SEO, then trained as a
          software engineer at ALX. Today I build backend-heavy products and
          still write about how they work. Outside work: 7-a-side football,
          go-karting, and Formula 1.
        </p>
      </div>
      <ol className="mt-8 space-y-0 border-l border-line">
        {experience.map((role, index) => (
          <li key={`${role.company}-${role.title}`} className="relative pb-5 pl-6 last:pb-0">
            <span
              className={`absolute -left-[5px] top-2 size-2.5 rounded-full ${
                index === 0 ? "bg-accent" : "bg-line-2"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <p className="font-semibold">
                {role.title}{" "}
                <span className="font-normal text-muted">· {role.company}</span>
              </p>
              <p className="font-mono text-[12px] text-subtle">
                {formatRoleDates(role)}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {site.resumeUrl ? (
        <Link
          href={site.resumeUrl}
          className="mt-7 inline-block font-mono text-sm text-accent hover:underline"
          target="_blank"
          rel="noopener"
        >
          full story + resume ↗
        </Link>
      ) : (
        <Link
          href="/about"
          className="mt-7 inline-block font-mono text-sm text-accent hover:underline"
        >
          full story →
        </Link>
      )}
    </div>
  )
}
