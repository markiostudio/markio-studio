import {
  Calendar,
  Camera,
  Globe,
  MapPin,
  Megaphone,
  MessageCircle,
  Search,
  Star,
  Upload,
  UtensilsCrossed,
} from "lucide-react";
import type { AIRecommendation } from "@/lib/dashboard/launch-report-data";

export type IndustryCategory =
  | "restaurant"
  | "beauty"
  | "dental"
  | "real-estate"
  | "gym"
  | "default";

export function detectIndustryCategory(industry: string): IndustryCategory {
  const value = industry.toLowerCase();

  if (
    value.includes("restaurant") ||
    value.includes("food") ||
    value.includes("cafe") ||
    value.includes("dining") ||
    value.includes("ramen") ||
    value.includes("bakery")
  ) {
    return "restaurant";
  }

  if (
    value.includes("salon") ||
    value.includes("beauty") ||
    value.includes("spa") ||
    value.includes("cosmetic") ||
    value.includes("skincare")
  ) {
    return "beauty";
  }

  if (
    value.includes("dental") ||
    value.includes("clinic") ||
    value.includes("medical") ||
    value.includes("healthcare") ||
    value.includes("doctor")
  ) {
    return "dental";
  }

  if (
    value.includes("real estate") ||
    value.includes("realtor") ||
    value.includes("property") ||
    value.includes("realty")
  ) {
    return "real-estate";
  }

  if (
    value.includes("gym") ||
    value.includes("fitness") ||
    value.includes("crossfit") ||
    value.includes("training") ||
    value.includes("workout")
  ) {
    return "gym";
  }

  return "default";
}

type RecommendationTemplate = Omit<AIRecommendation, "id"> & { id: string };

const RESTAURANT: RecommendationTemplate[] = [
  {
    id: "opentable",
    title: "Connect OpenTable",
    description: "Enable table reservations directly from your landing page.",
    actionLabel: "Connect",
    icon: UtensilsCrossed,
    accent: "#DA3743",
  },
  {
    id: "google-business",
    title: "Connect Google Business",
    description: "Show menus, hours, and reviews in local search results.",
    actionLabel: "Set up",
    icon: MapPin,
    accent: "#4285F4",
  },
  {
    id: "food-photos",
    title: "Add Food Photography",
    description: "Upload hero dishes to replace AI placeholders on your site.",
    actionLabel: "Upload",
    icon: Camera,
    accent: "#F59E0B",
  },
  {
    id: "whatsapp",
    title: "Connect WhatsApp",
    description: "Let guests message you for reservations and catering inquiries.",
    actionLabel: "Connect",
    icon: MessageCircle,
    accent: "#25D366",
  },
  {
    id: "local-ads",
    title: "Run Local Ads",
    description: "Promote lunch specials and happy hour to nearby diners.",
    actionLabel: "Create",
    icon: Megaphone,
    accent: "#EA580C",
  },
];

const BEAUTY: RecommendationTemplate[] = [
  {
    id: "booking",
    title: "Connect Booking System",
    description: "Sync appointments with Fresha, Square, or your calendar.",
    actionLabel: "Connect",
    icon: Calendar,
    accent: "#BE185D",
  },
  {
    id: "instagram",
    title: "Link Instagram Portfolio",
    description: "Showcase before-and-after results on your landing page.",
    actionLabel: "Connect",
    icon: Camera,
    accent: "#E1306C",
  },
  {
    id: "google-business",
    title: "Connect Google Business",
    description: "Collect reviews and appear in local beauty searches.",
    actionLabel: "Set up",
    icon: Star,
    accent: "#4285F4",
  },
  {
    id: "whatsapp",
    title: "Connect WhatsApp",
    description: "Let clients book treatments via direct message.",
    actionLabel: "Connect",
    icon: MessageCircle,
    accent: "#25D366",
  },
  {
    id: "promo-ads",
    title: "Launch Promo Campaign",
    description: "Promote seasonal packages to local clients on Meta Ads.",
    actionLabel: "Create",
    icon: Megaphone,
    accent: "#EC4899",
  },
];

