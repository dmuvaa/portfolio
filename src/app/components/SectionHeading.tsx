interface SectionHeadingProps {
  index: string
  title: string
  description?: string
  align?: "left" | "center"
}

export default function SectionHeading({
  index,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start"

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignClass}`}>
      <p className="section-label">{index}</p>
      <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
