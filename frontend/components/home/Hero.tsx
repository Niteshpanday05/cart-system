export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">

      {/* Background Image */}
      <img
        src="/categories/1.avif"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
     <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
     

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl text-white">

          <span className="inline-block bg-white/10 backdrop-blur px-4 py-2 rounded-full text-sm">
            New Collection 2026
          </span>

          <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
            Discover Your
            <span className="block">Perfect Style</span>
          </h1>

          <p className="mt-6 text-lg text-white/80">
            Shop premium fashion and accessories crafted for modern lifestyles.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-8 py-4 bg-white text-black rounded-2xl font-medium">
              Shop Now
            </button>

            <button className="px-8 py-4 border border-white/40 rounded-2xl">
              Explore
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}