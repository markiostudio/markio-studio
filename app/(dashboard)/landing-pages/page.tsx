import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";

type FeaturePageProps = {
  title: string;
  description: string;
  ctaLabel: string;
  tips: string[];
};

function FeaturePage({ title, description, ctaLabel, tips }: FeaturePageProps) {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title={title} description={description} />
      <DashboardCard className="mb-6">
        <div className="flex flex-col items-center py-8 text-center sm:py-12">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF]/20 to-[#3B82F6]/10">
            <Sparkles className="h-7 w-7 text-[#7C5CFF]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Ready to create with AI</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Describe what you need and Markio will generate it for you — no marketing knowledge required.
          </p>
          <Link href="/assistant" className="mt-6">
            <GradientButton>
              <Sparkles className="h-4 w-4" />
              {ctaLabel}
            </GradientButton>
          </Link>
        </div>
      </DashboardCard>
      <div className="grid gap-3 sm:grid-cols-3">
        {tips.map((tip) => (
          <DashboardCard key={tip} hover>
            <p className="text-sm text-zinc-300">{tip}</p>
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}

export default function LandingPagesPage() {
  return (
    <FeaturePage
      title="Landing Pages"
      description="Create pages that turn visitors into customers"
      ctaLabel="Create Landing Page"
      tips={[
        "AI writes your headline and content for you",
        "Add a contact form or WhatsApp button in one click",
        "Publish instantly — no coding needed",
      ]}
    />
  );
}
