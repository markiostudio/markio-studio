import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { demoAssets, type DemoAsset } from "@/lib/dashboard/home-data";
import { LandingPageMockup } from "./mockups/landing-page-mockup";
import { AdMockup } from "./mockups/ad-mockup";
import { EmailMockup } from "./mockups/email-mockup";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { MotionStaggerArticle } from "@/components/dashboard/ui/motion-primitives";

function AssetMockup({ type }: { type: DemoAsset["mockup"] }) {
  switch (type) {
    case "landing":
      return <LandingPageMockup />;
    case "ads":
      return <AdMockup />;
    case "email":
      return <EmailMockup />;
  }
}

const statusStyles = {
  Live: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  Ready: "bg-[#7C5CFF]/15 text-[#A78BFA] border-[#7C5CFF]/20",
  Draft: "bg-zinc-500/15 text-zinc-400 border-zinc-500/20",
};

export function DemoShowcase() {
  return (
    <section className="mb-8">
      <SectionHeader
        title="What Markio created for you"
        description="Real assets from your GlowFit Studio demo project"
        action={{ label: "View all projects", href: "/projects" }}
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {demoAssets.map((asset, index) => (
          <MotionStaggerArticle
            key={asset.id}
            index={index}
            className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] transition-all duration-300 hover:-translate-y-1 hover:border-[#7C5CFF]/25 hover:shadow-xl hover:shadow-[#7C5CFF]/5"
          >
            <div className="relative bg-[#09090B] p-4">
              <div className="mx-auto max-w-[200px] transition-transform duration-300 group-hover:scale-[1.02]">
                <AssetMockup type={asset.mockup} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="flex items-center gap-1.5 rounded-xl bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                  <ExternalLink className="h-3 w-3" />
                  Preview
                </span>
              </div>
            </div>

            <div className="border-t border-white/[0.06] p-4">
              <div className="mb-2 flex items-start justify-between gap-2">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-wider text-zinc-500">
                    {asset.type}
                  </p>
                  <h3 className="mt-0.5 text-sm font-semibold text-white">{asset.title}</h3>
                </div>
                <span
                  className={cn(
                    "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-semibold",
                    statusStyles[asset.status]
                  )}
                >
                  {asset.status}
                </span>
              </div>
              {asset.metric && (
                <p className="text-xs text-[#7C5CFF]">{asset.metric}</p>
              )}
              <p className="mt-1 text-[10px] text-zinc-600">Updated {asset.updated}</p>
            </div>
          </MotionStaggerArticle>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-[#7C5CFF]/15 bg-gradient-to-r from-[#7C5CFF]/5 via-transparent to-[#3B82F6]/5 p-5 sm:p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-white">
              Ready to build your own business?
            </p>
            <p className="mt-1 text-xs text-zinc-400">
              Describe your business above and Markio will create assets just like these.
            </p>
          </div>
          <Link
            href="/assistant"
            className="inline-flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#8B5CF6] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFF]/20 transition-all hover:brightness-110"
          >
            Start building
          </Link>
        </div>
      </div>
    </section>
  );
}
