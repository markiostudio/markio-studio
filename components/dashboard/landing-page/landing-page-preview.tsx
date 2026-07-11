"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RefreshCw, Save } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { BusinessBrain } from "@/lib/dashboard/business-brain";
import { saveBusinessBrain } from "@/lib/dashboard/business-brain-storage";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { MotionButton } from "@/components/dashboard/ui/motion-primitives";
import { LandingPageBrowserFrame } from "./landing-page-browser-frame";

type LandingPagePreviewScreenProps = {
  brain: BusinessBrain;
};

export function LandingPagePreviewScreen({ brain }: LandingPagePreviewScreenProps) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  function handleSaveDraft() {
    saveBusinessBrain(brain);
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  function handleRegenerate() {
    router.push("/");
  }

  return (
    <div className="min-h-full">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-[#A78BFA]">
            AI Generated · Landing Page
          </p>
          <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">Your Landing Page Preview</h1>
          <p className="mt-2 text-sm text-zinc-400">
            Full website preview generated from your Business Brain.
            {brain.branding.style ? (
              <span className="ml-1 text-zinc-500">Style: {brain.branding.style}.</span>
            ) : null}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link href="/">
            <MotionButton
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#111218] px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-[#7C5CFF]/30 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Workspace
            </MotionButton>
          </Link>

          <MotionButton
            type="button"
            onClick={handleRegenerate}
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#111218] px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-[#7C5CFF]/30 hover:text-white"
          >
            <RefreshCw className="h-4 w-4" />
            Regenerate
          </MotionButton>

          <MotionButton
            type="button"
            onClick={handleSaveDraft}
            className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#111218] px-5 py-2.5 text-sm font-semibold text-zinc-300 transition-colors hover:border-emerald-500/30 hover:text-white"
          >
            <Save className="h-4 w-4" />
            Save Draft
          </MotionButton>

          <Link href="/business-launch-report">
            <GradientButton size="md">
              Continue
              <ArrowRight className="h-4 w-4" />
            </GradientButton>
          </Link>

          <AnimatePresence>
            {saved ? (
              <motion.span
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0 }}
                className="w-full text-xs font-medium text-emerald-400 sm:w-auto"
              >
                Draft saved
              </motion.span>
            ) : null}
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <LandingPageBrowserFrame brain={brain} />
      </motion.div>
    </div>
  );
}
