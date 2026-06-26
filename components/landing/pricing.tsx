const plans = [
  {
    name: "Free",
    price: "RM0",
    period: "forever",
    description: "Perfect for getting started with marketing tools.",
    features: [
      "5 UTM links / month",
      "Basic QR codes",
      "1 landing page",
      "Community support",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "RM39",
    period: "/month",
    description: "For creators and marketers who need more power.",
    features: [
      "Unlimited UTM links",
      "Dynamic QR with analytics",
      "AI ad copy generation",
      "10 landing pages",
      "WhatsApp campaigns",
      "Priority support",
    ],
    cta: "Start Pro Trial",
    highlighted: true,
  },
  {
    name: "Business",
    price: "RM99",
    period: "/month",
    description: "For teams and businesses at scale.",
    features: [
      "Everything in Pro",
      "Unlimited landing pages",
      "Advanced analytics",
      "Team collaboration",
      "API access",
      "Dedicated support",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#7C3AED]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            Start free, upgrade when you&apos;re ready. No hidden fees.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 transition-all duration-300 ${
                plan.highlighted
                  ? "glass-strong shadow-2xl shadow-[#7C3AED]/20 ring-1 ring-[#7C3AED]/30 lg:scale-105"
                  : "glass hover:bg-white/[0.04]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#4F46E5] px-4 py-1 text-xs font-semibold text-white shadow-lg shadow-[#7C3AED]/30">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-zinc-500">{plan.period}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-zinc-300">
                    <svg
                      className="mt-0.5 shrink-0 text-[#7C3AED]"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-8 block rounded-xl py-3 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 hover:bg-[#6D28D9]"
                    : "glass text-zinc-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
