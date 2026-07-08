"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { AIInput } from "@/components/dashboard/ui/ai-input";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";
import { OnboardingFlow } from "@/components/dashboard/onboarding/onboarding-flow";

const STARTER_PROMPTS = [
  "I run a fitness coaching business",
  "I have a dental clinic",
  "I sell products online",
  "I'm a real estate agent",
];

export function AssistantChat() {
  const [prompt, setPrompt] = useState("");
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  function handleSubmit() {
    if (!prompt.trim()) return;
    setOnboardingOpen(true);
  }

  return (
    <>
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6] shadow-lg shadow-[#7C5CFF]/25">
          <Bot className="h-8 w-8 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">AI Business Assistant</h1>
        <p className="mt-2 text-zinc-400">
          Tell Markio about your business — we&apos;ll help you build everything you need.
        </p>
      </div>

      <DashboardCard className="mb-6">
        <div className="space-y-4">
          <div className="rounded-xl bg-[#09090B] p-4">
            <p className="text-sm text-zinc-300">
              Hi! I&apos;m your AI business assistant. Tell me what kind of business you run,
              and I&apos;ll help you create your website, landing pages, ads, emails, and more.
            </p>
          </div>
          <AIInput
            value={prompt}
            onChange={setPrompt}
            onSubmit={handleSubmit}
            placeholder="Describe your business..."
          />
        </div>
      </DashboardCard>

      <div className="grid gap-3 sm:grid-cols-2">
        {STARTER_PROMPTS.map((starter) => (
          <button
            key={starter}
            type="button"
            onClick={() => setPrompt(starter)}
            className="rounded-xl border border-white/[0.08] bg-[#111218] px-4 py-3 text-left text-sm text-zinc-300 transition-all hover:border-[#7C5CFF]/30 hover:bg-[#181A22]"
          >
            {starter}
          </button>
        ))}
      </div>

      <OnboardingFlow
        open={onboardingOpen}
        onClose={() => setOnboardingOpen(false)}
        initialPrompt={prompt}
      />
    </>
  );
}
