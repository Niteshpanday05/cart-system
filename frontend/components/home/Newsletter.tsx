export default function Newsletter() {
  return (
    <section className="py-24">

      <div className="max-w-4xl mx-auto px-6">

        <div
          className="
          bg-black
          text-white
          rounded-3xl
          p-16
          text-center
          "
        >
          <h2 className="text-4xl font-bold">
            Subscribe To Our Newsletter
          </h2>

          <p className="mt-4 text-gray-300">
            Get updates on new arrivals and exclusive offers.
          </p>

          <form className="mt-8 flex flex-col md:flex-row gap-4">

            <input
              type="email"
              placeholder="Enter your email"
              className="
              flex-1
              px-5
              py-4
              rounded-2xl
              text-black
              outline-none
              "
            />

            <button
              className="
              bg-white
              text-black
              px-8
              py-4
              rounded-2xl
              font-medium
              "
            >
              Subscribe
            </button>

          </form>
        </div>

      </div>

    </section>
  );
}