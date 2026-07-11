"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { hexToRgb } from "@/lib/dashboard/business-brain";

type HeroImagePlaceholderProps = {
  heroImagePrompt: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  imageUrl?: string | null;
  className?: string;
};

export function HeroImagePlaceholder({
  heroImagePrompt,
  primaryColor,
  secondaryColor,
  accentColor,
  imageUrl,
  className = "",
}: HeroImagePlaceholderProps) {
  const [loading, setLoading] = useState(!imageUrl);
  const primaryRgb = hexToRgb(primaryColor);
  const secondaryRgb = hexToRgb(secondaryColor);

  useEffect(() => {
    if (imageUrl) {
      setLoading(true);
    } else {
      const timer = window.setTimeout(() => setLoading(false), 1800);
      return () => window.clearTimeout(timer);
    }
  }, [imageUrl]);

  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden rounded-2xl border shadow-xl lg:aspect-square ${className}`}
      style={{
        borderColor: `rgba(${primaryRgb}, 0.2)`,
        background: `linear-gradient(135deg, rgba(${primaryRgb}, 0.12) 0%, rgba(${secondaryRgb}, 0.1) 100%)`,
      }}
      data-hero-prompt={heroImagePrompt}
      aria-label="Hero image placeholder"
    >
      {loading ? (
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-200/60 via-zinc-100/40 to-zinc-200/60" />
        </div>
      ) : null}

      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={heroImagePrompt}
          className="absolute inset-0 h-full w-full object-cover"
          onLoad={() => setLoading(false)}
        />
      ) : (
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 35%, rgba(${primaryRgb}, 0.5) 0%, transparent 55%), radial-gradient(circle at 75% 65%, rgba(${hexToRgb(accentColor)}, 0.4) 0%, transparent 50%)`,
          }}
        />
      )}

      {!imageUrl && !loading ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl backdrop-blur-sm"
            style={{ backgroundColor: `rgba(${primaryRgb}, 0.15)` }}
          >
            <ImageIcon className="h-7 w-7" style={{ color: primaryColor }} />
          </motion.div>
          <p className="mt-3 text-xs font-medium uppercase tracking-widest text-zinc-500">
            Hero Image
          </p>
          <p className="mt-1 max-w-[220px] text-[11px] leading-relaxed text-zinc-400">
            Ready for OpenAI Images
          </p>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-4 pt-10">
        <p className="line-clamp-2 text-left text-[10px] leading-relaxed text-white/70">
          {heroImagePrompt}
        </p>
      </div>
    </div>
  );
}
