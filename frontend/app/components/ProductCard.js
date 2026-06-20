"use client";

import { addToCart } from "@/lib/api";

export default function ProductCard({ product }) {
  const handleAdd = async () => {
    const token = localStorage.getItem("access");

    if (!token) return alert("Login required");

    await addToCart(token, product.id, 1);
  };

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.price}</p>

      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}