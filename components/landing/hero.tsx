import { DashboardPreview } from "./dashboard-preview";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#7C3AED]/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-40 right-0 h-[400px] w-[400px] rounded-full bg-[#4F46E5]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[300px] w-[300px] rounded-full bg-[#7C3AED]/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 opacity-0">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7C3AED]" />
              </span>
              <span className="text-xs font-medium text-zinc-400">
                Now in public beta
              </span>
            </div>

            <h1 className="animate-fade-in-up animation-delay-100 opacity-0 text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-white">Build Faster.</span>
              <br />
              <span className="text-gradient">Market Smarter.</span>
            </h1>

            <p className="animate-fade-in-up animation-delay-200 mt-6 max-w-lg text-lg leading-relaxed text-zinc-400 opacity-0 sm:text-xl">
              AI-powered marketing tools for creators,
              <br className="hidden sm:block" />
              marketers and businesses.
            </p>

            <div className="animate-fade-in-up animation-delay-300 mt-10 flex flex-col gap-4 opacity-0 sm:flex-row sm:items-center">
              <a
                href="/tools/utm"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[#7C3AED] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#7C3AED]/25 transition-all hover:bg-[#6D28D9] hover:shadow-[#7C3AED]/40"
              >
                <span className="relative z-10">Get Started Free</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </a>
              <a
                href="#tools"
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-8 py-3.5 text-sm font-semibold text-zinc-200 transition-all hover:bg-white/5 hover:text-white"
              >
                Explore Tools
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="animate-fade-in-up animation-delay-400 mt-12 flex items-center gap-6 opacity-0">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#050816] bg-gradient-to-br from-[#7C3AED]/80 to-[#4F46E5]/80 text-[10px] font-bold text-white"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <p className="text-sm text-zinc-500">
                Trusted by <span className="font-medium text-zinc-300">2,000+</span> marketers
              </p>
            </div>
          </div>

          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
