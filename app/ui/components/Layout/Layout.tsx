"use client";
import React from "react";
import Navigation from "./Navigation/Navigation";
import Footer from "./Footer";
import { usePathname } from "next/navigation";

function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (pathname === "/contact") {
    return <>{children}</>;
  }
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
