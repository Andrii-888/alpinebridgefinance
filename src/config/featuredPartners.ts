// src/config/featuredPartners.ts
import type { LucideIcon } from "lucide-react";
import {
  Building2,
  Landmark,
  Briefcase,
  Car,
  Store,
  Banknote,
  LineChart,
  Globe,
} from "lucide-react";

export type FeaturedPartner = {
  name: string;
  href?: string; // опционально — ссылка
  logo?: string; // опционально — путь к картинке из /public
  icon?: LucideIcon; // опционально — иконка из lucide-react
};

export const FEATURED_PARTNERS: FeaturedPartner[] = [
  { name: "Estate Partner A", icon: Building2 },
  { name: "Bank Partner A", icon: Landmark },
  { name: "Finance Partner A", icon: Briefcase },
  { name: "Auto Partner A", icon: Car },
  { name: "Retail Partner A", icon: Store },
  { name: "Payment Partner A", icon: Banknote },
  { name: "Investment Partner A", icon: LineChart },
  { name: "Global Partner A", icon: Globe },
];
