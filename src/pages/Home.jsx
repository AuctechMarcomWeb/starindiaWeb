import React from "react";
import { Helmet } from "react-helmet";
import HeroSections from "../components/sections/HeroSections";
import WelcomeSections from "../components/sections/WelcomeSections";
import Testimonials from "../components/sections/Testimonials";
import HowItWorks from "../components/sections/HowitWork";
import ServicesSlider from "../components/sections/ServiceSlider";
import FreeInstallation from "../components/sections/FreeInstallation";
import SolarBenefits from "../components/sections/SolarBenefits";
import Contact from "../components/sections/Contact";
import Wychoose from "../components/sections/WhyChoose";
import MobileCTA from "../components/sections/MobileCTA";

const Home = () => {
  return (
    <main className="home-page">
      <Helmet>
        <title>
          Star India Energy Solutions | Solar Panel Lucknow | MNRE EMI Option
        </title>
        <meta
          name="description"
          content="Star India Energy Solutions – Lucknow's trusted solar company. MNRE approved panels, easy EMI options including MNRF financing. On-grid, off-grid & hybrid solar installation in Lucknow, UP."
        />
        <meta
          name="keywords"
          content="MNRE EMI option Lucknow, MNRF solar EMI Lucknow, solar panel installation Lucknow, best solar company Lucknow, solar energy Lucknow, MNRE approved solar panels, solar EMI Lucknow, on-grid solar Lucknow, off-grid solar Lucknow, hybrid solar Lucknow, solar water pump Lucknow, solar atta chakki Lucknow, Star India Energy Solutions"
        />
        <meta
          property="og:title"
          content="Star India Energy Solutions | Solar Panel Lucknow | MNRE EMI Option"
        />
        <meta
          property="og:description"
          content="Lucknow's trusted solar company. MNRE approved panels, easy EMI & MNRF financing. On-grid, off-grid & hybrid solar systems in Lucknow, UP."
        />
      </Helmet>
      <HeroSections />
      <WelcomeSections />
      <ServicesSlider />
      <HowItWorks />
      <FreeInstallation />
      <SolarBenefits />
      <Wychoose />
      <Testimonials />
      <Contact />
      <MobileCTA />
    </main>
  );
};

export default Home;
