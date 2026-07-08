import { EmptyState } from "@/components/dashboard/ui/empty-state";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { emptyStates } from "@/lib/dashboard/data";

export default function LeadsPage() {
  const config = emptyStates.leads;
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Leads" description="People interested in your business" />
      <EmptyState {...config} />
    </div>
  );
}
