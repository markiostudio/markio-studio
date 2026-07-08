import { HeroAssistant } from "@/components/dashboard/home/hero-assistant";
import { HomeValueProposition } from "@/components/dashboard/home/home-value-proposition";
import { BusinessProgress } from "@/components/dashboard/home/business-progress";
import { DemoShowcase } from "@/components/dashboard/home/demo-showcase";

export default function DashboardHomePage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <HeroAssistant />
      <HomeValueProposition />
      <BusinessProgress />
      <DemoShowcase />
    </div>
  );
}
