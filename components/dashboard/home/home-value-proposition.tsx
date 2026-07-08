import { valuePropositionItems } from "@/lib/dashboard/home-data";
import { MotionStaggerItem } from "@/components/dashboard/ui/motion-primitives";

export function HomeValueProposition() {
  return (
    <section className="mb-16">
      <div className="mb-8 text-center">
        <h2 className="text-xl font-bold text-white sm:text-2xl">
          Your AI marketing team, ready in minutes
        </h2>
        <p className="mt-2 text-sm text-zinc-400 sm:text-base">
          Built for small business owners who want results — not a marketing degree
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {valuePropositionItems.map((item, index) => (
          <MotionStaggerItem
            key={item.title}
            index={index}
            className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-6 transition-all duration-300 hover:border-[#7C5CFF]/20 hover:bg-[#181A22]"
          >
            <span className="mb-4 inline-flex rounded-full border border-[#7C5CFF]/20 bg-[#7C5CFF]/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#A78BFA]">
              {item.stat}
            </span>
            <h3 className="text-base font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.description}</p>
            <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-full bg-[#7C5CFF]/5 blur-2xl" />
          </MotionStaggerItem>
        ))}
      </div>
    </section>
  );
}
