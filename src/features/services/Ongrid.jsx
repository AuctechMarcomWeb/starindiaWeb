import React, { useState } from "react";
import { Helmet } from "react-helmet";
import PageBanner from "../../components/sections/PageBanner";
import FreeInstallation from "../../components/sections/FreeInstallation";
import FadeIn from "../../components/sections/FadeIn";
import {
  CheckCircle, Zap, Sun, TrendingUp, AlertTriangle,
  Wifi, DollarSign, Leaf, Shield, ChevronDown, ChevronUp, ArrowRight,
} from "lucide-react";

// ── Images ──
import singleService1 from "../../assets/ogs/1.jpg";
import singleService2 from "../../assets/ogs/2.jpg";
import singleService3 from "../../assets/ogs/3.jpg";
import offerImg1 from "../../assets/images/single-service/offer-img1.png";
import offerImg2 from "../../assets/images/single-service/offer-img2.png";
import offerImg3 from "../../assets/images/single-service/offer-img3.png";
import offerIcon1 from "../../assets/images/single-service/offer-icon1.svg";
import offerIcon2 from "../../assets/images/single-service/offer-icon2.svg";
import offerIcon3 from "../../assets/images/single-service/offer-icon3.svg";
import trueIcon from "../../assets/images/single-service/true-icon.svg";
import solarBenefits from "../../assets/images/solar-benefits/solar-benefits-img.png";
import howItWorksLeft from "../../assets/images/how-it-works/how-it-works-left-img.png";
import howItWorksRight from "../../assets/images/how-it-works/how-it-works-right-img.png";
import whyChooseImg from "../../assets/images/why-choose-us/why-choose-us-img.png";
import whyIcon1 from "../../assets/images/why-choose-us/why-choose-us-icon1.svg";
import whyIcon2 from "../../assets/images/why-choose-us/why-choose-us-icon2.svg";
import whyIcon3 from "../../assets/images/why-choose-us/why-choose-us-icon3.svg";
import serviceSolBg from "../../assets/images/service-solutions/service-solutions-bg.png";
import serviceSolImg1 from "../../assets/ogs/11.jpg";
import serviceSolImg2 from "../../assets/ogs/8.jpg";
import serviceSolImg3 from "../../assets/ogs/9.jpg";
import serviceSolImg4 from "../../assets/ogs/10.jpg";
import ongrid from "../../assets/ogs/4.jpg";
import MobileCTA from "../../components/sections/MobileCTA";
// ── Static Data ──
const benefits = [
  { icon: <DollarSign className="w-6 h-6" />, title: "Zero Electricity Bills", desc: "Export surplus power to the grid and earn credits — drastically cut or eliminate your monthly electricity bill." },
  { icon: <Leaf className="w-6 h-6" />, title: "Eco-Friendly", desc: "Reduce your carbon footprint by generating clean, renewable solar energy and contributing to a greener planet." },
  { icon: <TrendingUp className="w-6 h-6" />, title: "High ROI", desc: "Recover your investment in 3–5 years and enjoy free electricity for 20+ years with minimal maintenance." },
  { icon: <Shield className="w-6 h-6" />, title: "Government Subsidies", desc: "Avail central and state government subsidies up to 40% on residential On-Grid solar installations." },
  { icon: <Wifi className="w-6 h-6" />, title: "Net Metering", desc: "Sell excess energy back to the grid through net metering and receive monetary credits on your electricity bill." },
  { icon: <Zap className="w-6 h-6" />, title: "Low Maintenance", desc: "On-Grid systems have no batteries, making them simpler, lighter, and virtually maintenance-free." },
];

const challenges = [
  { title: "Grid Dependency", desc: "On-Grid systems shut down during power outages to protect utility workers — no backup power without a battery." },
  { title: "Net Metering Approval", desc: "Requires DISCOM approval and net metering agreement, which can take time depending on your state." },
  { title: "Sunlight Dependency", desc: "Power generation depends on sunlight availability — cloudy or rainy days reduce output." },
  { title: "Initial Investment", desc: "Upfront installation cost can be significant, though subsidies and financing options help offset this." },
];

const steps = [
  {
    num: "01",
    title: "Site Survey & Assessment",
    desc: "Our experts visit your site to evaluate roof area, orientation, shading, and load requirements.",
    img: serviceSolImg2,
  },
  {
    num: "02",
    title: "System Design & Proposal",
    desc: "We design a custom On-Grid system sized to your energy needs with detailed ROI projections.",
    img: serviceSolImg3,
  },
  {
    num: "03",
    title: "Installation & Commissioning",
    desc: "Certified engineers install panels, inverter, and grid connection — fully tested and commissioned.",
    img: serviceSolImg4,
  },
];

const faqs = [
  { q: "What is an On-Grid solar system?", a: "An On-Grid (grid-tied) solar system is connected directly to the utility grid. It generates electricity from solar panels, uses it in your home/business, and exports any surplus to the grid — earning you credits via net metering." },
  { q: "Will it work during a power cut?", a: "No. On-Grid systems automatically shut down during grid outages for safety. If you need backup power, consider a Hybrid system with battery storage." },
  { q: "How much subsidy can I get?", a: "Under PM Surya Ghar Muft Bijli Yojana, residential customers can get up to 40% subsidy on systems up to 3 kW and 20% for 3–10 kW. Commercial installations may have different schemes." },
  { q: "What is the payback period?", a: "Typically 3–5 years depending on system size, local electricity tariff, and sunlight availability. After payback, you enjoy virtually free electricity for 20+ years." },
  { q: "What maintenance is required?", a: "Minimal — periodic panel cleaning (every 1–3 months) and an annual system health check. No battery maintenance needed." },
];

