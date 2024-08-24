"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { checkout } from "@/app/lib/functions/stripe/checkout";

function Page() {
  return (
    <div className="h-screen w-screen flex justify-center items-center py-28 px-20">
      <Button
        onClick={() =>
          checkout({
            lineItems: [
              { price: "price_1PmExgAzMKn78O8pjoOkLV4e", quantity: 1 },
            ],
          })
        }
      >
        Buy Now
      </Button>
    </div>
  );
}

export default Page;
