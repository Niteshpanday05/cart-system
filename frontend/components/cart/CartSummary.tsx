interface Props {
  subtotal: number;
}

export default function CartSummary({
  subtotal,
}: Props) {
  const shipping = subtotal > 100 ? 0 : 10;

  const total = subtotal + shipping;

  return (
    <div
      className="
      bg-white
      border
      rounded-2xl
      p-6
      shadow-sm
      sticky
      top-24
    "
    >
      <h2 className="font-bold text-2xl">
        Summary
      </h2>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>
            ${shipping.toFixed(2)}
          </span>
        </div>

        <hr />

        <div className="flex justify-between font-bold text-xl">
          <span>Total</span>
          <span>
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        className="
        w-full
        mt-6
        bg-black
        text-white
        py-3
        rounded-xl
      "
      >
        Checkout
      </button>
    </div>
  );
}