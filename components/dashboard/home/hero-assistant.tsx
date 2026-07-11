"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, Sparkles } from "lucide-react";
import { getGreeting } from "@/lib/utils";
import { demoBusiness, starterPrompts } from "@/lib/dashboard/home-data";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { MotionFadeIn } from "@/components/dashboard/ui/motion-primitives";
import { OnboardingFlow } from "@/components/dashboard/onboarding/onboarding-flow";

export function HeroAssistant() {
  const [prompt, setPrompt] = useState("");
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const greeting = getGreeting();

  function handleSubmit() {
    setOnboardingOpen(true);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  }

  return (
    <>
      <section className="relative mb-16 pt-4 sm:pt-8">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#7C5CFF]/12 blur-[100px]" />
          <div className="absolute right-0 top-20 h-[280px] w-[280px] rounded-full bg-[#3B82F6]/8 blur-[80px]" />
          <div className="absolute bottom-0 left-0 h-[200px] w-[200px] rounded-full bg-[#EC4899]/6 blur-[60px]" />
        </div>

        <MotionFadeIn className="relative mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/20 bg-[#7C5CFF]/10 px-4 py-1.5">
            <Sparkles className="h-3.5 w-3.5 text-[#7C5CFF]" />
            <span className="text-xs font-medium text-[#A78BFA]">AI Business Operating System</span>
          </div>

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {greeting}, {demoBusiness.owner}
            <span className="ml-1">👋</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Tell Markio about your business — we&apos;ll build your website, landing page,
            ads, emails, and entire marketing system.{" "}
            <span className="text-zinc-300">No marketing knowledge needed.</span>
          </p>

          <div className="relative mx-auto mt-10 max-w-2xl">
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[#7C5CFF]/40 via-[#3B82F6]/30 to-[#EC4899]/40 opacity-60 blur-sm" />
            <div className="relative rounded-2xl border border-white/[0.1] bg-[#111218] p-1.5 shadow-2xl shadow-[#7C5CFF]/10">
              <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6]">
                  <Bot className="h-4 w-4 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white">AI Business Assistant</p>
                  <p className="text-xs text-zinc-500">Describe your business to get started</p>
                </div>
              </div>

              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="e.g. I run an online fitness coaching business for busy professionals in Kuala Lumpur..."
                rows={4}
                className="w-full resize-none bg-transparent px-4 py-4 text-sm leading-relaxed text-white placeholder:text-zinc-600 outline-none"
              />

              <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] px-4 py-3">
                <p className="hidden text-xs text-zinc-600 sm:block">
                  Press Enter to start · Shift+Enter for new line
                </p>
                <GradientButton
                  onClick={handleSubmit}
                  className="ml-auto shrink-0"
                  size="md"
                >
                  Build my business
                  <ArrowRight className="h-4 w-4" />
                </GradientButton>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {starterPrompts.map((starter) => (
              <button
                key={starter}
                type="button"
                onClick={() => setPrompt(starter)}
                className="rounded-full border border-white/[0.08] bg-[#111218] px-3.5 py-1.5 text-xs text-zinc-400 transition-all duration-300 hover:border-[#7C5CFF]/30 hover:bg-[#181A22] hover:text-zinc-200"
              >
                {starter.length > 48 ? `${starter.slice(0, 48)}…` : starter}
              </button>
            ))}
          </div>

          <p className="mt-4 text-xs text-zinc-600">
            Or{" "}
            <Link href="/assistant" className="text-[#7C5CFF] hover:text-[#A78BFA]">
              open full assistant
            </Link>
          </p>
        </MotionFadeIn>
      </section>

      <OnboardingFlow
        open={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        initialPrompt={prompt}
      />
    </>
  );
}
