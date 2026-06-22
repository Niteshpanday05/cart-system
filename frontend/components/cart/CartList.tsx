import CartItem from "./CartItem";
import { CartItem as CartItemType } from "@/types/cart";

interface Props {
  items: CartItemType[];
}

export default function CartList({
  items,
}: Props) {
  return (
    <div className="space-y-4">
      {items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
}