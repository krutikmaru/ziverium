import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import { services } from "@/app/lib/data/services/it-services";

export function ITServicesBento() {
  return (
    <div className="flex flex-col justify-center items-center pt-10 relative">
      <div className="w-[600px] h-[600px] bg-ziverium-blue/10 blur-3xl rounded-full absolute top-96 sm:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>

      <div className="flex  items-center justify-center">
        <div
          className={cn(
            "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}
        >
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
            <span>💻 IT Services</span>
          </AnimatedShinyText>
        </div>
      </div>
      <h1 className="scroll-m-20 text-4xl font-normal tracking-tight lg:text-6xl mt-6 mb-4 text-center w-full sm:w-[700px]">
        Comprehensive IT Solutions
      </h1>
      <p className="text-lg font-light text-neutral-400 text-center px-5 sm:px-0">
        Our Tailored strategies to boost your brands visibility and growth.
      </p>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 h-[700px] p-5 sm:p-20">
        {services.map((service) => (
          <BentoCard key={service.name} {...service} />
        ))}
      </div>
    </div>
  );
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className: string;
  background: ReactNode;
  Icon: any;
  description: string;
  href: string;
  cta: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative flex flex-col justify-end overflow-hidden rounded-xl",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >
    <div className="h-full absolute w-full group-hover:scale-105 transition-all duration-300 ease-in-out">
      {background}
    </div>
    <div className="absolute bottom-0 h-40 w-full bg-gradient-to-b from-transparent to-ziverium-background-dark"></div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
      <Icon className="h-12 w-12 origin-left transform-gpu text-white transition-all duration-300 ease-in-out group-hover:scale-75" />
      <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
        {name}
      </h3>
      <p className="max-w-lg text-neutral-400">{description}</p>
    </div>

    <div
      className={cn(
        "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
      )}
    >
      <Button
        variant="ghost"
        asChild
        size="sm"
        className="pointer-events-auto "
      >
        <a href={href}>
          {cta}
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </a>
      </Button>
    </div>
    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
  </div>
);
