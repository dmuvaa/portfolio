export default function ArchitectureDiagram({
  nodes = [],
  edges = [],
}: {
  nodes?: string[]
  edges?: string[]
}) {
  const nodeList = Array.isArray(nodes) ? nodes : []
  const edgeList = Array.isArray(edges) ? edges : []

  return (
    <div className="my-8 overflow-hidden rounded-2xl border border-line bg-surface p-6">
      <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-subtle">
        architecture
      </p>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        {nodeList.map((node, index) => (
          <div key={node} className="flex items-center gap-3">
            <span className="rounded-xl border border-line bg-surface-2 px-3 py-2 font-mono text-xs text-fg">
              {node}
            </span>
            {index < nodeList.length - 1 ? (
              <span className="font-mono text-accent">→</span>
            ) : null}
          </div>
        ))}
      </div>
      {edgeList.length ? (
        <ul className="mt-5 space-y-2 border-t border-line pt-4">
          {edgeList.map((edge) => (
            <li key={edge} className="font-mono text-xs text-muted">
              {edge}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
