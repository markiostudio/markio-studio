"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Bot, Check, Loader2, Sparkles } from "lucide-react";
import { generationSteps } from "@/lib/dashboard/onboarding-data";
import type { BusinessBrain } from "@/lib/dashboard/business-brain";

type GenerationScreenProps = {
  businessBrain: BusinessBrain;
  onComplete: () => void;
};

const TOTAL_DURATION_MS = generationSteps.reduce((sum, step) => sum + step.durationMs, 0);

export function GenerationScreen({ businessBrain, onComplete }: GenerationScreenProps) {
  const [progress, setProgress] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [activeStepId, setActiveStepId] = useState(generationSteps[0]?.id ?? "");

  useEffect(() => {
    let elapsed = 0;
    const interval = window.setInterval(() => {
      elapsed += 50;
      setProgress(Math.min(Math.round((elapsed / TOTAL_DURATION_MS) * 100), 100));

      let cumulative = 0;
      for (const step of generationSteps) {
        cumulative += step.durationMs;
        if (elapsed >= cumulative) {
          setCompletedSteps((prev) =>
            prev.includes(step.id) ? prev : [...prev, step.id]
          );
        } else if (elapsed >= cumulative - step.durationMs) {
          setActiveStepId(step.id);
          break;
        }
      }
    }, 50);

    const completeTimer = window.setTimeout(onComplete, TOTAL_DURATION_MS + 400);

    return () => {
      window.clearInterval(interval);
      window.clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#09090B]"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/3 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C5CFF]/15 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[300px] w-[300px] rounded-full bg-[#3B82F6]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto w-full max-w-lg px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mb-10 text-center"
        >
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6] shadow-xl shadow-[#7C5CFF]/30">
            <Bot className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Building your business</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Markio is creating your marketing system for{" "}
            <span className="text-[#A78BFA]">{businessBrain.business.name || "your business"}</span>
          </p>
        </motion.div>

        <div className="mb-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-6">
          <div className="mb-3 flex items-center justify-between text-xs">
            <span className="font-medium text-zinc-400">Overall progress</span>
            <span className="font-semibold text-[#7C5CFF]">{progress}%</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] via-[#8B5CF6] to-[#3B82F6]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.15, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="space-y-3">
          {generationSteps.map((step, index) => {
            const isComplete = completedSteps.includes(step.id);
            const isActive = activeStepId === step.id && !isComplete;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 + 0.2, duration: 0.35 }}
                className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-[#111218]/80 px-4 py-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center">
                  {isComplete ? (
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400"
                    >
                      <Check className="h-3.5 w-3.5" />
                    </motion.div>
                  ) : isActive ? (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#7C5CFF]/15 text-[#7C5CFF]">
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                    </div>
                  ) : (
                    <div className="h-6 w-6 rounded-full border border-white/10 bg-white/[0.03]" />
                  )}
                </div>
                <span
                  className={
                    isComplete
                      ? "text-sm text-zinc-400"
                      : isActive
                        ? "text-sm font-medium text-white"
                        : "text-sm text-zinc-500"
                  }
                >
                  {step.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-2 text-xs text-zinc-500"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#7C5CFF]" />
          AI is working — this usually takes about 10 seconds
        </motion.p>
      </div>
    </motion.div>
  );
}
