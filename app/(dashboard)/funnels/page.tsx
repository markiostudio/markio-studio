import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";

export default function FunnelsPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader
        title="Funnels"
        description="Guide people step-by-step to buy from you"
      />
      <DashboardCard className="mb-6">
        <div className="flex flex-col items-center py-8 text-center sm:py-12">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF]/20 to-[#EC4899]/10">
            <Sparkles className="h-7 w-7 text-[#7C5CFF]" />
          </div>
          <h3 className="text-lg font-semibold text-white">Build your first funnel</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Markio creates a complete customer journey — from first visit to purchase.
          </p>
          <Link href="/assistant" className="mt-6">
            <GradientButton>
              <Sparkles className="h-4 w-4" />
              Create Funnel with AI
            </GradientButton>
          </Link>
        </div>
      </DashboardCard>
    </div>
  );
}
