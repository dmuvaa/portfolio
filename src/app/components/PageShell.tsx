import SiteFooter from "@/components/SiteFooter"
import SiteHeader from "@/components/SiteHeader"

export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`relative flex min-h-screen flex-col ${className}`}>
      <div className="pointer-events-none absolute inset-0 grid-bg" aria-hidden="true" />
      <SiteHeader />
      <main id="main" className="relative flex-1">
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
