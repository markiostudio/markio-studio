import {
  Globe,
  Image,
  LayoutTemplate,
  Mail,
  Megaphone,
  Palette,
  Share2,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type QuickAction = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  gradient: string;
};

export const quickActions: QuickAction[] = [
  {
    title: "AI Landing Page",
    description: "Create a page that turns visitors into customers",
    href: "/landing-pages",
    icon: LayoutTemplate,
    gradient: "from-[#7C5CFF] to-[#3B82F6]",
  },
  {
    title: "AI Funnel",
    description: "Guide people step-by-step to buy from you",
    href: "/funnels",
    icon: Workflow,
    gradient: "from-[#8B5CF6] to-[#EC4899]",
  },
  {
    title: "AI Ads",
    description: "Write ads that get clicks and sales",
    href: "/ads",
    icon: Megaphone,
    gradient: "from-[#3B82F6] to-[#7C5CFF]",
  },
  {
    title: "AI Email Campaign",
    description: "Send emails that people actually open",
    href: "/emails",
    icon: Mail,
    gradient: "from-[#EC4899] to-[#8B5CF6]",
  },
  {
    title: "AI Website",
    description: "Build a full website for your business",
    href: "/websites",
    icon: Globe,
    gradient: "from-[#7C5CFF] to-[#EC4899]",
  },
  {
    title: "AI Social Post",
    description: "Create posts that grow your audience",
    href: "/social-posts",
    icon: Share2,
    gradient: "from-[#3B82F6] to-[#8B5CF6]",
  },
  {
    title: "AI Images",
    description: "Generate visuals for your brand",
    href: "/ai-images",
    icon: Image,
    gradient: "from-[#8B5CF6] to-[#3B82F6]",
  },
  {
    title: "AI Logo",
    description: "Design a logo that looks professional",
    href: "/brand-kit",
    icon: Palette,
    gradient: "from-[#EC4899] to-[#7C5CFF]",
  },
];

export const workflowSteps = [
  { step: 1, label: "Business Info" },
  { step: 2, label: "Brand Kit" },
  { step: 3, label: "Landing Page" },
  { step: 4, label: "Ads" },
  { step: 5, label: "Emails" },
  { step: 6, label: "Go Live" },
];

export type TemplateCategory =
  | "All"
  | "Business"
  | "Ecommerce"
  | "Agency"
  | "Local Business"
  | "SaaS"
  | "More";

export const templateCategories: TemplateCategory[] = [
  "All",
  "Business",
  "Ecommerce",
  "Agency",
  "Local Business",
  "SaaS",
  "More",
];

export type Template = {
  id: string;
  title: string;
  category: Exclude<TemplateCategory, "All" | "More">;
  badge?: "Popular" | "New";
  gradient: string;
};

export const templates: Template[] = [
  {
    id: "fitness-coach",
    title: "Fitness Coach",
    category: "Business",
    badge: "Popular",
    gradient: "from-emerald-500/30 to-teal-600/20",
  },
  {
    id: "dental-clinic",
    title: "Dental Clinic",
    category: "Local Business",
    badge: "New",
    gradient: "from-blue-500/30 to-cyan-600/20",
  },
  {
    id: "real-estate",
    title: "Real Estate",
    category: "Business",
    badge: "Popular",
    gradient: "from-amber-500/30 to-orange-600/20",
  },
  {
    id: "restaurant",
    title: "Restaurant",
    category: "Local Business",
    gradient: "from-red-500/30 to-rose-600/20",
  },
  {
    id: "saas-product",
    title: "SaaS Product",
    category: "SaaS",
    badge: "New",
    gradient: "from-violet-500/30 to-purple-600/20",
  },
];

export type Project = {
  id: string;
  name: string;
  lastUpdated: string;
  status: "Draft" | "Live" | "In Review";
  gradient: string;
};

