export function BrandKitMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0c12] p-2.5 shadow-2xl">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#EC4899] text-[8px] font-bold text-white">
            GF
          </div>
          <div>
            <div className="h-1.5 w-14 rounded bg-white/70" />
            <div className="mt-0.5 h-1 w-10 rounded bg-white/25" />
          </div>
        </div>
        <div className="mb-2 flex gap-1">
          {["#7C5CFF", "#EC4899", "#3B82F6", "#111218"].map((color) => (
            <div
              key={color}
              className="h-4 flex-1 rounded"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="space-y-1">
          <div className="h-2 w-full rounded bg-white/80" />
          <div className="h-1.5 w-3/4 rounded bg-white/30" />
          <div className="h-1.5 w-1/2 rounded bg-white/20" />
        </div>
        <div className="mt-2 rounded border border-white/[0.06] bg-white/[0.02] p-1.5">
          <div className="text-[6px] text-zinc-500">Tone</div>
          <div className="mt-0.5 text-[7px] text-zinc-300">Motivating · Friendly · Expert</div>
        </div>
      </div>
    </div>
  );
}
