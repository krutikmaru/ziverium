import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[#2c282c]">
      <Image
        className=""
        src="/ziverium_withtext.png"
        alt="Ziverium Logo"
        width={180}
        height={180}
        priority
      />
      <h1 className="text-[#c4c4c4] text-xl tracking-tight font-medium">
        Greatness to be unveiled soon...
      </h1>
    </main>
  );
}
