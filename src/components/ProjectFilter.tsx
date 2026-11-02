"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useCallback, useEffect } from "react"
import type { ProjectCategory } from "@content/projects"

const filters: { id: "all" | ProjectCategory; label: string }[] = [
  { id: "all", label: "all" },
  { id: "product", label: "products" },
  { id: "tool", label: "tools" },
  { id: "game", label: "games" },
]

function applyVisibility(category: "all" | ProjectCategory) {
  document.querySelectorAll<HTMLElement>("[data-project-section]").forEach((section) => {
    const sectionCategory = section.dataset.projectSection
    section.hidden = category !== "all" && sectionCategory !== category
  })
}

export default function ProjectFilter({
  counts,
}: {
  counts: Record<"all" | ProjectCategory, number>
}) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const selected = (searchParams.get("category") as ProjectCategory | null) || "all"
  const active: "all" | ProjectCategory = filters.some((filter) => filter.id === selected)
    ? selected
    : "all"

  useEffect(() => {
    applyVisibility(active)
  }, [active])

  const setCategory = useCallback(
    (id: "all" | ProjectCategory) => {
      const params = new URLSearchParams(searchParams.toString())
      if (id === "all") params.delete("category")
      else params.set("category", id)
      const query = params.toString()
      router.replace(query ? `/work?${query}` : "/work", { scroll: false })
      applyVisibility(id)
    },
    [router, searchParams]
  )

  return (
    <div className="mt-10 flex flex-wrap gap-2" role="toolbar" aria-label="Filter projects">
      {filters.map((filter) => {
        const isSelected = active === filter.id
        return (
          <button
            key={filter.id}
            type="button"
            onClick={() => setCategory(filter.id)}
            className={`rounded-full border px-4 py-1.5 font-mono text-[13px] transition-colors ${
              isSelected
                ? "border-accent bg-accent-dim text-accent"
                : "border-line text-muted hover:text-fg"
            }`}
            aria-pressed={isSelected}
          >
            {filter.label}{" "}
            <span className="text-subtle">{counts[filter.id]}</span>
          </button>
        )
      })}
    </div>
  )
}
