import { DEFAULT_BUSINESS_BRAIN } from "@/lib/dashboard/business-brain";

export type OnboardingAnswers = {
  businessName: string;
  whatYouSell: string;
  customers: string;
  mainGoal: string;
};

export type OnboardingQuestion = {
  id: keyof OnboardingAnswers;
  label: string;
  placeholder: string;
  helper?: string;
};

export const onboardingQuestions: OnboardingQuestion[] = [
  {
    id: "businessName",
    label: "Business Name",
    placeholder: `e.g. ${DEFAULT_BUSINESS_BRAIN.business.name}`,
    helper: "This is how Markio will refer to your business.",
  },
  {
    id: "whatYouSell",
    label: "What do you sell?",
    placeholder: `e.g. ${DEFAULT_BUSINESS_BRAIN.business.industry} programs for busy professionals`,
    helper: "Describe your product or service in plain language.",
  },
  {
    id: "customers",
    label: "Who are your customers?",
    placeholder: `e.g. ${DEFAULT_BUSINESS_BRAIN.business.audience}`,
    helper: "Think about who buys from you today — or who you want to reach.",
  },
  {
    id: "mainGoal",
    label: "What is your main goal?",
    placeholder: `e.g. ${DEFAULT_BUSINESS_BRAIN.business.goal}`,
    helper: "What result do you want Markio to help you achieve?",
  },
];

export type GenerationStep = {
  id: string;
  label: string;
  durationMs: number;
};

export const generationSteps: GenerationStep[] = [
  { id: "analyze", label: "Analyzing your business profile", durationMs: 1200 },
  { id: "brand", label: "Creating your brand kit", durationMs: 1400 },
  { id: "landing", label: "Building your landing page", durationMs: 1600 },
  { id: "ads", label: "Writing ad copy and social posts", durationMs: 1400 },
  { id: "emails", label: "Preparing email campaigns", durationMs: 1200 },
  { id: "finalize", label: "Finalizing your marketing system", durationMs: 1000 },
];

export const mockOnboardingResult = {
  businessName: DEFAULT_BUSINESS_BRAIN.business.name,
  assetsCreated: 8,
  estimatedTimeSaved: "12 hours",
};
