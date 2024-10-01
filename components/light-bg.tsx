"use client";
import { Chip } from "@nextui-org/react";
import React from "react";

function LightBg() {
  return (
    <div className="flex-col justify-center items-center mx-auto mt-10 relative text-center">
      <div className="flex justify-center items-center text-center mb-2">
        <Chip variant="flat" color="secondary">
        This Is How My UI of My Works Looks Like.
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative">
        Seamlessly Track My Work
      </h1>
      <h1 className="text-lg lg:text-xl font-normal z-10 relative max-w-[600px] text-center flex mx-auto justify-center items-center text-gray-500 mt-2">
        Experience intuitive navigation and organized layouts. Keep track of all your meetings and discussions effortlessly with our elegant design. Integrate events quickly with Google Calendar and Outlook.
      </h1>

      <img alt="meetings" src="/meetings.svg" />
    </div>
  );
}

export default LightBg;
