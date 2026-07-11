import OpenAI from "openai";
import { parseBusinessBrain, type BusinessBrain } from "@/lib/dashboard/business-brain";

const SYSTEM_PROMPT = `You are a business intelligence and brand strategist for Markio Studio.

From the user's business description, generate a complete Business Brain JSON object.

Rules:
- Extract factual business details when stated; infer carefully when implied
- Fill every nested section: business, branding, hero, about, services, testimonials, faq, seo, imagePrompts
- business.usp is a concise unique selling proposition
- branding colors must be hex (e.g. #7C5CFF) that fit the industry and style
- branding.font is a web-safe or Google font name; branding.style is a short descriptor
- hero.headline under 12 words; hero.subheadline 1-2 sentences; hero.cta 2-5 words
- services: 3 to 6 items with title and description
- testimonials: exactly 3 realistic reviews with name, role, and review
- faq: exactly 4 question/answer pairs
- seo.title, seo.description, and seo.keywords (3-6 keywords) must be search-ready
- imagePrompts.hero, about, and gallery describe ideal AI image prompts
- Keep all text concise, specific, and professional
- NEVER use generic phrases like "Unlock Your Potential" or "Elevate Your Brand"
- Return ONLY valid JSON matching the schema`;

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

export class BusinessBrainGenerationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "BusinessBrainGenerationError";
  }
}

export async function generateBusinessBrain(prompt: string): Promise<BusinessBrain> {
  const trimmedPrompt = prompt.trim();

  if (!trimmedPrompt) {
    throw new BusinessBrainGenerationError("Prompt is required.");
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey?.trim()) {
    throw new BusinessBrainGenerationError("Missing environment variable: OPENAI_API_KEY.");
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
        content: `Generate a complete Business Brain from this description:\n\n${trimmedPrompt}`,
      },
    ],
  });

  const content = completion.choices[0]?.message?.content;

  if (!content) {
    throw new BusinessBrainGenerationError("OpenAI returned an empty response.");
  }

  const brain = parseBusinessBrain(JSON.parse(content));

  if (!brain.business.name || !brain.hero.headline || !brain.hero.cta) {
    throw new BusinessBrainGenerationError("AI returned incomplete Business Brain content.");
  }

  return brain;
}
