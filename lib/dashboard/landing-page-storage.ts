import {
  parseBusinessBrain,
  type BusinessBrain,
} from "@/lib/dashboard/business-brain";
import { saveBusinessBrain, loadBusinessBrain } from "@/lib/dashboard/business-brain-storage";

/**
 * @deprecated Landing page content is stored in the Business Brain.
 * These helpers remain as thin aliases so existing imports keep working.
 */
export function saveLandingPage(brain: BusinessBrain): void {
  saveBusinessBrain(brain);
}

export function loadLandingPage(): BusinessBrain | null {
  return loadBusinessBrain();
}

export function parseLandingPageContent(raw: unknown): BusinessBrain {
  return parseBusinessBrain(raw);
}
