"use client";

import { addToCart } from "@/lib/api";

export default function Products() {
  const products = [
    { id: 1, name: "Shoes", price: 1000 },
    { id: 2, name: "Bag", price: 2000 },
  ];

  const handleAdd = async (id) => {
    const token = localStorage.getItem("token");
    await addToCart(token, id);
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <h3>{p.name}</h3>
          <p>{p.price}</p>
          <button onClick={() => handleAdd(p.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}