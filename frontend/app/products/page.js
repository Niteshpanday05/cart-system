"use client";

import { addToCart } from "@/lib/api";

export default function Products() {
  const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Bag", price: 2000 },
  ];

  const handleAdd = async (id) => {
    const token = localStorage.getItem("access");
   console.log("TOKEN:", token);

    if (!token) {
      alert("Please login first");
      return;
    }

    const res = await addToCart(token, id, 1);
    console.log("Added to cart:", res);
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>{p.price}</p>

          <button onClick={() => handleAdd(p.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}