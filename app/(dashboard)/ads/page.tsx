import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";

export default function AdsPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Ads" description="Write ads that get clicks and sales" />
      <DashboardCard>
        <div className="flex flex-col items-center py-8 text-center sm:py-12">
          <Sparkles className="mb-4 h-10 w-10 text-[#7C5CFF]" />
          <h3 className="text-lg font-semibold text-white">Create your first ad</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Tell Markio about your product and get Facebook, Google, and Instagram ad copy instantly.
          </p>
          <Link href="/assistant" className="mt-6">
            <GradientButton>Generate Ad Copy</GradientButton>
          </Link>
        </div>
      </DashboardCard>
    </div>
  );
}
