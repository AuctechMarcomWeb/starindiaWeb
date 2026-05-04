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
          Star India Energy Solutions | Best Solar Panel Installation in India
        </title>
        <meta
          name="description"
          content="Star India Energy Solutions – India's leading solar company. Get on-grid, off-grid & hybrid solar panel installation, solar water pumps, and solar atta chakki. Save up to 80% on electricity bills."
        />
        <meta
          name="keywords"
          content="solar panel installation India, best solar company India, rooftop solar system, on-grid solar, off-grid solar, hybrid solar, solar water pump, solar atta chakki, solar subsidy India, solar energy Lucknow, Star India Energy Solutions"
        />
        <link rel="canonical" href="https://www.starindiaenergy.com/" />
        <meta
          property="og:title"
          content="Star India Energy Solutions | Best Solar Panel Installation in India"
        />
        <meta
          property="og:description"
          content="India's leading solar company. On-grid, off-grid & hybrid solar systems. Save up to 80% on electricity bills."
        />
        <meta property="og:url" content="https://www.starindiaenergy.com/" />
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
