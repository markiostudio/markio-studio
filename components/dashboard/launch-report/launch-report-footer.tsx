import Link from "next/link";
import { Rocket } from "lucide-react";
import { GradientButton } from "@/components/dashboard/ui/gradient-button";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

export function LaunchReportFooter() {
  return (
    <MotionStaggerItem
      index={8}
      className="overflow-hidden rounded-2xl border border-[#7C5CFF]/20 bg-gradient-to-r from-[#7C5CFF]/10 via-[#111218] to-[#3B82F6]/10 p-8 sm:p-10"
    >
      <div className="flex flex-col items-center text-center">
        <GradientButton size="lg" className="min-w-[240px]">
          <Rocket className="h-5 w-5" />
          Publish My Business
        </GradientButton>
        <Link
          href="/landing-pages"
          className="mt-4 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          Continue Editing
        </Link>
      </div>
    </MotionStaggerItem>
  );
}