// ── Reusable Sub-components ──
const SectionTag = ({ children }) => (
  <span className="inline-block bg-[#e5792b]/10 text-[#e5792b] text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
    {children}
  </span>
);



// ── Main Component ──
const Ongrid = () => {
  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <Helmet>
        <title>On-Grid Solar System | Star India Energy Solutions</title>
        <meta
          name="description"
          content="Install an on-grid solar system with Star India Energy Solutions. Connect to the grid, earn through net metering, and save up to 80% on electricity bills. MNRE approved installer."
        />
        <meta
          name="keywords"
          content="on-grid solar system India, grid-tied solar panel, net metering solar, rooftop solar grid connection, on-grid solar installation, solar net metering India, Star India Energy"
        />
        <link
          rel="canonical"
          href="https://www.starindiaenergy.com/services/on-grid"
        />
        <meta
          property="og:title"
          content="On-Grid Solar System | Star India Energy Solutions"
        />
        <meta
          property="og:description"
          content="Grid-tied solar systems with net metering. Save up to 80% on electricity bills."
        />
        <meta
          property="og:url"
          content="https://www.starindiaenergy.com/services/on-grid"
        />
      </Helmet>
      <PageBanner />

      {/* ══════════════════════════════════════
          1. WHAT IS ON-GRID SOLAR
      ══════════════════════════════════════ */}
      <section className="w-full md:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-stretch gap-10 lg:gap-14 py-12 md:py-16 lg:py-20">
          {/* LEFT */}
          <FadeIn
            direction="left"
            className="w-full lg:w-1/2 flex flex-col justify-between h-full"
          >
            <div>
              {/* <SectionTag>What Is On-Grid Solar?</SectionTag> */}
              <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
                About Star India Energy
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug mb-4">
                Grid-Connected Solar Power for{" "}
                <span className="text-[#008235]">Homes & Businesses</span>
              </h2>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                An <strong>On-Grid Solar System</strong> (also called a
                grid-tied system) is directly connected to the public
                electricity grid. Solar panels generate DC power, which a
                grid-tie inverter converts to AC power for your daily use. Any
                surplus electricity is exported to the grid through{" "}
                <strong>Net Metering</strong>.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                Star India Energy Solution provides complete solar EPC services
                — from design and installation to maintenance — helping homes
                and businesses reduce electricity costs and move toward clean
                energy.
              </p>
            </div>

            {/* LIST */}
            <ul className="space-y-3 mt-4">
              {[
                "No battery required — cost-effective solution",
                "Government subsidy benefits available",
                "Export surplus energy & earn credits",
                "25-year performance warranty",
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
                src={singleService1}
                alt="On-Grid solar installation"
                loading="lazy"
                decoding="async"
                className="rounded-2xl w-full h-full object-cover col-span-2 min-h-[180px] sm:min-h-[220px] lg:min-h-[260px]"
              />

              <img
                src={singleService2}
                alt="Solar panels on rooftop"
                loading="lazy"
                decoding="async"
                className="rounded-2xl w-full h-full object-cover min-h-[140px] sm:min-h-[160px]"
              />

              <img
                src={singleService3}
                alt="Grid-tie inverter"
                loading="lazy"
                decoding="async"
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
          {/* GRID CONTAINER */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* LEFT IMAGE */}
            <FadeIn direction="left" className="h-full order-2 lg:order-1">
              <img
                src={ongrid}
                alt="Solar benefits"
                className="rounded-2xl w-full h-full min-h-[260px] sm:min-h-[320px]"
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
                  Key Benefits{" "}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose an{" "}
                  <span className="text-[#008235]">On-Grid System?</span>
                </h2>
              </div>

              {/* CARDS */}
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
          4. OUR PROCESS
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
                How We Deliver Your On-Grid Solution
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
          5. CHALLENGES
      ══════════════════════════════════════ */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
        <div className="w-full md:w-[90%] xl:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-6">
          {/* GRID CONTAINER */}
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
                  <span className="text-[#e5792b]">Go Solar</span>
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  On-Grid systems are cost-effective and widely used, but
                  understanding their limitations helps you make a smarter and
                  more reliable investment decision.
                </p>
              </div>

              {/* CHALLENGES */}
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
                alt="Solar challenges"
                className="rounded-2xl w-full h-full object-cover min-h-[260px] sm:min-h-[320px]"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. OFFER CARDS
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
                Complete On-Grid Solar Packages
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                img: offerImg1,
                icon: offerIcon1,
                title: "Residential On-Grid",
                desc: "1 kW – 10 kW systems for homes. Subsidy-eligible, net metering ready, and designed for maximum savings.",
                points: [
                  "Subsidy up to 40%",
                  "Net metering support",
                  "25-yr panel warranty",
                ],
              },
              {
                img: offerImg2,
                icon: offerIcon2,
                title: "Commercial On-Grid",
                desc: "10 kW – 500 kW systems for offices, factories, and institutions. Reduce operational costs significantly.",
                points: [
                  "Accelerated depreciation benefit",
                  "Custom load analysis",
                  "Priority AMC support",
                ],
              },
              {
                img: offerImg3,
                icon: offerIcon3,
                title: "Industrial On-Grid",
                desc: "500 kW+ utility-scale systems for large industries. Reduce peak demand charges and energy costs.",
                points: [
                  "SCADA monitoring",
                  "Dedicated project manager",
                  "Bulk pricing advantage",
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

export default Ongrid;
