const testimonials = [
  {
    name: "John Smith",
    review:
      "Amazing shopping experience and fast delivery.",
  },
  {
    name: "Sarah Wilson",
    review:
      "High-quality products and excellent customer service.",
  },
  {
    name: "David Lee",
    review:
      "One of the best online stores I have used.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-neutral-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            What Customers Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="
              bg-white
              p-8
              rounded-3xl
              shadow-md
              "
            >
              <p className="text-gray-600">
                "{item.review}"
              </p>

              <h4 className="mt-6 font-semibold">
                {item.name}
              </h4>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}