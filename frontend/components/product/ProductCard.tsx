"use client";

import { Product } from "@/types/product";
import { addToCart } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch();

  const handleAddToCart = async () => {
    const token = localStorage.getItem("access");

    // 🔐 1. Check authentication
    if (!token) {
      alert("Please login to add items to cart");
      return;
    }

    try {
      // 🌐 2. Call backend FIRST
      const response = await fetch(
        "http://127.0.0.1:8000/api/cart/add/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            product_id: product.id,
            quantity: 1,
          }),
        }
      );

      // ❌ handle backend failure
      if (!response.ok) {
        throw new Error("Failed to add to cart");
      }

      const data = await response.json();

      // 🧠 3. Update Redux AFTER success
      dispatch(
        addToCart({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
        })
      );
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Something went wrong while adding to cart");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow hover:shadow-lg transition">
      <img
        src={`http://127.0.0.1:8000${product.image}`}
        alt={product.name}
        className="w-full h-72 object-cover rounded-t-2xl"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">
          {product.name}
        </h3>

        <p className="text-xl font-semibold mt-1">
          ${product.price}
        </p>

        <button
          onClick={handleAddToCart}
          className="w-full mt-4 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}