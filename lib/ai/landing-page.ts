import OpenAI from "openai";
import { parseBusinessBrain, type BusinessBrain } from "@/lib/dashboard/business-brain";

const SYSTEM_PROMPT = `You are an expert conversion copywriter and landing page designer for Markio Studio.

Given a Business Brain profile (possibly with user-confirmed business fields), regenerate a complete, publish-worthy Business Brain JSON.

Industry-specific rules — adapt copy, colors, and CTAs to the business type:

Restaurant / Food:
- Warm colors (terracotta, amber, deep red)
- Food-focused, sensory copy
- CTA examples: "Reserve Your Table", "Book a Table", "Order Now"

Beauty Salon / Spa:
- Soft luxury colors (rose, blush, gold accents)
- Beauty-focused copy about treatments and self-care
- CTA examples: "Book Appointment", "Schedule Your Visit"

Dental / Medical Clinic:
- Clean blue/white professional palette
- Trust-focused copy
- CTA examples: "Book Consultation", "Schedule Appointment"

Real Estate:
- Navy/gold luxury theme
- CTA examples: "Get Property Valuation", "Schedule a Viewing"

Gym / Fitness:
- Bold energetic accent colors
- CTA examples: "Start Free Trial", "Join Today"

General rules:
- Preserve the confirmed business.name, industry, location, audience, and goal when provided
- Enrich about, services (3-6), testimonials (3), faq (4), seo, imagePrompts, hero, and branding
- NEVER use generic phrases like "Your Next Move Starts Here" or "Unlock Your Potential"
- Return ONLY valid JSON matching the Business Brain schema`;

const BUSINESS_BRAIN_JSON_SCHEMA = {
  type: "object",
  properties: {
    business: {
      type: "object",
      properties: {
        name: { type: "string" },
        industry: { type: "string" },
        location: { type: "string" },
        audience: { type: "string" },
        goal: { type: "string" },
        description: { type: "string" },
        usp: { type: "string" },
      },
      required: ["name", "industry", "location", "audience", "goal", "description", "usp"],
      additionalProperties: false,
    },
    branding: {
      type: "object",
      properties: {
        primaryColor: { type: "string" },
        secondaryColor: { type: "string" },
        accentColor: { type: "string" },
        font: { type: "string" },
        style: { type: "string" },
      },
      required: ["primaryColor", "secondaryColor", "accentColor", "font", "style"],
      additionalProperties: false,
    },
    hero: {
      type: "object",
      properties: {
        headline: { type: "string" },
        subheadline: { type: "string" },
        cta: { type: "string" },
      },
      required: ["headline", "subheadline", "cta"],
      additionalProperties: false,
    },
    about: {
      type: "object",
      properties: {
        title: { type: "string" },
        content: { type: "string" },
      },
      required: ["title", "content"],
      additionalProperties: false,
    },
    services: {
      type: "array",
      items: {
        type: "object",
        properties: {
          title: { type: "string" },
          description: { type: "string" },
        },
        required: ["title", "description"],
        additionalProperties: false,
      },
      minItems: 3,
      maxItems: 6,
    },
    testimonials: {
      type: "array",
      items: {
        type: "object",
        properties: {
          name: { type: "string" },
          role: { type: "string" },
          review: { type: "string" },
        },
        required: ["name", "role", "review"],
        additionalProperties: false,
      },
      minItems: 3,
      maxItems: 3,
    },
    faq: {
      type: "array",
      items: {
        type: "object",
        properties: {
          question: { type: "string" },
          answer: { type: "string" },
        },
        required: ["question", "answer"],
        additionalProperties: false,
      },
      minItems: 4,
      maxItems: 4,
    },
    seo: {
      type: "object",
      properties: {
        title: { type: "string" },
        description: { type: "string" },
        keywords: {
          type: "array",
          items: { type: "string" },
          minItems: 3,
          maxItems: 6,
        },
      },
      required: ["title", "description", "keywords"],
      additionalProperties: false,
    },
    imagePrompts: {
      type: "object",
      properties: {
        hero: { type: "string" },
        about: { type: "string" },
        gallery: { type: "string" },
      },
      required: ["hero", "about", "gallery"],
      additionalProperties: false,
    },
  },
  required: [
    "business",
    "branding",
    "hero",
    "about",
    "services",
    "testimonials",
    "faq",
    "seo",
    "imagePrompts",
  ],
  additionalProperties: false,
} as const;

export class LandingPageGenerationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LandingPageGenerationError";
  }
}

/** Enrich / regenerate a complete Business Brain for landing page and other assets. */
export async function generateLandingPage(businessBrain: BusinessBrain): Promise<BusinessBrain> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey?.trim()) {
    throw new LandingPageGenerationError("Missing environment variable: OPENAI_API_KEY.");
  }

  const model = process.env.OPENAI_MODEL?.trim() || "gpt-5.5";
  const openai = new OpenAI({ apiKey: apiKey.trim() });

  const completion = await openai.chat.completions.create({
    model,
    response_format: {
      type: "json_schema",
      json_schema: {
        name: "business_brain",
        strict: true,
        schema: BUSINESS_BRAIN_JSON_SCHEMA,
      },
    },
    messages: [
      { role: "system", content: SYSTEM_PROMPT },
      {
        role: "user",
        content: `Regenerate a complete Business Brain for landing page and marketing assets from this profile:\n\n${JSON.stringify(businessBrain, null, 2)}`,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new LandingPageGenerationError("OpenAI returned an empty response.");
  }

  const brain = parseBusinessBrain(JSON.parse(content));

  // Preserve user-confirmed profile fields when present.
  if (businessBrain.business.name) {
    brain.business.name = businessBrain.business.name;
  }
  if (businessBrain.business.industry) {
    brain.business.industry = businessBrain.business.industry;
  }
  if (businessBrain.business.location) {
    brain.business.location = businessBrain.business.location;
  }
  if (businessBrain.business.audience) {
    brain.business.audience = businessBrain.business.audience;
  }
  if (businessBrain.business.goal) {
    brain.business.goal = businessBrain.business.goal;
  }
  if (businessBrain.business.description) {
    brain.business.description = businessBrain.business.description;
  }

  if (
    !brain.business.name ||
    !brain.hero.headline ||
    !brain.hero.subheadline ||
    !brain.hero.cta ||
    brain.services.length < 3 ||
    brain.testimonials.length < 3 ||
    brain.faq.length < 4
  ) {
    throw new LandingPageGenerationError("AI returned incomplete Business Brain content.");
  }

  return brain;
}
