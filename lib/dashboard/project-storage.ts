import {
  parseBusinessBrain,
  type BusinessBrain,
} from "@/lib/dashboard/business-brain";
import {
  createProjectFromBrain,
  type MarkioProject,
} from "@/lib/dashboard/project";

export const MARKIO_PROJECTS_KEY = "markio_projects";
export const MARKIO_ACTIVE_PROJECT_ID_KEY = "markio_active_project_id";

function canUseStorage(): boolean {
  return typeof window !== "undefined";
}

function parseProjects(raw: unknown): MarkioProject[] {
  if (!Array.isArray(raw)) return [];

  const projects: MarkioProject[] = [];

  for (const item of raw) {
    if (!item || typeof item !== "object" || Array.isArray(item)) continue;
    const source = item as Record<string, unknown>;

    try {
      const businessBrain = parseBusinessBrain(source.businessBrain);
      const id = typeof source.id === "string" ? source.id.trim() : "";
      if (!id) continue;

      projects.push({
        id,
        name:
          (typeof source.name === "string" && source.name.trim()) ||
          businessBrain.business.name ||
          "Untitled Business",
        industry:
          (typeof source.industry === "string" && source.industry.trim()) ||
          businessBrain.business.industry ||
          "General",
        createdAt:
          typeof source.createdAt === "string" && source.createdAt
            ? source.createdAt
            : new Date().toISOString(),
        updatedAt:
          typeof source.updatedAt === "string" && source.updatedAt
            ? source.updatedAt
            : new Date().toISOString(),
        businessBrain,
      });
    } catch {
      // Skip invalid project entries.
    }
  }

  return projects;
}

export function loadProjects(): MarkioProject[] {
  if (!canUseStorage()) return [];

  const raw = window.localStorage.getItem(MARKIO_PROJECTS_KEY);
  if (!raw) return [];

  try {
    return parseProjects(JSON.parse(raw));
  } catch {
    return [];
  }
}

export function saveProjects(projects: MarkioProject[]): void {
  if (!canUseStorage()) return;
  window.localStorage.setItem(MARKIO_PROJECTS_KEY, JSON.stringify(projects));
}

export function getActiveProjectId(): string | null {
  if (!canUseStorage()) return null;
  return window.localStorage.getItem(MARKIO_ACTIVE_PROJECT_ID_KEY);
}

export function setActiveProjectId(projectId: string | null): void {
  if (!canUseStorage()) return;

  if (!projectId) {
    window.localStorage.removeItem(MARKIO_ACTIVE_PROJECT_ID_KEY);
    return;
  }

  window.localStorage.setItem(MARKIO_ACTIVE_PROJECT_ID_KEY, projectId);
}

export function getProjectById(projectId: string): MarkioProject | null {
  return loadProjects().find((project) => project.id === projectId) ?? null;
}

export function getActiveProject(): MarkioProject | null {
  const activeId = getActiveProjectId();
  if (!activeId) return null;
  return getProjectById(activeId);
}

/** Persist a brand-new project and make it the active workspace. */
export function createAndActivateProject(brain: BusinessBrain): MarkioProject {
  const project = createProjectFromBrain(brain);
  const projects = loadProjects();
  saveProjects([project, ...projects]);
  setActiveProjectId(project.id);
  return project;
}

/** Update an existing project's brain + metadata. */
export function updateProjectBrain(
  projectId: string,
  brain: BusinessBrain
): MarkioProject | null {
  const projects = loadProjects();
  const index = projects.findIndex((project) => project.id === projectId);
  if (index < 0) return null;

  const updated: MarkioProject = {
    ...projects[index],
    name: brain.business.name || projects[index].name,
    industry: brain.business.industry || projects[index].industry,
    updatedAt: new Date().toISOString(),
    businessBrain: brain,
  };

  projects[index] = updated;
  saveProjects(projects);
  return updated;
}

/**
 * Restore a project into the active workspace.
 * Returns the project's Business Brain for downstream consumers.
 */
export function openProject(projectId: string): MarkioProject | null {
  const project = getProjectById(projectId);
  if (!project) return null;

  setActiveProjectId(project.id);
  return project;
}

/** Keep the active project in sync when the workspace brain is saved. */
export function syncActiveProjectBrain(brain: BusinessBrain): void {
  const activeId = getActiveProjectId();
  if (!activeId) return;
  updateProjectBrain(activeId, brain);
}

/**
 * If an orphan Business Brain exists (legacy single-brain storage)
 * and there are no projects yet, create a project from it.
 */
export function migrateLegacyBrainToProject(brain: BusinessBrain): MarkioProject | null {
  const existing = loadProjects();
  if (existing.length > 0) return null;

  return createAndActivateProject(brain);
}
