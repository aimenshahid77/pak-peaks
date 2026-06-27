import Navbar from "@/components/Navbar";
import About from "@/components/about/About";
import CTA from "@/components/cta/CTA";
import Destinations from "@/components/destinations/Destinations";
import Faq from "@/components/faq/Faq";
import Gallery from "@/components/gallery/Gallery";
import HeroSlider from "@/components/hero/HeroSlider";
import Reviews from "@/components/reviews/Reviews";
import Services from "@/components/services/Services";
import Tours from "@/components/tours/Tours";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSlider />
      <Tours />
      <About />
      <Services />
      <Destinations />
      <Gallery />
      <Reviews />
      <Faq />
      <CTA />
    </>
  );
}
