"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Bot, X } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  onboardingQuestions,
  type OnboardingAnswers,
} from "@/lib/dashboard/onboarding-data";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { GenerationScreen } from "./generation-screen";

const EMPTY_ANSWERS: OnboardingAnswers = {
  businessName: "",
  whatYouSell: "",
  customers: "",
  mainGoal: "",
};

type OnboardingFlowProps = {
  open: boolean;
  onClose: () => void;
  initialPrompt?: string;
};

type FlowPhase = "questions" | "generating";

export function OnboardingFlow({ open, onClose, initialPrompt }: OnboardingFlowProps) {
  const router = useRouter();
  const [phase, setPhase] = useState<FlowPhase>("questions");
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<OnboardingAnswers>(EMPTY_ANSWERS);
  const [direction, setDirection] = useState(1);

  const currentQuestion = onboardingQuestions[step];
  const isLastStep = step === onboardingQuestions.length - 1;
  const currentValue = answers[currentQuestion.id];

  const reset = useCallback(() => {
    setPhase("questions");
    setStep(0);
    setAnswers(EMPTY_ANSWERS);
    setDirection(1);
  }, []);

  useEffect(() => {
    if (!open) {
      reset();
    }
  }, [open, reset]);

  useEffect(() => {
    if (open && initialPrompt?.trim()) {
      setAnswers((prev) => ({
        ...prev,
        whatYouSell: prev.whatYouSell || initialPrompt.trim(),
      }));
    }
  }, [open, initialPrompt]);

  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && phase === "questions") {
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

  function updateAnswer(value: string) {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  }

  function handleNext() {
    if (!currentValue.trim()) return;

    if (isLastStep) {
      setPhase("generating");
      return;
    }

    setDirection(1);
    setStep((prev) => prev + 1);
  }

  function handleBack() {
    if (step === 0) return;
    setDirection(-1);
    setStep((prev) => prev - 1);
  }

  function handleGenerationComplete() {
    onClose();
    reset();
    router.push("/business-launch-report");
    router.refresh();
  }

  if (!open) return null;

  return (
    <>
      <AnimatePresence>
        {phase === "questions" && (
          <motion.div
            key="modal-backdrop"
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
                      <p className="text-xs font-medium text-[#A78BFA]">
                        Question {step + 1} of {onboardingQuestions.length}
                      </p>
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

                <div className="mt-4 flex gap-1.5">
                  {onboardingQuestions.map((_, index) => (
                    <div
                      key={index}
                      className="h-1 flex-1 overflow-hidden rounded-full bg-white/[0.06]"
                    >
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6]"
                        initial={false}
                        animate={{ width: index <= step ? "100%" : "0%" }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative px-6 py-6">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={step}
                    custom={direction}
                    initial={{ opacity: 0, x: direction * 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction * -24 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  >
                    <label htmlFor={currentQuestion.id} className="block text-sm font-semibold text-white">
                      {currentQuestion.label}
                    </label>
                    {currentQuestion.helper && (
                      <p className="mt-1.5 text-xs text-zinc-500">{currentQuestion.helper}</p>
                    )}
                    <textarea
                      id={currentQuestion.id}
                      value={currentValue}
                      onChange={(e) => updateAnswer(e.target.value)}
                      placeholder={currentQuestion.placeholder}
                      rows={3}
                      autoFocus
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          handleNext();
                        }
                      }}
                      className="mt-4 w-full resize-none rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex items-center justify-between gap-3 border-t border-white/[0.08] px-6 py-4">
                <button
                  type="button"
                  onClick={handleBack}
                  disabled={step === 0}
                  className="inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-30"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back
                </button>

                <GradientButton
                  onClick={handleNext}
                  disabled={!currentValue.trim()}
                  size="md"
                >
                  {isLastStep ? "Generate my business" : "Continue"}
                  <ArrowRight className="h-4 w-4" />
                </GradientButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {phase === "generating" && (
          <GenerationScreen answers={answers} onComplete={handleGenerationComplete} />
        )}
      </AnimatePresence>
    </>
  );
}
