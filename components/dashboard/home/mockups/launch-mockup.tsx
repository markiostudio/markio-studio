import { Rocket } from "lucide-react";

export function LaunchMockup({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="flex aspect-[4/3] flex-col items-center justify-center rounded-lg border border-dashed border-white/10 bg-[#0c0c12] p-3 shadow-2xl">
        <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-[#7C5CFF]/10">
          <Rocket className="h-5 w-5 text-[#7C5CFF]/60" />
        </div>
        <div className="h-1.5 w-16 rounded bg-white/20" />
        <div className="mt-1 h-1 w-12 rounded bg-white/10" />
        <div className="mt-2 h-4 w-20 rounded border border-[#7C5CFF]/20 bg-[#7C5CFF]/5" />
      </div>
    </div>
  );
}
