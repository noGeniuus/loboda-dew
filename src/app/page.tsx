import Hero from "@/components/hero/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Calculator from "@/components/sections/Calculator";
import Contact from "@/components/sections/Contact";
import TechMarquee from "@/components/sections/TechMarquee";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <TechMarquee />
      <Services />
      <Portfolio />
      <TechStack />
      <Testimonials />
      <Calculator />
      <Contact />
    </>
  );
}
