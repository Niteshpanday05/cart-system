"use client";

import { useEffect, useState } from "react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  // FETCH CART
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
        setCartItems(data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  // TOTAL
  const totalPrice = cartItems.reduce((acc: any, item: any) => {
    return acc + item.price * item.quantity;
  }, 0);

  // EMPTY CART
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
        <div className="text-6xl sm:text-7xl mb-4">🛒</div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Your cart is empty
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Add products to continue shopping
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 sm:mb-10">
          Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-10">
          {/* CART ITEMS */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            {cartItems.map((item: any, index: number) => (
              <div
                key={item.id || index}
                className="
                  bg-white
                  border border-gray-200
                  rounded-2xl sm:rounded-3xl
                  p-4 sm:p-5
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  {/* LEFT: PRODUCT */}
                  <div className="flex items-center gap-4 min-w-0">
                    <img
                      src={`http://127.0.0.1:8000${item.image}`}
                      alt={item.product}
                      className="
                        w-16 h-16
                        sm:w-20 sm:h-20
                        lg:w-24 lg:h-24
                        object-cover
                        rounded-xl sm:rounded-2xl
                        border border-gray-100
                        flex-shrink-0
                      "
                    />

                    <div className="min-w-0">
                      <h2 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 truncate">
                        {item.product}
                      </h2>

                      <p className="text-gray-500 text-sm mt-1">
                        Rs {item.price}
                      </p>
                    </div>
                  </div>

                  {/* RIGHT: MOBILE TOP-RIGHT + DESKTOP ALIGN */}
                  <div className="flex flex-col items-end gap-2">
                    {/* QTY → TOP RIGHT (ALWAYS) */}
                        <span className="
                            px-3 py-1.5 sm:px-4 sm:py-2
                            text-xs sm:text-sm
                            bg-black
                            border border-gray-200
                            rounded-full
                            font-medium
                            whitespace-nowrap
                            self-end
                          ">
                      Qty: {item.quantity}
                    </span>

                    {/* SUBTOTAL */}
                    <div className="text-right">
                      <p className="text-xs sm:text-sm text-gray-500">
                        Subtotal
                      </p>

                      <p className="text-base sm:text-lg font-bold text-gray-900">
                        Rs {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="lg:col-span-1">
            <div
              className="
              bg-white
              border border-gray-200
              rounded-2xl sm:rounded-3xl
              p-5 sm:p-6
              shadow-sm
              lg:sticky lg:top-24
            "
            >
              <h2 className="text-xl  text-black sm:text-2xl font-bold mb-6">
                Order Summary
              </h2>

              <div className="flex justify-between text-sm sm:text-base mb-4">
                <span className="text-gray-600">Items</span>
                <span className="font-semibold">{cartItems.length}</span>
              </div>

              <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-black sm:text-lg font-medium">Total</span>

                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Rs {totalPrice}
                </span>
              </div>

              <button
                className="
                w-full
                mt-6
                bg-black
                text-white
                py-3 sm:py-4
                rounded-xl sm:rounded-2xl
                font-semibold
                text-sm sm:text-base
                hover:scale-[1.02]
                active:scale-[0.98]
                transition
              "
              >
                Proceed to Checkout
              </button>

              <p className="text-center text-xs sm:text-sm text-gray-500 mt-4">
                Secure Checkout 🔒
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
