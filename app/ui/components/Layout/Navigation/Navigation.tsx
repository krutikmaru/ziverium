// Next & React Imports
import React from "react";
import Image from "next/image";
import Link from "next/link";

// Internal Imports
// import ThemeSwitcher from "@/app/ui/components/ThemeSwitcher";
import UserActions from "./UserActions";
import DesktopLinks from "./DesktopLinks";

function Navigation() {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[1000] w-[90%] flex justify-between items-center bg-white/10 backdrop-blur-3xl py-3 px-8 rounded-full border-[1px] text-white border-[#585858]">
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
    </div>
  );
}

export default Navigation;
