"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-[100%] h-[500px]">
      <div className="flex justify-center items-center h-full flex-col">
        <Image src="work.svg" alt="main" width={400} height={400} />
        <div className="flex items-center flex-col">
          <h1 className="font-extrabold text-6xl">Welcome to Taskflow</h1>
          <p className="font-serif text-3xl mt-2">Flow for Daily Life.</p>
        </div>
        <div className="mt-7 space-x-3">
          <Button variant="secondary" onClick={() => router.push("/about")}>
            About Us
          </Button>
          <Button onClick={() => router.push("/services")}>
            Book yourself a service &rarr;
          </Button>
        </div>
      </div>
    </main>
  );
}
