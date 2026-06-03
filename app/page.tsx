import About from "@/components/about";
import Features from "@/components/features";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Listing from "@/components/listing";
import Navbar from "@/components/navbar";
import Story from "@/components/story";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero images={["/hero.avif"]} />
      <About />
      <Features />
      <Listing />
      <Testimonials />
      <Story />
      <Footer />
    </div>
  );
}
