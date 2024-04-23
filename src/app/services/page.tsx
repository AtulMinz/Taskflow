//@ts-nocheck
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { services } from "@/lib/data";
import Dialogbox from "@/components/Dialogbox";
import { transferToken } from "@/utils/sendToken";

export default function Services() {
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
        <h1 className="font-semibold text-2xl ml-8">
          Solutions at Your Fingertips
        </h1>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <Card
            className="flex-grow m-10 bg-white shadow-none"
            key={service.name}
          >
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
              <div>
                <CardDescription className="font-semibold">
                  {service.description}
                </CardDescription>
              </div>
              <div className="flex space-x-6">
                <CardDescription>
                  <span className="font-bold">Name of the provider: </span>
                  {service.workerName}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold">Time: </span>
                  {service.time}
                </CardDescription>
                <CardDescription>
                  <span className="font-bold">Price in flow token: </span>
                  {service.price}
                </CardDescription>
              </div>
              <div className="flex justify-end">
                <Dialogbox>
                  <Button
                    onClick={() =>
                      transferToken("0x2d8295c356f1da52", service.price)
                    }
                  >
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
