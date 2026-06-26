"use client";

import { useState } from "react";

const navLinks = [
  { label: "Products", href: "#tools" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#" },
  { label: "About", href: "#" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8">
      <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl glass px-4 py-3 sm:px-6">
        <a href="#" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] shadow-lg shadow-[#7C3AED]/25">
            <span className="text-sm font-bold text-white">M</span>
          </div>
          <span className="text-base font-semibold tracking-tight text-white">
            Markio Studio
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="rounded-xl px-4 py-2 text-sm font-medium text-zinc-300 transition-colors hover:text-white"
          >
            Login
          </a>
          <a
            href="/tools/utm"
            className="rounded-xl bg-[#7C3AED] px-4 py-2 text-sm font-medium text-white shadow-lg shadow-[#7C3AED]/30 transition-all hover:bg-[#6D28D9] hover:shadow-[#7C3AED]/40"
          >
            Get Started
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-zinc-400 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl glass p-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="my-2 border-white/10" />
            <a
              href="#"
              className="rounded-xl px-4 py-3 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Login
            </a>
            <a
              href="/tools/utm"
              className="mt-1 rounded-xl bg-[#7C3AED] px-4 py-3 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
