"use client";

import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";

export default function FeaturesBento() {
  return (
    <div className="max-w-[900px] gap-4 grid grid-cols-12 grid-rows-2 px-8 mt-20">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            My Projects
          </p>
          <h4 className="text-white font-medium text-large">
            Building Scalable Applications
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Projects background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-4.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            My Blogs
          </p>
          <h4 className="text-white font-medium text-large">
            Insights on Development
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Blogs background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-3.jpeg"
        />
      </Card>
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            My Research
          </p>
          <h4 className="text-white font-medium text-large">
            Exploring Scalable Systems
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Research background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-2.jpeg"
        />
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Templates
          </p>
          <h4 className="text-white font-medium text-2xl">
            Reusable Code Templates
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Templates background"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src="https://nextui.org/images/card-example-6.jpeg"
        />
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-tiny text-white/60">Explore my templates.</p>
            <p className="text-tiny text-white/60">Get started quickly.</p>
          </div>
          <Button className="text-tiny" color="primary" radius="full" size="sm">
            View Templates
          </Button>
        </CardFooter>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Resources
          </p>
          <h4 className="text-white/90 font-medium text-xl">
            Tools for Effective Development
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Resources background"
          className="z-0 w-full h-full object-cover"
          src="https://nextui.org/images/card-example-5.jpeg"
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Image
              alt="Resources icon"
              className="rounded-full w-10 h-11 bg-black"
              src="https://nextui.org/images/breathing-app-icon.jpeg"
            />
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Development Resources</p>
              <p className="text-tiny text-white/60">
                Enhance your projects with the right tools.
              </p>
            </div>
          </div>
          <Button radius="full" size="sm">
            Explore Resources
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
