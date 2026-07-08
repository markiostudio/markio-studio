import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Image,
  LayoutTemplate,
  Mail,
  Megaphone,
  MapPin,
  MessageCircle,
  Palette,
  Share2,
  Upload,
} from "lucide-react";

export type LaunchReportBusiness = {
  name: string;
  type: string;
  goal: string;
  healthScore: number;
};

export type GeneratedAsset = {
  id: string;
  emoji: string;
  title: string;
  status: "Ready" | "Draft Ready";
  description: string;
  primaryAction: string;
  secondaryAction: string;
  preview: "website" | "landing" | "brand" | "ads" | "social" | "email";
};

export type AIRecommendation = {
  id: string;
  title: string;
  description: string;
  actionLabel: string;
  icon: LucideIcon;
  accent: string;
};

export const launchReportBusiness: LaunchReportBusiness = {
  name: "GlowFit Studio",
  type: "Online Fitness Coaching",
  goal: "Generate more leads",
  healthScore: 92,
};

export const generatedAssets: GeneratedAsset[] = [
  {
    id: "website",
    emoji: "🌐",
    title: "Website",
    status: "Ready",
    description: "A full 5-page website with home, about, programs, testimonials, and contact.",
    primaryAction: "Preview",
    secondaryAction: "Edit",
    preview: "website",
  },
  {
    id: "landing",
    emoji: "🚀",
    title: "Landing Page",
    status: "Ready",
    description: "High-converting page with headline, benefits, social proof, and a lead form.",
    primaryAction: "Preview",
    secondaryAction: "Edit",
    preview: "landing",
  },
  {
    id: "brand",
    emoji: "🎨",
    title: "Brand Kit",
    status: "Ready",
    description: "Logo, color palette, fonts, and brand voice tailored to your fitness coaching business.",
    primaryAction: "View",
    secondaryAction: "Customize",
    preview: "brand",
  },
  {
    id: "ads",
    emoji: "📣",
    title: "Facebook Ads",
    status: "Ready",
    description: "3 ad variations with headlines, copy, and CTA — optimized for lead generation.",
    primaryAction: "Preview Ads",
    secondaryAction: "Regenerate",
    preview: "ads",
  },
  {
    id: "social",
    emoji: "📱",
    title: "Social Media Posts",
    status: "Ready",
    description: "6 Instagram and Facebook posts ready to schedule for the next 2 weeks.",
    primaryAction: "View Posts",
    secondaryAction: "Regenerate",
    preview: "social",
  },
  {
    id: "email",
    emoji: "✉",
    title: "Email Campaign",
    status: "Draft Ready",
    description: "Welcome series with 3 emails to nurture new leads into paying clients.",
    primaryAction: "Preview",
    secondaryAction: "Edit",
    preview: "email",
  },
];

export const aiRecommendations: AIRecommendation[] = [
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
    description: "Expand reach beyond Facebook with search and display ads.",
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

export const assetPreviewIcons = {
  website: Globe,
  landing: LayoutTemplate,
  brand: Palette,
  ads: Megaphone,
  social: Share2,
  email: Mail,
  fallback: Image,
};
