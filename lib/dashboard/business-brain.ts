export interface BusinessBrain {
  business: {
    name: string;
    industry: string;
    location: string;
    audience: string;
    goal: string;
    description: string;
    usp: string;
  };

  branding: {
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    font: string;
    style: string;
  };

  hero: {
    headline: string;
    subheadline: string;
    cta: string;
  };

  about: {
    title: string;
    content: string;
  };

  services: {
    title: string;
    description: string;
  }[];

  testimonials: {
    name: string;
    role: string;
    review: string;
  }[];

  faq: {
    question: string;
    answer: string;
  }[];

  seo: {
    title: string;
    description: string;
    keywords: string[];
  };

  imagePrompts: {
    hero: string;
    about: string;
    gallery: string;
  };
}

export const BUSINESS_BRAIN_PROFILE_KEYS = [
  "name",
  "industry",
  "location",
  "audience",
  "goal",
  "description",
] as const;

export type BusinessBrainProfileKey = (typeof BUSINESS_BRAIN_PROFILE_KEYS)[number];

export const businessBrainFieldLabels: Record<BusinessBrainProfileKey, string> = {
  name: "Business Name",
  industry: "Industry",
  location: "Location",
  audience: "Target Audience",
  goal: "Main Goal",
  description: "Business Description",
};

export const EMPTY_BUSINESS_BRAIN: BusinessBrain = {
  business: {
    name: "",
    industry: "",
    location: "",
    audience: "",
    goal: "",
    description: "",
    usp: "",
  },
  branding: {
    primaryColor: "#7C5CFF",
    secondaryColor: "#3B82F6",
    accentColor: "#A78BFA",
    font: "Inter",
    style: "modern professional",
  },
  hero: {
    headline: "",
    subheadline: "",
    cta: "",
  },
  about: {
    title: "",
    content: "",
  },
  services: [],
  testimonials: [],
  faq: [],
  seo: {
    title: "",
    description: "",
    keywords: [],
  },
  imagePrompts: {
    hero: "",
    about: "",
    gallery: "",
  },
};

/** Demo / fallback Business Brain used when nothing is stored yet. */
export const DEFAULT_BUSINESS_BRAIN: BusinessBrain = {
  business: {
    name: "GlowFit Studio",
    industry: "Online Fitness Coaching",
    location: "Austin, TX",
    audience: "Busy professionals seeking sustainable fitness results",
    goal: "Generate more leads",
    description:
      "GlowFit Studio helps busy professionals build lasting fitness habits with personalized online coaching, accountability, and flexible programs.",
    usp: "Results-driven coaching designed for real schedules — not cookie-cutter plans.",
  },
  branding: {
    primaryColor: "#7C5CFF",
    secondaryColor: "#3B82F6",
    accentColor: "#EC4899",
    font: "Inter",
    style: "energetic modern",
  },
  hero: {
    headline: "Transform Your Body Without Quitting Your Life",
    subheadline:
      "Personalized online coaching that fits your schedule — build strength, energy, and confidence in 12 weeks.",
    cta: "Start Free Trial",
  },
  about: {
    title: "Why GlowFit works",
    content:
      "We combine expert coaching, habit systems, and weekly accountability so busy professionals finally get results that stick.",
  },
  services: [
    {
      title: "1:1 Online Coaching",
      description: "Custom workouts and nutrition guidance tailored to your goals and schedule.",
    },
    {
      title: "Group Accountability",
      description: "Weekly check-ins and community support to keep you consistent.",
    },
    {
      title: "Habit Systems",
      description: "Simple routines that fit real life — no all-or-nothing programs.",
    },
  ],
  testimonials: [
    {
      name: "Maya Chen",
      role: "Product Manager",
      review: "I finally have a routine that works around my job. Down 18 lbs and feel stronger every week.",
    },
    {
      name: "Jordan Blake",
      role: "Founder",
      review: "The accountability is unmatched. GlowFit made fitness feel doable again.",
    },
    {
      name: "Sam Rivera",
      role: "Nurse",
      review: "Flexible plans for night shifts. Best coaching investment I've made.",
    },
  ],
  faq: [
    {
      question: "Do I need a gym?",
      answer: "No — programs work at home, outdoors, or in a gym with minimal equipment.",
    },
    {
      question: "How much time per week?",
      answer: "Most clients train 3–4 sessions of 30–45 minutes plus short habit check-ins.",
    },
    {
      question: "Is nutrition included?",
      answer: "Yes — flexible nutrition guidance that fits your lifestyle, not rigid meal plans.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes. Coaching is month-to-month with no long-term lock-in.",
    },
  ],
  seo: {
    title: "GlowFit Studio | Online Fitness Coaching for Busy Professionals",
    description:
      "Personalized online fitness coaching for busy professionals. Build lasting habits and real results with GlowFit Studio.",
    keywords: ["online fitness coaching", "busy professionals", "personal trainer", "habit coaching"],
  },
  imagePrompts: {
    hero: "Energetic fitness coach and client high-fiving in a bright modern home gym, natural light, motivational atmosphere",
    about: "Clean lifestyle photo of a professional stretching at sunrise before work, calm and focused",
    gallery: "Collage of workout sessions, healthy meals, and progress moments in a modern fitness brand style",
  },
};

