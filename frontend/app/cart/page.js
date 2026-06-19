"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    getCart(token).then(setCart);
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <p>{item.product}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
}