"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

export function LaunchReportHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative mb-10 overflow-hidden rounded-2xl border border-[#7C5CFF]/20 bg-gradient-to-br from-[#7C5CFF]/10 via-[#111218] to-[#3B82F6]/5 p-8 sm:p-10"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#7C5CFF]/20 blur-3xl" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-[#EC4899]/15 blur-3xl" />
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-lg"
            initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.8],
              x: Math.cos(i * 1.05) * 120,
              y: Math.sin(i * 1.05) * 80 - 20,
            }}
            transition={{ delay: 0.3 + i * 0.08, duration: 1.2, ease: "easeOut" }}
            style={{ left: "50%", top: "40%" }}
          >
            ✨
          </motion.div>
        ))}
      </div>

      <div className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.15 }}
          className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500/20 to-[#7C5CFF]/20 ring-4 ring-emerald-500/20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 300 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-[#7C5CFF] shadow-xl shadow-emerald-500/30"
          >
            <Check className="h-7 w-7 text-white" strokeWidth={3} />
          </motion.div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-[#7C5CFF]/30"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          🎉 Your business is ready!
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-3 max-w-xl"
        >
          <p className="text-base text-zinc-300 sm:text-lg">
            Markio has finished creating your business assets.
          </p>
          <p className="mt-1 text-sm text-zinc-500">
            Everything is ready for review.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#7C5CFF]/25 bg-[#7C5CFF]/10 px-4 py-1.5"
        >
          <Sparkles className="h-3.5 w-3.5 text-[#7C5CFF]" />
          <span className="text-xs font-medium text-[#A78BFA]">6 assets generated in under 10 seconds</span>
        </motion.div>
      </div>
    </motion.header>
  );
}
