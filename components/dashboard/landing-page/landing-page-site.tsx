"use client";

import { ChevronDown, MapPin, Quote, Sparkles, Star } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { BusinessBrain } from "@/lib/dashboard/business-brain";
import { hexToRgb } from "@/lib/dashboard/business-brain";
import { HeroImagePlaceholder } from "./hero-image-placeholder";

type LandingPageSiteProps = {
  brain: BusinessBrain;
  compact?: boolean;
};

const sectionVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export function LandingPageSite({ brain, compact = false }: LandingPageSiteProps) {
  const { business, branding, hero, about, services, testimonials, faq, imagePrompts } = brain;
  const primaryRgb = hexToRgb(branding.primaryColor);
  const secondaryRgb = hexToRgb(branding.secondaryColor);
  const accentRgb = hexToRgb(branding.accentColor);

  const headingScale = compact ? "text-2xl sm:text-3xl" : "text-3xl sm:text-5xl lg:text-6xl";
  const sectionPad = compact ? "px-4 py-10" : "px-6 py-14 sm:px-10 sm:py-16";
  const galleryCount = compact ? 4 : 6;
  const benefitItems = services.slice(0, 3);

  return (
    <div className={`bg-white text-zinc-900 ${compact ? "text-sm" : ""}`}>
      {/* Hero */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`relative overflow-hidden ${sectionPad}`}
        style={{
          background: `linear-gradient(160deg, rgba(${primaryRgb}, 0.14) 0%, rgba(${secondaryRgb}, 0.08) 45%, #ffffff 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full blur-3xl"
          style={{ backgroundColor: `rgba(${primaryRgb}, 0.2)` }}
        />
        <div
          className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full blur-3xl"
          style={{ backgroundColor: `rgba(${accentRgb}, 0.18)` }}
        />

        <div className={`relative mx-auto ${compact ? "max-w-full" : "max-w-5xl"}`}>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div
                className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5"
                style={{
                  borderColor: `rgba(${primaryRgb}, 0.35)`,
                  backgroundColor: `rgba(${primaryRgb}, 0.1)`,
                }}
              >
                <Sparkles className="h-3.5 w-3.5" style={{ color: branding.primaryColor }} />
                <span className="text-xs font-semibold tracking-wide text-zinc-800">
                  {business.name}
                </span>
              </div>

              <h1 className={`font-bold leading-[1.1] tracking-tight text-zinc-900 ${headingScale}`}>
                {hero.headline}
              </h1>

              <p
                className={`mt-4 leading-relaxed text-zinc-600 ${compact ? "text-sm" : "text-base sm:text-lg"}`}
              >
                {hero.subheadline}
              </p>

              <div className="mt-7 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
                  style={{
                    backgroundColor: branding.primaryColor,
                    boxShadow: `0 16px 32px rgba(${primaryRgb}, 0.3)`,
                  }}
                >
                  {hero.cta}
                </button>
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold transition-colors hover:bg-zinc-50"
                  style={{
                    borderColor: `rgba(${primaryRgb}, 0.35)`,
                    color: branding.primaryColor,
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>

            <HeroImagePlaceholder
              heroImagePrompt={imagePrompts.hero}
              primaryColor={branding.primaryColor}
              secondaryColor={branding.secondaryColor}
              accentColor={branding.accentColor}
            />
          </div>
        </div>
      </motion.section>

      {/* Benefits / About highlights */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`border-t border-zinc-100 bg-zinc-50 ${sectionPad}`}
      >
        <div className={`mx-auto ${compact ? "max-w-full" : "max-w-5xl"}`}>
          <div className="mb-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: branding.primaryColor }}
            >
              Why choose us
            </p>
            <h2 className={`mt-2 font-bold text-zinc-900 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
              {about.title || `Built for ${business.industry || business.name}`}
            </h2>
            {about.content ? (
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
                {about.content}
              </p>
            ) : null}
          </div>
          <div className={`grid gap-5 ${compact ? "grid-cols-1" : "sm:grid-cols-3"}`}>
            {benefitItems.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-sm font-bold text-white"
                  style={{ backgroundColor: branding.primaryColor }}
                >
                  {index + 1}
                </div>
                <h3 className="font-semibold text-zinc-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`border-t border-zinc-100 ${sectionPad}`}
      >
        <div className={`mx-auto ${compact ? "max-w-full" : "max-w-5xl"}`}>
          <div className="mb-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: branding.primaryColor }}
            >
              Our services
            </p>
            <h2 className={`mt-2 font-bold text-zinc-900 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
              What we offer
            </h2>
          </div>
          <div className={`grid gap-4 ${compact ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06, duration: 0.35 }}
                className="rounded-2xl border border-zinc-200 p-5 transition-shadow hover:shadow-md"
                style={{ borderTopColor: branding.accentColor, borderTopWidth: 3 }}
              >
                <h3 className="font-semibold text-zinc-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`border-t border-zinc-100 ${sectionPad}`}
        style={{ background: `linear-gradient(180deg, rgba(${primaryRgb}, 0.04) 0%, #ffffff 100%)` }}
      >
        <div className={`mx-auto ${compact ? "max-w-full" : "max-w-5xl"}`}>
          <div className="mb-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: branding.primaryColor }}
            >
              Social proof
            </p>
            <h2 className={`mt-2 font-bold text-zinc-900 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
              What customers say
            </h2>
          </div>
          <div className={`grid gap-5 ${compact ? "grid-cols-1" : "sm:grid-cols-3"}`}>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.35 }}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-current"
                      style={{ color: branding.accentColor }}
                    />
                  ))}
                </div>
                <Quote className="mb-2 h-4 w-4 text-zinc-300" />
                <p className="text-sm leading-relaxed text-zinc-700">&ldquo;{testimonial.review}&rdquo;</p>
                <div className="mt-4 border-t border-zinc-100 pt-3">
                  <p className="text-sm font-semibold text-zinc-900">{testimonial.name}</p>
                  <p className="text-xs text-zinc-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Gallery placeholder */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`border-t border-zinc-100 bg-zinc-50 ${sectionPad}`}
      >
        <div className={`mx-auto ${compact ? "max-w-full" : "max-w-5xl"}`}>
          <div className="mb-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: branding.primaryColor }}
            >
              Gallery
            </p>
            <h2 className={`mt-2 font-bold text-zinc-900 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
              See our work
            </h2>
            {imagePrompts.gallery ? (
              <p className="mx-auto mt-2 max-w-xl text-xs text-zinc-500">{imagePrompts.gallery}</p>
            ) : null}
          </div>
          <div className={`grid gap-3 ${compact ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"}`}>
            {Array.from({ length: galleryCount }).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.35 }}
                className="relative aspect-[4/3] overflow-hidden rounded-xl border border-zinc-200"
                style={{
                  background: `linear-gradient(135deg, rgba(${primaryRgb}, ${0.08 + index * 0.02}) 0%, rgba(${secondaryRgb}, 0.06) 100%)`,
                }}
              >
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-zinc-200/50 via-transparent to-zinc-300/30" />
                <div className="absolute inset-0 flex items-end p-3">
                  <span className="text-[10px] font-medium text-zinc-500">
                    Image {index + 1}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`border-t border-zinc-100 ${sectionPad}`}
      >
        <div className={`mx-auto ${compact ? "max-w-full" : "max-w-3xl"}`}>
          <div className="mb-8 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: branding.primaryColor }}
            >
              FAQ
            </p>
            <h2 className={`mt-2 font-bold text-zinc-900 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
              Common questions
            </h2>
          </div>
          <div className="space-y-3">
            {faq.map((item) => (
              <FaqItem key={item.question} item={item} accentColor={branding.primaryColor} />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={sectionVariants}
        transition={{ duration: 0.45 }}
        className={`border-t border-zinc-100 ${sectionPad}`}
        style={{
          background: `linear-gradient(160deg, rgba(${primaryRgb}, 0.12) 0%, rgba(${secondaryRgb}, 0.08) 100%)`,
        }}
      >
        <div className={`mx-auto text-center ${compact ? "max-w-full" : "max-w-2xl"}`}>
          <h2 className={`font-bold text-zinc-900 ${compact ? "text-xl" : "text-2xl sm:text-3xl"}`}>
            Ready to get started with {business.name}?
          </h2>
          <p className={`mt-3 text-zinc-600 ${compact ? "text-sm" : "text-base"}`}>
            {business.usp || hero.subheadline}
          </p>
          <button
            type="button"
            className="mt-7 inline-flex items-center justify-center rounded-xl px-8 py-4 text-sm font-bold text-white shadow-lg transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: branding.primaryColor }}
          >
            {hero.cta}
          </button>
          <p className="mt-4 text-sm text-zinc-500">{about.content || business.description}</p>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-zinc-900 px-6 py-8 text-white sm:px-10">
        <div className={`mx-auto ${compact ? "max-w-full" : "max-w-5xl"}`}>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-lg font-bold">{business.name}</p>
              {business.location ? (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-zinc-400">
                  <MapPin className="h-3.5 w-3.5 shrink-0" />
                  {business.location}
                </p>
              ) : null}
              <p className="mt-1 text-xs text-zinc-500">{business.industry}</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
              <span className="cursor-default hover:text-white">Services</span>
              <span className="cursor-default hover:text-white">About</span>
              <span className="cursor-default hover:text-white">Contact</span>
              <span className="cursor-default hover:text-white">Privacy</span>
            </div>
          </div>
          <div className="mt-6 border-t border-zinc-800 pt-6 text-center text-xs text-zinc-600 sm:text-left">
            © {new Date().getFullYear()} {business.name}. Preview generated by Markio Studio.
          </div>
        </div>
      </footer>
    </div>
  );
}

function FaqItem({
  item,
  accentColor,
}: {
  item: { question: string; answer: string };
  accentColor: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="text-sm font-semibold text-zinc-900">{item.question}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-zinc-400 transition-transform ${open ? "rotate-180" : ""}`}
          style={{ color: open ? accentColor : undefined }}
        />
      </button>
      {open ? (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-zinc-100 px-5 py-4"
        >
          <p className="text-sm leading-relaxed text-zinc-600">{item.answer}</p>
        </motion.div>
      ) : null}
    </div>
  );
}
