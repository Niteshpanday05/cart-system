"use client";

import { useEffect } from "react";

import { useDispatch } from "react-redux";

import ProductGrid
from "@/components/product/ProductGrid";

import { fetchProducts }
from "@/features/products/productSlice";

import {
  useAppSelector,
} from "@/hooks/useAppSelector";

export default function ProductsPage() {
  const dispatch = useDispatch();

  const {
    items,
    loading,
  } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  if (loading)
    return (
      <div>
        Loading...
      </div>
    );

  return (
    <main
      className="
      max-w-7xl
      mx-auto
      px-4
      py-10
    "
    >
      <h1
        className="
        text-4xl
        font-bold
        mb-8
      "
      >
        Products
      </h1>

      <ProductGrid
        products={items}
      />
    </main>
  );
}