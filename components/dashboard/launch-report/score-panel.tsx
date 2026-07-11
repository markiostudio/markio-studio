"use client";

import { motion } from "framer-motion";
import type { LaunchReportScores } from "@/lib/dashboard/launch-report-scores";
import { SCORE_LABELS } from "@/lib/dashboard/launch-report-scores";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

type ScorePanelProps = {
  scores: LaunchReportScores;
};

function AnimatedBar({
  value,
  color,
  delay,
}: {
  value: number;
  color: string;
  delay: number;
}) {
  return (
    <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 0.9, ease: "easeOut", delay }}
        className="h-full rounded-full"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}99)`,
        }}
      />
    </div>
  );
}

const BAR_COLORS = ["#7C5CFF", "#3B82F6", "#10B981", "#F59E0B"];

export function ScorePanel({ scores }: ScorePanelProps) {
  return (
    <MotionStaggerItem
      index={7}
      staggerDelay={0.07}
      className="mb-8 overflow-hidden rounded-2xl border border-[#7C5CFF]/20 bg-gradient-to-br from-[#7C5CFF]/8 via-[#111218] to-[#3B82F6]/5 p-6 sm:p-8"
    >
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Performance Scores
          </p>
          <p className="mt-1 text-sm text-zinc-400">
            AI-assessed readiness across key growth areas
          </p>
        </div>
        <div className="flex items-baseline gap-1 rounded-2xl border border-[#7C5CFF]/25 bg-[#7C5CFF]/10 px-5 py-3">
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="text-3xl font-bold text-white"
          >
            {scores.overall}
          </motion.span>
          <span className="text-sm text-zinc-500">/100</span>
          <span className="ml-2 text-xs font-semibold text-[#A78BFA]">Overall Score</span>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {SCORE_LABELS.map(({ key, label }, index) => (
          <div key={key}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-300">{label}</span>
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-sm font-bold text-white"
              >
                {scores[key]}
              </motion.span>
            </div>
            <AnimatedBar
              value={scores[key]}
              color={BAR_COLORS[index]}
              delay={0.2 + index * 0.12}
            />
          </div>
        ))}
      </div>
    </MotionStaggerItem>
  );
}
