"use client";
import { Button } from "@/components/ui/button";
import * as fcl from "@onflow/fcl";

export default function Navbar() {
  return (
    <div className="w-full">
      <div className="flex flex-row justify-between m-4">
        <div className="flex justify-end">
          <span>Reflow</span>
        </div>
        <div className="flex justify-start">
          <Button onClick={fcl.authenticate}>Connect</Button>
        </div>
      </div>
    </div>
  );
}
