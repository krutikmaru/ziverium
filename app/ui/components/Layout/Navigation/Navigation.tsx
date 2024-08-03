// Next & React Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Internal Imports
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

// UI Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { LogOut, Menu } from "lucide-react";

// Third Party Imports

function Navigation() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-[90%] flex justify-between items-center bg-white/10 backdrop-blur-3xl py-3 px-8 rounded-full border-[1px] border-[#585858]">
      <Image
        className="opacity-60"
        src="/ziverium.png"
        alt="Ziverium Logo"
        width={32}
        height={32}
        priority
      />
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
        <DropdownMenuTrigger asChild>
          <Link href="/">Marketing</Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-[10000]">
          <DropdownMenuItem>
            <span>Content Creation</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Marketing</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Link href="/">IT Services</Link>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 z-[10000]">
          <DropdownMenuItem>
            <span>Website</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Web Application</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Mobile Application</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Link href="/contact">Contact</Link>
      <Link href="/about">About</Link>
    </div>
  );
};

const UserActions = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-10 h-10 rounded-full relative border-2 border-[#0bbbbb]">
        <Image
          src="/user.jpg"
          alt="User"
          fill
          className="rounded-full"
          priority
        />
      </div>
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
          <DropdownMenuLabel>Marketing</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Content Creation</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Marketing</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuLabel>IT Services</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <span>Websites</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Web Applications</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Mobile Applications</span>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
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
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navigation;
