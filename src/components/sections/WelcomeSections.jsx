import React, { useEffect } from "react";
// import aboutImg from "../../assets/images/about/about-right-img.png";
import aboutImg from "../../assets/New folder/WhatsApp Image 2026-05-04 at 18.23.43 (1).jpeg";
import { Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WelcomeSections = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  const navigate = useNavigate();

  return (
    <section className="relative bg-white py-10 md:py-20 overflow-hidden">
      <div className="container mx-auto w-full md:w-[85%] 2xl:w-[75%] px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
        {/* LEFT CONTENT (Slide from LEFT) */}
        <div className="flex flex-col justify-between h-full space-y-4 animate-on-scroll slide-left">
          <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
            About Star India Energy
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Powering a Greener Future with at{" "}
            <span className="text-[#008235]">Smart Solar Solutions</span>
          </h2>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-3 text-justify">
            At{" "}
            <span className="font-semibold text-green-700">
              Star India Energy Solutions
            </span>
            , we specialize in delivering high-performance solar systems
            designed for homes, businesses, and industries. Our goal is to
            provide clean, reliable, and cost-effective energy solutions that
            help reduce electricity bills and dependency on traditional power
            sources.
          </p>
          <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-3 text-justify">
            By choosing us, you’re not just installing solar panels — you’re
            investing in a sustainable future, reducing your carbon footprint,
            and contributing to a greener and cleaner environment for
            generations to come.
          </p>

          {/* FEATURES */}
          <div className="hidden md:grid grid-cols-2 gap-3 sm:gap-4">
            {[
              ["Save Electricity Bills", 0],
              ["Eco-Friendly Energy", 100],
              ["Government Subsidy Support", 200],
              ["High Efficiency Panels", 300],
              ["Fast Installation", 400],
              ["24x7 Customer Support", 500],
            ].map(([text, delay]) => (
              <Feature key={text} text={text} delay={delay} visible={true} />
            ))}
          </div>

          {/* BUTTON */}
          <div className="flex flex-wrap items-center justify-start mt-4 gap-4">
            <button
              onClick={() => navigate("/about")}
              className="bg-[#008235] hover:bg-[#e5792b] text-white px-6 py-3 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-xl"
            >
              Explore More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE (Slide from RIGHT) */}
        <div className="relative animate-on-scroll slide-right group h-full flex items-center justify-center">
          <img
            src={aboutImg}
            alt="Star India Energy Solutions - About our solar company"
            loading="lazy"
            decoding="async"
            className="w-full h-full max-h-[500px] object-cover rounded-lg transition duration-500 group-hover:scale-105"
          />

          {/* Shine */}
          <div className="absolute inset-0 overflow-hidden rounded-lg">
            <div className="absolute -left-1/2 top-0 w-1/2 h-full bg-white/20 skew-x-12 transform group-hover:translate-x-[200%] transition duration-1000"></div>
          </div>

          {/* Ripple */}
          <div className="absolute -bottom-6 -right-6 w-28 h-28 border-4 border-orange-400 rounded-full animate-ping opacity-40"></div>

          {/* Glow */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500 opacity-20 blur-2xl rounded-full"></div>
        </div>
      </div>

      {/* 🔥 Animation Styles */}
      <style jsx>{`
        .animate-on-scroll {
          opacity: 0;
          transition: all 0.8s ease;
        }

        .slide-left {
          transform: translateX(-80px);
        }

        .slide-right {
          transform: translateX(80px);
        }

        .show {
          opacity: 1 !important;
          transform: translateX(0px) !important;
        }
      `}</style>
    </section>
  );
};

function Feature({ text, delay, visible }) {
  return (
    <div
      className="flex items-center gap-2 w-full"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-20px)",
        transition: `opacity 0.5s ease ${delay}ms, transform 0.5s ease ${delay}ms`,
      }}
    >
      <div className="w-5 h-5 rounded-full bg-[#008235] flex items-center justify-center flex-shrink-0">
        <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
          <path
            d="M1 4L3.5 6.5L9 1"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <span className="text-gray-700 text-sm font-medium">{text}</span>
    </div>
  );
}



export default WelcomeSections;
