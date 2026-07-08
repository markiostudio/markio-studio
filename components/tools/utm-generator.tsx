"use client";

import { useMemo, useState } from "react";

type FormFields = {
  websiteUrl: string;
  campaignSource: string;
  campaignMedium: string;
  campaignName: string;
  campaignTerm: string;
  campaignContent: string;
};

const SOURCE_PRESETS = [
  { label: "Facebook", value: "facebook" },
  { label: "Google", value: "google" },
  { label: "Instagram", value: "instagram" },
  { label: "TikTok", value: "tiktok" },
  { label: "WhatsApp", value: "whatsapp" },
  { label: "Email", value: "email" },
] as const;

const MEDIUM_OPTIONS = [
  { label: "CPC", value: "cpc" },
  { label: "Social", value: "social" },
  { label: "Email", value: "email" },
  { label: "Organic", value: "organic" },
  { label: "Referral", value: "referral" },
  { label: "Display", value: "display" },
] as const;

const EMPTY_FIELDS: FormFields = {
  websiteUrl: "",
  campaignSource: "",
  campaignMedium: "",
  campaignName: "",
  campaignTerm: "",
  campaignContent: "",
};

function validateWebsiteUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;

  try {
    const normalized = trimmed.match(/^https?:\/\//) ? trimmed : `https://${trimmed}`;
    const url = new URL(normalized);

    if (!url.hostname || url.hostname === "localhost") {
      return null;
    }

    if (!url.hostname.includes(".")) {
      return "Please enter a valid URL with a domain (e.g. example.com).";
    }

    return null;
  } catch {
    return "Please enter a valid website URL.";
  }
}

