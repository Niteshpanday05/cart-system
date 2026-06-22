"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // 🔥 FETCH CART FROM DJANGO
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("access");

        const res = await fetch("http://127.0.0.1:8000/api/cart/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        console.log("CART API:", data);

        setCartItems(data); // 🔥 IMPORTANT
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  // 💰 TOTAL PRICE
  const totalPrice = cartItems.reduce((acc: any, item: any) => {
    return acc + item.price * item.quantity;
  }, 0);

  // 🛒 EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-xl font-semibold">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>

      {/* ITEMS */}
      <div className="space-y-4">
        {cartItems.map((item: any, index: number) => (
          <div
            key={item.id || index}
            className="flex items-center justify-between border p-4 rounded-xl shadow-sm"
          >
            {/* PRODUCT INFO */}
            <div className="flex items-center gap-4">
              <Image
                src={item.product_image || "/placeholder.png"}
                alt={item.product}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />

              <div>
                <h2 className="font-semibold">{item.product}</h2>
                <p className="text-gray-500">Rs {item.price}</p>
              </div>
            </div>

            {/* QUANTITY (READ ONLY for now) */}
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-gray-100 rounded">
                Qty: {item.quantity}
              </span>
            </div>

            {/* TOTAL */}
            <div className="text-right">
              <p className="font-semibold">
                Rs {item.price * item.quantity}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL */}
      <div className="mt-8 border-t pt-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total:</h2>
        <h2 className="text-xl font-bold">Rs {totalPrice}</h2>
      </div>

      {/* CHECKOUT */}
      <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}