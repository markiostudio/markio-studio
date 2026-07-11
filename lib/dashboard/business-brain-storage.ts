import {
  DEFAULT_BUSINESS_BRAIN,
  parseBusinessBrain,
  type BusinessBrain,
} from "@/lib/dashboard/business-brain";
import type { GeneratedAsset } from "@/lib/dashboard/launch-report-data";
import { generatedAssets } from "@/lib/dashboard/launch-report-data";
import {
  getActiveProject,
  migrateLegacyBrainToProject,
  openProject,
  syncActiveProjectBrain,
} from "@/lib/dashboard/project-storage";

export const MARKIO_BUSINESS_BRAIN_KEY = "markio_business_brain";

/** Write the workspace brain snapshot without touching project records. */
export function writeBusinessBrainSnapshot(brain: BusinessBrain): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(MARKIO_BUSINESS_BRAIN_KEY, JSON.stringify(brain));
}

export function saveBusinessBrain(brain: BusinessBrain): void {
  writeBusinessBrainSnapshot(brain);
  syncActiveProjectBrain(brain);
}

export function loadBusinessBrain(): BusinessBrain | null {
  if (typeof window === "undefined") return null;

  // Prefer the active project's brain so opening a project restores the workspace.
  const activeProject = getActiveProject();
  if (activeProject) {
    return activeProject.businessBrain;
  }

  const raw = window.localStorage.getItem(MARKIO_BUSINESS_BRAIN_KEY);
  if (!raw) return null;

  try {
    const brain = parseBusinessBrain(JSON.parse(raw));
    migrateLegacyBrainToProject(brain);
    return brain;
  } catch {
    return null;
  }
}

/** Single source of truth accessor — active project brain, stored brain, or default. */
export function getBusinessBrain(): BusinessBrain {
  return loadBusinessBrain() ?? DEFAULT_BUSINESS_BRAIN;
}

/** Open a project and restore its Business Brain into the workspace. */
export function activateProjectWorkspace(projectId: string): BusinessBrain | null {
  const project = openProject(projectId);
  if (!project) return null;
  writeBusinessBrainSnapshot(project.businessBrain);
  return project.businessBrain;
}

export function personalizeGeneratedAssets(
  brain: BusinessBrain,
  assets: GeneratedAsset[] = generatedAssets
): GeneratedAsset[] {
  const label = brain.business.name || brain.business.industry || "your business";

  return assets.map((asset) => {
    switch (asset.id) {
      case "brand":
        return {
          ...asset,
          description: brain.business.usp
            ? `${brain.business.usp} Colors: ${brain.branding.primaryColor}, ${brain.branding.secondaryColor}.`
            : `Logo, color palette, fonts, and brand voice tailored to ${label}.`,
        };
      case "website":
        return {
          ...asset,
          title: brain.business.name ? `${brain.business.name} Website` : asset.title,
          description: `A full 5-page website for ${label} with home, about, services, testimonials, and contact.`,
        };
      case "landing":
        return {
          ...asset,
          title: brain.business.name ? `${brain.business.name} Landing Page` : asset.title,
          description: brain.hero.headline
            ? `${brain.hero.headline} — ${brain.hero.cta}`
            : `High-converting page for ${label} with headline, benefits, social proof, and a lead form.`,
        };
      case "ads":
        return {
          ...asset,
          description: `Ad variations for ${label} with headlines, copy, and CTA — optimized for ${brain.business.goal || "lead generation"}.`,
        };
      case "social":
        return {
          ...asset,
          description: `Instagram and Facebook posts for ${label} ready to schedule.`,
        };
      case "email":
        return {
          ...asset,
          description: `Welcome series to nurture new leads for ${label}.`,
        };
      default:
        return asset;
    }
  });
}
