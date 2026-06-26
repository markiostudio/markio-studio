const footerLinks = {
  Product: ["UTM Generator", "QR Generator", "AI Ad Copy", "Landing Pages", "Analytics"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Legal: ["Privacy", "Terms", "Security"],
};

export function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#7C3AED]/5 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5]">
                <span className="text-sm font-bold text-white">M</span>
              </div>
              <span className="text-base font-semibold text-white">Markio Studio</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-zinc-500">
              AI-powered marketing tools for creators, marketers and businesses.
              Build faster. Market smarter.
            </p>
            <div className="mt-6 flex gap-4">
              {["twitter", "github", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-lg glass text-zinc-500 transition-all hover:bg-white/5 hover:text-white"
                >
                  <span className="text-xs font-medium uppercase">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-white">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            &copy; {new Date().getFullYear()} Markio Studio. All rights reserved.
          </p>
          <p className="text-sm text-zinc-600">
            Made with care in Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
