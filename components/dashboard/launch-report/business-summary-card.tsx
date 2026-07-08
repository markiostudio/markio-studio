import { TrendingUp } from "lucide-react";
import type { LaunchReportBusiness } from "@/lib/dashboard/launch-report-data";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

type BusinessSummaryCardProps = {
  business: LaunchReportBusiness;
};

export function BusinessSummaryCard({ business }: BusinessSummaryCardProps) {
  return (
    <MotionStaggerItem
      index={0}
      className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="grid flex-1 gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Business Name</p>
            <p className="mt-1 text-xl font-bold text-white">{business.name}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Business Type</p>
            <p className="mt-1 text-base font-medium text-zinc-200">{business.type}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Main Goal</p>
            <p className="mt-1 text-base font-medium text-zinc-200">{business.goal}</p>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-center rounded-2xl border border-[#7C5CFF]/20 bg-gradient-to-br from-[#7C5CFF]/10 to-[#3B82F6]/5 px-8 py-5">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Health Score</p>
          <p className="mt-1 text-4xl font-bold text-white">
            {business.healthScore}
            <span className="text-lg font-normal text-zinc-500">/100</span>
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs font-medium text-emerald-400">
            <TrendingUp className="h-3.5 w-3.5" />
            Excellent start
          </div>
        </div>
      </div>
    </MotionStaggerItem>
  );
}
