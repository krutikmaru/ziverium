"use client";
// Next & React Imports
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useRouter } from "next/navigation";
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
import { LogIn, LogOut, Menu } from "lucide-react";

// Internal Imports
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";
import { services as marketingServices } from "@/app/lib/data/services/marketing";
import { services as itServices } from "@/app/lib/data/services/it-services";
import { Details as Profile } from "@/app/lib/data/profile/Account";
import router from "next/router";

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
        <DropdownMenuTrigger asChild>
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
      <Link href="/about">About</Link>
    </div>
  );
};

const UserActions = () => {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const supabase = createClientComponentClient();

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user);
      setLoading(false);
    }
    getUser();
  }, [supabase.auth]);

  useEffect(() => {
    console.log("Current User: ", currentUser);
  }, [currentUser]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setCurrentUser(null);
    setLoading(false);
    router.refresh();
  };

  return (
    <div className="flex items-center space-x-2">
      {currentUser ? (
        <div className="relative w-10 h-10 rounded-full border-2 border-[#0bbbbb] flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Image
                src="/user.jpg"
                alt="User"
                layout="fill"
                className="rounded-full object-cover"
                priority
              />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-[10000]">
              {Profile.map((profile) => (
                <DropdownMenuItem key={profile.name}>
                  <Link href={profile.href}>{profile.name}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem key="Log out">
                <button onClick={handleLogout}>Logout</button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        <div>
          <Link
            href="/auth/login"
            className="inline-block px-6 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Log in
          </Link>
        </div>
      )}
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
          </ScrollArea>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Navigation;
