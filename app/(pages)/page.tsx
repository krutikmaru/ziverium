// Next & React imports
import React from "react";
import Hero from "@/app/ui/components/Home/Hero";
import Clients from "@/app/ui/components/Home/Clients";
import InfomationCards from "@/app/ui/components/Home/InfomationCards";
import { MarketingBento } from "@/app/ui/components/Home/MarketingBento";
import { ITServicesBento } from "../ui/components/Home/ITServicesBento";

// Third party imports

// Internal imports
import GradientMouseFollow from "@/app/ui/components/GradientMouseFollow";

function Page() {
  return (
    <div className="text-black dark:text-white relative overflow-hidden ">
      <Hero />
      <Clients />
      <InfomationCards />
      <ITServicesBento />
      <MarketingBento />
      <GradientMouseFollow />
    </div>
  );
}

export default Page;
