"use client";

import { useEffect, useState } from "react";
import { getCart } from "@/lib/api";

export default function CartPage() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      const token = localStorage.getItem("access");
      

      if (!token) return;

      const data = await getCart(token);

      console.log("Cart API Response:", data);
      
      setCart(data);
    };

    fetchCart();
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <h3>{item.product_name}</h3>
            <p>Price: {item.price_at_add}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}