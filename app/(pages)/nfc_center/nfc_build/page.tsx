"use client";
import React, { useEffect, useState } from "react";
import NorthernLights from "@/app/ui/components/NorthernLights";
import { Input } from "@/components/ui/input";
import { supabaseClient } from "@/app/lib/supabase/supabase";
import { useViews } from "@/app/lib/hooks/useViews";
export default function NFC_Build() {
  const [domainChoosen, setDomainChoosen] = useState<string>("");
  const [domainSet, setDomainSet] = useState(false);
  const {
    views,
    domain,
    insertViews,
    getViews,
    unSubToViews,
    fetchDomainByCustId,
  } = useViews();
  const [customer_ID, setCustomer_ID] = useState<string | null>("");

  //Subbing to Realtime Db
  const SubInstance = supabaseClient
    .channel("Domains_NFC-follow-up")
    .on(
      "postgres_changes",
      {
        event: "*",
        schema: "public",
        table: "Domains_NFC",
      },
      (payload: any) => {
        console.log("useViews Page Payload", payload);
      }
    )
    .subscribe();

  const unsub = () => {
    unSubToViews(SubInstance);
    console.log("Un sub Succes");
  };

  //Adding domian to database
  const addDomain = () => {
    // Ensure domain is a proper URI
    const formattedDomain = formatDomain(domainChoosen);
    console.log("CustomerID :", customer_ID, "Domain: ", domainChoosen); // Use the value as needed
    insertViews(customer_ID!, formattedDomain);
    setDomainSet(true);
    // getViews();
  };
  //Switching to creating Landing page
  const createBusinessPage = () => {
    // Ensure domain is a proper URI
    window.location.href = "/nfc_center/nfc_pagecooking"; // You can use an absolute or relative URL
  };
  const formatDomain = (domain: string): string => {
    // Check if the domain starts with 'http://', 'https://', or 'www.'
    if (!/^https?:\/\//i.test(domain) && !/^www\./i.test(domain)) {
      domain = `https://${domain}`; // Default to HTTPS if no scheme is present
    } else if (!/^https?:\/\//i.test(domain)) {
      // Add 'https://' if it starts with 'www.'
      domain = `https://${domain}`;
    } else {
      domain = `https://${domain}`;
    }

    return domain;
  };
  const fetchUser = async () => {
    console.log("Fetch User Started");
  };
  //Realtime Database
  useEffect(() => {
    //Retrieving Cust id
    const CustIdFromSession = sessionStorage.getItem("CustomerID");
    setCustomer_ID(CustIdFromSession);
    getViews();
  }, []);

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center w-screen min-h-screen relative overflow-hidden px-5 md:px-20">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ziverium-background-dark z-20"></div>
        <NorthernLights />
        <div className=" w-full h-full flex flex-col items-center md:items-start justify-center relative z-20 mt-36 md:mt-0 mb-10">
          <h1 className="scroll-m-20 text-7xl font-normal tracking-tight lg:text-8xl mb-4">
            NFC Build
          </h1>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            Link Your NFC Your to Domain here {customer_ID}
          </p>
          <ul>
            {views.map((view: any, key: number) => (
              <li key={key}>{view.name}</li>
            ))}
          </ul>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            {domainChoosen == "" ? (
              <span>No Domain Yet</span>
            ) : (
              <span>{domainChoosen}</span>
            )}
          </p>
          {domainSet ? (
            <h1>Domain has been set Successfully</h1>
          ) : (
            <Input
              type="text" // Use text for domain input
              name="domain"
              placeholder="Enter Website Domain"
              value={domainChoosen} // State variable for the domain input value
              onChange={(e) => setDomainChoosen(e.target.value)} // Update state on change
              style={{
                width: "350px",
                height: "45px",
                padding: "12px 20px",
                margin: "8px 0",
                boxSizing: "border-box",
                border: "2px solid #ccc",
                borderRadius: "4px",
                fontSize: "21px",
                background: "transparent",
                fontFamily: "Arial, sans-serif",
                transition: "border-color 0.3s ease, box-shadow 0.3s ease",
              }}
            />
          )}

          <button
            className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
            onClick={addDomain}
          >
            <span>Set Domain </span>
          </button>
          <button
            className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
            onClick={createBusinessPage}
          >
            <span>Let's add a stylish landing page for you </span>
          </button>
          {/* <button
            className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
            onClick={unsub}
          >
            <span>Un sub</span>
          </button>
          <button
            className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
            onClick={fetchUser}
          >
            <span>Fetch User</span>
          </button> */}
        </div>
        <div className=" w-full h-full relative overflow-visible bg-transparent"></div>
      </div>
    </div>
  );
}
