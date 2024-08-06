import { Globe, Laptop, Smartphone } from "lucide-react";
import Image from "next/image";
import { Service } from "../../types/data/it-services";

export const services: Service[] = [
  {
    slug: "websites",
    Icon: Globe,
    name: "Websites",
    description: "Managing and optimizing social media presence",
    href: "/it-services/websites",
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
    slug: "web-applications",
    Icon: Laptop,
    name: "Web Application",
    description: "Managing and optimizing social media presence",
    href: "/it-services/web-application",
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
    slug: "mobile-applications",
    Icon: Smartphone,
    name: "Mobile Applications",
    description: "Managing and optimizing social media presence",
    href: "/it-services/mobile-application",
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
