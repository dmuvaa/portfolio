import type { Metric } from "./projects"
import { gameCount, projectCount } from "./projects"

export const headlineMetrics: Metric[] = [
  {
    value: String(projectCount()),
    label: "builds shipped",
    source: "Products, SEO tools, and browser games",
  },
  {
    value: "200+",
    label: "technical articles",
    source: "Cloud Infrastructure Services, 2022 to 2024",
  },
  {
    value: "335%",
    label: "organic traffic growth",
    source: "Hidden Lemur, keyword research in Ahrefs",
  },
  {
    value: String(gameCount()),
    label: "browser games",
    source: "Maps, Wikipedia hops, and word puzzles",
  },
]
