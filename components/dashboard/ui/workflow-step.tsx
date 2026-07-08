import { cn } from "@/lib/utils";

type WorkflowStepProps = {
  step: number;
  label: string;
  isLast?: boolean;
};

export function WorkflowStep({ step, label, isLast = false }: WorkflowStepProps) {
  return (
    <div className="flex items-center">
      <div className="flex flex-col items-center">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#7C5CFF]/40 bg-[#111218] shadow-[0_0_20px_rgba(124,92,255,0.25)]">
          <span className="text-xs font-bold text-[#7C5CFF]">{step}</span>
          <div className="absolute inset-0 rounded-full bg-[#7C5CFF]/10 animate-pulse" />
        </div>
        <span className="mt-2 max-w-[72px] text-center text-[10px] font-medium text-zinc-400">
          {label}
        </span>
      </div>
      {!isLast && (
        <div className="mx-1 hidden h-px w-6 bg-gradient-to-r from-[#7C5CFF]/50 to-[#3B82F6]/30 sm:block lg:w-8" />
      )}
    </div>
  );
}

export function WorkflowOrbital() {
  return (
    <div className="relative flex h-full min-h-[200px] items-center justify-center">
      <div className="absolute h-40 w-40 rounded-full border border-[#7C5CFF]/20 bg-[#7C5CFF]/5" />
      <div className="absolute h-56 w-56 rounded-full border border-[#3B82F6]/10" />
      <div className="absolute h-72 w-72 rounded-full border border-[#EC4899]/5" />
      <div className="relative z-10 flex flex-wrap items-center justify-center gap-1 sm:gap-0">
        {[1, 2, 3, 4, 5, 6].map((step, i, arr) => (
          <WorkflowStep
            key={step}
            step={step}
            label={
              [
                "Business Info",
                "Brand Kit",
                "Landing Page",
                "Ads",
                "Emails",
                "Go Live",
              ][i]
            }
            isLast={i === arr.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
