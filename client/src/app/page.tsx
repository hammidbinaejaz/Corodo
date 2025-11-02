import React from "react";
import Hero from "@/sections/Hero";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      <section id="home" aria-label="Hero Section">
        <Hero />
      </section>
      <section id="footer" aria-label="Footer Section">
        <Footer />
      </section>
    </>
  );
}
