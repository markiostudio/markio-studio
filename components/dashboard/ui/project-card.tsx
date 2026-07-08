import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/dashboard/data";

type ProjectCardProps = {
  project: Project;
};

const statusStyles = {
  Live: "bg-emerald-500/15 text-emerald-400",
  Draft: "bg-zinc-500/15 text-zinc-400",
  "In Review": "bg-amber-500/15 text-amber-400",
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] transition-all duration-300 hover:border-[#7C5CFF]/20 hover:bg-[#181A22]">
      <div
        className={cn(
          "flex h-28 items-center justify-center bg-gradient-to-br",
          project.gradient
        )}
      >
        <span className="text-3xl font-bold text-white/30">
          {project.name.charAt(0)}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-white">{project.name}</h3>
            <p className="mt-0.5 text-xs text-zinc-500">Updated {project.lastUpdated}</p>
          </div>
          <button
            type="button"
            className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-zinc-500 opacity-0 transition-all hover:bg-white/[0.06] hover:text-white group-hover:opacity-100"
            aria-label="More options"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
        <span
          className={cn(
            "mt-3 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-medium",
            statusStyles[project.status]
          )}
        >
          {project.status}
        </span>
      </div>
    </div>
  );
}
