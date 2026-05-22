"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navItems, site } from "@/lib/site"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 md:px-6">
        <Link
          href="/"
          className="group flex items-center gap-2 font-mono text-sm text-foreground"
        >
          <span className="text-accent">~</span>
          <span>{site.handle}</span>
          <span className="text-muted transition-colors group-hover:text-accent">/</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex items-center gap-2 px-3 py-1.5 font-mono text-xs text-muted transition-colors hover:text-foreground"
            >
              <span className="text-accent-muted transition-colors group-hover:text-accent">
                {item.index}
              </span>
              {item.label}
            </Link>
          ))}
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className="size-9 text-muted hover:bg-surface hover:text-foreground"
            >
              <Menu className="size-4" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[280px] border-border bg-background"
          >
            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 border border-transparent px-3 py-3 font-mono text-sm text-muted transition-colors hover:border-border hover:bg-surface hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-accent">{item.index}</span>
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
