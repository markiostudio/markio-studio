export type IndustryColorPalette = {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
};

const DEFAULT_PALETTE: IndustryColorPalette = {
  primaryColor: "#7C5CFF",
  secondaryColor: "#3B82F6",
  accentColor: "#A78BFA",
};

function matchIndustry(industry: string): string {
  return industry.toLowerCase();
}

export function getIndustryColorDefaults(industry: string | null | undefined): IndustryColorPalette {
  if (!industry?.trim()) return DEFAULT_PALETTE;

  const value = matchIndustry(industry);

  if (
    value.includes("restaurant") ||
    value.includes("food") ||
    value.includes("cafe") ||
    value.includes("dining") ||
    value.includes("ramen") ||
    value.includes("bakery")
  ) {
    return { primaryColor: "#C2410C", secondaryColor: "#EA580C", accentColor: "#FBBF24" };
  }

  if (
    value.includes("salon") ||
    value.includes("beauty") ||
    value.includes("spa") ||
    value.includes("cosmetic") ||
    value.includes("skincare")
  ) {
    return { primaryColor: "#BE185D", secondaryColor: "#EC4899", accentColor: "#F9A8D4" };
  }

  if (
    value.includes("dental") ||
    value.includes("clinic") ||
    value.includes("medical") ||
    value.includes("healthcare") ||
    value.includes("doctor")
  ) {
    return { primaryColor: "#0369A1", secondaryColor: "#0EA5E9", accentColor: "#BAE6FD" };
  }

  if (
    value.includes("real estate") ||
    value.includes("realtor") ||
    value.includes("property") ||
    value.includes("realty")
  ) {
    return { primaryColor: "#1E3A5F", secondaryColor: "#B8860B", accentColor: "#D4AF37" };
  }

  if (
    value.includes("gym") ||
    value.includes("fitness") ||
    value.includes("crossfit") ||
    value.includes("training") ||
    value.includes("workout")
  ) {
    return { primaryColor: "#18181B", secondaryColor: "#EF4444", accentColor: "#F97316" };
  }

  if (value.includes("law") || value.includes("legal") || value.includes("attorney")) {
    return { primaryColor: "#1E293B", secondaryColor: "#64748B", accentColor: "#CBD5E1" };
  }

  if (value.includes("tech") || value.includes("software") || value.includes("saas")) {
    return { primaryColor: "#4F46E5", secondaryColor: "#06B6D4", accentColor: "#818CF8" };
  }

  return DEFAULT_PALETTE;
}

export function applyIndustryColorFallbacks(
  industry: string | null | undefined,
  colors: Partial<IndustryColorPalette>
): IndustryColorPalette {
  const defaults = getIndustryColorDefaults(industry);

  return {
    primaryColor: colors.primaryColor || defaults.primaryColor,
    secondaryColor: colors.secondaryColor || defaults.secondaryColor,
    accentColor: colors.accentColor || defaults.accentColor,
  };
}
