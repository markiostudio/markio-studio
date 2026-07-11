"use client";

import { Lock, Monitor, RotateCcw, Smartphone, Tablet } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { BusinessBrain } from "@/lib/dashboard/business-brain";
import { getPreviewUrl } from "@/lib/dashboard/landing-page";
import { LandingPageSite } from "./landing-page-site";

type PreviewMode = "desktop" | "tablet" | "mobile";

type LandingPageBrowserFrameProps = {
  brain: BusinessBrain;
};

export function LandingPageBrowserFrame({ brain }: LandingPageBrowserFrameProps) {
  const [mode, setMode] = useState<PreviewMode>("desktop");
  const previewUrl = getPreviewUrl(brain);

  const modes: { id: PreviewMode; label: string; icon: typeof Monitor }[] = [
    { id: "desktop", label: "Desktop", icon: Monitor },
    { id: "tablet", label: "Tablet", icon: Tablet },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] shadow-2xl shadow-black/40">
      <div className="flex flex-col gap-3 border-b border-white/[0.08] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex shrink-0 gap-1.5">
            <span className="h-3 w-3 rounded-full bg-red-500/80" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="ml-2 flex min-w-0 flex-1 items-center gap-2 rounded-lg border border-white/[0.08] bg-[#09090B] px-3 py-1.5 sm:max-w-md">
            <Lock className="h-3 w-3 shrink-0 text-zinc-500" />
            <span className="truncate text-xs text-zinc-400">{previewUrl}</span>
          </div>
          <button
            type="button"
            className="hidden h-7 w-7 shrink-0 items-center justify-center rounded-md text-zinc-500 hover:bg-white/[0.06] hover:text-zinc-300 sm:flex"
            aria-label="Refresh preview"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
        </div>

        <div className="flex items-center gap-1 self-end rounded-lg border border-white/[0.08] bg-[#09090B] p-1 sm:self-auto">
          {modes.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setMode(id)}
              className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors sm:px-3 ${
                mode === id
                  ? "bg-[#7C5CFF]/20 text-[#A78BFA]"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              <Icon className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[#1a1a1f] p-4 sm:p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={mode}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            {mode === "desktop" ? (
              <div className="overflow-hidden rounded-lg border border-zinc-700/50 bg-white shadow-inner">
                <div className="max-h-[70vh] overflow-y-auto">
                  <LandingPageSite brain={brain} />
                </div>
              </div>
            ) : null}

            {mode === "tablet" ? (
              <div className="mx-auto max-w-[768px]">
                <div className="overflow-hidden rounded-xl border-[4px] border-zinc-700 bg-zinc-800 p-2 shadow-2xl">
                  <div className="overflow-hidden rounded-lg border border-zinc-600/50 bg-white">
                    <div className="max-h-[65vh] overflow-y-auto">
                      <LandingPageSite brain={brain} compact />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}

            {mode === "mobile" ? (
              <div className="mx-auto flex max-w-[320px] justify-center">
                <div className="relative w-full rounded-[2.5rem] border-[6px] border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
                  <div className="absolute left-1/2 top-3 h-5 w-24 -translate-x-1/2 rounded-full bg-zinc-800" />
                  <div className="mt-6 overflow-hidden rounded-[2rem] border border-zinc-700/50 bg-white">
                    <div className="max-h-[620px] overflow-y-auto overscroll-contain">
                      <LandingPageSite brain={brain} compact />
                    </div>
                  </div>
                  <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-zinc-700" />
                </div>
              </div>
            ) : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
