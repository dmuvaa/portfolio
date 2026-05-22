import Header from "./Header"
import Footer from "./Footer"

export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={`flex min-h-screen flex-col ${className}`}>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
