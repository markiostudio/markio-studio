import type { BusinessBrain } from "@/lib/dashboard/business-brain";

export type MarkioProject = {
  id: string;
  name: string;
  industry: string;
  createdAt: string;
  updatedAt: string;
  businessBrain: BusinessBrain;
};

export const PROJECT_CARD_GRADIENTS = [
  "from-emerald-500/40 to-teal-700/30",
  "from-blue-500/40 to-indigo-700/30",
  "from-amber-500/40 to-orange-700/30",
  "from-purple-500/40 to-violet-700/30",
  "from-pink-500/40 to-rose-700/30",
  "from-[#7C5CFF]/40 to-[#3B82F6]/30",
] as const;

export function getProjectGradient(projectId: string): string {
  let hash = 0;
  for (let i = 0; i < projectId.length; i += 1) {
    hash = (hash + projectId.charCodeAt(i) * (i + 1)) % PROJECT_CARD_GRADIENTS.length;
  }
  return PROJECT_CARD_GRADIENTS[hash];
}

export function formatProjectUpdatedAt(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "Unknown";

  const diffMs = Date.now() - date.getTime();
  const diffMinutes = Math.floor(diffMs / 60_000);
  if (diffMinutes < 1) return "Just now";
  if (diffMinutes < 60) return `${diffMinutes} min ago`;

  const diffHours = Math.floor(diffMinutes / 60);
  if (diffHours < 24) return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;

  const diffDays = Math.floor(diffHours / 24);
  if (diffDays === 1) return "Yesterday";
  if (diffDays < 7) return `${diffDays} days ago`;

  return date.toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function createProjectFromBrain(brain: BusinessBrain): MarkioProject {
  const now = new Date().toISOString();
  const id =
    typeof crypto !== "undefined" && typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : `project_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;

  return {
    id,
    name: brain.business.name || "Untitled Business",
    industry: brain.business.industry || "General",
    createdAt: now,
    updatedAt: now,
    businessBrain: brain,
  };
}
