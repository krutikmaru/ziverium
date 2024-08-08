"use client";
import NorthernLights from "@/app/ui/components/NorthernLights";
import React from "react";
import { useState, useEffect } from "react";
import { useViews } from "@/app/lib/hooks/useViews";

export default function NFC_Node({ params }) {
  const { fetchDomainByCustId } = useViews();
  //First time user
  const [firstTimeUser, setFirstTimeUser] = useState(true);

  //Fetch the The domain link user has stored in database
  const [redirectPage, setRedirectPage] = useState("https://www.ziverium.com/");
  const redirectToDomainBuild = () => {
    //Check is user is First time user

    if (typeof window !== "undefined") {
      //Storing Custid in session
      console.log("CustId Sent", params.nfc_node[1]);
      sessionStorage.setItem("CustomerID", params.nfc_node[1]);
      window.location.href = "/nfc_center/nfc_build"; // You can use an absolute or relative URL
    }
  };
  useEffect(() => {
    const fetchData = () => {
      fetchDomainByCustId(params.nfc_node[1])
        .then((res) => {
          if (res === null || res === "") {
            console.log("Temp domain is empty");
            redirectToDomainBuild();
          } else {
            console.log("Temp Domain:", res);
            setRedirectPage(res);
            console.log("Redirect Page set to:", res); // Note: `redirectPage` won't be updated immediately here
            window.location.href = res;
          }
        })
        .catch((error) => {
          console.error("Error fetching domain:", error);
        });
    };

    fetchData();
  }, []);
  console.log("Params", params);
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center w-screen min-h-screen relative overflow-hidden px-5 md:px-20">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ziverium-background-dark z-20"></div>
        <NorthernLights />
        <div className=" w-full h-full flex flex-col items-center md:items-start justify-center relative z-20 mt-36 md:mt-0 mb-10">
          <h1 className="scroll-m-20 text-7xl font-normal tracking-tight lg:text-8xl mb-4">
            NFC Node
          </h1>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            Powered by Ziverium Please wait...
          </p>
          <button className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 ">
            <span>Change URL</span>
          </button>
        </div>
        <div className=" w-full h-full relative overflow-visible bg-transparent"></div>
      </div>
    </div>
  );
}
