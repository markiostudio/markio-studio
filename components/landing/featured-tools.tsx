const tools = [
  {
    title: "UTM Generator",
    description: "Generate campaign URLs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/5",
  },
  {
    title: "QR Generator",
    description: "Dynamic QR Codes with analytics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="3" height="3" />
        <path d="M21 14h-3v7h3v-4" />
        <path d="M17 21h4" />
      </svg>
    ),
    gradient: "from-indigo-500/20 to-blue-500/5",
  },
  {
    title: "AI Ad Copy",
    description: "Generate Facebook & Google Ads instantly.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    gradient: "from-fuchsia-500/20 to-pink-500/5",
  },
  {
    title: "Landing Page Builder",
    description: "Build landing pages with AI.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    gradient: "from-purple-500/20 to-violet-500/5",
  },
  {
    title: "WhatsApp Campaign Builder",
    description: "Send personalized WhatsApp campaigns.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
        <path d="M8 10h.01M12 10h.01M16 10h.01" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-green-500/5",
  },
  {
    title: "Analytics Dashboard",
    description: "Track campaigns beautifully.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10" />
        <path d="M12 20V4" />
        <path d="M6 20v-6" />
      </svg>
    ),
    gradient: "from-amber-500/20 to-orange-500/5",
  },
];

export function FeaturedTools() {
  return (
    <section id="tools" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7C3AED]/8 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
            Featured Tools
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="text-gradient"> grow</span>
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            A complete suite of AI-powered marketing tools, built for speed and simplicity.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.title}
              className="group relative overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:bg-white/[0.05] hover:shadow-xl hover:shadow-[#7C3AED]/5"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />
              <div className="relative">
                <div className="mb-4 inline-flex rounded-xl bg-[#7C3AED]/10 p-3 text-[#A78BFA] ring-1 ring-[#7C3AED]/20 transition-all duration-300 group-hover:bg-[#7C3AED]/20 group-hover:text-white">
                  {tool.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{tool.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {tool.description}
                </p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#A78BFA] opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
