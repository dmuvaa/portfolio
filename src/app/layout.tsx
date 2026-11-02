import type { Metadata } from "next"
import { JetBrains_Mono, Space_Grotesk } from "next/font/google"
import JsonLd from "@/components/JsonLd"
import { site } from "@content/site"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Dennis Muvaa · Software Engineer & Technical SEO in Nairobi",
    template: "%s · Dennis Muvaa",
  },
  description:
    "Backend-leaning full-stack engineer in Nairobi building fast, search-ready Next.js and AI products, with technical SEO and technical writing.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Dennis Muvaa",
    locale: "en_KE",
    url: "/",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  image: `${site.url}/profile.jpg`,
  jobTitle: "Software Engineer",
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  sameAs: [site.linkedin, site.github, site.blog],
  knowsAbout: [
    "Next.js",
    "Node.js",
    "Python",
    "Technical SEO",
    "Technical writing",
    "Supabase",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");d.classList.toggle("light",t==="light");d.classList.toggle("dark",t==="dark");d.style.colorScheme=t;}catch(e){}})()`,
          }}
        />
        <JsonLd data={[personJsonLd, websiteJsonLd]} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
