"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bot, Sparkles, X } from "lucide-react";
import {
  BUSINESS_BRAIN_PROFILE_KEYS,
  businessBrainFieldLabels,
  type BusinessBrainProfileKey,
} from "@/lib/dashboard/business-brain";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";

type BusinessBrainConfirmModalProps = {
  values: Record<BusinessBrainProfileKey, string>;
  onChange: (key: BusinessBrainProfileKey, value: string) => void;
  onConfirm: () => void;
  onClose: () => void;
  error?: string | null;
};

export function BusinessBrainConfirmModal({
  values,
  onChange,
  onConfirm,
  onClose,
  error,
}: BusinessBrainConfirmModalProps) {
  return (
    <motion.div
      key="confirm-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#111218] shadow-2xl shadow-[#7C5CFF]/10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#7C5CFF]/20 via-transparent to-transparent opacity-50 pointer-events-none" />

        <div className="relative shrink-0 border-b border-white/[0.08] px-6 py-5">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6]">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-xs font-medium text-[#A78BFA]">Business Brain extracted</p>
                <h2 className="text-lg font-semibold text-white">Review your business profile</h2>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-500 transition-colors hover:bg-white/[0.06] hover:text-white"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-3 text-sm text-zinc-400">
            Markio analyzed your description. Edit anything before we build your assets.
          </p>
        </div>

        <div className="relative flex-1 overflow-y-auto px-6 py-5">
          <div className="grid gap-4 sm:grid-cols-2">
            {BUSINESS_BRAIN_PROFILE_KEYS.map((key, index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.04, duration: 0.3 }}
                className={key === "goal" || key === "description" ? "sm:col-span-2" : ""}
              >
                <label htmlFor={key} className="mb-1.5 block text-xs font-medium text-zinc-400">
                  {businessBrainFieldLabels[key]}
                </label>
                {key === "goal" || key === "description" ? (
                  <textarea
                    id={key}
                    value={values[key]}
                    onChange={(e) => onChange(key, e.target.value)}
                    rows={2}
                    placeholder="Not detected — add if you'd like"
                    className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#09090B] px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15"
                  />
                ) : (
                  <input
                    id={key}
                    type="text"
                    value={values[key]}
                    onChange={(e) => onChange(key, e.target.value)}
                    placeholder="Not detected — add if you'd like"
                    className="w-full rounded-xl border border-white/[0.08] bg-[#09090B] px-3 py-2.5 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {error ? (
          <div className="relative border-t border-white/[0.08] px-6 py-3">
            <p className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          </div>
        ) : null}

        <div className="relative flex shrink-0 items-center justify-end gap-3 border-t border-white/[0.08] px-6 py-4">
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl px-4 py-2.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
          >
            Cancel
          </button>
          <GradientButton onClick={onConfirm} size="md">
            <Bot className="h-4 w-4" />
            Confirm & Build
            <ArrowRight className="h-4 w-4" />
          </GradientButton>
        </div>
      </motion.div>
    </motion.div>
  );
}
