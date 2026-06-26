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
   <div className="inline-flex items-center rounded-sm bg-white p-1">

  <button
    onClick={onDecrease}
    className="w-7 h-7 rounded-lg text-black hover:bg-gray-100 transition flex items-center justify-center"
  >
    −
  </button>

  <span className="w-6 h-7 flex items-center justify-center font-semibold text-black">
    {quantity}
  </span>

  <button
    onClick={onIncrease}
    className="w-7 h-7 rounded-lg text-black hover:bg-gray-100 transition flex items-center justify-center"
  >
    +
  </button>

</div>
)}
