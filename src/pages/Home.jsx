import SEO from "../components/SEO.jsx";

import Hero from "../components/Hero.jsx";
import Services from "../components/Services.jsx";
import About from "../components/About.jsx";
import WhyChoose from "../components/WhyChoose.jsx";
import Process from "../components/Process.jsx";
import Portfolio from "../components/Portfolio.jsx";
import ROICalculator from "../components/ROICalculator.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTA from "../components/CTA.jsx";
import ContactSection from "../components/ContactSection.jsx";

function Home() {
  return (
    <>
      <SEO
        title="Digital Solutions & AI Services"
        description="OPERIXA provides web development, AI solutions, digital marketing, IT support, and virtual assistance for modern businesses."
        path="/"
      />

      <main>
        <Hero />

        <Services />

        <About />

        <WhyChoose />

        <Process />

        <Portfolio />

        <ROICalculator />

        <Testimonials />

        <CTA />

        <ContactSection />
      </main>
    </>
  );
}

export default Home;