"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FolderKanban, Plus } from "lucide-react";
import type { MarkioProject } from "@/lib/dashboard/project";
import {
  getActiveProjectId,
  loadProjects,
} from "@/lib/dashboard/project-storage";
import { activateProjectWorkspace } from "@/lib/dashboard/business-brain-storage";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { OnboardingFlow } from "@/components/dashboard/onboarding/onboarding-flow";
import { MarkioProjectCard } from "@/components/dashboard/projects/markio-project-card";

export function ProjectsPageClient() {
  const router = useRouter();
  const [projects, setProjects] = useState<MarkioProject[]>([]);
  const [activeProjectId, setActiveProjectIdState] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);

  const refresh = useCallback(() => {
    setProjects(loadProjects());
    setActiveProjectIdState(getActiveProjectId());
  }, []);

  useEffect(() => {
    refresh();
    setReady(true);
  }, [refresh]);

  function handleCreateNewProject() {
    setOnboardingOpen(true);
  }

  function handleOpenProject(projectId: string) {
    const brain = activateProjectWorkspace(projectId);
    if (!brain) return;

    refresh();
    router.push("/landing-page-preview");
    router.refresh();
  }

  function handleOnboardingClose() {
    setOnboardingOpen(false);
    refresh();
  }

  if (!ready) {
    return (
      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <SectionHeader title="Projects" description="All your business projects in one place" />
        <div className="h-40 animate-pulse rounded-2xl border border-white/[0.08] bg-[#111218]/50" />
      </div>
    );
  }

  return (
    <div className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">Projects</h2>
          <p className="mt-1 text-sm text-zinc-400">
            All your business projects in one place
          </p>
        </div>
        <GradientButton type="button" size="md" onClick={handleCreateNewProject}>
          <Plus className="h-4 w-4" />
          Create New Project
        </GradientButton>
      </div>

      {projects.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-[#111218]/50 px-8 py-16 text-center">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF]/20 to-[#3B82F6]/10">
            <FolderKanban className="h-7 w-7 text-[#7C5CFF]" />
          </div>
          <h3 className="text-lg font-semibold text-white">No projects yet</h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">
            Create a new project to generate a Business Brain, landing page, and launch report for
            each business.
          </p>
          <GradientButton type="button" className="mt-6" onClick={handleCreateNewProject}>
            <Plus className="h-4 w-4" />
            Create New Project
          </GradientButton>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {projects.map((project, index) => (
            <MarkioProjectCard
              key={project.id}
              project={project}
              index={index}
              isActive={project.id === activeProjectId}
              onOpen={handleOpenProject}
            />
          ))}
        </div>
      )}

      <OnboardingFlow open={onboardingOpen} onClose={handleOnboardingClose} />
    </div>
  );
}
