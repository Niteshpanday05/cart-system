export default function Hero() {
  return (
    <section className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-10 items-center">

        <div>
          <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm">
            New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl lg:text-7xl font-bold">
            Discover Your
            <span className="block">
              Perfect Style
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600">
            Shop premium fashion and accessories
            crafted for modern lifestyles.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-4 bg-black text-white rounded-2xl">
              Shop Now
            </button>

            <button className="px-8 py-4 border rounded-2xl">
              Explore
            </button>
          </div>
        </div>

        <div>
          <img
            src="/categories/offer.jpg"
            alt="Hero"
            className="rounded-3xl"
          />
        </div>

      </div>
    </section>
  );
}