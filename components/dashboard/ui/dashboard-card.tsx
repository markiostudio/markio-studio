import { cn } from "@/lib/utils";

type DashboardCardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function DashboardCard({ children, className, hover = false }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/[0.08] bg-[#111218] p-5 transition-all duration-300",
        hover && "hover:bg-[#181A22] hover:border-[#7C5CFF]/20 hover:shadow-lg hover:shadow-[#7C5CFF]/5",
        className
      )}
    >
      {children}
    </div>
  );
}
