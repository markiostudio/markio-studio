import type { BusinessBrain } from "@/lib/dashboard/business-brain";

export type LaunchReportScores = {
  brandIdentity: number;
  conversion: number;
  seo: number;
  trust: number;
  overall: number;
};

export function computeLaunchReportScores(brain: BusinessBrain): LaunchReportScores {
  let brandIdentity = 68;
  let conversion = 65;
  let seo = 62;
  let trust = 70;

  if (brain.business.name) brandIdentity += 8;
  if (brain.business.industry) brandIdentity += 6;
  if (brain.branding.style) brandIdentity += 5;
  if (brain.business.usp) brandIdentity += 7;
  if (brain.branding.primaryColor && brain.branding.secondaryColor) brandIdentity += 3;

  if (brain.business.goal) conversion += 10;
  if (brain.business.description) conversion += 8;
  if (brain.business.audience) conversion += 6;
  if (brain.hero.cta) conversion += 4;

  if (brain.business.location) seo += 12;
  if (brain.business.industry) seo += 5;
  if (brain.seo.title) seo += 4;
  if (brain.seo.keywords.length >= 3) seo += 4;
  if (brain.seo.description) seo += 3;

  if (brain.business.location) trust += 8;
  if (brain.business.usp) trust += 6;
  if (brain.business.audience) trust += 5;
  if (brain.business.name) trust += 4;
  if (brain.testimonials.length >= 3) trust += 4;

  const clamp = (value: number) => Math.min(98, Math.max(58, value));

  brandIdentity = clamp(brandIdentity);
  conversion = clamp(conversion);
  seo = clamp(seo);
  trust = clamp(trust);

  const overall = clamp(Math.round((brandIdentity + conversion + seo + trust) / 4));

  return { brandIdentity, conversion, seo, trust, overall };
}

export const SCORE_LABELS: {
  key: keyof Omit<LaunchReportScores, "overall">;
  label: string;
}[] = [
  { key: "brandIdentity", label: "Brand Identity" },
  { key: "conversion", label: "Conversion" },
  { key: "seo", label: "SEO" },
  { key: "trust", label: "Trust" },
];
