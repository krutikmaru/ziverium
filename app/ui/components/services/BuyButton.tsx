"use client";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, buttonVariants } from "@/components/ui/button";
import { checkout } from "@/app/lib/functions/stripe/checkout";
import Link from "next/link";
import { User } from "@supabase/supabase-js";
import { createClient } from "@/utils/supabase/client";

function BuyButton({ paymentLink }: { paymentLink: string }) {
  console.log(paymentLink);
  const [user, setUser] = useState<User | undefined>(undefined);
  useEffect(() => {
    async function getUser() {
      const supabase = createClient();
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        console.log("No User");
      } else {
        setUser(data.user);
      }
    }
    getUser();
  }, []);

  if (!user) {
    return (
      <Link
        href={"/login"}
        className="bg-ziverium-blue text-[#141414] py-2 px-5 w-fit font-semibold rounded-lg flex items-center space-x-2 "
      >
        <span>Buy Now</span>
      </Link>
    );
  }
  return (
    <Dialog>
      <DialogTrigger>
        <button className="bg-ziverium-blue text-[#2d2d2d] py-2 px-5 font-semibold rounded-lg flex items-center space-x-2 ">
          <span>Buy Now</span>
        </button>
      </DialogTrigger>
      <DialogContent className="dark:bg-neutral-950 dark:border-neutral-900">
        <DialogHeader>
          <DialogTitle>Confirm Checkout</DialogTitle>
          <DialogDescription className="dark:text-neutral-500">
            Checkout will redirect you to a secure payment portal
          </DialogDescription>
        </DialogHeader>

        <Link
          href={paymentLink}
          className={buttonVariants({
            variant: "outline",
            className:
              "bg-neutral-50 dark:bg-neutral-50 dark:text-black dark:hover:text-black dark:hover:bg-neutral-300",
          })}
        >
          Checkout
        </Link>
      </DialogContent>
    </Dialog>
  );
}

export default BuyButton;
