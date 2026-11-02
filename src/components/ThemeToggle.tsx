"use client"

import { Moon, Sun } from "lucide-react"
import { useSyncExternalStore } from "react"

type Theme = "dark" | "light"

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange)
  window.addEventListener("theme-change", onStoreChange)
  const media = window.matchMedia("(prefers-color-scheme: light)")
  media.addEventListener("change", onStoreChange)
  return () => {
    window.removeEventListener("storage", onStoreChange)
    window.removeEventListener("theme-change", onStoreChange)
    media.removeEventListener("change", onStoreChange)
  }
}

function resolveTheme(): Theme {
  const stored = window.localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark"
}

function getServerSnapshot(): Theme {
  return "dark"
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("light", theme === "light")
  root.classList.toggle("dark", theme === "dark")
  root.style.colorScheme = theme
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, resolveTheme, getServerSnapshot)

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark"
    applyTheme(next)
    window.localStorage.setItem("theme", next)
    window.dispatchEvent(new Event("theme-change"))
  }

  const isDark = theme === "dark"

  return (
    <button
      type="button"
      onClick={toggle}
      className="inline-flex size-9 items-center justify-center rounded-md border border-line bg-surface text-muted transition-colors hover:border-line-2 hover:bg-surface-2 hover:text-fg"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  )
}
