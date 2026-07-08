import {
  BarChart3,
  Bot,
  CreditCard,
  FileText,
  FolderKanban,
  Globe,
  Home,
  Image,
  LayoutTemplate,
  Link2,
  Mail,
  Megaphone,
  Palette,
  PieChart,
  Settings,
  Share2,
  Sparkles,
  Target,
  Users,
  Workflow,
  Zap,
  type LucideIcon,
} from "lucide-react";

export type NavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export const mainNavItems: NavItem[] = [
  { label: "Home", href: "/", icon: Home },
  { label: "AI Business Assistant", href: "/assistant", icon: Bot },
  { label: "Landing Pages", href: "/landing-pages", icon: LayoutTemplate },
  { label: "Funnels", href: "/funnels", icon: Workflow },
  { label: "Ads", href: "/ads", icon: Megaphone },
  { label: "Emails", href: "/emails", icon: Mail },
  { label: "Websites", href: "/websites", icon: Globe },
  { label: "Social Posts", href: "/social-posts", icon: Share2 },
  { label: "AI Images", href: "/ai-images", icon: Image },
];

export const workspaceNavItems: NavItem[] = [
  { label: "Projects", href: "/projects", icon: FolderKanban },
  { label: "Clients", href: "/clients", icon: Users },
  { label: "Assets", href: "/assets", icon: FileText },
  { label: "Integrations", href: "/integrations", icon: Link2 },
  { label: "Domains", href: "/domains", icon: Globe },
  { label: "Analytics", href: "/analytics", icon: BarChart3 },
  { label: "Leads", href: "/leads", icon: Target },
  { label: "Reports", href: "/reports", icon: PieChart },
  { label: "Brand Kit", href: "/brand-kit", icon: Palette },
];

export const accountNavItems: NavItem[] = [
  { label: "Team", href: "/team", icon: Users },
  { label: "Billing", href: "/billing", icon: CreditCard },
  { label: "Settings", href: "/settings", icon: Settings },
];

export const allNavItems = [...mainNavItems, ...workspaceNavItems, ...accountNavItems];
