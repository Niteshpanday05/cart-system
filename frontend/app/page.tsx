import Hero from "@/components/home/Hero";
import Categories from "@/components/home/Categories";
import FeaturedSection from "@/components/home/FeaturedSection";
import PromoBanner from "@/components/home/PromoBanner";
import Benefits from "@/components/home/Benefits";
import Brands from "@/components/home/Brands";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedSection />
      <PromoBanner />
      <Benefits />
      <Brands />
      <Testimonials />
      <Newsletter />
    </main>
  );
}