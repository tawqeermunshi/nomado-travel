import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Destinations from "@/components/Destinations";
import Experiences from "@/components/Experiences";
import Testimonials from "@/components/Testimonials";
import Journal from "@/components/Journal";
import WhyNomado from "@/components/WhyNomado";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Destinations />
        <Experiences />
        <Testimonials />
        <Journal />
        <WhyNomado />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
