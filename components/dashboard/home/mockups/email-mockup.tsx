export function EmailMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0c12] shadow-2xl">
        <div className="border-b border-white/[0.06] bg-[#111218] px-2.5 py-2">
          <div className="mb-1 flex items-center gap-1.5">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#7C5CFF]" />
            <div>
              <div className="h-1.5 w-20 rounded bg-white/60" />
              <div className="mt-0.5 h-1 w-14 rounded bg-white/20" />
            </div>
          </div>
          <div className="h-1.5 w-3/4 rounded bg-white/40" />
        </div>
        <div className="space-y-1.5 p-2.5">
          <div className="h-1 w-full rounded bg-white/15" />
          <div className="h-1 w-full rounded bg-white/10" />
          <div className="h-1 w-4/5 rounded bg-white/10" />
          <div className="my-1.5 h-8 rounded bg-gradient-to-r from-[#7C5CFF]/20 to-[#3B82F6]/10" />
          <div className="h-1 w-full rounded bg-white/10" />
          <div className="h-1 w-2/3 rounded bg-white/10" />
          <div className="mt-2 h-4 w-20 rounded bg-gradient-to-r from-[#7C5CFF] to-[#8B5CF6]" />
        </div>
      </div>
    </div>
  );
}
