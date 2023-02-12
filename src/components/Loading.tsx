import React from "react";
import LoadingItem from "./LoadingItem";

export default function Loading() {
  return (
    <div className="w-full md:h-screen p-2 absolute py-16 items-center justify-center ">
        <div className="flex items-center justify-center mb-8">
        <span className="text-[#ecf0f3] text-lg">Dein Erlebnis beginnt</span>

        </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <LoadingItem />
        <LoadingItem />
        <LoadingItem />
      </div>
    </div>
  );
}
