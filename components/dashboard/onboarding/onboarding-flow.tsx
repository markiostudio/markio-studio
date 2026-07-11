"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Bot, Loader2, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  businessBrainToFormValues,
  EMPTY_BUSINESS_BRAIN,
  mergeProfileFormValues,
  type BusinessBrain,
  type BusinessBrainProfileKey,
} from "@/lib/dashboard/business-brain";
import { writeBusinessBrainSnapshot } from "@/lib/dashboard/business-brain-storage";
import { createAndActivateProject } from "@/lib/dashboard/project-storage";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { BusinessBrainConfirmModal } from "./business-brain-confirm-modal";

type OnboardingFlowProps = {
  open: boolean;
  onClose: () => void;
  initialPrompt?: string;
};

type FlowPhase = "input" | "extracting" | "confirm" | "generating-landing";

export function OnboardingFlow({ open, onClose, initialPrompt }: OnboardingFlowProps) {
  const router = useRouter();
  const [phase, setPhase] = useState<FlowPhase>("input");
  const [prompt, setPrompt] = useState("");
  const [businessBrain, setBusinessBrain] = useState<BusinessBrain | null>(null);
  const [formValues, setFormValues] = useState(businessBrainToFormValues(EMPTY_BUSINESS_BRAIN));
  const [error, setError] = useState<string | null>(null);

  const reset = useCallback(() => {
    setPhase("input");
    setPrompt("");
    setBusinessBrain(null);
    setFormValues(businessBrainToFormValues(EMPTY_BUSINESS_BRAIN));
    setError(null);
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  useEffect(() => {
    if (open && initialPrompt?.trim()) {
      setPrompt(initialPrompt.trim());
    }
  }, [open, initialPrompt]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && (phase === "input" || phase === "confirm")) {
        onClose();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, phase, onClose]);

  async function handleExtract() {
    if (!prompt.trim()) return;

    setError(null);
    setPhase("extracting");

    try {
      const response = await fetch("/api/business-brain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });

      const data = (await response.json()) as BusinessBrain | { error?: string };

      if (!response.ok) {
        throw new Error("error" in data && data.error ? data.error : "Extraction failed.");
      }

      const extracted = data as BusinessBrain;
      setBusinessBrain(extracted);
      setFormValues(businessBrainToFormValues(extracted));
      setPhase("confirm");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setPhase("input");
    }
  }

  function handleFormChange(key: BusinessBrainProfileKey, value: string) {
    setFormValues((prev) => ({ ...prev, [key]: value }));
  }

  async function handleConfirm() {
    if (!businessBrain) return;

    const confirmed = mergeProfileFormValues(businessBrain, formValues);
    setError(null);
    setPhase("generating-landing");

    try {
      const response = await fetch("/api/landing-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ businessBrain: confirmed }),
      });

      const data = (await response.json()) as BusinessBrain | { error?: string };

      if (!response.ok) {
        throw new Error(
          "error" in data && data.error ? data.error : "Landing page generation failed."
        );
      }

      const enrichedBrain = data as BusinessBrain;

      // Always create a new project — never replace an existing business.
      createAndActivateProject(enrichedBrain);
      writeBusinessBrainSnapshot(enrichedBrain);

      onClose();
      reset();
      router.push("/landing-page-preview");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setPhase("confirm");
    }
  }

  if (!open) return null;

  return (
    <>
      <AnimatePresence>
        {phase === "input" && (
          <motion.div
            key="input-backdrop"
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
              className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/[0.1] bg-[#111218] shadow-2xl shadow-[#7C5CFF]/10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-[#7C5CFF]/20 via-transparent to-transparent opacity-50 pointer-events-none" />

              <div className="relative border-b border-white/[0.08] px-6 py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6]">
                      <Bot className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#A78BFA]">Step 1 of 2</p>
                      <h2 className="text-lg font-semibold text-white">Tell us about your business</h2>
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
              </div>

              <div className="relative px-6 py-6">
                <label htmlFor="business-prompt" className="block text-sm font-semibold text-white">
                  Describe your business
                </label>
                <p className="mt-1.5 text-xs text-zinc-500">
                  One paragraph is enough — Markio will extract the details for you.
                </p>
                <textarea
                  id="business-prompt"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g. I own a Japanese restaurant in New York serving authentic ramen to young professionals..."
                  rows={5}
                  autoFocus
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleExtract();
                    }
                  }}
                  className="mt-4 w-full resize-none rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15"
                />
                {error && (
                  <p className="mt-3 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-end gap-3 border-t border-white/[0.08] px-6 py-4">
                <GradientButton
                  onClick={handleExtract}
                  disabled={!prompt.trim()}
                  size="md"
                >
                  Analyze my business
                  <ArrowRight className="h-4 w-4" />
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "extracting" && (
          <motion.div
            key="extracting-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center rounded-2xl border border-white/[0.1] bg-[#111218] px-10 py-12 shadow-2xl shadow-[#7C5CFF]/10"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6]">
                <Loader2 className="h-7 w-7 animate-spin text-white" />
              </div>
              <p className="text-base font-semibold text-white">Analyzing your business...</p>
              <p className="mt-2 text-sm text-zinc-500">Building your Business Brain</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "confirm" && (
          <BusinessBrainConfirmModal
            values={formValues}
            onChange={handleFormChange}
            onConfirm={handleConfirm}
            onClose={onClose}
            error={error}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "generating-landing" && (
          <motion.div
            key="generating-landing-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex flex-col items-center rounded-2xl border border-white/[0.1] bg-[#111218] px-10 py-12 shadow-2xl shadow-[#7C5CFF]/10"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6]">
                <Loader2 className="h-7 w-7 animate-spin text-white" />
              </div>
              <p className="text-base font-semibold text-white">Creating your landing page...</p>
              <p className="mt-2 text-sm text-zinc-500">AI is writing your headline, services, and CTA</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
