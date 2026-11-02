export default function ServiceCard({
  n,
  cmd,
  title,
  description,
  items,
  stack,
}: {
  n: string
  cmd: string
  title: string
  description: string
  items: string[]
  stack: string[]
}) {
  return (
    <div className="rounded-2xl border border-line bg-bg p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[12px] text-accent">{n}</span>
        <span className="font-mono text-[12px] text-subtle">{cmd}</span>
      </div>
      <h3 className="mt-6 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-3 leading-relaxed text-muted">{description}</p>
      <ul className="mt-6 space-y-2.5 text-[15px]">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="font-mono text-accent">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 border-t border-line pt-5">
        <ul className="flex flex-wrap gap-1.5">
          {stack.map((item) => (
            <li
              key={item}
              className="rounded border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
