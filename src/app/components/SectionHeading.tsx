import SectionLabel from "@/components/SectionLabel"

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
  const alignClass =
    align === "center" ? "text-center items-center" : "text-left items-start"

  return (
    <div className={`mb-10 flex flex-col gap-3 ${alignClass}`}>
      <SectionLabel n={index} text={title.toLowerCase()} />
      <h2 className="heading-section font-medium text-fg">{title}</h2>
      {description ? (
        <p className="max-w-2xl text-base leading-relaxed text-muted md:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  )
}
