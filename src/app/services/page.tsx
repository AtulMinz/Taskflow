//@ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { services } from "@/lib/data";
import * as fcl from "@onflow/fcl";
import { toast } from "sonner";
import Dialogbox from "@/components/Dialogbox";

export default function Services() {
  const transferToken = async (amount) => {
    const trasnsactionId = await fcl.mutate({
      cadence: `
      import Taskflow from 0x2e25912fb78c0f35

        transaction(amount: UFix64) {
          prepare(signer: AuthAccount) {
          log("Getting things ")
        }
        execute {
          Taskflow.transfer(amount: 11.9)
          log("Done")
        }
      }
      `,
      args: (arg, t) => [arg(amount, t.UFix64)],
      payer: fcl.authz,
      proposer: fcl.authz,
      authorizations: [fcl.authz],
    });
    const transaction = await fcl.tx(trasnsactionId).onceSealed();
    transaction
      ? toast.success("Transaction was successful!")
      : toast.error("Transaction failed!");
  };

  return (
    <main>
      <div className="flex h-[100px] justify-center items-center mt-10">
        <Image
          src="hero.svg"
          alt="service"
          width={300}
          height={300}
          className="mix-blend-darken"
        />
        <h1 className="font-semibold text-2xl">Select what suits you</h1>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <Card className="flex-grow m-10" key={service.name}>
            <CardHeader>
              <CardTitle className="font-black">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-center">
                <img
                  src={service.image}
                  alt="service"
                  className="w-[70%] h-[50vh] border"
                />
              </div>
              <div className="">
                <CardDescription className="font-semibold">
                  {service.description}
                </CardDescription>
              </div>
              <div className="flex space-x-6">
                <CardDescription>
                  <span className="font-semibold">Name of the provider: </span>
                  {service.workerName}
                </CardDescription>
                <CardDescription>
                  <span className="font-semibold">Hours: </span>
                  {service.hours}
                </CardDescription>
                <CardDescription>
                  <span className="font-semibold">Price in flow token: </span>
                  {service.price}
                </CardDescription>
              </div>
              <div className="flex justify-end">
                <Dialogbox>
                  <Button onClick={() => transferToken(service.price)}>
                    Place Order
                  </Button>
                </Dialogbox>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
