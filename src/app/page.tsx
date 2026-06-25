import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiences from "@/components/Experiences";
import Interlude from "@/components/Interlude";
import WhyNomado from "@/components/WhyNomado";
import Journal from "@/components/Journal";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experiences />
        <Interlude />
        <WhyNomado />
        <Journal />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
