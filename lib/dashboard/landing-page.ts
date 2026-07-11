import { applyIndustryColorFallbacks } from "@/lib/dashboard/landing-page-colors";
import {
  getPreviewUrlFromBrain,
  hexToRgb,
  type BusinessBrain,
} from "@/lib/dashboard/business-brain";

export { hexToRgb, getPreviewUrlFromBrain as getPreviewUrl };

/** Apply industry color fallbacks onto a Business Brain without changing other fields. */
export function withLandingPageColorFallbacks(brain: BusinessBrain): BusinessBrain {
  const colors = applyIndustryColorFallbacks(brain.business.industry, {
    primaryColor: brain.branding.primaryColor,
    secondaryColor: brain.branding.secondaryColor,
    accentColor: brain.branding.accentColor,
  });

  return {
    ...brain,
    branding: {
      ...brain.branding,
      primaryColor: colors.primaryColor,
      secondaryColor: colors.secondaryColor,
      accentColor: colors.accentColor,
    },
  };
}
