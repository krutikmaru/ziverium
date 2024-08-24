"use client";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import { usePathname } from "next/navigation";
import { Toaster } from "@/components/ui/sonner";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (
    pathname === "/contact" ||
    pathname === "/login" ||
    pathname === "/signup"
  ) {
    return <>{children}</>;
  }
  return (
    <>
      <Toaster />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
