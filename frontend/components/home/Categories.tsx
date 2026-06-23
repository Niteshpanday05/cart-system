import { categories } from "@/data/categories";

export default function Categories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12">
          Shop By Category
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              className="overflow-hidden rounded-3xl shadow-lg cursor-pointer"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-64 object-cover"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}