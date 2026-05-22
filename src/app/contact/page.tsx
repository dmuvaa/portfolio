import Link from "next/link"
import { ArrowUpRight, Linkedin, Mail, Phone } from "lucide-react"
import PageShell from "../components/PageShell"
import SectionHeading from "../components/SectionHeading"
import { site } from "@/lib/site"

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
    value: site.phone,
    href: "https://wa.me/728921448",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/dennismuvaa",
    href: site.links.linkedin,
  },
]

export default function ContactPage() {
  return (
    <PageShell>
      <div className="mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-20">
        <SectionHeading
          index="00"
          title="Contact"
          description="Reach out for engineering work, writing collaborations, or just to say hello."
        />

        <div className="panel divide-y divide-border">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-4 p-6">
              <div className="flex size-10 items-center justify-center border border-border bg-surface-hover">
                <Icon className="size-4 text-accent" />
              </div>
              <div>
                <p className="meta">{label.toLowerCase()}</p>
                <Link
                  href={href}
                  className="mt-1 block text-sm text-foreground transition-colors hover:text-accent"
                >
                  {value}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-sm text-muted">Prefer social?</p>
          <Link
            href={site.links.linkedin}
            className="link-arrow justify-center"
          >
            connect on linkedin
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </PageShell>
  )
}
