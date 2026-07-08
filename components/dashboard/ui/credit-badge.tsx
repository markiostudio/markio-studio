import { Zap } from "lucide-react";
import { cn } from "@/lib/utils";

type CreditBadgeProps = {
  credits?: number;
  className?: string;
};

export function CreditBadge({ credits = 250, className }: CreditBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 rounded-lg border border-[#7C5CFF]/20 bg-[#7C5CFF]/10 px-3 py-1.5",
        className
      )}
    >
      <Zap className="h-3.5 w-3.5 text-[#7C5CFF]" />
      <span className="text-xs font-semibold text-[#A78BFA]">{credits}</span>
      <span className="text-[10px] text-zinc-500">credits</span>
    </div>
  );
}
