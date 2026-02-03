"use client";

import Hero from "./components/sections/Hero";
import Services from "./components/sections/Services";
import About from "./components/sections/About";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Blog from "./components/sections/Blog";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Blog />
      <Testimonials />
      <Contact />
    </>
  );
}