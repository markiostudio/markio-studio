"use client";

import { ArrowRight, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  formatProjectUpdatedAt,
  getProjectGradient,
  type MarkioProject,
} from "@/lib/dashboard/project";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

type MarkioProjectCardProps = {
  project: MarkioProject;
  index?: number;
  isActive?: boolean;
  onOpen: (projectId: string) => void;
};

export function MarkioProjectCard({
  project,
  index = 0,
  isActive = false,
  onOpen,
}: MarkioProjectCardProps) {
  const gradient = getProjectGradient(project.id);

  return (
    <MotionStaggerItem
      index={index}
      staggerDelay={0.06}
      className={cn(
        "group overflow-hidden rounded-2xl border bg-[#111218] transition-all duration-300",
        isActive
          ? "border-[#7C5CFF]/40 ring-1 ring-[#7C5CFF]/25"
          : "border-white/[0.08] hover:border-[#7C5CFF]/20 hover:bg-[#181A22]"
      )}
    >
      <div
        className={cn(
          "flex h-28 items-center justify-center bg-gradient-to-br",
          gradient
        )}
      >
        <span className="text-3xl font-bold text-white/30">
          {project.name.charAt(0).toUpperCase()}
        </span>
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#7C5CFF]/15 text-[#A78BFA]">
            <Building2 className="h-4 w-4" />
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-sm font-semibold text-white">{project.name}</h3>
              {isActive ? (
                <span className="shrink-0 rounded-full bg-[#7C5CFF]/15 px-2 py-0.5 text-[10px] font-medium text-[#A78BFA]">
                  Active
                </span>
              ) : null}
            </div>
            <p className="mt-0.5 truncate text-xs text-zinc-500">{project.industry}</p>
            <p className="mt-2 text-xs text-zinc-500">
              Last Updated {formatProjectUpdatedAt(project.updatedAt)}
            </p>
          </div>
        </div>

        <GradientButton
          type="button"
          size="sm"
          className="mt-4 w-full"
          onClick={() => onOpen(project.id)}
        >
          Open Workspace
          <ArrowRight className="h-3.5 w-3.5" />
        </GradientButton>
      </div>
    </MotionStaggerItem>
  );
}
