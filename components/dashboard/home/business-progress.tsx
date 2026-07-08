import Link from "next/link";
import { Check, Circle, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  businessProgressSteps,
  demoBusiness,
  type BusinessProgressStep,
} from "@/lib/dashboard/home-data";
import { BrandKitMockup } from "./mockups/brand-kit-mockup";
import { LandingPageMockup } from "./mockups/landing-page-mockup";
import { AdMockup } from "./mockups/ad-mockup";
import { LaunchMockup } from "./mockups/launch-mockup";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import {
  MotionProgressFill,
  MotionStaggerItem,
} from "@/components/dashboard/ui/motion-primitives";

function StepIcon({ status }: { status: BusinessProgressStep["status"] }) {
  if (status === "complete") {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
        <Check className="h-3.5 w-3.5" />
      </div>
    );
  }
  if (status === "in-progress") {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#7C5CFF]/15 text-[#7C5CFF]">
        <Loader2 className="h-3.5 w-3.5 animate-spin" />
      </div>
    );
  }
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 text-zinc-600">
      <Circle className="h-3 w-3" />
    </div>
  );
}

function StepMockup({ mockup }: { mockup: BusinessProgressStep["mockup"] }) {
  switch (mockup) {
    case "brand":
      return <BrandKitMockup className="w-full" />;
    case "landing":
      return <LandingPageMockup className="w-full" />;
    case "ads":
      return <AdMockup className="w-full" />;
    case "launch":
      return <LaunchMockup className="w-full" />;
    default:
      return <LandingPageMockup className="w-full" />;
  }
}

export function BusinessProgress() {
  const completedCount = businessProgressSteps.filter((s) => s.status === "complete").length;
  const overallProgress = Math.round(
    businessProgressSteps.reduce((sum, s) => sum + s.progress, 0) / businessProgressSteps.length
  );

  return (
    <section className="mb-16">
      <SectionHeader
        title="Your business progress"
        description={`Markio is building ${demoBusiness.name} — ${demoBusiness.type}`}
        action={{ label: "Continue setup", href: "/assistant" }}
      />

      <div className="mb-6 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-5 sm:p-6">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">{demoBusiness.name}</p>
            <p className="text-xs text-zinc-500">
              {completedCount} of {businessProgressSteps.length} steps complete
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06] sm:w-48">
              <MotionProgressFill width={`${overallProgress}%`} />
            </div>
            <span className="text-sm font-bold text-[#7C5CFF]">{overallProgress}%</span>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-5">
          {businessProgressSteps.map((step, index) => (
            <MotionStaggerItem
              key={step.id}
              index={index}
              staggerDelay={0.08}
              initial={{ opacity: 0, y: 12 }}
              className={cn(
                "overflow-hidden rounded-xl border bg-[#09090B] transition-all duration-300 hover:border-[#7C5CFF]/20",
                step.status === "in-progress"
                  ? "border-[#7C5CFF]/30 shadow-lg shadow-[#7C5CFF]/5"
                  : "border-white/[0.06]"
              )}
            >
              <div className="p-2.5">
                <StepMockup mockup={step.mockup} />
              </div>
              <div className="border-t border-white/[0.06] p-3">
                <div className="mb-2 flex items-start gap-2">
                  <StepIcon status={step.status} />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-white">{step.label}</p>
                    <p className="mt-0.5 text-[10px] leading-relaxed text-zinc-500">
                      {step.description}
                    </p>
                  </div>
                </div>
                {step.progress > 0 && (
                  <div className="mt-2 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                    <div
                      className={cn(
                        "h-full rounded-full transition-all",
                        step.status === "complete"
                          ? "bg-emerald-500"
                          : "bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6]"
                      )}
                      style={{ width: `${step.progress}%` }}
                    />
                  </div>
                )}
              </div>
            </MotionStaggerItem>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href="/landing-pages"
          className="rounded-xl border border-white/[0.08] bg-[#111218] px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-[#7C5CFF]/30 hover:text-white"
        >
          Review landing page draft →
        </Link>
        <Link
          href="/ads"
          className="rounded-xl border border-white/[0.08] bg-[#111218] px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-[#7C5CFF]/30 hover:text-white"
        >
          Finish ad creatives →
        </Link>
        <Link
          href="/brand-kit"
          className="rounded-xl border border-white/[0.08] bg-[#111218] px-4 py-2.5 text-xs font-medium text-zinc-300 transition-all hover:border-[#7C5CFF]/30 hover:text-white"
        >
          View brand kit →
        </Link>
      </div>
    </section>
  );
}
