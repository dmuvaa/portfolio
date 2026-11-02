import type { Thing, WithContext } from "schema-dts"

type JsonLdData =
  | WithContext<Thing>
  | WithContext<Thing>[]
  | Record<string, unknown>
  | Record<string, unknown>[]

export default function JsonLd({ data }: { data: JsonLdData }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
