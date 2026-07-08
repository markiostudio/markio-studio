import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";
import { MetricCard, MiniAreaChart } from "@/components/dashboard/ui/metric-card";
import { businessMetrics } from "@/lib/dashboard/data";

export default function AnalyticsPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader
        title="Analytics"
        description="See what's working and what to improve"
      />
      <DashboardCard className="mb-6">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {businessMetrics.map((metric) => (
            <MetricCard key={metric.label} {...metric} />
          ))}
        </div>
        <MiniAreaChart />
      </DashboardCard>
      <DashboardCard>
        <p className="text-sm text-zinc-400">
          Publish a page to start seeing visitor data, leads, and conversions here.
        </p>
      </DashboardCard>
    </div>
  );
}
