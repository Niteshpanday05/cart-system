export default function PromoBanner() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          bg-black
          text-white
          rounded-3xl
          p-16
          text-center
          "
        >
          <p className="uppercase tracking-widest">
            Limited Time Offer
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Up To 50% Off
          </h2>

          <p className="mt-6 text-gray-300">
            Shop premium collections with exclusive discounts.
          </p>

          <button
            className="
            mt-8
            bg-white
            text-black
            px-8
            py-4
            rounded-2xl
            font-medium
            "
          >
            Shop Sale
          </button>
        </div>

      </div>
    </section>
  );
}