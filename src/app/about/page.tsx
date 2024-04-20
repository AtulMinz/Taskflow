"use client";

import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="flex justify-center">
      <div className="w-4/5">
        <div className="h-[80vh] flex items-center justify-center ">
          <p className="text-xl text-neutral-600 font-serif">
            We at{" "}
            <span
              className="underline decoration-indigo-500 font-black hover:cursor-pointer"
              onClick={() => router.push("/")}
            >
              Taskflow
            </span>{" "}
            understand the hustle of daily life. Between work, family, and
            errands, it's easy to let things like house cleaning and pet care
            fall by the wayside. That's where we come in. We are a platform that
            connects you with reliable service providers for everyday needs, all
            with the convenience of a few clicks. But what sets us apart is our
            innovative payment system: Flow.
          </p>
        </div>
      </div>
    </div>
  );
}
