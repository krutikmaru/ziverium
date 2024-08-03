import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import Providers from "./lib/Providers";
import { cn } from "@/lib/utils";
import Navigation from "@/app/ui/components/Layout/Navigation/Navigation";
import GradientMouseFollow from "@/app/ui/components/GradientMouseFollow";
// import "tailwindcss/tailwind.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Ziverium",
  description: "Where Your Ideas Meet Creativity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable
        )}
      >
        <Providers>
          <Navigation />
          <GradientMouseFollow />
          {children}
        </Providers>
      </body>
    </html>
  );
}
