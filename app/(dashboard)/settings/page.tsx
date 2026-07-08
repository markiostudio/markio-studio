import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { DashboardCard } from "@/components/dashboard/ui/dashboard-card";

export default function SettingsPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <SectionHeader title="Settings" description="Manage your account preferences" />
      <div className="space-y-4 max-w-2xl">
        {[
          { label: "Profile", description: "Your name, email, and avatar" },
          { label: "Notifications", description: "Email and push notification preferences" },
          { label: "Language", description: "Choose your preferred language" },
          { label: "Security", description: "Password and two-factor authentication" },
        ].map((setting) => (
          <DashboardCard key={setting.label} hover className="cursor-pointer">
            <h3 className="text-sm font-semibold text-white">{setting.label}</h3>
            <p className="mt-1 text-xs text-zinc-500">{setting.description}</p>
          </DashboardCard>
        ))}
      </div>
    </div>
  );
}
