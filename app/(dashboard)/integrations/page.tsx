import { EmptyState } from "@/components/dashboard/ui/empty-state";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { IntegrationCard } from "@/components/dashboard/ui/integration-card";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { integrations } from "@/lib/dashboard/data";

export default function IntegrationsPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader
        title="Integrations"
        description="Connect your favorite tools to track results and automate marketing"
      />
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration) => (
          <IntegrationCard key={integration.id} integration={integration} />
        ))}
      </div>
      <div className="flex flex-col items-center rounded-2xl border border-dashed border-white/[0.08] bg-[#111218]/50 px-8 py-10 text-center">
        <p className="max-w-md text-sm text-zinc-400">
          Connect WhatsApp, Google Analytics, and more to see what&apos;s working and grow faster.
        </p>
        <GradientButton className="mt-4">Browse All Integrations</GradientButton>
      </div>
    </div>
  );
}
