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
        <h1 className="font-semibold text-2xl">Select what suites you</h1>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
        {services.map((service) => (
          <Card className="flex-grow m-10">
            <CardHeader>
              <CardTitle className="font-black">{service.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Image
                src={service.image}
                alt="service"
                width={300}
                height={200}
              />
              <CardDescription className="font-semibold">
                {service.description}
              </CardDescription>
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
              <div className="flex justify-end">
                <Button>Book</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
