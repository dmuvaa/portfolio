export default function Callout({
  children,
  title,
}: {
  children: React.ReactNode
  title?: string
}) {
  return (
    <aside className="my-8 rounded-2xl border border-accent/30 bg-accent-dim/30 p-5">
      {title ? (
        <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-accent">
          {title}
        </p>
      ) : null}
      <div className="mt-3 text-[17px] leading-[1.8] text-muted">{children}</div>
    </aside>
  )
}
