"use client";

import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "@/redux/slices/cartSlice";

import { useAppDispatch } from "@/redux/hooks";
import { CartItem as CartItemType } from "@/types/cart";

interface Props {
  item: CartItemType;
}

export default function CartItem({
  item,
}: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm">
      <div className="flex gap-5">
        {/* Image */}

        <div className="relative h-28 w-28 overflow-hidden rounded-xl">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}

        <div className="flex flex-1 flex-col">
          <h2 className="font-semibold text-lg">
            {item.name}
          </h2>

          <p className="text-gray-500 mt-1">
            Stock: {item.stock}
          </p>

          <p className="font-bold text-xl mt-2">
            ${item.price}
          </p>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={() =>
                dispatch(
                  decreaseQuantity(item.id)
                )
              }
              className="p-2 border rounded-lg"
            >
              <Minus size={16} />
            </button>

            <span className="font-semibold">
              {item.quantity}
            </span>

            <button
              onClick={() =>
                dispatch(
                  increaseQuantity(item.id)
                )
              }
              className="p-2 border rounded-lg"
            >
              <Plus size={16} />
            </button>
          </div>
        </div>

        {/* Price */}

        <div className="flex flex-col items-end justify-between">
          <button
            onClick={() =>
              dispatch(
                removeFromCart(item.id)
              )
            }
            className="text-red-500"
          >
            <Trash2 size={20} />
          </button>

          <div className="font-bold text-xl">
            $
            {(
              item.price *
              item.quantity
            ).toFixed(2)}
          </div>
        </div>
      </div>
    </div>
  );
}