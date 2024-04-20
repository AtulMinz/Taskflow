"use client";

import React from "react";
import "@/config";
import { Button } from "@/components/ui/button";
import * as fcl from "@onflow/fcl";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = React.useState({ addr: "", loggedIn: null });
  const router = useRouter();

  React.useEffect(() => {
    fcl.currentUser.subscribe(setUser);
  }, []);

  const AuthenticatedState = () => {
    return (
      <div>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage
                src="https://avatars.githubusercontent.com/u/43456915?s=400&u=af7a7dd38245a72f8491cee42648d9828c876170&v=4"
                alt="profile"
              />
              <AvatarFallback>USER</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent>
            <span className="leading-7 [&:not(:first-child)]:mt-6 p-1">
              {user?.addr ?? "No Address"}
            </span>
            <Button onClick={fcl.unauthenticate}>Logout</Button>
          </PopoverContent>
        </Popover>
      </div>
    );
  };

  const UnauthenticatedState = () => {
    return (
      <div>
        <Button onClick={fcl.authenticate}>Connect</Button>
      </div>
    );
  };

  return (
    <div className="w-full">
      <div className="flex flex-row justify-between m-4">
        <div className="flex justify-end">
          <span>
            <Button variant="ghost" onClick={() => router.push("/")}>
              <h1 className="font-bold text-2xl cursor-pointer">Taskflow</h1>
            </Button>
          </span>
        </div>
        <div className="flex justify-start">
          {user.loggedIn ? <AuthenticatedState /> : <UnauthenticatedState />}
        </div>
      </div>
    </div>
  );
}
