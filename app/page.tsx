"use client";
// Next & React imports
import React from "react";
import Hero from "@/app/ui/components/Home/Hero";
import Clients from "@/app/ui/components/Home/Clients";
import InfomationCards from "@/app/ui/components/Home/InfomationCards";
import { Bento } from "@/app/ui/components/Home/BentoGrid";

// Third party imports

// Internal imports

function Page() {
  return (
    <div className="text-black dark:text-white relative overflow-hidden ">
      <Hero />
      <Clients />
      <InfomationCards />
      <Bento />
    </div>
  );
}

export default Page;
