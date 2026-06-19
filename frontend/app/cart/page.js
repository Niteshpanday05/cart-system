"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/api";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    getCart(token).then((data) => {
      console.log("Cart API:", data);
      setCart(Array.isArray(data) ? data : []);
    });
  }, []);

  return (
    <div>
      <h1>Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <p>{item.product}</p>
            <p>{item.price}</p>
            <p>{item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}