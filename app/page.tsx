import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Resources from "@/components/Resources";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" className="pb-16 md:pb-0">
        <Hero />

        <Stats />
        <Services />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
