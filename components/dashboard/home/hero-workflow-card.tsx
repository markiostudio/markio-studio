import Link from "next/link";
import { Bot, Sparkles } from "lucide-react";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { WorkflowOrbital } from "@/components/dashboard/ui/workflow-step";

export function HeroWorkflowCard() {
  return (
    <section className="mb-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#7C5CFF]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-[#3B82F6]/10 blur-3xl" />
        </div>

        <div className="relative grid gap-8 p-6 sm:p-8 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF]/20 to-[#EC4899]/10">
              <Bot className="h-12 w-12 text-[#7C5CFF]" />
            </div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              Describe your business, we&apos;ll handle the rest.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400 sm:text-base">
              From research to content, design to ads — AI does it all.
            </p>
            <Link href="/assistant" className="mt-6 inline-block">
              <GradientButton size="lg">
                <Sparkles className="h-4 w-4" />
                Tell AI about your business
              </GradientButton>
            </Link>
          </div>

          <WorkflowOrbital />
        </div>
      </div>
    </section>
  );
}
