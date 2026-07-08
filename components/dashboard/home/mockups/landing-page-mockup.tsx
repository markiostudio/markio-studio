export function LandingPageMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0c12] shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#111218] px-2.5 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <div className="mx-auto h-3 w-20 rounded bg-white/[0.06]" />
        </div>
        <div className="relative bg-gradient-to-b from-[#1a1033] to-[#0c0c12] p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="h-2 w-8 rounded bg-[#7C5CFF]/60" />
            <div className="flex gap-1">
              <div className="h-1.5 w-6 rounded bg-white/10" />
              <div className="h-1.5 w-6 rounded bg-white/10" />
              <div className="h-1.5 w-6 rounded bg-white/10" />
            </div>
          </div>
          <div className="rounded-md bg-white/[0.04] p-2.5">
            <div className="mb-1.5 h-2 w-3/4 rounded bg-white/90" />
            <div className="mb-1 h-1 w-full rounded bg-white/20" />
            <div className="mb-2 h-1 w-2/3 rounded bg-white/15" />
            <div className="flex gap-1.5">
              <div className="h-4 w-14 rounded bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6]" />
              <div className="h-4 w-10 rounded border border-white/10" />
            </div>
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded bg-white/[0.03] p-1.5">
                <div className="mb-1 h-4 rounded bg-gradient-to-br from-[#7C5CFF]/20 to-[#EC4899]/10" />
                <div className="h-1 w-full rounded bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
