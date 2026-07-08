"use client";

import { Bell, Gift, Menu, Search, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreditBadge } from "../ui/credit-badge";

type TopHeaderProps = {
  onMenuClick: () => void;
  onCopilotToggle?: () => void;
  showCopilotToggle?: boolean;
};

export function TopHeader({
  onMenuClick,
  onCopilotToggle,
  showCopilotToggle = false,
}: TopHeaderProps) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-white/[0.08] bg-[#09090B]/80 px-4 backdrop-blur-xl sm:px-6">
      <button
        type="button"
        onClick={onMenuClick}
        className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="relative flex-1 max-w-xl">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="search"
          placeholder="Search anything..."
          className="w-full rounded-xl border border-white/[0.08] bg-[#111218] py-2.5 pl-10 pr-20 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/30 focus:ring-2 focus:ring-[#7C5CFF]/10"
        />
        <kbd className="absolute right-3 top-1/2 hidden -translate-y-1/2 rounded-md border border-white/[0.08] bg-[#09090B] px-2 py-0.5 text-[10px] font-medium text-zinc-500 sm:inline-block">
          Ctrl + K
        </kbd>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        <CreditBadge className="hidden sm:inline-flex" />

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-[#EC4899]"
          aria-label="Rewards"
        >
          <Gift className="h-[18px] w-[18px]" />
        </button>

        <button
          type="button"
          className="relative flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition-colors hover:bg-white/[0.06] hover:text-white"
          aria-label="Notifications"
        >
          <Bell className="h-[18px] w-[18px]" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#EC4899]" />
        </button>

        {showCopilotToggle && (
          <button
            type="button"
            onClick={onCopilotToggle}
            className="flex h-9 items-center gap-2 rounded-lg border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-3 text-xs font-medium text-[#A78BFA] transition-colors hover:bg-[#7C5CFF]/20 xl:hidden"
          >
            AI Copilot
          </button>
        )}

        <button
          type="button"
          className={cn(
            "flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6] text-white"
          )}
          aria-label="User menu"
        >
          <User className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}
