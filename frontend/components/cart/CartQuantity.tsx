"use client";

import React from "react";

interface Props {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

export default function CartQuantity({
  quantity,
  onIncrease,
  onDecrease,
}: Props) {
  return (
    <div className="flex items-center gap-2 self-end">
      
      <button
        onClick={onDecrease}
        className="w-7 h-7 flex items-center justify-center bg-red-500 rounded-md text-lg font-bold"
      >
        −
      </button>

      <span className="
        px-3 py-1.5 sm:px-4 sm:py-2
        text-xs sm:text-sm
        bg-black text-white
        rounded-full
        font-medium
        whitespace-nowrap
      ">
        Qty: {quantity}
      </span>

      <button
        onClick={onIncrease}
        className="w-7 h-7 flex items-center justify-center bg-red-500 rounded-md text-lg font-bold"
      >
        +
      </button>

    </div>
  );
}