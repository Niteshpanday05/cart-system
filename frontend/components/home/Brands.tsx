
const brands = [
  "Nike",
  "Adidas",
  "Apple",
  "Samsung",
  "Puma",
  "Sony",
];

export default function Brands() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Trusted Brands
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {brands.map((brand) => (
            <div
              key={brand}
              className="
              border
              rounded-2xl
              p-8
              text-center
              font-semibold
              "
            >
              {brand}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}