function isValidHexColor(value: string): boolean {
  return /^#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})$/.test(value);
}

function normalizeString(value: unknown, fallback = ""): string {
  if (typeof value !== "string") return fallback;
  return value.trim() || fallback;
}

function normalizeHexColor(value: unknown, fallback: string): string {
  if (typeof value !== "string") return fallback;
  const trimmed = value.trim();
  return isValidHexColor(trimmed) ? trimmed : fallback;
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => (typeof item === "string" ? item.trim() : ""))
    .filter(Boolean);
}

function normalizeService(raw: unknown): { title: string; description: string } | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const source = raw as Record<string, unknown>;
  const title = normalizeString(source.title || source.name);
  const description = normalizeString(source.description);
  if (!title || !description) return null;
  return { title, description };
}

function normalizeTestimonial(
  raw: unknown
): { name: string; role: string; review: string } | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const source = raw as Record<string, unknown>;
  const name = normalizeString(source.name || source.author);
  const role = normalizeString(source.role);
  const review = normalizeString(source.review || source.quote);
  if (!name || !review) return null;
  return { name, role, review };
}

function normalizeFaq(raw: unknown): { question: string; answer: string } | null {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  const source = raw as Record<string, unknown>;
  const question = normalizeString(source.question);
  const answer = normalizeString(source.answer);
  if (!question || !answer) return null;
  return { question, answer };
}

/** Migrate legacy flat BusinessBrain / landing page shapes into the nested schema. */
function migrateToNestedBrain(raw: Record<string, unknown>): Record<string, unknown> {
  if (raw.business && typeof raw.business === "object" && !Array.isArray(raw.business)) {
    return raw;
  }

  const servicesRaw = Array.isArray(raw.services) ? raw.services : [];
  const testimonialsRaw = Array.isArray(raw.testimonials) ? raw.testimonials : [];
  const faqRaw = Array.isArray(raw.faq) ? raw.faq : [];
  const benefitsRaw = Array.isArray(raw.benefits) ? raw.benefits : [];

  const legacyServices =
    servicesRaw.length > 0
      ? servicesRaw
      : benefitsRaw.map((item) => {
          if (item && typeof item === "object" && !Array.isArray(item)) {
            const benefit = item as Record<string, unknown>;
            return {
              title: benefit.title ?? benefit.name ?? "",
              description: benefit.description ?? "",
            };
          }
          return { title: String(item ?? ""), description: String(item ?? "") };
        });

  return {
    business: {
      name: raw.businessName ?? raw.name ?? "",
      industry: raw.industry ?? raw.type ?? "",
      location: raw.location ?? "",
      audience: raw.audience ?? raw.targetAudience ?? "",
      goal: raw.goal ?? raw.mainGoal ?? "",
      description: raw.description ?? raw.businessDescription ?? raw.subheadline ?? raw.about ?? "",
      usp: raw.usp ?? raw.logoIdea ?? "",
    },
    branding: {
      primaryColor: raw.primaryColor ?? "#7C5CFF",
      secondaryColor: raw.secondaryColor ?? "#3B82F6",
      accentColor: raw.accentColor ?? raw.secondaryColor ?? "#A78BFA",
      font: raw.font ?? "Inter",
      style: raw.style ?? raw.brandStyle ?? raw.tone ?? "modern professional",
    },
    hero: {
      headline: raw.headline ?? "",
      subheadline: raw.subheadline ?? "",
      cta: raw.cta ?? raw.primaryCTA ?? "",
    },
    about: {
      title:
        typeof raw.about === "object" && raw.about !== null && !Array.isArray(raw.about)
          ? (raw.about as Record<string, unknown>).title
          : "About us",
      content:
        typeof raw.about === "object" && raw.about !== null && !Array.isArray(raw.about)
          ? (raw.about as Record<string, unknown>).content
          : (raw.about ?? raw.contactPrompt ?? raw.finalCTASubheadline ?? ""),
    },
    services: legacyServices,
    testimonials: testimonialsRaw,
    faq: faqRaw,
    seo: {
      title: raw.seoTitle ?? raw.headline ?? "",
      description: raw.seoDescription ?? raw.subheadline ?? "",
      keywords: raw.brandKeywords ?? raw.keywords ?? [],
    },
    imagePrompts: {
      hero: raw.heroImagePrompt ?? "",
      about: raw.aboutImagePrompt ?? "",
      gallery: raw.galleryImagePrompt ?? "",
    },
  };
}

