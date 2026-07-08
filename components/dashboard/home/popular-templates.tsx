"use client";

import { useState } from "react";
import { templateCategories, templates, type TemplateCategory } from "@/lib/dashboard/data";
import { SectionHeader } from "@/components/dashboard/ui/section-header";
import { TemplateCard } from "@/components/dashboard/ui/template-card";
import { cn } from "@/lib/utils";

export function PopularTemplates() {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory>("All");

  const filtered =
    activeCategory === "All"
      ? templates
      : activeCategory === "More"
        ? templates.slice(0, 2)
        : templates.filter((t) => t.category === activeCategory);

  return (
    <section className="mb-10">
      <SectionHeader
        title="Popular Templates"
        description="Start with a proven design for your industry"
        action={{ label: "View all", href: "/landing-pages" }}
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {templateCategories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={cn(
              "rounded-lg px-3.5 py-1.5 text-xs font-medium transition-all duration-300",
              activeCategory === category
                ? "bg-gradient-to-r from-[#7C5CFF]/20 to-[#3B82F6]/10 text-[#A78BFA] border border-[#7C5CFF]/30"
                : "border border-white/[0.08] bg-[#111218] text-zinc-400 hover:text-white hover:border-white/[0.15]"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {filtered.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>
    </section>
  );
}
