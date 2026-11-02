export default function SectionLabel({
  n,
  text,
  className = "",
}: {
  n: string
  text: string
  className?: string
}) {
  return (
    <p
      className={`font-mono text-[12px] uppercase tracking-[0.18em] text-accent ${className}`}
    >
      <span className="text-subtle">{n} /</span> {text}
    </p>
  )
}
