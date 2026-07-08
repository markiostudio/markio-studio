import { Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Template } from "@/lib/dashboard/data";

type TemplateCardProps = {
  template: Template;
};

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFF]/25 hover:shadow-lg hover:shadow-[#7C5CFF]/10">
      <div
        className={cn(
          "relative flex h-36 items-center justify-center bg-gradient-to-br",
          template.gradient
        )}
      >
        <div className="absolute inset-0 bg-[#111218]/20" />
        <span className="relative text-2xl font-bold text-white/20">
          {template.title.charAt(0)}
        </span>
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <button
            type="button"
            className="flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
          >
            <Eye className="h-3.5 w-3.5" />
            Preview
          </button>
        </div>
        {template.badge && (
          <span
            className={cn(
              "absolute top-3 left-3 rounded-full px-2.5 py-0.5 text-[10px] font-semibold",
              template.badge === "Popular"
                ? "bg-[#7C5CFF]/20 text-[#A78BFA]"
                : "bg-emerald-500/20 text-emerald-400"
            )}
          >
            {template.badge}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold text-white">{template.title}</h3>
        <p className="mt-0.5 text-xs text-zinc-500">{template.category}</p>
      </div>
    </div>
  );
}
