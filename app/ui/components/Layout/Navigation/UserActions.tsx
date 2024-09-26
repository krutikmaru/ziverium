"use client";
// React & Next Imports
import React, { useEffect, useState } from "react";

// Third Party Imports
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// Internal Imports
import MobileMenu from "./MobileMenu";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Lock, LogOut, User as UserIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

const UserActions = () => {
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

  async function signOut() {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();
    if (error) {
      redirect("/error");
    } else {
      setUser(undefined);
      alert("logged out");
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {user ? (
        <>
          <div className="w-10 h-10 rounded-full relative border-2 border-[#0bbbbb]">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src="/user.jpg"
                  alt="User"
                  fill
                  className="rounded-full"
                  priority
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44 mt-7 mr-4">
                <DropdownMenuItem>
                  <Link href="/private" className="flex items-center">
                    <Lock size={16} />
                    <Label className="ml-2">Private</Label>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/account" className="flex items-center">
                    <UserIcon size={16} />
                    <Label className="ml-2">Account</Label>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={signOut}>
                  <LogOut size={16} />
                  <Label className="ml-2">Logout</Label>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      ) : (
        <Link
          href={"/login"}
          className="bg-ziverium-blue text-[#ffffff] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 text-sm"
        >
          Login
        </Link>
      )}

      <MobileMenu />
    </div>
  );
};

export default UserActions;
