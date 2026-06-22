"use client";

import { useEffect } from "react";
import ProductGrid from "@/components/product/ProductGrid";
import { fetchProducts } from "@/features/products/productSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function ProductsPage() {
  const dispatch = useAppDispatch();

  const { items, loading } = useAppSelector(
    (state) => state.product
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Products
      </h1>

      <ProductGrid products={items} />
    </main>
  );
}