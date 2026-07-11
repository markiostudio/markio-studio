"use client";

import { motion } from "framer-motion";
import type { AIRecommendation } from "@/lib/dashboard/launch-report-data";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

type AIRecommendationsPanelProps = {
  recommendations: AIRecommendation[];
};

export function AIRecommendationsPanel({ recommendations }: AIRecommendationsPanelProps) {
  return (
    <motion.aside
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-4"
    >
      <MotionStaggerItem
        index={0}
        className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5"
      >
        <h2 className="text-base font-semibold text-white">AI Recommendations</h2>
        <p className="mt-1 text-xs text-zinc-500">
          Smart next steps to grow faster
        </p>
      </MotionStaggerItem>

      <div className="space-y-3">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon;
          return (
            <MotionStaggerItem
              key={rec.id}
              index={index + 1}
              staggerDelay={0.06}
              className="group rounded-xl border border-white/[0.06] bg-[#111218] p-4 transition-all duration-300 hover:border-[#7C5CFF]/20 hover:bg-[#181A22]"
            >
              <div className="flex gap-3">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${rec.accent}20`, color: rec.accent }}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-white">{rec.title}</p>
                  <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">
                    {rec.description}
                  </p>
                  <button
                    type="button"
                    className="mt-2 text-xs font-semibold transition-colors hover:text-[#A78BFA]"
                    style={{ color: rec.accent }}
                  >
                    {rec.actionLabel} →
                  </button>
                </div>
              </div>
            </MotionStaggerItem>
          );
        })}
      </div>
    </motion.aside>
  );
}
