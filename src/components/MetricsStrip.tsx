import type { Metric } from "@content/projects"
import Container from "@/components/Container"

export default function MetricsStrip({ metrics }: { metrics: Metric[] }) {
  if (!metrics.length) return null

  return (
    <section aria-label="Results" className="border-b border-line bg-surface/40">
      <Container className="grid grid-cols-2 lg:grid-cols-4 !px-0 md:!px-0">
        {metrics.map((metric, index) => (
          <div
            key={`${metric.label}-${metric.value}`}
            className={[
              "px-5 py-9 md:px-8",
              index % 2 === 1 ? "border-l border-line" : "",
              index >= 2 ? "border-t border-line lg:border-t-0" : "",
              index >= 1 ? "lg:border-l lg:border-line" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <p className="text-4xl font-semibold tracking-tight md:text-5xl">
              {metric.value}
            </p>
            <p className="mt-2 font-medium">{metric.label}</p>
            {metric.source ? (
              <p className="mt-1 font-mono text-[12px] leading-5 text-subtle">
                {metric.source}
              </p>
            ) : null}
          </div>
        ))}
      </Container>
    </section>
  )
}
