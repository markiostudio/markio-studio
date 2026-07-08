import { cn } from "@/lib/utils";

type GradientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
};

export function GradientButton({
  className,
  variant = "primary",
  size = "md",
  children,
  ...props
}: GradientButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-sm",
  };

  const variants = {
    primary:
      "bg-gradient-to-r from-[#7C5CFF] via-[#8B5CF6] to-[#3B82F6] text-white shadow-lg shadow-[#7C5CFF]/20 hover:shadow-[#7C5CFF]/35 hover:brightness-110",
    secondary:
      "bg-[#111218] text-white border border-white/[0.08] hover:bg-[#181A22] hover:border-[#7C5CFF]/30",
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/[0.04]",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
