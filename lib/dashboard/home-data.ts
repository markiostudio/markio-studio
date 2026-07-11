import { DEFAULT_BUSINESS_BRAIN } from "@/lib/dashboard/business-brain";

export type BusinessProgressStep = {
  id: string;
  label: string;
  description: string;
  progress: number;
  status: "complete" | "in-progress" | "upcoming";
  mockup: "brand" | "landing" | "ads" | "email" | "launch";
};

export const demoBusiness = {
  name: DEFAULT_BUSINESS_BRAIN.business.name,
  type: DEFAULT_BUSINESS_BRAIN.business.industry,
  owner: "Sarah",
};

export const businessProgressSteps: BusinessProgressStep[] = [
  {
    id: "profile",
    label: "Business Profile",
    description: "Goals, audience, and offer defined",
    progress: 100,
    status: "complete",
    mockup: "brand",
  },
  {
    id: "brand",
    label: "Brand Kit",
    description: "Logo, colors, fonts, and tone ready",
    progress: 100,
    status: "complete",
    mockup: "brand",
  },
  {
    id: "landing",
    label: "Landing Page",
    description: "Homepage draft — headline & CTA in review",
    progress: 85,
    status: "in-progress",
    mockup: "landing",
  },
  {
    id: "ads",
    label: "Ads & Social",
    description: "3 Instagram ads and 2 posts drafted",
    progress: 40,
    status: "in-progress",
    mockup: "ads",
  },
  {
    id: "launch",
    label: "Go Live",
    description: "Connect domain and publish everything",
    progress: 0,
    status: "upcoming",
    mockup: "launch",
  },
];

export const starterPrompts = [
  "I run an online fitness coaching business for busy professionals",
  "I own a dental clinic and need more appointment bookings",
  "I sell handmade jewelry on Instagram and want a proper website",
  "I'm a real estate agent looking to generate more seller leads",
];

export const valuePropositionItems = [
  {
    title: "Just describe your business",
    description:
      "Tell Markio what you do, who you serve, and what you sell. No marketing jargon needed.",
    stat: "2 min setup",
  },
  {
    title: "AI builds your marketing",
    description:
      "Get a landing page, ads, emails, social posts, and brand assets — all matched to your business.",
    stat: "8+ assets",
  },
  {
    title: "Launch and grow",
    description:
      "Publish with one click, collect leads, and track what's working so you can grow with confidence.",
    stat: "All-in-one",
  },
];

export type DemoAsset = {
  id: string;
  title: string;
  type: string;
  status: "Live" | "Ready" | "Draft";
  updated: string;
  mockup: "landing" | "ads" | "email";
  metric?: string;
};

export const demoAssets: DemoAsset[] = [
  {
    id: "1",
    title: `${DEFAULT_BUSINESS_BRAIN.business.name} Coaching Page`,
    type: "Landing Page",
    status: "Live",
    updated: "2 hours ago",
    mockup: "landing",
    metric: "847 visitors this week",
  },
  {
    id: "2",
    title: "Summer Transformation Ad",
    type: "Instagram Ad",
    status: "Ready",
    updated: "Yesterday",
    mockup: "ads",
    metric: "Est. reach: 12K–18K",
  },
  {
    id: "3",
    title: "New Client Welcome Email",
    type: "Email Campaign",
    status: "Draft",
    updated: "3 days ago",
    mockup: "email",
    metric: "42% avg. open rate predicted",
  },
];
