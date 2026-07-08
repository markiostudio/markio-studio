import Link from "next/link";
import { EmptyState } from "@/components/dashboard/ui/empty-state";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";
import { emptyStates } from "@/lib/dashboard/data";

export default function BrandKitPage() {
  const config = emptyStates["brand-kit"];

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader
        title="Brand Kit"
        description="Your colors, fonts, logo, and brand voice"
      />
      <EmptyState {...config} />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {[
          { label: "Colors", preview: "from-[#7C5CFF] to-[#EC4899]" },
          { label: "Fonts", preview: "from-zinc-600 to-zinc-800" },
          { label: "Tone", preview: "from-blue-600 to-indigo-800" },
        ].map((item) => (
          <DashboardCard key={item.label} hover>
            <div className={`mb-3 h-16 rounded-xl bg-gradient-to-r ${item.preview}`} />
            <p className="text-sm font-medium text-white">{item.label}</p>
            <p className="mt-1 text-xs text-zinc-500">AI will generate this for you</p>
          </DashboardCard>
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link href="/assistant">
          <GradientButton>Generate Brand Kit</GradientButton>
        </Link>
      </div>
    </div>
  );
}
