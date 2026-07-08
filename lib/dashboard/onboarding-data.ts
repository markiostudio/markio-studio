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
    placeholder: "e.g. GlowFit Studio",
    helper: "This is how Markio will refer to your business.",
  },
  {
    id: "whatYouSell",
    label: "What do you sell?",
    placeholder: "e.g. Online fitness coaching programs for busy professionals",
    helper: "Describe your product or service in plain language.",
  },
  {
    id: "customers",
    label: "Who are your customers?",
    placeholder: "e.g. Working adults aged 25–45 who want to get fit at home",
    helper: "Think about who buys from you today — or who you want to reach.",
  },
  {
    id: "mainGoal",
    label: "What is your main goal?",
    placeholder: "e.g. Get more leads and sign up 20 new clients this month",
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
  businessName: "GlowFit Studio",
  assetsCreated: 8,
  estimatedTimeSaved: "12 hours",
};
