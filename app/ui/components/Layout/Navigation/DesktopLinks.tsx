// React & Next Imports
import React from "react";
import Link from "next/link";

// Internal Imports
import { services as marketingServices } from "@/app/lib/data/services/marketing";
import { services as itServices } from "@/app/lib/data/services/it-services";

// Third Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function DesktopLinks() {
  return (
    <div className="hidden sm:flex items-center space-x-5 ">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <span>SMMA</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-[10000]">
          {marketingServices.map((service) => (
            <DropdownMenuItem key={service.name}>
              <Link className=" w-full" href={service.href}>
                {service.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <span>SaaS</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-[10000]">
          {itServices.map((service) => (
            <DropdownMenuItem key={service.name}>
              <Link href={service.href}>{service.name}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/contact">Contact</Link>
      <Link href="/products">Products</Link>
      {/* <Link href="/about">About</Link> */}
    </div>
  );
}

export default DesktopLinks;
