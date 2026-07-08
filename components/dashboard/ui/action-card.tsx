import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuickAction } from "@/lib/dashboard/data";

type ActionCardProps = {
  action: QuickAction;
};

export function ActionCard({ action }: ActionCardProps) {
  const Icon = action.icon;

  return (
    <Link
      href={action.href}
      className="group relative flex flex-col rounded-2xl border border-white/[0.08] bg-[#111218] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFF]/30 hover:bg-[#181A22] hover:shadow-xl hover:shadow-[#7C5CFF]/10"
    >
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br shadow-lg",
          action.gradient
        )}
      >
        <Icon className="h-6 w-6 text-white" />
      </div>
      <h3 className="text-sm font-semibold text-white">{action.title}</h3>
      <p className="mt-1.5 flex-1 text-xs leading-relaxed text-zinc-400">
        {action.description}
      </p>
      <div className="mt-4 flex justify-end">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-400 transition-all duration-300 group-hover:border-[#7C5CFF]/30 group-hover:bg-[#7C5CFF]/10 group-hover:text-[#7C5CFF]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}
