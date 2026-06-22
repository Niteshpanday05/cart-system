import Link from "next/link";

export default function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center py-32">
      <h2 className="text-4xl font-bold">
        Your Cart Is Empty
      </h2>

      <p className="text-gray-500 mt-3">
        Add some products to get started.
      </p>

      <Link
        href="/products"
        className="
        mt-6
        bg-black
        text-white
        px-6
        py-3
        rounded-xl
      "
      >
        Continue Shopping
      </Link>
    </div>
  );
}