export function parseBusinessBrain(raw: unknown): BusinessBrain {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    throw new Error("AI response was not a valid JSON object.");
  }

  const source = migrateToNestedBrain(raw as Record<string, unknown>);
  const businessSource =
    source.business && typeof source.business === "object" && !Array.isArray(source.business)
      ? (source.business as Record<string, unknown>)
      : {};
  const brandingSource =
    source.branding && typeof source.branding === "object" && !Array.isArray(source.branding)
      ? (source.branding as Record<string, unknown>)
      : {};
  const heroSource =
    source.hero && typeof source.hero === "object" && !Array.isArray(source.hero)
      ? (source.hero as Record<string, unknown>)
      : {};
  const aboutSource =
    source.about && typeof source.about === "object" && !Array.isArray(source.about)
      ? (source.about as Record<string, unknown>)
      : {};
  const seoSource =
    source.seo && typeof source.seo === "object" && !Array.isArray(source.seo)
      ? (source.seo as Record<string, unknown>)
      : {};
  const imageSource =
    source.imagePrompts &&
    typeof source.imagePrompts === "object" &&
    !Array.isArray(source.imagePrompts)
      ? (source.imagePrompts as Record<string, unknown>)
      : {};

  const services = (Array.isArray(source.services) ? source.services : [])
    .map(normalizeService)
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .slice(0, 6);

  const testimonials = (Array.isArray(source.testimonials) ? source.testimonials : [])
    .map(normalizeTestimonial)
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .slice(0, 6);

  const faq = (Array.isArray(source.faq) ? source.faq : [])
    .map(normalizeFaq)
    .filter((item): item is NonNullable<typeof item> => item !== null)
    .slice(0, 8);

  const brain: BusinessBrain = {
    business: {
      name: normalizeString(businessSource.name),
      industry: normalizeString(businessSource.industry),
      location: normalizeString(businessSource.location),
      audience: normalizeString(businessSource.audience),
      goal: normalizeString(businessSource.goal),
      description: normalizeString(businessSource.description),
      usp: normalizeString(businessSource.usp),
    },
    branding: {
      primaryColor: normalizeHexColor(brandingSource.primaryColor, "#7C5CFF"),
      secondaryColor: normalizeHexColor(brandingSource.secondaryColor, "#3B82F6"),
      accentColor: normalizeHexColor(brandingSource.accentColor, "#A78BFA"),
      font: normalizeString(brandingSource.font, "Inter"),
      style: normalizeString(brandingSource.style, "modern professional"),
    },
    hero: {
      headline: normalizeString(heroSource.headline),
      subheadline: normalizeString(heroSource.subheadline),
      cta: normalizeString(heroSource.cta),
    },
    about: {
      title: normalizeString(aboutSource.title, "About us"),
      content: normalizeString(aboutSource.content),
    },
    services,
    testimonials,
    faq,
    seo: {
      title: normalizeString(seoSource.title),
      description: normalizeString(seoSource.description),
      keywords: normalizeStringArray(seoSource.keywords),
    },
    imagePrompts: {
      hero: normalizeString(imageSource.hero),
      about: normalizeString(imageSource.about),
      gallery: normalizeString(imageSource.gallery),
    },
  };

  return brain;
}

export function businessBrainToFormValues(
  brain: BusinessBrain
): Record<BusinessBrainProfileKey, string> {
  return BUSINESS_BRAIN_PROFILE_KEYS.reduce(
    (acc, key) => {
      acc[key] = brain.business[key] ?? "";
      return acc;
    },
    {} as Record<BusinessBrainProfileKey, string>
  );
}

export function mergeProfileFormValues(
  brain: BusinessBrain,
  values: Record<BusinessBrainProfileKey, string>
): BusinessBrain {
  const business = { ...brain.business };

  for (const key of BUSINESS_BRAIN_PROFILE_KEYS) {
    business[key] = values[key]?.trim() ?? "";
  }

  return { ...brain, business };
}

export function isBusinessBrainReady(brain: BusinessBrain): boolean {
  return Boolean(
    brain.business.name &&
      brain.hero.headline &&
      brain.hero.subheadline &&
      brain.hero.cta &&
      brain.services.length >= 1
  );
}

export function getPreviewUrlFromBrain(brain: BusinessBrain): string {
  const slug = brain.business.name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

  return `https://${slug || "your-business"}.markio.site`;
}

export function hexToRgb(hex: string): string {
  const normalized = hex.replace("#", "");
  const full =
    normalized.length === 3
      ? normalized
          .split("")
          .map((c) => c + c)
          .join("")
      : normalized;
  const r = parseInt(full.slice(0, 2), 16);
  const g = parseInt(full.slice(2, 4), 16);
  const b = parseInt(full.slice(4, 6), 16);
  return `${r}, ${g}, ${b}`;
}