function generateUtmUrl(fields: FormFields): string | null {
  const { websiteUrl, campaignSource, campaignMedium, campaignName, campaignTerm, campaignContent } =
    fields;

  if (!websiteUrl.trim() || !campaignSource.trim() || !campaignMedium.trim() || !campaignName.trim()) {
    return null;
  }

  if (validateWebsiteUrl(websiteUrl)) {
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
  "w-full rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-3 text-sm text-white placeholder:text-zinc-600 outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15";

const selectClassName =
  "w-full appearance-none rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-3 text-sm text-white outline-none transition-all duration-300 focus:border-[#7C5CFF]/40 focus:ring-2 focus:ring-[#7C5CFF]/15 bg-[length:16px_16px] bg-[right_1rem_center] bg-no-repeat pr-10";

const labelClassName = "mb-2 block text-sm font-medium text-zinc-300";

const presetButtonClassName =
  "rounded-lg border border-white/[0.08] bg-[#09090B] px-3 py-1.5 text-xs font-medium text-zinc-400 transition-all duration-300 hover:border-[#7C5CFF]/40 hover:bg-[#7C5CFF]/10 hover:text-[#A78BFA]";

export function UtmGenerator() {
  const [fields, setFields] = useState<FormFields>(EMPTY_FIELDS);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [activePreset, setActivePreset] = useState<string | null>(null);
  const [urlTouched, setUrlTouched] = useState(false);

  const websiteUrlError = useMemo(() => validateWebsiteUrl(fields.websiteUrl), [fields.websiteUrl]);
  const liveUrl = useMemo(() => generateUtmUrl(fields), [fields]);

  const hasAnyInput = useMemo(
    () => Object.values(fields).some((value) => value.trim().length > 0),
    [fields]
  );

  function handleChange(field: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      setError(null);

      if (field === "campaignSource") {
        setActivePreset(null);
      }
    };
  }

  function handleSelectChange(field: keyof FormFields) {
    return (e: React.ChangeEvent<HTMLSelectElement>) => {
      setFields((prev) => ({ ...prev, [field]: e.target.value }));
      setError(null);
    };
  }

  function handlePreset(source: string) {
    setFields((prev) => ({ ...prev, campaignSource: source }));
    setActivePreset(source);
    setError(null);
  }

  function handleGenerate(e: React.FormEvent) {
    e.preventDefault();

    if (websiteUrlError) {
      setUrlTouched(true);
      setError(websiteUrlError);
      return;
    }

    if (!liveUrl) {
      setError("Please enter a valid website URL and fill in all required fields.");
      return;
    }

    setError(null);
    setCopied(false);
  }

  async function handleCopy() {
    if (!liveUrl) return;

    try {
      await navigator.clipboard.writeText(liveUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setError("Unable to copy to clipboard. Please copy the URL manually.");
    }
  }

  function handleOpenUrl() {
    if (!liveUrl) return;
    window.open(liveUrl, "_blank", "noopener,noreferrer");
  }

  function handleReset() {
    setFields(EMPTY_FIELDS);
    setError(null);
    setCopied(false);
    setActivePreset(null);
    setUrlTouched(false);
  }

  const showUrlError = urlTouched && websiteUrlError && fields.websiteUrl.trim();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          UTM <span className="bg-gradient-to-r from-white via-[#A78BFA] to-[#7C5CFF] bg-clip-text text-transparent">Generator</span>
        </h1>
        <p className="mt-2 text-zinc-400">
          Build trackable campaign URLs in seconds — see where your visitors come from.
        </p>
      </div>

      <form
        onSubmit={handleGenerate}
        className="rounded-2xl border border-white/[0.08] bg-[#111218] p-6 sm:p-8"
      >
        <div className="space-y-5">
          <div>
            <label htmlFor="websiteUrl" className={labelClassName}>
              Website URL <span className="text-[#7C5CFF]">*</span>
            </label>
            <input
              id="websiteUrl"
              type="url"
              required
              placeholder="https://example.com/landing-page"
              value={fields.websiteUrl}
              onChange={handleChange("websiteUrl")}
              onBlur={() => setUrlTouched(true)}
              className={`${inputClassName} ${
                showUrlError
                  ? "border-red-500/40 focus:border-red-500/50 focus:ring-red-500/20"
                  : fields.websiteUrl.trim() && !websiteUrlError
                    ? "border-emerald-500/30"
                    : ""
              }`}
            />
            {showUrlError && (
              <p className="mt-2 text-xs text-red-400">{websiteUrlError}</p>
            )}
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="campaignSource" className={labelClassName}>
                Campaign Source <span className="text-[#7C5CFF]">*</span>
              </label>
              <div className="mb-3 flex flex-wrap gap-2">
                {SOURCE_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => handlePreset(preset.value)}
                    className={`${presetButtonClassName} ${
                      activePreset === preset.value || fields.campaignSource === preset.value
                        ? "border-[#7C5CFF]/50 bg-[#7C5CFF]/15 text-[#A78BFA]"
                        : ""
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <input
                id="campaignSource"
                type="text"
                required
                placeholder="google, newsletter, facebook"
                value={fields.campaignSource}
                onChange={handleChange("campaignSource")}
                className={inputClassName}
              />
            </div>

            <div>
              <label htmlFor="campaignMedium" className={labelClassName}>
                Campaign Medium <span className="text-[#7C5CFF]">*</span>
              </label>
              <select
                id="campaignMedium"
                required
                value={fields.campaignMedium}
                onChange={handleSelectChange("campaignMedium")}
                className={selectClassName}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23a78bfa' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E")`,
                }}
              >
                <option value="" disabled className="bg-[#111218] text-zinc-500">
                  Select medium
                </option>
                {MEDIUM_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value} className="bg-[#111218]">
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="campaignName" className={labelClassName}>
              Campaign Name <span className="text-[#7C5CFF]">*</span>
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
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="campaignTerm" className={labelClassName}>
                Campaign Term <span className="text-xs text-zinc-600">(optional)</span>
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
                Campaign Content <span className="text-xs text-zinc-600">(optional)</span>
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
          className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#7C5CFF] to-[#8B5CF6] px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#7C5CFF]/25 transition-all hover:brightness-110 sm:w-auto"
        >
          Generate URL
        </button>
      </form>

      <div
        className={`mt-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[#111218] p-6 transition-all duration-500 sm:p-8 ${
          hasAnyInput ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <div className="mb-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-[#A78BFA]">
              Generated URL
            </h2>
            <p className="mt-1 text-xs text-zinc-600">Updates live as you type</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCopy}
              disabled={!liveUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:bg-[#181A22] disabled:opacity-40"
            >
              {copied ? "Copied!" : "Copy URL"}
            </button>
            <button
              type="button"
              onClick={handleOpenUrl}
              disabled={!liveUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-[#7C5CFF]/30 bg-[#7C5CFF]/10 px-4 py-2 text-sm font-medium text-[#A78BFA] transition-all hover:bg-[#7C5CFF]/20 disabled:opacity-40"
            >
              Open URL
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-[#09090B] px-4 py-2 text-sm font-medium text-zinc-400 transition-all hover:bg-[#181A22]"
            >
              Reset
            </button>
          </div>
        </div>

        <div
          className={`overflow-x-auto rounded-xl border p-4 font-mono text-sm leading-relaxed break-all ${
            liveUrl
              ? "border-[#7C5CFF]/20 bg-[#09090B] text-[#A78BFA]"
              : "border-white/[0.05] bg-[#09090B] text-zinc-600"
          }`}
        >
          <code>
            {liveUrl ?? "Fill in the required fields above to preview your trackable URL…"}
          </code>
        </div>
      </div>
    </div>
  );
}
