export function DashboardPreview() {
  const bars = [40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88];

  return (
    <div className="relative animate-fade-in-up animation-delay-300 opacity-0">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-[#7C3AED]/20 via-[#4F46E5]/10 to-[#7C3AED]/20 blur-2xl animate-pulse-glow" />

      <div className="relative animate-float">
        <div className="overflow-hidden rounded-2xl glass-strong shadow-2xl shadow-black/50">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-3 w-3 rounded-full bg-red-500/80" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <div className="h-3 w-3 rounded-full bg-green-500/80" />
            </div>
            <div className="mx-auto flex h-6 w-48 items-center justify-center rounded-md bg-white/5 px-3">
              <span className="text-[10px] text-zinc-500">app.markio.studio/dashboard</span>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-zinc-500">Overview</p>
                <p className="text-lg font-semibold text-white">Campaign Analytics</p>
              </div>
              <div className="rounded-lg bg-[#7C3AED]/20 px-3 py-1.5 text-xs font-medium text-[#A78BFA]">
                Live
              </div>
            </div>

            <div className="mb-5 grid grid-cols-3 gap-3">
              {[
                { label: "Impressions", value: "284K", change: "+12.5%" },
                { label: "Clicks", value: "18.2K", change: "+8.3%" },
                { label: "Conversions", value: "1,429", change: "+24.1%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl bg-white/[0.03] p-3 ring-1 ring-white/5"
                >
                  <p className="text-[10px] text-zinc-500">{stat.label}</p>
                  <p className="mt-0.5 text-sm font-semibold text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[10px] font-medium text-emerald-400">{stat.change}</p>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-white/[0.02] p-4 ring-1 ring-white/5">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-medium text-zinc-400">Performance</p>
                <p className="text-[10px] text-zinc-600">Last 30 days</p>
              </div>
              <div className="flex h-24 items-end gap-1.5">
                {bars.map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-[#7C3AED] to-[#A78BFA]/60 transition-all duration-300"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {[
                { name: "Summer Sale UTM", status: "Active", pct: 78 },
                { name: "WhatsApp Blast #4", status: "Running", pct: 62 },
                { name: "Google Ads — Q2", status: "Paused", pct: 45 },
              ].map((campaign) => (
                <div
                  key={campaign.name}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-3 py-2.5 ring-1 ring-white/5"
                >
                  <div className="h-2 w-2 rounded-full bg-[#7C3AED]" />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-xs text-zinc-300">{campaign.name}</p>
                  </div>
                  <span className="text-[10px] text-zinc-500">{campaign.status}</span>
                  <div className="h-1.5 w-12 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A78BFA]"
                      style={{ width: `${campaign.pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
