import { useEffect, useRef, useState } from "react";
import step1 from "../../assets/images/how-it-works/how-it-works-person1.png";
import step2 from "../../assets/images/how-it-works/how-it-works-person2.png";
import step3 from "../../assets/images/how-it-works/how-it-works-person3.png";
import step4 from "../../assets/images/how-it-works/how-it-works-person4.png";

const steps = [
  {
    step: "01", label: "Step 01", image: step1,
    title: "Initial Consultation",
    desc: "Our experts assess your energy consumption, site conditions, and requirements to recommend the most suitable solar solution tailored to your needs.",
  },
  {
    step: "02", label: "Step 02", image: step2,
    title: "Custom System Design",
    desc: "We design a high-efficiency solar system with optimal panel placement, capacity planning, and financial options to maximize your return on investment.",
  },
  {
    step: "03", label: "Step 03", image: step3,
    title: "Installation",
    desc: "Our certified technicians handle end-to-end installation with safety, quality, and compliance, ensuring your system is set up for long-term performance.",
  },
  {
    step: "04", label: "Step 04", image: step4,
    title: "Monitoring & Maintenance",
    desc: "We provide real-time system monitoring, regular maintenance, and dedicated support to ensure consistent energy generation and maximum savings.",
  },
];

// Desktop card — horizontal layout with horizontal connectors
function DesktopStepCard({ item, index, isLast, visible, activeStep, setActiveStep }) {
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
      <div className="relative w-full flex items-center justify-center h-[44px]">
        {index !== 0 && (
          <div className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-1/2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700 ease-in-out"
              style={{ width: isPast || isActive ? "100%" : "0%", background: "linear-gradient(90deg, #008235, #00d061)" }} />
          </div>
        )}
        {!isLast && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[3px] w-1/2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700 ease-in-out"
              style={{ width: isPast ? "100%" : "0%", background: "linear-gradient(90deg, #008235, #00d061)" }} />
          </div>
        )}
        <div className="relative z-10 w-[44px] h-[44px] rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500"
          style={{
            background: isActive || isPast ? "linear-gradient(135deg, #008235, #00d061)" : "white",
            color: isActive || isPast ? "white" : "#008235",
            border: isActive || isPast ? "none" : "2px solid #d1d5db",
            boxShadow: isActive ? "0 0 0 4px rgba(0,130,53,0.2), 0 4px 20px rgba(0,130,53,0.35)" : isPast ? "0 4px 12px rgba(0,130,53,0.25)" : "0 2px 8px rgba(0,0,0,0.08)",
            transform: isActive ? "scale(1.15)" : "scale(1)",
          }}>
          {item.step}
        </div>
      </div>

      <div className="relative mt-6 rounded-full overflow-hidden flex-shrink-0"
        style={{
          width: "clamp(95px, 11vw, 145px)", height: "clamp(95px, 11vw, 145px)",
          boxShadow: isActive ? "0 10px 40px rgba(0,130,53,0.4), 0 0 0 4px rgba(0,130,53,0.15)" : "0 4px 18px rgba(0,0,0,0.12)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
          transform: isActive ? "scale(1.08)" : "scale(1)",
        }}>
        <div className="absolute inset-0 z-10 rounded-full pointer-events-none overflow-hidden"
          style={{ opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }}>
          <div className="absolute top-0 left-[-60%] w-[50%] h-full rotate-12"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)", animation: isActive ? "shine 1.4s ease forwards" : "none" }} />
        </div>
        <div className="absolute inset-0 rounded-full z-20 pointer-events-none"
          style={{ border: "3px solid #008235", opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }} />
        <img src={item.image} alt={item.title} loading="lazy" decoding="async"
          className="w-full h-full object-cover rounded-full transition-all duration-500"
          style={{ transform: isActive ? "scale(1.12)" : "scale(1)", filter: isActive ? "brightness(1.08) saturate(1.1)" : "brightness(1)" }} />
      </div>

      <p className="mt-3 text-xs font-semibold uppercase tracking-widest transition-colors duration-300"
        style={{ color: isActive ? "#008235" : "#9ca3af" }}>{item.label}</p>
      <h3 className="mt-1 font-bold leading-tight transition-all duration-300"
        style={{ color: isActive ? "#008235" : "#111827", fontSize: "clamp(14px, 1.8vw, 21px)", transform: isActive ? "translateY(-2px)" : "translateY(0)" }}>
        {item.title}
      </h3>
      <div className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{ maxHeight: isActive ? "80px" : "0px", opacity: isActive ? 1 : 0, marginTop: isActive ? "8px" : "0px" }}>
        <p className="text-[#555] font-normal leading-5"
          style={{ fontSize: "clamp(11px, 1.2vw, 14px)", maxWidth: "190px", margin: "0 auto" }}>{item.desc}</p>
      </div>
      {!isActive && (
        <div className="hover-desc overflow-hidden"
          style={{ maxHeight: "0px", opacity: 0, transition: "max-height 0.4s ease, opacity 0.4s ease", marginTop: "0px" }}>
          <p className="text-[#555] font-normal leading-5"
            style={{ fontSize: "clamp(11px, 1.2vw, 14px)", maxWidth: "190px", margin: "8px auto 0" }}>{item.desc}</p>
        </div>
      )}
    </div>
  );
}

