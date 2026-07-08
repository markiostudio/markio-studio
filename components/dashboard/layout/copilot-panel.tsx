"use client";

import { useState } from "react";
import { Bot, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  businessMetrics,
  copilotSuggestions,
  integrations,
} from "@/lib/dashboard/data";
import { AIInput } from "../ui/ai-input";
import { DashboardCard } from "../ui/dashboard-card";
import { IntegrationCard } from "../ui/integration-card";
import { MetricCard, MiniAreaChart } from "../ui/metric-card";
import { MotionButton } from "../ui/motion-primitives";

type CopilotPanelProps = {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
  collapsed?: boolean;
};

export function CopilotPanel({
  mobileOpen = false,
  onMobileClose,
  collapsed = false,
}: CopilotPanelProps) {
  const [prompt, setPrompt] = useState("");

  function handleSubmit() {
    if (!prompt.trim()) return;
    setPrompt("");
  }

  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm xl:hidden"
          onClick={onMobileClose}
          aria-label="Close copilot"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 right-0 z-50 flex w-[340px] flex-col border-l border-white/[0.08] bg-[#0B0B10] transition-transform duration-300 xl:static xl:z-auto xl:w-[320px] 2xl:w-[360px]",
          mobileOpen ? "translate-x-0" : "translate-x-full xl:translate-x-0",
          collapsed && "xl:w-[280px]"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/[0.08] px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6]">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white">AI Copilot</h2>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="text-[10px] text-zinc-500">Online</span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onMobileClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/[0.06] hover:text-white xl:hidden"
            aria-label="Close copilot"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <DashboardCard>
            <p className="mb-3 text-xs text-zinc-400">Try asking:</p>
            <div className="flex flex-wrap gap-2">
              {copilotSuggestions.map((suggestion) => (
                <MotionButton
                  key={suggestion}
                  type="button"
                  onClick={() => setPrompt(suggestion)}
                  className="rounded-lg border border-white/[0.08] bg-[#09090B] px-3 py-1.5 text-xs text-zinc-300 transition-colors hover:border-[#7C5CFF]/30 hover:text-white"
                >
                  {suggestion}
                </MotionButton>
              ))}
            </div>
            <div className="mt-4">
              <AIInput
                value={prompt}
                onChange={setPrompt}
                onSubmit={handleSubmit}
              />
            </div>
          </DashboardCard>

          <DashboardCard>
            <h3 className="mb-3 text-sm font-semibold text-white">Business Overview</h3>
            <div className="grid grid-cols-2 gap-2">
              {businessMetrics.map((metric) => (
                <MetricCard key={metric.label} {...metric} />
              ))}
            </div>
            <MiniAreaChart />
          </DashboardCard>

          <DashboardCard>
            <h3 className="mb-3 text-sm font-semibold text-white">Integrations</h3>
            <div className="space-y-2">
              {integrations.slice(0, 4).map((integration) => (
                <IntegrationCard key={integration.id} integration={integration} compact />
              ))}
            </div>
          </DashboardCard>
        </div>
      </aside>
    </>
  );
}
