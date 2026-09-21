import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Shop from "../components/home/Shop";
import Sellers from "../components/home/Sellers";
import Stats from "../components/home/Stats";
import Testimonials from "../components/home/Testimonials";
import Articles from "../components/home/Articles";
import Footer from "../components/home/Footer";
import MobileNav from "../components/home/MobileNav";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Shop />
      <Sellers />
      <Stats />
      <Testimonials />
      <Articles />
      <Footer />
      <MobileNav />
    </main>
  );
}
