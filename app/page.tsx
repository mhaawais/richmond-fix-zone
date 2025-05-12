import React from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Hero1 from "@/components/hero1";
import ChooseUs from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Footer from "@/components/footer";
import Quote from "@/components/quote";

export default function Home() {
  return (
    <div className="bg-[#1c6fb5]">
      <Header />
      <Hero />
      <Hero1 />
      <Quote />
      <ChooseUs />
      <Hero3 />
      <Footer />
    </div>
  );
}
