import {
  aiRecommendations,
  generatedAssets,
  launchReportBusiness,
} from "@/lib/dashboard/launch-report-data";
import { LaunchReportHeader } from "@/components/dashboard/launch-report/launch-report-header";
import { BusinessSummaryCard } from "@/components/dashboard/launch-report/business-summary-card";
import { GeneratedAssetsGrid } from "@/components/dashboard/launch-report/asset-card";
import { AIRecommendationsPanel } from "@/components/dashboard/launch-report/ai-recommendations-panel";
import { LaunchReportFooter } from "@/components/dashboard/launch-report/launch-report-footer";

export default function BusinessLaunchReportPage() {
  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <LaunchReportHeader />

      <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1">
          <BusinessSummaryCard business={launchReportBusiness} />
          <GeneratedAssetsGrid assets={generatedAssets} />
          <LaunchReportFooter />
        </div>

        <div className="w-full shrink-0 xl:w-[320px] 2xl:w-[360px]">
          <AIRecommendationsPanel recommendations={aiRecommendations} />
        </div>
      </div>
    </div>
  );
}
