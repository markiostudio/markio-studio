import Link from "next/link";
import { Sparkles } from "lucide-react";
import { GradientButton } from "./gradient-button";

type EmptyStateProps = {
  title: string;
  description: string;
  actionLabel?: string;
  actionHref?: string;
};

export function EmptyState({
  title,
  description,
  actionLabel,
  actionHref,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/[0.08] bg-[#111218]/50 px-8 py-16 text-center">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7C5CFF]/20 to-[#3B82F6]/10">
        <Sparkles className="h-7 w-7 text-[#7C5CFF]" />
      </div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-400">{description}</p>
      {actionLabel && actionHref && (
        <Link href={actionHref} className="mt-6">
          <GradientButton>{actionLabel}</GradientButton>
        </Link>
      )}
    </div>
  );
}
