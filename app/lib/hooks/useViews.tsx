//business logic hook
import { useState } from "react";
import { supabaseClient } from "../supabase/supabase";

export const useViews = () => {
  const [views, setViews] = useState<any[]>([]);
  const [domain, setDomain] = useState<string>("");

  const getViews = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("Domains_NFC")
        .select("*");
      if (data) {
        console.log("UseViews", data);
        setViews(data);
      }
      if (error) {
        console.log("UseViews", error);
      }
    } catch (e) {
      console.log("UseViews", e);
    }
  };

  // Function to fetch the row with CustId = 1011
  const fetchDomainByCustId = async (
    Customer_ID: string
  ): Promise<string | null> => {
    try {
      const { data, error } = await supabaseClient
        .from("Domains_NFC")
        .select("*")
        .eq("Customer_ID", Customer_ID);

      if (error) {
        console.error("Error fetching rows:", error.message);
        return null;
      } else if (data.length > 0) {
        console.log("Rows Fetched:", data[0].domain);
        return data[0].domain;
      } else {
        return null;
      }
    } catch (error) {
      console.error("Error in fetch operation:", error);
      return null;
    }
  };
  const insertViews = async (customer_ID: string, domain: string) => {
    try {
      const { data, error } = await supabaseClient
        .from("Domains_NFC")
        .insert({ Customer_ID: customer_ID, domain: domain });
      if (data) {
        console.log("Domains_NFC", data);
        setViews(data);
        getViews();
      }
      if (error) {
        console.log("Domains_NFC error at useViews", error);
      }
    } catch (e) {
      console.log("Domains_NFC", e);
    }
  };
  const subscribeToViews = () => {
    supabaseClient
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
  };
  const unSubToViews = (subInstance: any) => {
    supabaseClient.removeChannel(subInstance);
  };
  return {
    views,
    domain,
    getViews,
    subscribeToViews,
    unSubToViews,
    insertViews,
    fetchDomainByCustId,
    setDomain,
  };
};
