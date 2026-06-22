export default function FeaturedSection() {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Featured Collection
          </h2>

          <p className="text-gray-600 mt-4">
            Handpicked collections curated for modern shoppers.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="rounded-3xl bg-white p-10 shadow-md">
            <h3 className="text-2xl font-semibold">
              Summer Essentials
            </h3>

            <p className="mt-4 text-gray-600">
              Stay stylish with our latest seasonal picks.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-md">
            <h3 className="text-2xl font-semibold">
              New Arrivals
            </h3>

            <p className="mt-4 text-gray-600">
              Discover newly launched premium products.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-md">
            <h3 className="text-2xl font-semibold">
              Best Sellers
            </h3>

            <p className="mt-4 text-gray-600">
              Most loved products from our customers.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}