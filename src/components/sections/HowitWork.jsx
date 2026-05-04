import React, { useEffect, useRef, useState } from "react";
import step1 from "../../assets/images/how-it-works/how-it-works-person1.png";
import step2 from "../../assets/images/how-it-works/how-it-works-person2.png";
import step3 from "../../assets/images/how-it-works/how-it-works-person3.png";
import step4 from "../../assets/images/how-it-works/how-it-works-person4.png";

const steps = [
  {
    step: "01",
    label: "Step 01",
    image: step1,
    title: "Initial Consultation",
    desc: "Our experts assess your energy consumption, site conditions, and requirements to recommend the most suitable solar solution tailored to your needs.",
    color: "#008235",
  },
  {
    step: "02",
    label: "Step 02",
    image: step2,
    title: "Custom System Design",
    desc: "We design a high-efficiency solar system with optimal panel placement, capacity planning, and financial options to maximize your return on investment.",

    color: "#008235",
  },
  {
    step: "03",
    label: "Step 03",
    image: step3,
    title: "Installation",
    desc: "Our certified technicians handle end-to-end installation with safety, quality, and compliance, ensuring your system is set up for long-term performance.",

    color: "#008235",
  },
  {
    step: "04",
    label: "Step 04",
    image: step4,
    title: "Monitoring & Maintenance",
    desc: "We provide real-time system monitoring, regular maintenance, and dedicated support to ensure consistent energy generation and maximum savings.",

    color: "#008235",
  },
];