export const recentProjects: Project[] = [
  {
    id: "1",
    name: "Fitness Funnel",
    lastUpdated: "2 hours ago",
    status: "Live",
    gradient: "from-emerald-500/40 to-teal-700/30",
  },
  {
    id: "2",
    name: "Dental Landing Page",
    lastUpdated: "Yesterday",
    status: "In Review",
    gradient: "from-blue-500/40 to-indigo-700/30",
  },
  {
    id: "3",
    name: "Real Estate LP",
    lastUpdated: "3 days ago",
    status: "Draft",
    gradient: "from-amber-500/40 to-orange-700/30",
  },
  {
    id: "4",
    name: "Coaching Program",
    lastUpdated: "1 week ago",
    status: "Live",
    gradient: "from-purple-500/40 to-violet-700/30",
  },
  {
    id: "5",
    name: "E-commerce Store",
    lastUpdated: "2 weeks ago",
    status: "Draft",
    gradient: "from-pink-500/40 to-rose-700/30",
  },
];

export const copilotSuggestions = [
  "Improve my headline",
  "Write a better CTA",
  "Generate FAQ section",
  "Create Facebook ad copy",
  "Make it more professional",
];

export type Metric = {
  label: string;
  value: string;
  change: string;
};

export const businessMetrics: Metric[] = [
  { label: "Visitors", value: "12.4K", change: "+18.2%" },
  { label: "Leads", value: "847", change: "+24.5%" },
  { label: "Conversions", value: "156", change: "+12.8%" },
  { label: "Revenue", value: "$8,420", change: "+31.2%" },
];

export type Integration = {
  id: string;
  name: string;
  connected: boolean;
  color: string;
  initials: string;
};

export const integrations: Integration[] = [
  { id: "whatsapp", name: "WhatsApp", connected: true, color: "#25D366", initials: "WA" },
  { id: "ga", name: "Google Analytics", connected: true, color: "#F9AB00", initials: "GA" },
  { id: "fb-pixel", name: "Facebook Pixel", connected: false, color: "#1877F2", initials: "FB" },
  { id: "stripe", name: "Stripe", connected: false, color: "#635BFF", initials: "ST" },
  { id: "gmb", name: "Google Business", connected: false, color: "#4285F4", initials: "GB" },
  { id: "sheets", name: "Google Sheets", connected: true, color: "#0F9D58", initials: "GS" },
];

export const valueProps = [
  { title: "No Code, All AI", icon: "✨" },
  { title: "Save Time & Money", icon: "⚡" },
  { title: "Grow Your Business", icon: "📈" },
  { title: "All-in-One Platform", icon: "🚀" },
];

export type EmptyStateConfig = {
  title: string;
  description: string;
  actionLabel: string;
  actionHref: string;
};

export const emptyStates: Record<string, EmptyStateConfig> = {
  projects: {
    title: "No projects yet",
    description:
      "Tell Markio what business you want to build, and AI will create your first project.",
    actionLabel: "Start with AI Assistant",
    actionHref: "/assistant",
  },
  assets: {
    title: "No assets yet",
    description:
      "Your images, logos, and marketing files will appear here once you create them with AI.",
    actionLabel: "Create AI Images",
    actionHref: "/ai-images",
  },
  leads: {
    title: "No leads yet",
    description:
      "Publish a page with a form or WhatsApp button to start collecting leads.",
    actionLabel: "Create Landing Page",
    actionHref: "/landing-pages",
  },
  reports: {
    title: "No reports yet",
    description:
      "Once your pages go live, Markio will show you what's working and what to improve.",
    actionLabel: "View Analytics",
    actionHref: "/analytics",
  },
  integrations: {
    title: "Connect your tools",
    description:
      "Link WhatsApp, Google Analytics, and more to track results and automate your marketing.",
    actionLabel: "Browse Integrations",
    actionHref: "/integrations",
  },
  "brand-kit": {
    title: "No brand kit yet",
    description:
      "Enter your business name and Markio will create colors, fonts, and tone for you.",
    actionLabel: "Create Brand Kit",
    actionHref: "/brand-kit",
  },
  clients: {
    title: "No clients yet",
    description:
      "Add clients to manage their projects, assets, and marketing from one place.",
    actionLabel: "Add Client",
    actionHref: "/clients",
  },
  domains: {
    title: "No domains connected",
    description:
      "Connect your custom domain to publish pages under your own brand.",
    actionLabel: "Add Domain",
    actionHref: "/domains",
  },
  team: {
    title: "It's just you for now",
    description:
      "Invite team members to collaborate on projects, assets, and campaigns.",
    actionLabel: "Invite Team Member",
    actionHref: "/team",
  },
};
