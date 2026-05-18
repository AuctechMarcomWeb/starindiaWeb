import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PageBanner from "../../components/sections/PageBanner";
import FreeInstallation from "../../components/sections/FreeInstallation";
import FadeIn from "../../components/sections/FadeIn";
import {
  CheckCircle,
  Zap,
  Sun,
  TrendingUp,
  AlertTriangle,
  BatteryCharging,
  DollarSign,
  Leaf,
  Shield,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  WifiCogIcon,
  WifiCog,
  WifiIcon,
} from "lucide-react";

// ── Images ──
import single1 from "../../assets/hybrid/1.jpg";
import single2 from "../../assets/hybrid/2.jpg";
import single3 from "../../assets/hybrid/3.jpg";
import singleService1 from "../../assets/hybrid/5.jpg";
import singleService2 from "../../assets/hybrid/6 (1).jpg";
import singleService3 from "../../assets/hybrid/7.jpg";
import offerImg1 from "../../assets/hybrid/8 (2).jpg";
import offerImg2 from "../../assets/hybrid/9.jpg";
import offerImg3 from "../../assets/hybrid/10.jpg";
import offerIcon1 from "../../assets/images/single-service/offer-icon1.svg";
import offerIcon2 from "../../assets/images/single-service/offer-icon2.svg";
import offerIcon3 from "../../assets/images/single-service/offer-icon3.svg";
import trueIcon from "../../assets/images/single-service/true-icon.svg";
import solarBenefits from "../../assets/images/solar-benefits/solar-benefits-img.png";
import whyChooseImg from "../../assets/images/why-choose-us/why-choose-us-img.png";
import serviceSolBg from "../../assets/images/service-solutions/service-solutions-bg.png";
import serviceSolImg1 from "../../assets/hybrid/4.jpg";
import serviceSolImg2 from "../../assets/images/service-solutions/service-solutions-img2.png";
import serviceSolImg3 from "../../assets/images/service-solutions/service-solutions-img3.png";
import MobileCTA from "../../components/sections/MobileCTA";

// ── Static Data ──
const benefits = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Uninterrupted Power Supply",
    desc: "Ensures continuous electricity with battery backup during power cuts — no more downtime.",
  },
  {
    icon: <DollarSign className="w-6 h-6" />,
    title: "Maximum Cost Savings",
    desc: "Use solar energy first, store excess, and reduce dependency on expensive grid electricity.",
  },
  {
    icon: <BatteryCharging className="w-6 h-6" />,
    title: "Smart Energy Storage",
    desc: "Store unused solar energy in batteries and use it when solar generation is low.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Reliable Backup System",
    desc: "Automatically switches to battery during outages — seamless and safe operation.",
  },
  {
    icon: <Leaf className="w-6 h-6" />,
    title: "Eco-Friendly Solution",
    desc: "Reduce carbon emissions by maximizing solar usage and minimizing grid dependency.",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "High Efficiency System",
    desc: "Optimizes energy usage with intelligent power management for best performance.",
  },
];


const challenges = [
  {
    title: "Higher Initial Investment",
    desc: "Hybrid systems cost more due to battery storage and advanced inverter technology.",
  },
  {
    title: "Battery Replacement Cost",
    desc: "Batteries have a limited lifespan and require replacement after several years.",
  },
  {
    title: "Complex System Setup",
    desc: "Requires professional design and installation for efficient performance.",
  },
  {
    title: "Space Requirement",
    desc: "Battery banks and additional components require extra installation space.",
  },
];


const steps = [
  {
    num: "01",
    title: "Load Analysis & Planning",
    desc: "We analyze your daily energy consumption to design a reliable off-grid system.",
    img: singleService1,
  },
  {
    num: "02",
    title: "System Design & Battery Sizing",
    desc: "Custom solar + battery configuration to ensure uninterrupted power supply.",
    img: singleService2,
  },
  {
    num: "03",
    title: "Installation & Setup",
    desc: "Complete installation including panels, inverter, and battery bank with testing.",
    img: singleService3,
  },
];

// ── Reusable Sub-components ──
const SectionTag = ({ children }) => (
  <span className="inline-block bg-[#e5792b]/10 text-[#e5792b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
    {children}
  </span>
);

