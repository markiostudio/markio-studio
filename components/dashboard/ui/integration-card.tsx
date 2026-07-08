import { cn } from "@/lib/utils";
import type { Integration } from "@/lib/dashboard/data";

type IntegrationCardProps = {
  integration: Integration;
  compact?: boolean;
};

export function IntegrationCard({ integration, compact = false }: IntegrationCardProps) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#09090B] p-3 transition-all duration-300 hover:border-white/[0.12]",
        compact && "p-2.5"
      )}
    >
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold text-white"
        style={{ backgroundColor: `${integration.color}30`, color: integration.color }}
      >
        {integration.initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="truncate text-xs font-medium text-white">{integration.name}</p>
        <p
          className={cn(
            "text-[10px] font-medium",
            integration.connected ? "text-emerald-400" : "text-zinc-500"
          )}
        >
          {integration.connected ? "Connected" : "Not connected"}
        </p>
      </div>
    </div>
  );
}
