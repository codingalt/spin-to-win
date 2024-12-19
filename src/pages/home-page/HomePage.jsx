import { Commitment } from "@/components/Commitment/Commitment";
import FaqSection from "@/components/FaqSection/FaqSection";
import { Footer } from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import { RoadmapSection } from "@/components/RoadmapSection/RoadmapSection";
import MainLayout from "@/layouts/MainLayout";
import React from "react";

const HomePage = () => {

  return (
    <MainLayout>
      <Hero />
      <HowItWorks />
      <RoadmapSection />
      <Commitment />
      <FaqSection />
      <Footer />
    </MainLayout>
  );
};

export default HomePage;
