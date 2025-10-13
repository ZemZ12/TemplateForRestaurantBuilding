import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { About } from "@/components/About";
import Gallery from "@/components/Gallery";
import { ContactForm } from "@/components/ContactForm";
import { Reservations } from "@/components/Reservations";
export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Hero 
        backgroundVideo="/template.mp4"
        title="Culinary Excellence"
        description="Immerse yourself in a unique dining experience where every dish tells a story and every moment creates a lasting memory."
      />
      {/* Menu Section */}
      <div id="menu">
        <MenuSection />
      </div>
      <div id="about">
        <About />
      </div>
      <Gallery />
      <ContactForm />
      <Reservations />
      
    </main>
  );
}
