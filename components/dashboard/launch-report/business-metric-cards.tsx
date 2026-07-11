"use client";

import { Building2, MapPin, Target, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { BusinessBrain } from "@/lib/dashboard/business-brain";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

type BusinessMetricCardsProps = {
  brain: BusinessBrain;
};

type MetricCard = {
  key: string;
  label: string;
  value: string;
  icon: LucideIcon;
  accent: string;
};

export function BusinessMetricCards({ brain }: BusinessMetricCardsProps) {
  const metrics: MetricCard[] = [
    {
      key: "business",
      label: "Business",
      value: brain.business.name,
      icon: Building2,
      accent: "#7C5CFF",
    },
    {
      key: "industry",
      label: "Industry",
      value: brain.business.industry,
      icon: TrendingUp,
      accent: "#3B82F6",
    },
    {
      key: "goal",
      label: "Goal",
      value: brain.business.goal,
      icon: Target,
      accent: "#EC4899",
    },
    {
      key: "audience",
      label: "Audience",
      value: brain.business.audience || "Not specified",
      icon: Users,
      accent: "#F59E0B",
    },
    {
      key: "location",
      label: "Location",
      value: brain.business.location || "Not specified",
      icon: MapPin,
      accent: "#10B981",
    },
  ];

  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <MotionStaggerItem
            key={metric.key}
            index={index}
            staggerDelay={0.07}
            className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-5 transition-colors hover:border-white/[0.12]"
          >
            <div
              className="mb-3 flex h-9 w-9 items-center justify-center rounded-xl"
              style={{ backgroundColor: `${metric.accent}18`, color: metric.accent }}
            >
              <Icon className="h-4 w-4" />
            </div>
            <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
              {metric.label}
            </p>
            <p className="mt-1.5 line-clamp-2 text-sm font-semibold leading-snug text-white">
              {metric.value}
            </p>
          </MotionStaggerItem>
        );
      })}
    </div>
  );
}

type BusinessInsightsProps = {
  brain: BusinessBrain;
};

export function BusinessInsights({ brain }: BusinessInsightsProps) {
  if (!brain.business.description && !brain.business.usp) return null;

  return (
    <div className="mb-8 grid gap-4 sm:grid-cols-2">
      {brain.business.description ? (
        <MotionStaggerItem
          index={5}
          staggerDelay={0.07}
          className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 sm:p-6"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            AI Business Summary
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">
            {brain.business.description}
          </p>
        </MotionStaggerItem>
      ) : null}
      {brain.business.usp ? (
        <MotionStaggerItem
          index={6}
          staggerDelay={0.07}
          className="rounded-2xl border border-white/[0.08] bg-[#111218] p-5 sm:p-6"
        >
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            AI Positioning
          </p>
          <p className="mt-2 text-sm leading-relaxed text-zinc-300">{brain.business.usp}</p>
        </MotionStaggerItem>
      ) : null}
    </div>
  );
}
