// Next & React Imports
import React from "react";
import Link from "next/link";

// Internal Imports
import { services as marketingServices } from "@/app/lib/data/services/marketing";
import { services as itServices } from "@/app/lib/data/services/it-services";

// Third Party Imports
import { LogOut, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";

function MobileMenu() {
  return (
    <div className="flex sm:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-44 mt-7 mr-4">
          <ScrollArea className="h-80 full">
            <DropdownMenuLabel>Marketing</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {marketingServices.map((service) => (
                <DropdownMenuItem key={service.name}>
                  <Link href={service.href}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>IT Services</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              {itServices.map((service) => (
                <DropdownMenuItem key={service.name}>
                  <Link href={service.href}>{service.name}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuGroup>
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default MobileMenu;
