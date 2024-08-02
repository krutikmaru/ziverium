import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
import { Factory } from "lucide-react";
import React from "react";

function InfomationCards() {
  return (
    <div className=" space-y-5 py-10 relative">
      <div className="w-[600px] h-[600px] bg-ziverium-blue/10 blur-3xl rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="flex flex-col justify-center items-center relative z-10">
        <div className="flex  items-center justify-center">
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              <span>✨ How it works</span>
            </AnimatedShinyText>
          </div>
        </div>
        <h1 className="scroll-m-20 text-4xl font-normal tracking-tight lg:text-6xl mt-6 mb-4 text-center w-full sm:w-[700px]">
          Your Pathway To Business Success
        </h1>
        <p className="text-lg font-light text-neutral-400 text-center mb-10 px-5 sm:px-0">
          See how Ziverium can help you reach the goals of your dream.
        </p>
        <div className="w-full flex flex-col justify-center items-center space-y-5 md:space-y-0 space-x-0 md:space-x-5 px-5 md:px-20">
          <div className="w-full flex flex-col justify-start items-start p-10 min-h-[300px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl">
            <div className="bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
              <Factory />
            </div>
            <h4 className="scroll-m-20 text-2xl font-medium mb-4">
              Accelerating Growth
            </h4>
            <p className="text-lg font-light text-neutral-300">
              Empowering businesses to unify their operations, optimize their
              strategies, and accelerate growth—all from one intuitive
              interface.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start p-10 min-h-[300px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl">
            <div className="bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
              <Factory />
            </div>
            <h4 className="scroll-m-20 text-2xl font-medium mb-4">
              Accelerating Growth
            </h4>
            <p className="text-lg font-light text-neutral-300">
              Empowering businesses to unify their operations, optimize their
              strategies, and accelerate growth—all from one intuitive
              interface.
            </p>
          </div>
          <div className="w-full flex flex-col justify-start items-start p-10 min-h-[300px] rounded-md bg-gradient-to-br from-white/20 to-white/[0.05] border border-neutral-500 backdrop-blur-xl">
            <div className="bg-gradient-to-br from-ziverium-blue to-ziverium-blue/30 p-3 rounded-full border-2 border-neutral-500 mb-4">
              <Factory />
            </div>
            <h4 className="scroll-m-20 text-2xl font-medium mb-4">
              Accelerating Growth
            </h4>
            <p className="text-lg font-light text-neutral-300">
              Empowering businesses to unify their operations, optimize their
              strategies, and accelerate growth—all from one intuitive
              interface.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfomationCards;
