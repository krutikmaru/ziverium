// Next & React Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// UI Imports
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

// Third Party Imports
import { LogOut, Menu } from "lucide-react";

// Internal Imports
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";
import { services as marketingServices } from "@/app/lib/data/services/marketing";
import { services as itServices } from "@/app/lib/data/services/it-services";

// Third Party Imports

function Navigation() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-[90%] flex justify-between items-center bg-white/10 backdrop-blur-3xl py-3 px-8 rounded-full border-[1px] border-[#585858]">
      <Link href={"/"}>
        <Image
          className="opacity-60"
          src="/ziverium.png"
          alt="Ziverium Logo"
          width={32}
          height={32}
          priority
        />
      </Link>
      <DesktopLinks />
      <UserActions />

      {/* Dark Mode Future Reference */}
      {/* <ThemeSwitcher /> */}
    </div>
  );
}

const DesktopLinks = () => {
  return (
    <div className="hidden sm:flex items-center space-x-5 ">
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer" asChild>
          <span>Marketing</span>
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
          <span>IT Services</span>
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
      {/* <Link href="/about">About</Link> */}
    </div>
  );
};

const UserActions = () => {
  return (
    <div className="flex items-center space-x-2">
      {/* <div className="w-10 h-10 rounded-full relative border-2 border-[#0bbbbb]">
        <Image
          src="/user.jpg"
          alt="User"
          fill
          className="rounded-full"
          priority
        />
      </div> */}
      <MobileMenu />
    </div>
  );
};

const MobileMenu = () => {
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
            {/* <DropdownMenuSeparator />
            <DropdownMenuItem>
              <span>About</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Contact</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>My Account</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem> */}
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navigation;
