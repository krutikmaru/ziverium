import {
  BadgeCheck,
  Heart,
  LucideIcon,
  Package,
  TargetIcon,
  Users,
} from "lucide-react";
import Image from "next/image";

export const services: Service[] = [
  {
    slug: "branding",
    Icon: BadgeCheck,
    name: "Branding",
    description: "Building a unique business identity.",
    href: "/marketing-services/branding",
    cta: "Learn more",
    background: (
      <Image
        src="/marketing/branding.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
  },
  {
    slug: "digital-marketing",
    Icon: TargetIcon,
    name: "Digital Marketing",
    description: "Promoting your brand online",
    href: "/marketing-services/digital-marketing",
    cta: "Learn more",
    background: (
      <Image
        src="/marketing/digital-marketing.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
  },
  {
    slug: "social-media-marketing",
    Icon: Heart,
    name: "Social Media Marketing",
    description: "Advertising on social media platforms.",
    href: "/marketing-services/social-media-marketing",
    cta: "Learn more",
    background: (
      <Image
        src="/marketing/social-media-marketing.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4",
  },
  {
    slug: "package-designing",
    Icon: Package,
    name: "Package Designing",
    description: "Crafting attractive and functional product packaging.",
    href: "/marketing-services/package-designing",
    cta: "Learn more",
    background: (
      <Image
        src="/marketing/package-designing.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2",
  },
  {
    slug: "social-media-management",
    Icon: Users,
    name: "Social Media Management",
    description: "Managing and optimizing social media presence",
    href: "/marketing-services/social-media-management",
    cta: "Learn more",
    background: (
      <Image
        src="/marketing/social-media-management.avif"
        alt="Branding"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
  },
];

interface Service {
  slug: string;
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: React.ReactNode;
}
