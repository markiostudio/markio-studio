import Link from "next/link";
import { Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";

export default function WebsitesPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Websites" description="Build a full website for your business" />
      <DashboardCard>
        <div className="flex flex-col items-center py-8 text-center sm:py-12">
          <Sparkles className="mb-4 h-10 w-10 text-[#7C5CFF]" />
          <h3 className="text-lg font-semibold text-white">Build your business website</h3>
          <p className="mt-2 max-w-md text-sm text-zinc-400">
            Describe your business and Markio creates a complete, professional website.
          </p>
          <Link href="/assistant" className="mt-6">
            <GradientButton>Create Website with AI</GradientButton>
          </Link>
        </div>
      </DashboardCard>
    </div>
  );
}
