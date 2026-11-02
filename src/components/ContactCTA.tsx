import Link from "next/link"
import { site } from "@content/site"

export default function ContactCTA() {
  return (
    <section id="contact" className="mx-auto max-w-[1200px] px-5 pb-16 md:px-8 md:pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-accent/30 bg-surface px-6 py-14 md:px-14 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          aria-hidden="true"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end">
          <div>
            <p className="font-mono text-sm text-muted">
              <span className="text-accent">$</span> ./contact --now
            </p>
            <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] md:text-[56px]">
              Have a product to build or a site that should rank?
            </h2>
            <p className="mt-5 max-w-xl text-lg text-muted">
              Tell me what you are working on.
              {site.responseTime ? ` I reply within ${site.responseTime}.` : null}
              {site.availability ? ` ${site.availability}.` : null}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href={`mailto:${site.email}`}
              className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 font-semibold text-on-accent transition-opacity hover:opacity-90"
              aria-label={`Email ${site.email}`}
            >
              <span>{site.email}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link
              href={site.whatsapp}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between rounded-xl border border-line-2 bg-bg px-5 py-4 transition-colors hover:border-accent/60"
              aria-label="Message Dennis Muvaa on WhatsApp"
            >
              <span>
                <span className="mr-3 font-mono text-[12px] text-subtle">
                  whatsapp
                </span>
                +254 728 921 448
              </span>
              <span className="text-muted" aria-hidden="true">
                ↗
              </span>
            </Link>
            <Link
              href={site.linkedin}
              target="_blank"
              rel="noopener"
              className="flex items-center justify-between rounded-xl border border-line-2 bg-bg px-5 py-4 transition-colors hover:border-accent/60"
              aria-label="Dennis Muvaa on LinkedIn"
            >
              <span>
                <span className="mr-3 font-mono text-[12px] text-subtle">
                  linkedin
                </span>
                Dennis Muvaa
              </span>
              <span className="text-muted" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
