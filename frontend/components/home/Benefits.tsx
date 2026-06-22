const benefits = [
  {
    title: "Free Shipping",
    description: "Free shipping on orders over $50",
  },
  {
    title: "Secure Payment",
    description: "Safe and secure payment methods",
  },
  {
    title: "Easy Returns",
    description: "30-day hassle-free returns",
  },
  {
    title: "24/7 Support",
    description: "Dedicated customer support team",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-neutral-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Why Shop With Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {benefits.map((item) => (
            <div
              key={item.title}
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-md
              text-center
              "
            >
              <h3 className="font-semibold text-xl">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}