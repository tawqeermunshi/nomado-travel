import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experiences from "@/components/Experiences";
import Interlude from "@/components/Interlude";
import Destinations from "@/components/Destinations";
import WhyNomado from "@/components/WhyNomado";
import JournalTestimonials from "@/components/JournalTestimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experiences />
        <Interlude />
        <Destinations />
        <WhyNomado />
        <JournalTestimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
