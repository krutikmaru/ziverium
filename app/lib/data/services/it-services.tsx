import { Globe, Laptop, LucideIcon, Smartphone } from "lucide-react";
import Image from "next/image";

export const services: Service[] = [
  {
    Icon: Globe,
    name: "Websites",
    description: "Managing and optimizing social media presence",
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
    Icon: Laptop,
    name: "Web Application",
    description: "Managing and optimizing social media presence",
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
  {
    Icon: Smartphone,
    name: "Mobile Applications",
    description: "Managing and optimizing social media presence",
    href: "/",
    cta: "Learn more",
    background: (
      <Image
        src="/it-services/mobile-applications.jpg"
        alt="Mobile Applications"
        fill
        className="absolute w-full h-full object-cover opacity-60"
      />
    ),
    className: "h-full",
  },
];

interface Service {
  Icon: LucideIcon;
  name: string;
  description: string;
  href: string;
  cta: string;
  className: string;
  background: React.ReactNode;
}
