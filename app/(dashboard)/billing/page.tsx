import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { CreditBadge } from "@/components/dashboard/ui/credit-badge";

export default function BillingPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Billing" description="Manage your plan and credits" />
      <div className="grid gap-6 lg:grid-cols-2">
        <DashboardCard>
          <p className="text-sm text-zinc-400">Current Plan</p>
          <h3 className="mt-1 text-2xl font-bold text-white">Free</h3>
          <CreditBadge credits={250} className="mt-4" />
          <GradientButton className="mt-6">Upgrade to Pro</GradientButton>
        </DashboardCard>
        <DashboardCard>
          <h3 className="text-lg font-semibold text-white">Pro Plan</h3>
          <p className="mt-2 text-3xl font-bold text-white">
            $29<span className="text-base font-normal text-zinc-400">/mo</span>
          </p>
          <ul className="mt-4 space-y-2 text-sm text-zinc-400">
            <li>Unlimited AI generations</li>
            <li>Custom domains</li>
            <li>Priority support</li>
            <li>Team collaboration</li>
          </ul>
        </DashboardCard>
      </div>
    </div>
  );
}
