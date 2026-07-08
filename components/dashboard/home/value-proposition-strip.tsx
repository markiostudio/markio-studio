import { valueProps } from "@/lib/dashboard/data";

export function ValuePropositionStrip() {
  return (
    <section className="mb-6">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {valueProps.map((prop) => (
          <div
            key={prop.title}
            className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-[#111218] px-4 py-3.5 transition-all duration-300 hover:border-[#7C5CFF]/20 hover:bg-[#181A22]"
          >
            <span className="text-xl">{prop.icon}</span>
            <span className="text-sm font-medium text-white">{prop.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
