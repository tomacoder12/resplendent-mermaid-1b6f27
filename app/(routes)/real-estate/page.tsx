import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import About from "./components/about";
import Listing from "./components/listing";
import Portfolio from "./components/portfolio";
import Hospitality from "./components/hospitality";
import Network from "./components/network";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero
        images={["/outdoor.avif", "/parlor.avif", "pool2.avif", "pool3.avif"]}
      />
      <About />
      <Listing />
      <Portfolio />
      <Hospitality />
      <Network />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
