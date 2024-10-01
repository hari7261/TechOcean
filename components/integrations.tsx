"use client";
import { Chip } from "@nextui-org/react";
import React from "react";

function Integrations() {
  return (
    <div className="flex-col justify-center items-center mx-auto relative text-center">
      <div className="flex justify-center items-center text-center mb-2">
        <Chip variant="flat" color="secondary">
          Showcasing Integrations
        </Chip>
      </div>
      <h1 className="text-2xl lg:text-4xl font-semibold z-10 relative">
        Effortlessly Manage Your Meetings
      </h1>
      <h1 className="text-lg lg:text-xl font-normal z-10 relative max-w-[600px] text-center flex mx-auto justify-center items-center text-gray-500 mt-2">
        Experience seamless integration with Google Calendar and Outlook. Stay organized by effortlessly tracking all your meetings and discussions in one intuitive interface.
      </h1>

      <img alt="integration" className="mt-4 lg:mt-10" src="/integration.svg" />
    </div>
  );
}

export default Integrations;
