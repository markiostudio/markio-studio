import { EmptyState } from "@/components/dashboard/ui/empty-state";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { emptyStates } from "@/lib/dashboard/data";

export default function ReportsPage() {
  const config = emptyStates.reports;
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Reports" description="Understand your marketing performance" />
      <EmptyState {...config} />
    </div>
  );
}
