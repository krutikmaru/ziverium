import { LucideIcon } from "lucide-react";

export interface Service {
  slug: string;
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: React.ReactNode;
}
