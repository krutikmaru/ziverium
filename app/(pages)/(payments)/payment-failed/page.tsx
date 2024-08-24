import { X } from "lucide-react";
import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center py-28 px-20">
      <X size={72} className="text-red-500 mb-4" />
      <p className="text-red-400 text-xl mb-20">Payment Failed!</p>
      <Link href={"/"} className="underline text-blue-600">
        Back to home
      </Link>
    </div>
  );
}

export default Page;
