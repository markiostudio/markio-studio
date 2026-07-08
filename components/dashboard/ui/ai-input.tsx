"use client";

import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type AIInputProps = {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
  className?: string;
};

export function AIInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Ask anything...",
  className,
}: AIInputProps) {
  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit?.();
    }
  }

  return (
    <div className={cn("relative", className)}>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        rows={3}
        className="w-full resize-none rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-3 pr-12 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15"
      />
      <button
        type="button"
        onClick={onSubmit}
        className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-[#7C5CFF] to-[#8B5CF6] text-white shadow-md shadow-[#7C5CFF]/25 transition-all duration-300 hover:brightness-110"
        aria-label="Send message"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
