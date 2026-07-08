export function WebsitePreview({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a10] shadow-inner">
        <div className="flex items-center gap-1 border-b border-white/[0.06] bg-[#111218] px-2 py-1.5">
          <div className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
          <div className="mx-auto truncate px-2 text-[7px] text-zinc-500">glowfit.studio</div>
        </div>
        <div className="bg-gradient-to-b from-[#1a0f2e] to-[#0c0c12] p-3">
          <div className="mb-2 flex items-center justify-between">
            <div className="flex h-4 w-4 items-center justify-center rounded bg-gradient-to-br from-[#7C5CFF] to-[#EC4899] text-[6px] font-bold text-white">
              GF
            </div>
            <div className="flex gap-1">
              {["Home", "About", "Programs"].map((item) => (
                <div key={item} className="h-1 w-6 rounded bg-white/10" />
              ))}
            </div>
          </div>
          <div className="mb-2 rounded-lg bg-white/[0.04] p-2">
            <div className="mb-1 h-2 w-4/5 rounded bg-white/90" />
            <div className="mb-1.5 h-1 w-full rounded bg-white/20" />
            <div className="h-3 w-16 rounded bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6]" />
          </div>
          <div className="grid grid-cols-2 gap-1.5">
            <div className="h-10 rounded bg-gradient-to-br from-[#7C5CFF]/25 to-[#3B82F6]/10" />
            <div className="space-y-1 p-1">
              <div className="h-1 w-full rounded bg-white/15" />
              <div className="h-1 w-3/4 rounded bg-white/10" />
              <div className="h-1 w-1/2 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LandingPreview({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a10]">
        <div className="relative bg-gradient-to-br from-[#2d1b69] via-[#1a1033] to-[#0c0c12] p-3">
          <div className="mb-2 text-center">
            <div className="mx-auto mb-1.5 h-2 w-3/4 rounded bg-white/90" />
            <div className="mx-auto h-1 w-2/3 rounded bg-white/25" />
          </div>
          <div className="mx-auto mb-2 h-5 w-24 rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#EC4899]" />
          <div className="grid grid-cols-3 gap-1">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded bg-white/[0.05] p-1 text-center">
                <div className="mx-auto mb-0.5 h-3 w-3 rounded-full bg-[#7C5CFF]/40" />
                <div className="h-0.5 w-full rounded bg-white/10" />
              </div>
            ))}
          </div>
          <div className="mt-2 rounded border border-white/10 bg-black/20 p-1.5">
            <div className="h-1 w-full rounded bg-white/10" />
            <div className="mt-1 h-3 w-full rounded bg-white/[0.06]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function BrandPreview({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="rounded-xl border border-white/10 bg-[#0a0a10] p-3">
        <div className="mb-2 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#EC4899] text-[10px] font-bold text-white">
            GF
          </div>
          <div>
            <div className="h-1.5 w-14 rounded bg-white/70" />
            <div className="mt-0.5 h-1 w-10 rounded bg-white/25" />
          </div>
        </div>
        <div className="mb-2 flex gap-1">
          {["#7C5CFF", "#EC4899", "#3B82F6", "#10B981", "#111218"].map((c) => (
            <div key={c} className="h-5 flex-1 rounded" style={{ backgroundColor: c }} />
          ))}
        </div>
        <div className="space-y-1">
          <div className="h-2 w-full rounded bg-white/80" />
          <div className="h-1.5 w-2/3 rounded bg-white/30" />
        </div>
      </div>
    </div>
  );
}

export function AdsPreview({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-2 gap-1.5">
        {[0, 1].map((i) => (
          <div key={i} className="overflow-hidden rounded-lg border border-white/10 bg-[#0a0a10]">
            <div className="aspect-square bg-gradient-to-br from-[#2d1b69] to-[#1a1033] p-1.5">
              <div className="mb-1 h-1 w-2/3 rounded bg-white/70" />
              <div className="h-1 w-1/2 rounded bg-white/20" />
            </div>
            <div className="p-1">
              <div className="h-2 w-full rounded bg-[#1877F2]/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function SocialPreview({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="grid grid-cols-3 gap-1">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="aspect-square overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#7C5CFF]/30 via-[#EC4899]/20 to-[#3B82F6]/20"
          >
            <div className="flex h-full flex-col justify-end p-1">
              <div className="h-0.5 w-full rounded bg-white/30" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EmailPreview({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0a0a10]">
        <div className="border-b border-white/[0.06] bg-[#111218] px-2 py-1.5">
          <div className="h-1.5 w-2/3 rounded bg-white/50" />
        </div>
        <div className="space-y-1 p-2">
          <div className="h-1 w-full rounded bg-white/15" />
          <div className="h-1 w-full rounded bg-white/10" />
          <div className="my-1 h-6 rounded bg-gradient-to-r from-[#7C5CFF]/15 to-[#3B82F6]/10" />
          <div className="h-1 w-4/5 rounded bg-white/10" />
          <div className="h-2.5 w-14 rounded bg-gradient-to-r from-[#7C5CFF] to-[#8B5CF6]" />
        </div>
      </div>
    </div>
  );
}

export function AssetPreview({
  type,
  className,
}: {
  type: "website" | "landing" | "brand" | "ads" | "social" | "email";
  className?: string;
}) {
  switch (type) {
    case "website":
      return <WebsitePreview className={className} />;
    case "landing":
      return <LandingPreview className={className} />;
    case "brand":
      return <BrandPreview className={className} />;
    case "ads":
      return <AdsPreview className={className} />;
    case "social":
      return <SocialPreview className={className} />;
    case "email":
      return <EmailPreview className={className} />;
  }
}
