import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";

export default function AIImagesPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="AI Images" description="Generate visuals for your brand" />
      <DashboardCard>
        <div className="flex flex-col items-center py-8 text-center sm:py-12">
          <Sparkles className="mb-4 h-10 w-10 text-[#7C5CFF]" />
          <h3 className="text-lg font-semibold text-white">Create stunning visuals</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Generate product photos, social graphics, and marketing images with AI.
          </p>
          <Link href="/assistant" className="mt-6">
            <GradientButton>Generate Images</GradientButton>
          </Link>
        </div>
      </DashboardCard>
    </div>
  );
}
