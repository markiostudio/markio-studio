"use client";

import { useEffect, useMemo, useState } from "react";
import { generatedAssets, type GeneratedAsset } from "@/lib/dashboard/launch-report-data";
import {
  DEFAULT_BUSINESS_BRAIN,
  type BusinessBrain,
} from "@/lib/dashboard/business-brain";
import {
  getBusinessBrain,
  personalizeGeneratedAssets,
} from "@/lib/dashboard/business-brain-storage";
import { getIndustryRecommendations } from "@/lib/dashboard/industry-recommendations";
import {
  computeLaunchReportScores,
  type LaunchReportScores,
} from "@/lib/dashboard/launch-report-scores";
import { LaunchReportHeader } from "@/components/dashboard/launch-report/launch-report-header";
import {
  BusinessInsights,
  BusinessMetricCards,
} from "@/components/dashboard/launch-report/business-metric-cards";
import { ScorePanel } from "@/components/dashboard/launch-report/score-panel";
import { LaunchReportActions } from "@/components/dashboard/launch-report/launch-report-actions";
import { GeneratedAssetsGrid } from "@/components/dashboard/launch-report/asset-card";
import { AIRecommendationsPanel } from "@/components/dashboard/launch-report/ai-recommendations-panel";
import { LaunchReportFooter } from "@/components/dashboard/launch-report/launch-report-footer";

export function LaunchReportContent() {
  const [brain, setBrain] = useState<BusinessBrain>(DEFAULT_BUSINESS_BRAIN);
  const [assets, setAssets] = useState<GeneratedAsset[]>(() =>
    personalizeGeneratedAssets(DEFAULT_BUSINESS_BRAIN, generatedAssets)
  );
  const [scores, setScores] = useState<LaunchReportScores>(() =>
    computeLaunchReportScores(DEFAULT_BUSINESS_BRAIN)
  );

  const recommendations = useMemo(
    () => getIndustryRecommendations(brain.business.industry),
    [brain.business.industry]
  );

  useEffect(() => {
    const next = getBusinessBrain();
    setBrain(next);
    setAssets(personalizeGeneratedAssets(next));
    setScores(computeLaunchReportScores(next));
  }, []);

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <LaunchReportHeader />
      <LaunchReportActions continueHref="/landing-page-preview" />

      <div className="flex flex-col gap-8 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1">
          <BusinessMetricCards brain={brain} />
          <BusinessInsights brain={brain} />
          <ScorePanel scores={scores} />
          <GeneratedAssetsGrid assets={assets} />
          <LaunchReportFooter />
        </div>

        <div className="w-full shrink-0 xl:w-[320px] 2xl:w-[360px]">
          <AIRecommendationsPanel recommendations={recommendations} />
        </div>
      </div>
    </div>
  );
}
