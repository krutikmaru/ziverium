// Next & React Imports
import React from "react";
import Image from "next/image";

// Third party imports
import {
  CircleHelp,
  HandCoins,
  Handshake,
  Layers3,
  PackageCheck,
  Trophy,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Internal Imports
import { services } from "@/app/lib/data/services/marketing";

// Pages for IT and Marketing Services are same yet made separately -> considering a future case where structure of either of them changes.

function Page({ params }: { params: { service: string } }) {
  const service = services.find((service) => service.slug === params.service);
  if (!service) {
    return <h1>No Such Service</h1>;
  }
  return (
    <div className="px-7 sm:px-20 py-28">
      {/* Header Texts */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-start space-x-0 space-y-4 lg:space-x-4 lg:space-y-0">
        <div className="w-full h-full mt-6 lg:mt-0">
          {/* Service Name */}
          <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl">
            {service.name}
          </h1>
          {/* Service Overview */}
          <p className="leading-7 text-neutral-400 text-lg [&:not(:first-child)]:mt-6">
            {service.overview}
          </p>
          {/* Service Tags */}
          <div className="w-full flex flex-wrap mt-5">
            {service.tags.map((tag) => (
              <div
                key={tag}
                className="bg-neutral-800/50 rounded-full backdrop-blur-xl py-1 px-6 border-2 border-neutral-700/30 mr-2 mb-2 "
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* Service Image */}
        <div className="w-full bg-neutral-800/20 border-2 border-neutral-700/30 backdrop-blur-2xl h-96 rounded-md overflow-hidden relative">
          <Image
            src={service.cover}
            alt="Branding"
            fill
            className="absolute w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="mt-10 md:mt-5">
        {/* What we offer */}
        <div className="mb-6">
          <div className="flex flex-col space-y-2 justify-start items-start mb-4 sm:flex-row sm:space-x-2 sm:space-y-0 sm:items-center">
            <PackageCheck size={44} />
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
              What We Offer
            </h2>
          </div>
          <ul>
            {service.whatWeOffer.map((offering) => (
              <li
                key={offering.title}
                className="leading-7 text-neutral-400 text-lg mb-2"
              >
                <span className="font-medium underline">{offering.title}</span>:{" "}
                {offering.description}
              </li>
            ))}
          </ul>
        </div>
        {/* How We Work */}
        <div className="mb-6">
          <div className="flex flex-col space-y-2 justify-start items-start mb-4 sm:flex-row sm:space-x-2 sm:space-y-0 sm:items-center">
            <Layers3 size={44} />
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
              How We Work
            </h2>
          </div>
          <p className="leading-7 text-neutral-400 text-lg mb-2">
            {service.howWeWork}
          </p>
        </div>
        {/* What You Receive */}
        <div className="mb-6">
          <div className="flex flex-col space-y-2 justify-start items-start mb-4 sm:flex-row sm:space-x-2 sm:space-y-0 sm:items-center">
            <HandCoins size={44} />
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
              What You Receive
            </h2>
          </div>
          <p className="leading-7 text-neutral-400 text-lg mb-2">
            {service.whatYouReceive}
          </p>
        </div>
        {/* How It Helps Your Business */}
        <div className="mb-6">
          <div className="flex flex-col space-y-2 justify-start items-start mb-4 sm:flex-row sm:space-x-2 sm:space-y-0 sm:items-center">
            <Handshake size={44} />
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
              How It Helps Your Business
            </h2>
          </div>
          <p className="leading-7 text-neutral-400 text-lg mb-2">
            {service.howItHelpsYourBusiness}
          </p>
        </div>
        {/* Benefits */}
        <div className="mb-6">
          <div className="flex flex-col space-y-2 justify-start items-start mb-4 sm:flex-row sm:space-x-2 sm:space-y-0 sm:items-center">
            <Trophy size={44} />
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
              Benefits
            </h2>
          </div>
          <div className="flex flex-col space-y-2">
            {service.benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-neutral-900/80 backdrop-blur-lg p-5 rounded-lg "
              >
                <span className="leading-7 text-neutral-200 text-xl">
                  {benefit.title}
                </span>
                <p className="text-neutral-400 mt-2">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* FAQ's */}
        <div className="mb-6">
          <div className="flex flex-col space-y-2 justify-start items-start mb-4 sm:flex-row sm:space-x-2 sm:space-y-0 sm:items-center">
            <CircleHelp size={44} />
            <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
              FAQ&apos;s
            </h2>
          </div>
          {service.faqs.map((faq) => (
            <Accordion
              key={faq.question}
              type="single"
              collapsible
              className="w-full"
            >
              <AccordionItem
                value={faq.question}
                className="border-neutral-800 text-lg"
              >
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent className="text-lg">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Page;
