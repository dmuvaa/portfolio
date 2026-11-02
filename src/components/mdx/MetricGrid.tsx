import type { Metric } from "@content/projects"

export default function MetricGrid({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null

  return (
    <div className="my-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((metric) => (
        <div
          key={`${metric.label}-${metric.value}`}
          className="rounded-2xl border border-line bg-surface p-5"
        >
          <p className="text-3xl font-semibold tracking-tight">{metric.value}</p>
          <p className="mt-2 text-sm text-muted">{metric.label}</p>
          {metric.source ? (
            <p className="mt-2 font-mono text-[11px] text-subtle">{metric.source}</p>
          ) : null}
        </div>
      ))}
    </div>
  )
}