function StepCard({ item, index, isLast, visible, activeStep, setActiveStep }) {
  const isActive = activeStep === index;
  const isPast = activeStep > index;

  return (
    <div
      className="relative flex flex-col items-center text-center cursor-pointer group"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(50px)",
        transition: `opacity 0.7s ease ${index * 0.2}s, transform 0.7s ease ${index * 0.2}s`,
      }}
      onClick={() => setActiveStep(index)}
    >
      {/* ── Progress connector + Badge row ── */}
      <div className="relative w-full flex items-center justify-center h-[44px]">
        {/* Left progress line */}
        {index !== 0 && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-1/2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-in-out"
              style={{
                width: isPast || isActive ? "100%" : "0%",
                background: "linear-gradient(90deg, #008235, #00d061)",
              }}
            />
          </div>
        )}

        {/* Right progress line */}
        {!isLast && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[3px] w-1/2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700 ease-in-out"
              style={{
                width: isPast ? "100%" : "0%",
                background: "linear-gradient(90deg, #008235, #00d061)",
              }}
            />
          </div>
        )}

        {/* Step circle badge */}
        <div
          className="relative z-10 w-[44px] h-[44px] rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 shadow-md"
          style={{
            background:
              isActive || isPast
                ? "linear-gradient(135deg, #008235, #00d061)"
                : "white",
            color: isActive || isPast ? "white" : "#008235",
            border: isActive || isPast ? "none" : "2px solid #d1d5db",
            boxShadow: isActive
              ? "0 0 0 4px rgba(0,130,53,0.2), 0 4px 20px rgba(0,130,53,0.35)"
              : isPast
                ? "0 4px 12px rgba(0,130,53,0.25)"
                : "0 2px 8px rgba(0,0,0,0.08)",
            transform: isActive ? "scale(1.15)" : "scale(1)",
          }}
        >
          {isPast ? item.step : item.step}
        </div>
      </div>

      {/* ── Image with shine + hover effects ── */}
      <div
        className="relative mt-6 rounded-full overflow-hidden flex-shrink-0"
        style={{
          width: "clamp(95px, 11vw, 145px)",
          height: "clamp(95px, 11vw, 145px)",
          boxShadow: isActive
            ? "0 10px 40px rgba(0,130,53,0.4), 0 0 0 4px rgba(0,130,53,0.15)"
            : "0 4px 18px rgba(0,0,0,0.12)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
          transform: isActive ? "scale(1.08)" : "scale(1)",
        }}
      >
        {/* Shine overlay */}
        <div
          className="absolute inset-0 z-10 rounded-full pointer-events-none overflow-hidden"
          style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }}
        >
          <div
            className="absolute top-0 left-[-60%] w-[50%] h-full rotate-12"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
              animation: isActive ? "shine 1.4s ease forwards" : "none",
            }}
          />
        </div>

        {/* Green ring on active */}
        <div
          className="absolute inset-0 rounded-full z-20 pointer-events-none transition-opacity duration-400"
          style={{
            border: "3px solid #008235",
            opacity: isActive ? 1 : 0,
          }}
        />

        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover rounded-full transition-all duration-500"
          style={{
            transform: isActive ? "scale(1.12)" : "scale(1)",
            filter: isActive
              ? "brightness(1.08) saturate(1.1)"
              : "brightness(1)",
          }}
        />
      </div>

      {/* ── Step label (mobile friendly) ── */}
      <p
        className="mt-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
        style={{ color: isActive ? "#008235" : "#9ca3af" }}
      >
        {item.label}
      </p>

      {/* ── Title ── */}
      <h3
        className="mt-1 font-bold leading-tight transition-all duration-300"
        style={{
          color: isActive ? "#008235" : "#111827",
          fontSize: "clamp(14px, 1.8vw, 21px)",
          transform: isActive ? "translateY(-2px)" : "translateY(0)",
        }}
      >
        {item.title}
      </h3>

      {/* ── Description — visible only on active or hover ── */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isActive ? "80px" : "0px",
          opacity: isActive ? 1 : 0,
          marginTop: isActive ? "8px" : "0px",
        }}
      >
        <p
          className="text-[#555] font-normal leading-5"
          style={{
            fontSize: "clamp(11px, 1.2vw, 14px)",
            maxWidth: "190px",
            margin: "0 auto",
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* ── Hover desc (non-active cards, desktop) ── */}
      {!isActive && (
        <div
          className="hidden md:block overflow-hidden transition-all duration-400 ease-in-out"
          style={{ maxHeight: "0px", opacity: 0 }}
        >
          <p
            className="text-[#555] text-xs leading-5 mt-2"
            style={{ maxWidth: "190px", margin: "8px auto 0" }}
          >
            {item.desc}
          </p>
        </div>
      )}

      {/* CSS hover for non-active on md+ */}
      <style>{`
        @keyframes shine {
          0%   { left: -60%; }
          100% { left: 130%; }
        }
        .group:hover .hover-desc {
          max-height: 80px !important;
          opacity: 1 !important;
        }
      `}</style>

      {/* Hover desc visible via CSS group-hover */}
      {!isActive && (
        <div
          className="hover-desc overflow-hidden"
          style={{
            maxHeight: "0px",
            opacity: 0,
            transition: "max-height 0.4s ease, opacity 0.4s ease",
            marginTop: "0px",
          }}
        >
          <p
            className="text-[#555] font-normal leading-5"
            style={{
              fontSize: "clamp(11px, 1.2vw, 14px)",
              maxWidth: "190px",
              margin: "8px auto 0",
            }}
          >
            {item.desc}
          </p>
        </div>
      )}
    </div>
  );
}

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);

  // Auto-advance steps
  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [visible]);

  // Scroll trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), 150);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes shine {
          0%   { left: -60%; }
          100% { left: 130%; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hover-desc {
          max-height: 0;
          opacity: 0;
          transition: max-height 0.4s ease, opacity 0.4s ease, margin-top 0.4s ease;
        }
        .group:hover .hover-desc {
          max-height: 80px;
          opacity: 1;
          margin-top: 8px;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative bg-gray-200 py-10 md:py-20 overflow-hidden"
      >
        <div className="container mx-auto w-full md:w-[85%] 2xl:w-[75%] px-4 sm:px-6 lg:px-8">
          {/* ── Header ── */}
          <div
            className="text-center mb-12 sm:mb-16"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            {/* Label */}
            <div className="flex items-center justify-center gap-3 mb-3">
              <p
                className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]"
                style={{ color: "#008235" }}
              >
                How It Works
              </p>
            </div>

            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              The Way We <span style={{ color: "#008235" }}>Work</span>
            </h2>

            {/* Subtext */}
            <p className="mx-auto text-gray-500 leading-7 text-sm sm:text-base max-w-[90%] sm:max-w-[560px] md:max-w-[720px]">
              We make solar adoption simple, transparent, and reliable. From
              initial consultation to system installation and long-term support,
              our team ensures a seamless transition to clean and cost-effective
              solar energy solutions for your home or business.
            </p>
          </div>

          {/* ── Steps Grid ── */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-3 sm:gap-x-5 md:gap-x-6 lg:gap-x-8">
            {steps.map((item, i) => (
              <StepCard
                key={i}
                item={item}
                index={i}
                isLast={i === steps.length - 1}
                visible={visible}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
              />
            ))}
          </div>

          {/* ── Bottom progress dots (mobile) ── */}
          <div className="flex justify-center gap-2 mt-10 md:hidden">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveStep(i)}
                className="rounded-full transition-all duration-500"
                style={{
                  width: activeStep === i ? "28px" : "8px",
                  height: "8px",
                  background: activeStep === i ? "#008235" : "#d1d5db",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* ── Active step detail card (mobile) ── */}
          {/* <div
            className="md:hidden mt-6 rounded-2xl p-5 text-center transition-all duration-500"
            style={{
              background: "white",
              border: "1.5px solid rgba(0,130,53,0.15)",
              boxShadow: "0 4px 24px rgba(0,130,53,0.1)",
              opacity: visible ? 1 : 0,
            }}
          >
            <p
              className="text-xs font-bold uppercase tracking-widest mb-1"
              style={{ color: "#008235" }}
            >
              {steps[activeStep].label}
            </p>
            <h4 className="text-base font-bold text-gray-900 mb-1">
              {steps[activeStep].title}
            </h4>
            <p className="text-sm text-gray-500 leading-6">
              {steps[activeStep].desc}
            </p>
          </div> */}
        </div>
      </section>
    </>
  );
}
