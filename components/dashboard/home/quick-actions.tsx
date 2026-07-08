import { quickActions } from "@/lib/dashboard/data";
import { ActionCard } from "@/components/dashboard/ui/action-card";
import { SectionHeader } from "@/components/dashboard/ui/section-header";

export function QuickActions() {
  return (
    <section className="mb-10">
      <SectionHeader
        title="Quick Actions"
        description="Pick what you want to create — AI handles the rest"
      />
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <ActionCard key={action.title} action={action} />
        ))}
      </div>
    </section>
  );
}
