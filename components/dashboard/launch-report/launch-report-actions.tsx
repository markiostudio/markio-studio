"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ArrowLeft, ArrowRight, RefreshCw, Save } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { MotionButton } from "@/components/dashboard/ui/motion-primitives";

const DRAFT_SAVED_KEY = "markio_report_draft_saved";

type LaunchReportActionsProps = {
  continueHref?: string;
};

export function LaunchReportActions({ continueHref = "/landing-page-preview" }: LaunchReportActionsProps) {
  const router = useRouter();
  const [saved, setSaved] = useState(false);

  function handleSaveDraft() {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(DRAFT_SAVED_KEY, new Date().toISOString());
    }
    setSaved(true);
    window.setTimeout(() => setSaved(false), 2500);
  }

  function handleRegenerate() {
    router.push("/");
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className="relative mb-8 flex flex-wrap items-center gap-3"
    >
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

      <Link href={continueHref}>
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
            className="text-xs font-medium text-emerald-400"
          >
            Draft saved
          </motion.span>
        ) : null}
      </AnimatePresence>
    </motion.div>
  );
}
