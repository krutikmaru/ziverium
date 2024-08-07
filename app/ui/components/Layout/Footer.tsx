import Marquee from "@/components/magicui/marquee";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="pt-12 border-t-[1px] border-black dark:border-neutral-800">
      <FooterTicker />
      <Links />
      <CopyrightContacts />
    </div>
  );
}

export default Footer;

function FooterTicker() {
  return (
    <div className="w-full relative">
      <Marquee className="w-full [--duration:20s] mt-5">
        <h3 className="scroll-m-20 mr-20 pb-2 font-medium tracking-tighter text-9xl text-black dark:text-neutral-900">
          ZIVERIUM
        </h3>
        <h3 className="scroll-m-20 mr-20 text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tight lg:text-9xl text-black dark:text-neutral-900">
          *
        </h3>
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white dark:from-ziverium-background-dark"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white dark:from-ziverium-background-dark"></div>
    </div>
  );
}

function Links() {
  const footerLinks = [
    { title: "Pages", links: [{ title: "Contact", href: "/contact" }] },

    {
      title: "IT",
      links: [
        { title: "Websites", href: "/it-services/websites" },
        { title: "Web Applications", href: "/it-services/web-applications" },
        {
          title: "Mobile Applications",
          href: "/it-services/mobile-applications",
        },
      ],
    },
    {
      title: "Marketing",
      links: [
        {
          title: "Digital Marketing",
          href: "/marketing-services/digital-marketing",
        },
        {
          title: "Social Media Marketing",
          href: "/marketing-services/social-media-marketing",
        },
        { title: "Branding", href: "/marketing-services/branding" },
        {
          title: "Social Media Management",
          href: "/marketing-services/social-media-management",
        },
        {
          title: "Package Designing",
          href: "/marketing-services/package-designing",
        },
      ],
    },
    {
      title: "Legal",
      links: [
        { title: "Terms & Conditions", href: "#" },
        { title: "Privacy Policy", href: "#" },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full place-items-center py-12">
      {footerLinks.map((linkColumn) => (
        <LinksColumn
          key={linkColumn.title}
          title={linkColumn.title}
          links={linkColumn.links}
        />
      ))}
    </div>
  );
}

function LinksColumn({
  title,
  links,
}: {
  title: string;
  links: { title: string; href: string }[];
}) {
  return (
    <div className="w-full h-full flex flex-col space-y-2 justify-start items-center md:items-start px-5 sm:px-20 mb-10 md:mb-0 ">
      <div className="flex flex-col justify-start items-center md:items-start space-y-2">
        <h4 className="text-4xl font-medium text-neutral-500 dark:text-neutral-700 ">
          {title}
        </h4>
        {links.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="text-neutral-500 text-lg hover:text-black dark:hover:text-white"
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

function CopyrightContacts() {
  return (
    <div className="border-t-[1px] p-5 text-neutral-500 dark:text-neutral-700 border-black dark:border-neutral-800">
      &copy; {new Date().getFullYear()} Ziverium. All Rights Reserved
    </div>
  );
}
