import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react"
import PageShell from "../components/PageShell"
import SectionLabel from "@/components/SectionLabel"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Hire Dennis Muvaa for backend engineering, technical SEO, or technical writing. Email, WhatsApp, or LinkedIn.",
  alternates: { canonical: "/contact" },
}

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+254 728 921 448",
    href: site.whatsapp,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Dennis Muvaa",
    href: site.linkedin,
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-5 py-16 md:px-8 md:py-24">
        <SectionLabel n="00" text="contact" />
        <h1 className="mt-4 heading-section font-semibold text-fg">Contact</h1>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          Reach out for engineering work, writing collaborations, or just to say
          hello.
        </p>

        <div className="mt-10 panel divide-y divide-line">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 p-6">
              <div className="flex size-10 items-center justify-center rounded-xl border border-line bg-surface-2">
                <Icon className="size-4 text-accent" />
              </div>
              <div>
                <p className="meta">{label.toLowerCase()}</p>
                <Link
                  href={href}
                  className="mt-1 block text-sm text-fg transition-colors hover:text-accent"
                  rel={href.startsWith("http") ? "noopener" : undefined}
                  target={href.startsWith("http") ? "_blank" : undefined}
                >
                  {value}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-muted">Prefer social?</p>
          <Link href={site.linkedin} className="link-arrow justify-center" rel="noopener" target="_blank">
            connect on linkedin
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
