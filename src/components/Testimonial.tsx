import Image from "next/image"
import type { Testimonial as TestimonialType } from "@content/testimonials"

export default function Testimonial({
  testimonial,
}: {
  testimonial: TestimonialType
}) {
  return (
    <figure className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-8">
      <div>
        <p className="font-mono text-[12px] text-subtle">{"// testimonial"}</p>
        <svg
          className="mt-6 text-accent"
          width="34"
          height="26"
          viewBox="0 0 34 26"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M0 26V15C0 6.7 4.6 1.6 13 0l1.6 3.6C9.7 5.2 7.4 8.2 7.2 12H13v14H0Zm20 0V15c0-8.3 4.6-13.4 13-15l1.6 3.6C29.7 5.2 27.4 8.2 27.2 12H33v14H20Z" />
        </svg>
        <blockquote className="mt-6 text-2xl font-medium leading-snug text-muted">
          “{testimonial.quote}”
        </blockquote>
      </div>
      <figcaption className="mt-8 flex items-center gap-4">
        {testimonial.avatar ? (
          <Image
            src={testimonial.avatar}
            alt=""
            width={48}
            height={48}
            className="size-12 rounded-full object-cover"
          />
        ) : (
          <div className="size-12 rounded-full border border-line bg-surface-2" />
        )}
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="mt-1 text-sm text-muted">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </figcaption>
    </figure>
  )
}
