"use client";
import NorthernLights from "@/app/ui/components/NorthernLights";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
export default function NFC_AC() {
  const [pathName, setPathName] = useState("");
  const [queryParams, setQueryParams] = useState<{ [key: string]: string }>({});

  const [status, setStatus] = useState("");
  const [scanProgress, setScanProgress] = useState("Not Scanning");
  const [nfcData, setNfcData] = useState("");

  const handleScan = async () => {
    setScanProgress("Scanning");
    if ("NDEFReader" in window) {
      try {
        const reader: any = new (window as any).NDEFReader();
        await reader.scan();

        reader.addEventListener("reading", (event: any) => {
          const { message } = event;
          const records = message.records;

          // Process the NFC data
          const urls = records
            .filter((record: any) => record.recordType === "url") // Filter for URL records
            .map((record: any) => {
              const textDecoder = new TextDecoder("utf-8"); // Decode using UTF-8
              return textDecoder.decode(record.data); // Decode the data
            });

          // Display the extracted URLs
          if (urls.length > 0) {
            setNfcData(`NFC Data: ${urls.join(", ")}`);
            setStatus("NFC scan successful!");
            setScanProgress("");
          } else {
            setNfcData("No URL records found.");
            setStatus("NFC scan successful, but no URL records found.");
            setScanProgress("");
          }
        });

        reader.addEventListener("error", (event: any) => {
          console.error("NFC scan error:", event);
          setStatus("Error scanning NFC.");
        });
      } catch (error) {
        console.error("Error setting up NFC scan:", error);
        setStatus("Error setting up NFC scan.");
      }
    } else {
      setStatus("NFC is not supported on this device.");
    }
  };
  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      // Get the current path from the window location
      const path = window.location.pathname.replace("/", "");
      setPathName(path);
      console.log("Current Path" + path);
      console.log("Current Path" + window.location);
    }
    if (typeof window !== "undefined") {
      // Grab the current URL search parameters
      const searchParams = new URLSearchParams(window.location.search);

      // Convert search parameters to a plain object
      const params: { [key: string]: string } = {};
      searchParams.forEach((value, key) => {
        params[key] = value;
      });

      setQueryParams(params);
      console.log("Query Param Path ");
    }
  }, []);
  return (
    <div className="text-black dark:text-white relative overflow-hidden ">
      <div className="flex flex-col md:flex-row justify-center items-center w-screen min-h-screen relative overflow-hidden px-5 md:px-20">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ziverium-background-dark z-20"></div>
        <NorthernLights />
        <div className=" w-full h-full flex flex-col items-center md:items-start justify-center relative z-20 mt-36 md:mt-0 mb-10">
          <h1 className="scroll-m-20 text-7xl font-normal tracking-tight lg:text-8xl mb-4">
            Welcome to NFC Hub
          </h1>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            Lets get your business domain connected to nfc card
          </p>

          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            NFC Status: {status}
          </p>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            Scan: {scanProgress}
          </p>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            NFC Data: {nfcData}
          </p>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            Cust ID from Link: {queryParams.CustID}
          </p>
          <button
            className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
            onClick={handleScan}
          >
            <span>Let's Read Your Nfc Card</span>
          </button>
        </div>
        <div className=" w-full h-full relative overflow-visible bg-transparent"></div>
      </div>
    </div>
  );
}
