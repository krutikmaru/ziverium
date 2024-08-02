// Next & React Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Internal Imports
import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";

// UI Imports
import { Button } from "@/components/ui/button";
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
      <div className="hidden sm:flex items-center space-x-10 ">
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
      <div className="w-10 h-10 rounded-full relative border-2 border-[#0bbbbb]">
        <Image
          src="/user.jpg"
          alt="User"
          fill
          className="rounded-full"
          priority
        />
      </div>

      {/* Dark Mode Future Reference */}
      {/* <ThemeSwitcher /> */}
    </div>
  );
}

export default Navigation;
