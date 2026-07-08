import { cn } from "@/lib/utils";
import type { GeneratedAsset } from "@/lib/dashboard/launch-report-data";
import { AssetPreview } from "./asset-previews";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";

type AssetCardProps = {
  asset: GeneratedAsset;
  index: number;
};

const statusStyles = {
  Ready: "bg-emerald-500/15 text-emerald-400 border-emerald-500/25",
  "Draft Ready": "bg-amber-500/15 text-amber-400 border-amber-500/25",
};

export function AssetCard({ asset, index }: AssetCardProps) {
  return (
    <MotionStaggerItem
      index={index + 1}
      staggerDelay={0.08}
      className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFF]/25 hover:shadow-xl hover:shadow-[#7C5CFF]/10"
    >
      <div className="relative bg-[#09090B] p-5">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#7C5CFF]/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="relative mx-auto max-w-[280px] transition-transform duration-300 group-hover:scale-[1.02]">
          <AssetPreview type={asset.preview} />
        </div>
      </div>

      <div className="border-t border-white/[0.06] p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">{asset.emoji}</span>
            <h3 className="text-base font-semibold text-white">{asset.title}</h3>
          </div>
          <span
            className={cn(
              "shrink-0 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold",
              statusStyles[asset.status]
            )}
          >
            {asset.status}
          </span>
        </div>

        <p className="mb-5 text-sm leading-relaxed text-zinc-400">{asset.description}</p>

        <div className="flex flex-wrap gap-2">
          <GradientButton size="sm">{asset.primaryAction}</GradientButton>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-2 text-xs font-semibold text-zinc-300 transition-all hover:border-[#7C5CFF]/30 hover:bg-[#181A22] hover:text-white"
          >
            {asset.secondaryAction}
          </button>
        </div>
      </div>
    </MotionStaggerItem>
  );
}

type GeneratedAssetsGridProps = {
  assets: GeneratedAsset[];
};

export function GeneratedAssetsGrid({ assets }: GeneratedAssetsGridProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-5 text-lg font-semibold text-white">Generated Assets</h2>
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-2">
        {assets.map((asset, index) => (
          <AssetCard key={asset.id} asset={asset} index={index} />
        ))}
      </div>
    </section>
  );
}