// Mobile card — vertical layout with vertical connectors
function MobileStepCard({ item, index, isLast, visible, activeStep, setActiveStep }) {
  const isActive = activeStep === index;
  const isPast = activeStep > index;

  return (
    <div
      style={{
        display: "flex", flexDirection: "row",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 0.7s ease ${index * 0.2}s, transform 0.7s ease ${index * 0.2}s`,
        cursor: "pointer",
      }}
      onClick={() => setActiveStep(index)}
    >
      {/* Left column: top-line → badge → bottom-line */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "44px", flexShrink: 0, marginRight: "16px" }}>
        {/* Top connector */}
        <div style={{ width: "3px", height: "22px", background: "#e5e7eb", borderRadius: "9999px", overflow: "hidden", visibility: index === 0 ? "hidden" : "visible" }}>
          <div style={{ width: "100%", height: isPast || isActive ? "100%" : "0%", background: "linear-gradient(180deg, #008235, #00d061)", transition: "height 0.7s ease", borderRadius: "9999px" }} />
        </div>

        {/* Circle badge */}
        <div style={{
          width: "44px", height: "44px", borderRadius: "9999px", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: "700", fontSize: "14px",
          background: isActive || isPast ? "linear-gradient(135deg, #008235, #00d061)" : "white",
          color: isActive || isPast ? "white" : "#008235",
          border: isActive || isPast ? "none" : "2px solid #d1d5db",
          boxShadow: isActive
            ? "0 0 0 4px rgba(0,130,53,0.2), 0 4px 20px rgba(0,130,53,0.35)"
            : isPast ? "0 4px 12px rgba(0,130,53,0.25)" : "0 2px 8px rgba(0,0,0,0.08)",
          transform: isActive ? "scale(1.1)" : "scale(1)",
          transition: "all 0.5s ease",
        }}>
          {item.step}
        </div>

        {/* Bottom connector — grows to fill remaining height */}
        <div style={{ width: "3px", flex: 1, minHeight: "16px", background: "#e5e7eb", borderRadius: "9999px", overflow: "hidden", visibility: isLast ? "hidden" : "visible" }}>
          <div style={{ width: "100%", height: isPast ? "100%" : "0%", background: "linear-gradient(180deg, #008235, #00d061)", transition: "height 0.7s ease", borderRadius: "9999px" }} />
        </div>
      </div>

      {/* Right column: image + text, padded bottom to give space for connector */}
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "14px", paddingBottom: isLast ? "8px" : "28px", flex: 1, paddingTop: "0px" }}>
        {/* Image */}
        <div style={{
          position: "relative", borderRadius: "9999px", overflow: "hidden", flexShrink: 0,
          width: "68px", height: "68px",
          boxShadow: isActive ? "0 6px 24px rgba(0,130,53,0.4), 0 0 0 3px rgba(0,130,53,0.2)" : "0 3px 12px rgba(0,0,0,0.12)",
          transition: "box-shadow 0.4s ease, transform 0.4s ease",
          transform: isActive ? "scale(1.06)" : "scale(1)",
        }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: "9999px", zIndex: 10, pointerEvents: "none", border: "2px solid #008235", opacity: isActive ? 1 : 0, transition: "opacity 0.4s ease" }} />
          <img src={item.image} alt={item.title} loading="lazy" decoding="async"
            style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "9999px" }} />
        </div>

        {/* Text */}
        <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
          <p style={{ fontSize: "11px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "2px", color: isActive ? "#008235" : "#9ca3af" }}>
            {item.label}
          </p>
          <h3 style={{ fontWeight: 700, fontSize: "16px", lineHeight: "1.3", marginBottom: "4px", color: isActive ? "#008235" : "#111827" }}>
            {item.title}
          </h3>
          <div style={{ overflow: "hidden", transition: "max-height 0.5s ease, opacity 0.5s ease", maxHeight: isActive ? "150px" : "0px", opacity: isActive ? 1 : 0 }}>
            <p style={{ color: "#555", fontSize: "13px", lineHeight: "1.6" }}>{item.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!visible) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [visible]);

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

      <section ref={sectionRef} className="relative bg-gray-200 py-10 md:py-20 overflow-hidden">
        <div className="container mx-auto w-full md:w-[85%] 2xl:w-[75%] px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
            <div className="flex items-center justify-center gap-3 mb-3">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em]" style={{ color: "#008235" }}>
                How It Works
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug">
              The Way We <span style={{ color: "#008235" }}>Work</span>
            </h2>
            <p className="mx-auto text-gray-500 leading-7 text-sm sm:text-base max-w-[90%] sm:max-w-[560px] md:max-w-[720px]">
              We make solar adoption simple, transparent, and reliable. From initial consultation to system
              installation and long-term support, our team ensures a seamless transition to clean and
              cost-effective solar energy solutions for your home or business.
            </p>
          </div>

          {/* Desktop: 4-column horizontal */}
          {!isMobile && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }}>
              {steps.map((item, i) => (
                <DesktopStepCard key={i} item={item} index={i} isLast={i === steps.length - 1}
                  visible={visible} activeStep={activeStep} setActiveStep={setActiveStep} />
              ))}
            </div>
          )}

          {/* Mobile: vertical list */}
          {isMobile && (
            <div style={{ display: "flex", flexDirection: "column", paddingLeft: "8px", paddingRight: "8px" }}>
              {steps.map((item, i) => (
                <MobileStepCard key={i} item={item} index={i} isLast={i === steps.length - 1}
                  visible={visible} activeStep={activeStep} setActiveStep={setActiveStep} />
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
