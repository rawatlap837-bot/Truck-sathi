import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VehicleTypes from "./components/VehicleTypes";
import Problems from "./components/Problems";
import Features from "./components/Features";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

function LandingPage() {
  useEffect(() => {
    const sections = document.querySelectorAll("[data-fade-in]");
    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VehicleTypes />
        <Problems />
        <Features />
        <Products />
        <Testimonials />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return <LandingPage />;
}
