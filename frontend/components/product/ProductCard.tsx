"use client";

import { Product } from "@/types/product";
import Heart from "lucide-react";

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  return (
    <div
      className="
      bg-white
      rounded-2xl
      shadow-md
      overflow-hidden
      hover:shadow-xl
      transition
      group
    "
    >
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="
          h-64
          w-full
          object-cover
          group-hover:scale-105
          transition
        "
        />

        <button
          className="
          absolute
          top-3
          right-3
          bg-white
          p-2
          rounded-full
        "
        >
          ❤
        </button>
      </div>

      <div className="p-4">
        <h2
          className="
          font-semibold
          text-lg
          line-clamp-1
        "
        >
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.category}
        </p>

        <div className="flex gap-2 mt-2">
          <span className="font-bold">
            ${product.price}
          </span>
        </div>

        <button
          className="
          w-full
          mt-4
          bg-black
          text-white
          py-2
          rounded-xl
        "
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}