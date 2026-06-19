"use client";

import { checkout } from "@/lib/api";

export default function Checkout() {
  const handleCheckout = async () => {
    const token = localStorage.getItem("token");

    const data = await checkout(token);

    alert("Order placed: " + data.order_id);
  };

  return (
    <button onClick={handleCheckout}>
      Checkout
    </button>
  );
}