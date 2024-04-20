import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import React from "react";

export default function Dialogbox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button>Book</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add your address</DialogTitle>
            <DialogDescription>
              Please fill up the field below
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Your Name"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="address" className="text-right">
                Address
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Your Address"
                className="col-span-3"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="phone" className="text-right">
                Mobile No.
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Your Mobile No."
                className="col-span-3"
                required
              />
            </div>
          </div>
          <DialogFooter>{children}</DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
