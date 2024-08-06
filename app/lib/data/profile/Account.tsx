import {
  Computer,
  Globe,
  Laptop,
  LogOut,
  LucideIcon,
  Settings,
  Smartphone,
} from "lucide-react";
import Image from "next/image";

export const Details: Service[] = [
  {
    slug: "Profile",
    Icon: Computer,
    name: "Profile",
    description: "You a user of Ziverium",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/it-services/websites.jpg"
        alt="websites"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "h-full",
  },
  {
    slug: "Settings",
    Icon: Settings,
    name: "Settings",
    description: "Click here to adjuct your settings",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/it-services/web-application.jpg"
        alt="Web Applications"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "h-full",
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
