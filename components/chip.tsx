"use client";
import React from "react";
import { Chip } from "@nextui-org/react";

export default function App() {
  return (
    <Chip
      classNames={{
        base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-none border-white/50 shadow-pink-500/30 p-2",
        content: "drop-shadow shadow-black text-white",
      }}
      variant="shadow"
    >
      <span className="font-semibold text-xs">
        ✨ Welcome to our new modern Next js website.
      </span>
    </Chip>
  );
}
