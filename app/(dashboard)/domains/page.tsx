import { EmptyState } from "@/components/dashboard/ui/empty-state";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { emptyStates } from "@/lib/dashboard/data";

export default function DomainsPage() {
  const config = emptyStates.domains;
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Domains" description="Connect your custom domain" />
      <EmptyState {...config} />
    </div>
  );
}
