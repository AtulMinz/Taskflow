"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <main className="w-[100%] h-[600px]">
      <div className="flex justify-center items-center h-full flex-col">
        <div className="flex items-center flex-col">
          <h1 className="font-extrabold text-6xl">Welcome to the flow</h1>
          <p className="font-serif text-3xl mt-2">
            We provide housing services.
          </p>
        </div>
        <div className="mt-7">
          <Button onClick={() => router.push("/services")}>
            Book yourself a service &rarr;
          </Button>
        </div>
      </div>
    </main>
  );
}
