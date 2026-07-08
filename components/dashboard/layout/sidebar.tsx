"use client";

import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  accountNavItems,
  mainNavItems,
  workspaceNavItems,
} from "@/lib/dashboard/navigation";
import { SidebarItem } from "./sidebar-item";
import { GradientButton } from "../ui/gradient-button";

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
  mobileOpen: boolean;
  onMobileClose: () => void;
};

export function Sidebar({
  collapsed,
  onToggleCollapse,
  mobileOpen,
  onMobileClose,
}: SidebarProps) {
  return (
    <>
      {mobileOpen && (
        <button
          type="button"
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={onMobileClose}
          aria-label="Close sidebar"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex flex-col border-r border-white/[0.08] bg-[#0B0B10] transition-all duration-300 lg:static lg:z-auto",
          collapsed ? "w-[72px]" : "w-[260px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="flex h-16 items-center justify-between border-b border-white/[0.08] px-4">
          <Link href="/" className="flex items-center gap-2.5 overflow-hidden">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C5CFF] to-[#3B82F6] shadow-lg shadow-[#7C5CFF]/25">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            {!collapsed && (
              <span className="truncate text-base font-bold tracking-tight text-white">
                Markio
              </span>
            )}
          </Link>
          <button
            type="button"
            onClick={onMobileClose}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-zinc-400 hover:bg-white/[0.06] hover:text-white lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {mainNavItems.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
                collapsed={collapsed}
                onNavigate={onMobileClose}
              />
            ))}
          </div>

          {!collapsed && (
            <p className="mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
              Workspace
            </p>
          )}
          <div className="space-y-1">
            {workspaceNavItems.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
                collapsed={collapsed}
                onNavigate={onMobileClose}
              />
            ))}
          </div>

          {!collapsed && (
            <p className="mb-2 mt-6 px-3 text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
              Account
            </p>
          )}
          <div className="space-y-1">
            {accountNavItems.map((item) => (
              <SidebarItem
                key={item.href}
                item={item}
                collapsed={collapsed}
                onNavigate={onMobileClose}
              />
            ))}
          </div>
        </nav>

        <div className="border-t border-white/[0.08] p-3">
          {!collapsed ? (
            <div className="rounded-xl border border-white/[0.08] bg-[#111218] p-3">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#EC4899] text-xs font-bold text-white">
                  U
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-white">User</p>
                  <span className="inline-flex rounded-full bg-[#7C5CFF]/15 px-2 py-0.5 text-[10px] font-medium text-[#A78BFA]">
                    Free Plan
                  </span>
                </div>
              </div>
              <GradientButton className="mt-3 w-full" size="sm">
                Upgrade
              </GradientButton>
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-[#7C5CFF] to-[#EC4899] text-xs font-bold text-white">
                U
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={onToggleCollapse}
            className="mt-3 hidden w-full items-center justify-center gap-2 rounded-lg py-2 text-xs text-zinc-500 transition-colors hover:bg-white/[0.04] hover:text-zinc-300 lg:flex"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <>
                <ChevronLeft className="h-4 w-4" />
                Collapse
              </>
            )}
          </button>
        </div>
      </aside>
    </>
  );
}