const DENTAL: RecommendationTemplate[] = [
  {
    id: "booking",
    title: "Connect Patient Booking",
    description: "Enable online consultation and appointment scheduling.",
    actionLabel: "Connect",
    icon: Calendar,
    accent: "#0369A1",
  },
  {
    id: "google-business",
    title: "Connect Google Business",
    description: "Build trust with verified reviews and clinic hours.",
    actionLabel: "Set up",
    icon: MapPin,
    accent: "#4285F4",
  },
  {
    id: "seo",
    title: "Optimize Local SEO",
    description: "Rank for searches like 'dentist near me' in your area.",
    actionLabel: "Optimize",
    icon: Search,
    accent: "#0EA5E9",
  },
  {
    id: "whatsapp",
    title: "Connect WhatsApp",
    description: "Answer patient questions and send appointment reminders.",
    actionLabel: "Connect",
    icon: MessageCircle,
    accent: "#25D366",
  },
  {
    id: "trust-badges",
    title: "Add Trust Badges",
    description: "Display certifications and insurance accepted on your site.",
    actionLabel: "Add",
    icon: Star,
    accent: "#64748B",
  },
];

const REAL_ESTATE: RecommendationTemplate[] = [
  {
    id: "mls",
    title: "Connect MLS Listings",
    description: "Pull live property listings onto your landing page.",
    actionLabel: "Connect",
    icon: Globe,
    accent: "#1E3A5F",
  },
  {
    id: "valuation",
    title: "Add Valuation Tool",
    description: "Capture seller leads with an instant home value estimate.",
    actionLabel: "Set up",
    icon: Search,
    accent: "#B8860B",
  },
  {
    id: "google-business",
    title: "Connect Google Business",
    description: "Dominate local agent searches with reviews and listings.",
    actionLabel: "Set up",
    icon: MapPin,
    accent: "#4285F4",
  },
  {
    id: "whatsapp",
    title: "Connect WhatsApp",
    description: "Let buyers and sellers reach you instantly about listings.",
    actionLabel: "Connect",
    icon: MessageCircle,
    accent: "#25D366",
  },
  {
    id: "property-ads",
    title: "Run Property Ads",
    description: "Promote featured listings to qualified buyers in your market.",
    actionLabel: "Create",
    icon: Megaphone,
    accent: "#D4AF37",
  },
];

const GYM: RecommendationTemplate[] = [
  {
    id: "trial-signup",
    title: "Enable Free Trial Signup",
    description: "Capture leads with a one-click free pass registration form.",
    actionLabel: "Set up",
    icon: Calendar,
    accent: "#EF4444",
  },
  {
    id: "instagram",
    title: "Link Instagram Feed",
    description: "Show transformation posts and class highlights on your site.",
    actionLabel: "Connect",
    icon: Camera,
    accent: "#F97316",
  },
  {
    id: "google-business",
    title: "Connect Google Business",
    description: "Appear in local fitness searches with class schedules.",
    actionLabel: "Set up",
    icon: MapPin,
    accent: "#4285F4",
  },
  {
    id: "whatsapp",
    title: "Connect WhatsApp",
    description: "Answer membership questions and book intro sessions.",
    actionLabel: "Connect",
    icon: MessageCircle,
    accent: "#25D366",
  },
  {
    id: "fitness-ads",
    title: "Launch Lead Ads",
    description: "Run high-energy campaigns targeting local fitness seekers.",
    actionLabel: "Create",
    icon: Megaphone,
    accent: "#18181B",
  },
];

const DEFAULT: RecommendationTemplate[] = [
  {
    id: "whatsapp",
    title: "Connect WhatsApp",
    description: "Let leads message you instantly from your landing page.",
    actionLabel: "Connect",
    icon: MessageCircle,
    accent: "#25D366",
  },
  {
    id: "google-business",
    title: "Connect Google Business",
    description: "Show up in local search and build trust with reviews.",
    actionLabel: "Set up",
    icon: MapPin,
    accent: "#4285F4",
  },
  {
    id: "publish",
    title: "Publish Website",
    description: "Go live with your custom domain in one click.",
    actionLabel: "Publish",
    icon: Globe,
    accent: "#7C5CFF",
  },
  {
    id: "google-ads",
    title: "Generate Google Ads",
    description: "Expand reach beyond social with search and display ads.",
    actionLabel: "Create",
    icon: Megaphone,
    accent: "#3B82F6",
  },
  {
    id: "logo",
    title: "Import Logo",
    description: "Upload your existing logo to replace the AI-generated version.",
    actionLabel: "Upload",
    icon: Upload,
    accent: "#EC4899",
  },
];

const BY_CATEGORY: Record<IndustryCategory, RecommendationTemplate[]> = {
  restaurant: RESTAURANT,
  beauty: BEAUTY,
  dental: DENTAL,
  "real-estate": REAL_ESTATE,
  gym: GYM,
  default: DEFAULT,
};

export function getIndustryRecommendations(industry: string): AIRecommendation[] {
  const category = detectIndustryCategory(industry);
  return BY_CATEGORY[category];
}