// ── Main Component ──
const Hybrid = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <Helmet>
        <title>Hybrid Solar System | Star India Energy Solutions</title>
        <meta
          name="description"
          content="Get the best of both worlds with hybrid solar systems from Star India Energy Solutions. Grid-connected with battery backup – uninterrupted power 24/7. Ideal for homes and businesses."
        />
        <meta
          name="keywords"
          content="hybrid solar system India, solar with battery backup, hybrid solar installation, solar inverter battery India, 24/7 solar power, hybrid solar panel system, Star India Energy"
        />
        <link
          rel="canonical"
          href="https://www.starindiaenergy.com/services/hybrid"
        />
        <meta
          property="og:title"
          content="Hybrid Solar System | Star India Energy Solutions"
        />
        <meta
          property="og:description"
          content="Grid-connected solar with battery backup. Uninterrupted 24/7 power for homes and businesses."
        />
        <meta
          property="og:url"
          content="https://www.starindiaenergy.com/services/hybrid"
        />
      </Helmet>
      <PageBanner />

      {/* ══════════════════════════════════════
          1. WHAT IS OFF-GRID SOLAR
      ══════════════════════════════════════ */}
      <section className="w-full md:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 py-12 md:py-16 lg:py-20">
          {/* LEFT */}
          <FadeIn
            direction="left"
            className="w-full lg:w-1/2 flex flex-col justify-between h-full"
          >
            <div>
              {/* <SectionTag>What Is Hybrid Solar?</SectionTag> */}
              <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
                What Is Hybrid Solar
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
                Smart Energy Solution for{" "}
                <span className="text-[#008235]">Maximum Savings & Backup</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                A <strong>Hybrid Solar System</strong> combines the benefits of
                both On-Grid and Off-Grid systems. It is connected to the
                utility grid while also having battery storage, allowing you to
                store excess solar energy and use it during power cuts.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                With intelligent energy management, your system can prioritize
                solar power, store surplus energy in batteries, and draw from
                the grid only when needed — ensuring maximum efficiency,
                savings, and uninterrupted power supply.
              </p>
            </div>
            {/* LIST */}
            <ul className="space-y-3 mt-4">
              {[
                "Works with grid + battery backup",
                "Stores excess solar energy for later use",
                "Automatic power switching during outages",
                "Ideal for homes & businesses needing backup",
              ].map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-gray-700 text-sm sm:text-base"
                >
                  <img
                    src={trueIcon}
                    alt=""
                    className="w-5 h-5 mt-0.5 shrink-0"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn
            direction="right"
            delay={150}
            className="w-full lg:w-1/2 h-full"
          >
            <div className="grid grid-cols-2 gap-3 h-full">
              <img
                src={single1}
                alt="Off-Grid solar installation"
                className="rounded-2xl w-full h-full object-cover col-span-2 min-h-[180px] sm:min-h-[220px] lg:min-h-[260px]"
              />
              <img
                src={single2}
                alt="Solar battery storage"
                className="rounded-2xl w-full h-full object-cover min-h-[140px] sm:min-h-[160px]"
              />
              <img
                src={single3}
                alt="Off-grid inverter"
                className="rounded-2xl w-full h-full object-cover min-h-[140px] sm:min-h-[160px]"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          2. BENEFITS
      ══════════════════════════════════════ */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="w-full md:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* LEFT IMAGE */}
            <FadeIn direction="left" className="h-full order-2 lg:order-1">
              <img
                src={serviceSolImg1}
                alt="Off-Grid solar benefits"
                className="rounded-2xl w-full h-full object-cover min-h-[260px] sm:min-h-[320px]"
              />
            </FadeIn>
            {/* RIGHT CONTENT */}
            <FadeIn
              direction="right"
              delay={150}
              className="flex flex-col justify-between h-full order-1 lg:order-2"
            >
              <div>
                {/* <SectionTag>Key Benefits</SectionTag> */}
                <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
                  Key Benefits
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose an{" "}
                  <span className="text-[#008235]">Hybrid System?</span>
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((b, i) => (
                  <FadeIn key={b.title} direction="up" delay={i * 80}>
                    <div className="flex gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#008235]/30 hover:bg-green-50/40 transition-all duration-300 h-full">
                      <div className="w-11 h-11 rounded-xl bg-[#008235]/10 text-[#008235] flex items-center justify-center shrink-0">
                        {b.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm mb-1">
                          {b.title}
                        </h4>
                        <p className="text-gray-500 text-xs leading-relaxed">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. OUR PROCESS
      ══════════════════════════════════════ */}
      <section
        className="py-12 md:py-20 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${serviceSolBg})` }}
      >
        <div className="absolute inset-0 bg-gray-900/82" />
        <div className="relative z-10 w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10 md:mb-14">
              {/* <SectionTag>Our Process</SectionTag> */}

              <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
                Our Process
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                How We Deliver Your Off-Grid Solution
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <FadeIn key={s.num} direction="up" delay={i * 120}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={s.img}
                      alt={s.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[#e5792b] text-white font-bold text-sm flex items-center justify-center shadow-lg">
                      {s.num}
                    </div>
                  </div>
                  <div className="p-5">
                    <h4 className="font-bold text-white text-base mb-2">
                      {s.title}
                    </h4>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. CHALLENGES
      ══════════════════════════════════════ */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full md:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* LEFT CONTENT */}
            <FadeIn
              direction="left"
              className="flex flex-col justify-between h-full"
            >
              <div>
                {/* <SectionTag>Challenges & Limitations</SectionTag> */}
                <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
                  Challenges & Limitations
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Things to Know Before You{" "}
                  <span className="text-[#e5792b]">Go Hybrid</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  Hybrid systems offer the best of both worlds, but
                  understanding their complexities helps you make the right
                  choice for your energy needs.
                </p>
              </div>
              <div className="space-y-4">
                {challenges.map((c, i) => (
                  <FadeIn key={c.title} direction="up" delay={i * 80}>
                    <div className="flex gap-4 p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 h-full">
                      <AlertTriangle className="w-5 h-5 text-[#e5792b] shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm sm:text-base mb-1">
                          {c.title}
                        </h4>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {c.desc}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </FadeIn>
            {/* RIGHT IMAGE */}
            <FadeIn direction="right" delay={150} className="h-full">
              <img
                src={serviceSolImg1}
                alt="Hybrid solar challenges"
                className="rounded-2xl w-full h-full object-cover min-h-[260px] sm:min-h-[320px]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. OFFER CARDS
      ══════════════════════════════════════ */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-10 md:mb-14">
              {/* <SectionTag>What We Offer</SectionTag> */}
              <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Complete Hybrid Solar Packages
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: offerImg1,
                icon: offerIcon1,
                title: "Residential Hybrid",
                desc: "Perfect for homes needing backup and savings. Use solar during the day and battery during outages.",
                points: [
                  "Power backup included",
                  "Lower electricity bills",
                  "Smart energy control",
                ],
              },
              {
                img: offerImg2,
                icon: offerIcon2,
                title: "Commercial Hybrid",
                desc: "Ideal for offices and shops requiring uninterrupted operations and cost optimization.",
                points: [
                  "Reduced downtime",
                  "Peak load management",
                  "Advanced monitoring",
                ],
              },
              {
                img: offerImg3,
                icon: offerIcon3,
                title: "Industrial Hybrid",
                desc: "Designed for industries to ensure stable operations and reduce dependency on grid power.",
                points: [
                  "High-capacity systems",
                  "Energy cost control",
                  "Reliable backup",
                ],
              },
            ].map((card, i) => (
              <FadeIn key={card.title} direction="up" delay={i * 120}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                  <div className="relative overflow-hidden">
                    <img
                      src={card.img}
                      alt={card.title}
                      className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-white shadow flex items-center justify-center">
                      <img src={card.icon} alt="" className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h4 className="font-bold text-gray-800 text-base mb-2">
                      {card.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                      {card.desc}
                    </p>
                    <ul className="space-y-1.5">
                      {card.points.map((p) => (
                        <li
                          key={p}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-[#008235] shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FreeInstallation />
      <MobileCTA/>
    </div>
  );
};

export default Hybrid;
