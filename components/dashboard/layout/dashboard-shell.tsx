"use client";

import { useState } from "react";
import { Bot } from "lucide-react";
import { Sidebar } from "./sidebar";
import { TopHeader } from "./top-header";
import { CopilotPanel } from "./copilot-panel";
import { MotionMain } from "@/components/dashboard/ui/motion-primitives";

type DashboardShellProps = {
  children: React.ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileCopilotOpen, setMobileCopilotOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-[#09090B]">
      <Sidebar
        collapsed={sidebarCollapsed}
        onToggleCollapse={() => setSidebarCollapsed((prev) => !prev)}
        mobileOpen={mobileSidebarOpen}
        onMobileClose={() => setMobileSidebarOpen(false)}
      />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopHeader
          onMenuClick={() => setMobileSidebarOpen(true)}
          onCopilotToggle={() => setMobileCopilotOpen(true)}
          showCopilotToggle
        />

        <div className="flex min-h-0 flex-1">
          <MotionMain className="min-w-0 flex-1 overflow-y-auto">
            {children}
          </MotionMain>

          <CopilotPanel
            mobileOpen={mobileCopilotOpen}
            onMobileClose={() => setMobileCopilotOpen(false)}
          />
        </div>
      </div>

      <button
        type="button"
        onClick={() => setMobileCopilotOpen(true)}
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#7C5CFF] to-[#3B82F6] text-white shadow-xl shadow-[#7C5CFF]/30 transition-transform hover:scale-105 xl:hidden"
        aria-label="Open AI Copilot"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
}
