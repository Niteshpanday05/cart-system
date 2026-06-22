"use client";

import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeFromCart, updateQuantity } from "@/redux/slices/cartSlice";
import Image from "next/image";

export default function CartPage() {
  const dispatch = useAppDispatch();

  // cart items from redux
 const cartItems = useAppSelector(
  (state) => state.cart?.items || []
);
  // total price calculation
  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

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

      {/* CART ITEMS LIST */}
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}   // ✅ FIXED: unique key
            className="flex items-center justify-between border p-4 rounded-xl shadow-sm"
          >
            {/* PRODUCT IMAGE + NAME */}
            <div className="flex items-center gap-4">
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg object-cover"
              />

              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p className="text-gray-500">Rs {item.price}</p>
              </div>
            </div>

            {/* QUANTITY CONTROLS */}
            <div className="flex items-center gap-3">
              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity - 1,
                    })
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>

              <span>{item.quantity}</span>

              <button
                onClick={() =>
                  dispatch(
                    updateQuantity({
                      id: item.id,
                      quantity: item.quantity + 1,
                    })
                  )
                }
                className="px-3 py-1 bg-gray-200 rounded"
              >
                +
              </button>
            </div>

            {/* TOTAL + REMOVE */}
            <div className="text-right">
              <p className="font-semibold">
                Rs {item.price * item.quantity}
              </p>

              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="text-red-500 text-sm mt-2"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* TOTAL SECTION */}
      <div className="mt-8 border-t pt-4 flex justify-between items-center">
        <h2 className="text-xl font-bold">Total:</h2>
        <h2 className="text-xl font-bold">Rs {totalPrice}</h2>
      </div>

      {/* CHECKOUT BUTTON */}
      <button className="w-full mt-6 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
        Proceed to Checkout
      </button>
    </div>
  );
}