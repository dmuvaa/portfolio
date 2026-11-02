"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Container from "@/components/Container"
import ThemeToggle from "@/components/ThemeToggle"
import { navItems, site } from "@content/site"

export default function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header sticky top-0 z-50 border-b border-line/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between gap-4 md:h-16">
        <Link
          href="/"
          className="group flex items-center gap-1 font-mono text-sm text-fg"
        >
          <span className="text-subtle">~/</span>
          <span>{site.handle}</span>
          <span
            aria-hidden="true"
            className="ml-0.5 inline-block h-4 w-2 translate-y-px bg-accent animate-blink"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] text-subtle transition-colors hover:text-fg"
            >
              <span className="text-accent/55 transition-colors group-hover:text-accent">
                {item.index}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {site.availability ? (
            <p className="hidden items-center gap-2 font-mono text-xs text-subtle lg:flex">
              <span
                aria-hidden="true"
                className="size-1.5 rounded-full bg-accent"
              />
              {site.availability}
            </p>
          ) : null}

          <ThemeToggle />

          <Link
            href="/#contact"
            className="hidden rounded-full bg-accent px-4 py-2 font-mono text-xs font-medium text-on-accent transition-opacity hover:opacity-90 sm:inline-flex"
          >
            hire me
          </Link>

          <button
            type="button"
            className="inline-flex size-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-2 hover:text-fg md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </Container>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-line bg-bg md:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 rounded-xl border border-transparent px-3 py-3 font-mono text-sm text-muted transition-colors hover:border-line hover:bg-surface hover:text-fg"
                onClick={() => setOpen(false)}
              >
                <span className="text-accent">{item.index}</span>
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="mt-2 rounded-full bg-accent px-4 py-3 text-center font-mono text-sm font-medium text-on-accent"
              onClick={() => setOpen(false)}
            >
              hire me
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
