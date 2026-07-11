"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
import type { BusinessBrain } from "@/lib/dashboard/business-brain";
import { getBusinessBrain, loadBusinessBrain } from "@/lib/dashboard/business-brain-storage";
import { LandingPagePreviewScreen } from "@/components/dashboard/landing-page/landing-page-preview";

export function LandingPagePreviewPageClient() {
  const router = useRouter();
  const [brain, setBrain] = useState<BusinessBrain | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = loadBusinessBrain();
    if (!stored) {
      router.replace("/");
      return;
    }
    setBrain(getBusinessBrain());
    setReady(true);
  }, [router]);

  if (!ready || !brain) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-[#7C5CFF]" />
      </div>
    );
  }

  return <LandingPagePreviewScreen brain={brain} />;
}
