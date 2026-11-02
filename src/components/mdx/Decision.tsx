export default function Decision({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="my-4 rounded-2xl border border-line bg-surface p-5">
      <h3 className="text-lg font-semibold tracking-tight text-fg">{title}</h3>
      <div className="mt-3 text-[17px] leading-[1.8] text-muted">{children}</div>
    </div>
  )
}
