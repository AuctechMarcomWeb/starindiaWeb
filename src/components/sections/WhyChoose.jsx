import React from "react";
import { CheckCircle2 } from "lucide-react";

const WhyChoose = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      {/* ───────── TOP SECTION ───────── */}
      <div className="relative w-full min-h-[520px] md:flex items-center">
        {/* LEFT CONTENT */}
        <div className="relative z-10 w-full lg:w-1/2 px-6 sm:px-10 lg:px-16 xl:px-24 py-14 lg:py-20">
          {/* Label */}
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-0.5 bg-orange-500"></div>
            <p className="text-orange-600 font-bold text-lg uppercase tracking-wider">
              Why Choose Us
            </p>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-[700] text-slate-900 mb-4 leading-tight">
            Why Star India Energy
          </h2>

          <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-slate-700 mb-6">
            Smart Solar Solutions for a Sustainable Future
          </h3>

          {/* Divider */}
          <div className="w-12 h-1 rounded-full bg-orange-500 mb-6" />

          {/* POINTS */}
          <div className="space-y-5 mb-8">
            {[
              {
                title: "High Efficiency Solar Systems",
                desc: "We install advanced solar panels that maximize energy output and deliver faster return on investment for homes and businesses.",
              },
              {
                title: "Certified & Trusted Installations",
                desc: "Our MNRE-approved engineers ensure safe, reliable, and industry-standard solar installations with long-term durability.",
              },
              {
                title: "Massive Cost Savings",
                desc: "Reduce electricity bills up to 80% with our efficient solar solutions and government subsidy support.",
              },
              {
                title: "End-to-End Solar Solutions",
                desc: "From consultation and design to installation and maintenance, we handle everything seamlessly for you.",
              },
            ].map((pt, i) => (
              <div key={i} className="flex items-start gap-3">
                {/* ICON */}
                <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-1 bg-orange-100">
                  <CheckCircle2 className="w-3.5 h-3.5 text-orange-600" />
                </div>

                {/* TEXT */}
                <div>
                  <p className="text-base md:text-lg font-semibold text-gray-800">
                    {pt.title}
                  </p>
                  <p className="text-base md:text-lg text-gray-500">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE (DESKTOP) */}
        <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1200"
            alt="Solar Energy System installation"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 25%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 25%)",
            }}
          />
        </div>

        {/* MOBILE IMAGE */}
        <div className="md:hidden w-full px-6 pb-10">
          <img
            src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
            alt="Solar Energy installation"
            loading="lazy"
            decoding="async"
            className="w-full h-56 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
