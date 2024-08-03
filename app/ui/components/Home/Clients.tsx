import React from "react";
import Marquee from "@/components/magicui/marquee";

function Clients() {
  return (
    <div>
      <div className="relative bg-ziverium-background-dark flex h-[300px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg ">
        <p className="text-lg font-light text-neutral-400 mb-10">
          Trusted by these companies
        </p>
        <Marquee pauseOnHover className="[--duration:20s]">
          <div className="text-3xl mr-10">
            <h1>Client A</h1>
          </div>
          <div className="text-3xl mr-10">
            <h1>Client B</h1>
          </div>
          <div className="text-3xl mr-10">
            <h1>Client C</h1>
          </div>
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-ziverium-background-dark to-transparent"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-ziverium-background-dark to-transparent"></div>
      </div>
    </div>
  );
}

export default Clients;
