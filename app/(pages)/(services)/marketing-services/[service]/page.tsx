import { services } from "@/app/lib/data/services/marketing";
import NorthernLights from "@/app/ui/components/NorthernLights";
import Image from "next/image";
import React from "react";

function Page({ params }: { params: { service: string } }) {
  const service = services.find((service) => service.slug === params.service);

  return (
    <div className="px-10 sm:px-20 py-28">
      <div className="flex flex-col md:flex-row justify-between items-center space-x-0 space-y-4 md:space-x-4 md:space-y-0">
        <div className="w-full h-full ">
          <h1 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-5xl">
            Social Media Marketing
          </h1>
          <p className="leading-7 text-neutral-400 text-lg [&:not(:first-child)]:mt-6">
            Maximize your online impact and engage your audience with strategic
            social media marketing.
          </p>
          <div className="w-full flex flex-wrap mt-5">
            <div className="bg-neutral-800/50 rounded-full backdrop-blur-xl py-1 px-6 border-2 border-neutral-700/30 mr-2 mb-2 ">
              SMM
            </div>
            <div className="bg-neutral-800/50 rounded-full backdrop-blur-xl py-1 px-6 border-2 border-neutral-700/30 mr-2 mb-2 ">
              Content Creation
            </div>
            <div className="bg-neutral-800/50 rounded-full backdrop-blur-xl py-1 px-6 border-2 border-neutral-700/30 mr-2 mb-2 ">
              Engagement
            </div>
            <div className="bg-neutral-800/50 rounded-full backdrop-blur-xl py-1 px-6 border-2 border-neutral-700/30 mr-2 mb-2 ">
              Organic Reach
            </div>
            <div className="bg-neutral-800/50 rounded-full backdrop-blur-xl py-1 px-6 border-2 border-neutral-700/30 mr-2 mb-2 ">
              Community Management
            </div>
          </div>
        </div>
        <div className="w-full bg-neutral-800/20 border-4 border-neutral-700/30 backdrop-blur-2xl h-96 rounded-md overflow-hidden relative">
          <Image
            src="/marketing/social-media-marketing.avif"
            alt="Branding"
            fill
            className="absolute w-full h-full object-cover rounded-md"
          />
        </div>
      </div>
      <div className="mt-10 md:mt-5">
        <div>
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl">
            What you&apos;ll get
          </h2>
          <p className="leading-7 text-neutral-400 text-lg [&:not(:first-child)]:mt-6">
            Harness the power of social media with Ziverium’s tailored marketing
            strategies. Our social media marketing services focus on creating
            engaging content, managing campaigns, and fostering community
            interaction across platforms like Facebook, Instagram, Twitter, and
            LinkedIn. By understanding your brand and audience, we craft
            messages that resonate and drive engagement, helping you build
            strong relationships and expand your reach.
          </p>
        </div>
        <div>
          <h2 className="scroll-m-20 text-4xl font-medium tracking-tight lg:text-4xl mt-10 mb-4">
            Benefits
          </h2>
          <div className="flex flex-col space-y-2">
            <div className="bg-neutral-900/80 backdrop-blur-lg p-5 rounded-lg ">
              <span className="leading-7 text-neutral-200 text-xl">
                Increased Engagement:{" "}
              </span>
              <p className="leading-7 text-neutral-400 ">
                Foster active interaction with your audience.
              </p>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-lg p-5 rounded-lg ">
              <span className="leading-7 text-neutral-200 text-xl">
                Brand Loyalty
              </span>
              <p className="leading-7 text-neutral-400 ">
                Build a loyal community around your brand.
              </p>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-lg p-5 rounded-lg ">
              <span className="leading-7 text-neutral-200 text-xl">
                Targeted Campaigns
              </span>
              <p className="leading-7 text-neutral-400 ">
                Reach specific demographics with tailored ads and content.
              </p>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-lg p-5 rounded-lg ">
              <span className="leading-7 text-neutral-200 text-xl">
                Improved Visibility
              </span>
              <p className="leading-7 text-neutral-400 ">
                Enhance your brand’s presence on major social media platforms.
              </p>
            </div>
            <div className="bg-neutral-900/80 backdrop-blur-lg p-5 rounded-lg ">
              <span className="leading-7 text-neutral-200 text-xl">
                Analytics & Insights
              </span>
              <p className="leading-7 text-neutral-400 ">
                Gain valuable insights through performance tracking and
                analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
