"use client";
import useWindowSize from "@/app/lib/hooks/useWindowSize";
import BusinessCardMobile from "../ui/components/BusinessCard/BusinessCardMobile";

export default function Page() {
  const { width } = useWindowSize();
  const isMobile = width !== undefined && width <= 768;
  return (
    <main className="flex min-h-screen">
      {isMobile ? <BusinessCardMobile /> : <h1>Desktop Business Card</h1>}
    </main>
  );
}
