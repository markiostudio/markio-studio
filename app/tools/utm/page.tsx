"use client";

import { useState } from "react";
import Link from "next/link";

type FormFields = {
  websiteUrl: string;
  campaignSource: string;
  campaignMedium: string;
  campaignName: string;
  campaignTerm: string;
  campaignContent: string;
};

function generateUtmUrl(fields: FormFields): string | null {
  const { websiteUrl, campaignSource, campaignMedium, campaignName, campaignTerm, campaignContent } =
    fields;

  if (!websiteUrl.trim() || !campaignSource.trim() || !campaignMedium.trim() || !campaignName.trim()) {
    return null;
  }

  let url: URL;
  try {
    const normalized = websiteUrl.trim().match(/^https?:\/\//)
      ? websiteUrl.trim()
      : `https://${websiteUrl.trim()}`;
    url = new URL(normalized);
  } catch {
    return null;
  }

  const params = new URLSearchParams(url.search);
  params.set("utm_source", campaignSource.trim());
  params.set("utm_medium", campaignMedium.trim());
  params.set("utm_campaign", campaignName.trim());

  if (campaignTerm.trim()) {
    params.set("utm_term", campaignTerm.trim());
  }
  if (campaignContent.trim()) {
    params.set("utm_content", campaignContent.trim());
  }

  url.search = params.toString();
  return url.toString();
}

const inputClassName =
  "w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all focus:border-[#7C3AED]/50 focus:bg-white/[0.06] focus:ring-2 focus:ring-[#7C3AED]/20";

const labelClassName = "mb-2 block text-sm font-medium text-zinc-300";

export default function UtmGeneratorPage() {
  const [fields, setFields] = useState<FormFields>({
    websiteUrl: "",
    campaignSource: "",
    campaignMedium: "",
    campaignName: "",
    campaignTerm: "",
    campaignContent: "",
  });
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  function handleChange(field: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      setError(null);
    };
  }

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    const url = generateUtmUrl(fields);

    if (!url) {
      setGeneratedUrl(null);
      setError("Please enter a valid website URL and fill in all required fields.");
      return;
    }

    setError(null);
    setGeneratedUrl(url);
    setCopied(false);
  }

  async function handleCopy() {
    if (!generatedUrl) return;

    try {
      await navigator.clipboard.writeText(generatedUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setError("Unable to copy to clipboard. Please copy the URL manually.");
    }
  }

  return (
    <div className="relative min-h-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-[#7C3AED]/15 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-32 right-0 h-[350px] w-[350px] rounded-full bg-[#4F46E5]/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-full bg-[#7C3AED]/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
      </div>

      <header className="relative z-10 px-4 pt-6 sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-3xl items-center justify-between rounded-2xl glass px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#4F46E5] shadow-lg shadow-[#7C3AED]/25">
              <span className="text-sm font-bold text-white">M</span>
            </div>
            <span className="text-base font-semibold tracking-tight text-white">Markio Studio</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-zinc-400 transition-colors hover:text-white"
          >
            ← Back to home
          </Link>
        </nav>
      </header>

      <main className="relative z-10 mx-auto max-w-3xl px-4 pb-20 pt-12 sm:px-6 sm:pt-16 lg:px-8">
        <div className="text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[#A78BFA]"
            >
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
            <span className="text-xs font-medium text-zinc-400">Free Marketing Tool</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            UTM <span className="text-gradient">Generator</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            Build trackable campaign URLs in seconds. Add UTM parameters to measure where your traffic
            comes from.
          </p>
        </div>

        <form
          onSubmit={handleGenerate}
          className="mt-12 rounded-2xl glass-strong p-6 sm:p-8"
        >
          <div className="space-y-5">
            <div>
              <label htmlFor="websiteUrl" className={labelClassName}>
                Website URL <span className="text-[#A78BFA]">*</span>
              </label>
              <input
                id="websiteUrl"
                type="url"
                required
                placeholder="https://example.com/landing-page"
                value={fields.websiteUrl}
                onChange={handleChange("websiteUrl")}
                className={inputClassName}
              />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="campaignSource" className={labelClassName}>
                  Campaign Source <span className="text-[#A78BFA]">*</span>
                </label>
                <input
                  id="campaignSource"
                  type="text"
                  required
                  placeholder="google, newsletter, facebook"
                  value={fields.campaignSource}
                  onChange={handleChange("campaignSource")}
                  className={inputClassName}
                />
                <p className="mt-1.5 text-xs text-zinc-600">Where the traffic comes from</p>
              </div>

              <div>
                <label htmlFor="campaignMedium" className={labelClassName}>
                  Campaign Medium <span className="text-[#A78BFA]">*</span>
                </label>
                <input
                  id="campaignMedium"
                  type="text"
                  required
                  placeholder="cpc, email, social"
                  value={fields.campaignMedium}
                  onChange={handleChange("campaignMedium")}
                  className={inputClassName}
                />
                <p className="mt-1.5 text-xs text-zinc-600">Marketing channel type</p>
              </div>
            </div>

            <div>
              <label htmlFor="campaignName" className={labelClassName}>
                Campaign Name <span className="text-[#A78BFA]">*</span>
              </label>
              <input
                id="campaignName"
                type="text"
                required
                placeholder="spring_sale, product_launch"
                value={fields.campaignName}
                onChange={handleChange("campaignName")}
                className={inputClassName}
              />
              <p className="mt-1.5 text-xs text-zinc-600">Identifies a specific campaign</p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="campaignTerm" className={labelClassName}>
                  Campaign Term
                  <span className="ml-1.5 text-xs font-normal text-zinc-600">(optional)</span>
                </label>
                <input
                  id="campaignTerm"
                  type="text"
                  placeholder="running+shoes, paid+keywords"
                  value={fields.campaignTerm}
                  onChange={handleChange("campaignTerm")}
                  className={inputClassName}
                />
              </div>

              <div>
                <label htmlFor="campaignContent" className={labelClassName}>
                  Campaign Content
                  <span className="ml-1.5 text-xs font-normal text-zinc-600">(optional)</span>
                </label>
                <input
                  id="campaignContent"
                  type="text"
                  placeholder="logolink, textlink, banner_ad"
                  value={fields.campaignContent}
                  onChange={handleChange("campaignContent")}
                  className={inputClassName}
                />
              </div>
            </div>
          </div>

          {error && (
            <p className="mt-5 rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-300">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="group relative mt-8 w-full overflow-hidden rounded-xl bg-[#7C3AED] px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#7C3AED]/25 transition-all hover:bg-[#6D28D9] hover:shadow-[#7C3AED]/40 sm:w-auto"
          >
            <span className="relative z-10">Generate URL</span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </form>

        {generatedUrl && (
          <div className="mt-8 animate-fade-in-up rounded-2xl glass p-6 sm:p-8">
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
                Generated URL
              </h2>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex items-center justify-center gap-2 rounded-xl glass px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-white/5 hover:text-white"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" />
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                </svg>
                Copy URL
              </button>
            </div>

            <pre className="overflow-x-auto rounded-xl border border-white/10 bg-[#0a0f1e] p-4 font-mono text-sm leading-relaxed text-[#A78BFA] break-all whitespace-pre-wrap">
              <code>{generatedUrl}</code>
            </pre>
          </div>
        )}
      </main>

      {copied && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-fade-in-up"
        >
          <div className="flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-emerald-500/15 px-5 py-3 text-sm font-medium text-emerald-400 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            Copied!
          </div>
        </div>
      )}
    </div>
  );
}
