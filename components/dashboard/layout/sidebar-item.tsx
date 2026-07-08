"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/lib/dashboard/navigation";

type SidebarItemProps = {
  item: NavItem;
  collapsed?: boolean;
  onNavigate?: () => void;
};

export function SidebarItem({ item, collapsed = false, onNavigate }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive =
    item.href === "/"
      ? pathname === "/"
      : pathname === item.href || pathname.startsWith(`${item.href}/`);

  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      title={collapsed ? item.label : undefined}
      onClick={onNavigate}
      className={cn(
        "group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all duration-300",
        collapsed && "justify-center px-2",
        isActive
          ? "bg-gradient-to-r from-[#7C5CFF]/20 via-[#8B5CF6]/10 to-transparent text-white"
          : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
      )}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-r-full bg-gradient-to-b from-[#7C5CFF] to-[#3B82F6]" />
      )}
      <Icon
        className={cn(
          "h-[18px] w-[18px] shrink-0 transition-colors",
          isActive ? "text-[#7C5CFF]" : "text-zinc-500 group-hover:text-zinc-300"
        )}
      />
      {!collapsed && <span className="truncate">{item.label}</span>}
    </Link>
  );
}
