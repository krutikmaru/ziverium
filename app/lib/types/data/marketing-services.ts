import { LucideIcon } from "lucide-react";

type BrandingService = {
  title: string;
  description: string;
};

type Benefit = {
  title: string;
  description: string;
};

type FAQ = {
  question: string;
  answer: string;
};

export type MarketingService = {
  slug: string;
  Icon: React.ComponentType;
  name: string;
  description: string;
  href: string;
  cta: string;
  background: React.ReactNode;
  className: string;
  cover: string;
  overview: string;
  tags: string[];
  whatWeOffer: BrandingService[];
  howWeWork: string;
  whatYouReceive: string;
  howItHelpsYourBusiness: string;
  benefits: Benefit[];
  faqs: FAQ[];
};
