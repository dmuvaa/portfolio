import { featuredProjects } from "@content/projects"

export default function TerminalCard() {
  const shipping = featuredProjects()
    .slice(0, 3)
    .map((project) => project.name)

  return (
    <div className="min-w-0 rounded-2xl border border-line bg-surface/90 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-1.5 border-b border-line px-4 py-3">
        <span className="inline-block size-[9px] rounded-full bg-[#ff5f57]/70" />
        <span className="inline-block size-[9px] rounded-full bg-[#febc2e]/70" />
        <span className="inline-block size-[9px] rounded-full bg-[#28c840]/70" />
        <span className="ml-3 font-mono text-[12px] text-subtle">
          dennis@nairobi: ~
        </span>
      </div>
      <pre className="overflow-x-auto whitespace-pre-wrap break-words p-5 font-mono text-[11px] leading-7 text-muted sm:text-[13px]">
        <span className="text-accent">$</span> cat profile.json
        {"\n"}
        {"{\n"}
        {`  `}
        <span className="text-fg">&quot;role&quot;</span>
        {`: `}
        <span className="text-accent">
          &quot;Software engineer + technical writer&quot;
        </span>
        {`,\n`}
        {`  `}
        <span className="text-fg">&quot;focus&quot;</span>
        {`: [`}
        <span className="text-accent">&quot;APIs&quot;</span>
        {`, `}
        <span className="text-accent">&quot;Next.js&quot;</span>
        {`, `}
        <span className="text-accent">&quot;technical SEO&quot;</span>
        {`, `}
        <span className="text-accent">&quot;docs&quot;</span>
        {`],\n`}
        {`  `}
        <span className="text-fg">&quot;stack&quot;</span>
        {`: [`}
        <span className="text-accent">&quot;TypeScript&quot;</span>
        {`, `}
        <span className="text-accent">&quot;Node&quot;</span>
        {`, `}
        <span className="text-accent">&quot;Python&quot;</span>
        {`, `}
        <span className="text-accent">&quot;Supabase&quot;</span>
        {`],\n`}
        {`  `}
        <span className="text-fg">&quot;shipping&quot;</span>
        {`: [`}
        {shipping.map((name, index) => (
          <span key={name}>
            {index > 0 ? ", " : null}
            <span className="text-accent">&quot;{name}&quot;</span>
          </span>
        ))}
        {`],\n`}
        {`  `}
        <span className="text-fg">&quot;based&quot;</span>
        {`: `}
        <span className="text-accent">&quot;Nairobi, KE (EAT, UTC+3)&quot;</span>
        {"\n"}
        {"}"}
        {"\n"}
        <span className="text-accent">$</span>{" "}
        <span
          aria-hidden="true"
          className="inline-block h-[1.05em] w-[0.6ch] translate-y-px bg-accent animate-blink align-[-0.15em]"
        />
      </pre>
    </div>
  )
}
