export function AdMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-lg border border-white/10 bg-[#0c0c12] shadow-2xl">
        <div className="flex items-center gap-1.5 border-b border-white/[0.06] bg-[#111218] px-2.5 py-1.5">
          <div className="h-3 w-3 rounded-full bg-gradient-to-br from-[#EC4899] to-[#F97316]" />
          <span className="text-[7px] font-medium text-zinc-500">Instagram · Sponsored</span>
        </div>
        <div className="relative aspect-[4/3] bg-gradient-to-br from-[#2d1b69] via-[#1e1145] to-[#0c0c12]">
          <div className="absolute inset-0 flex items-end p-2">
            <div className="w-full rounded bg-black/40 p-2 backdrop-blur-sm">
              <div className="mb-1 h-1.5 w-2/3 rounded bg-white/80" />
              <div className="h-1 w-1/2 rounded bg-white/30" />
            </div>
          </div>
          <div className="absolute right-2 top-2 rounded bg-[#7C5CFF] px-1.5 py-0.5 text-[6px] font-bold text-white">
            AD
          </div>
        </div>
        <div className="border-t border-white/[0.06] p-2">
          <div className="mb-1.5 flex items-center gap-1">
            <div className="h-4 w-4 rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#EC4899]" />
            <div className="h-1.5 w-16 rounded bg-white/20" />
          </div>
          <div className="h-5 w-full rounded bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6]" />
        </div>
      </div>
    </div>
  );
}
