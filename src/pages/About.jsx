import { useEffect, useRef, useState } from "react";
import {
  CheckCircle,
  Sun,
  Zap,
  Leaf,
  Award,
  Users,
  Globe,
  ArrowRight,
  Shield,
  TrendingUp,
  Star,
  Phone,
  Mail,
  Settings,
  Droplets,
  Wind,
  Battery,
} from "lucide-react";
import PageBanner from "../components/sections/PageBanner";
import FreeInstallation from "../components/sections/FreeInstallation";

/* ─────────── useInView Hook ─────────── */
const useInView = (threshold = 0.1) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
};

/* ─────────── FadeIn Component ─────────── */
const FadeIn = ({ children, delay = 0, direction = "up", style = {} }) => {
  const [ref, inView] = useInView();
  const dirs = {
    up: "translateY(40px)",
    down: "translateY(-40px)",
    left: "translateX(-40px)",
    right: "translateX(40px)",
  };
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : dirs[direction],
        transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};

/* ─────────── Constants & Assets ─────────── */
const P = "#e5792b"; // Solar Orange
const G = "#008235"; // Energy Green
const D = "#1a2332"; // Deep Blue

const IMGS = {
  hero: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=1600&q=80",
  welcome:
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
  ongrid:
    "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=600&q=80",
  offgrid:
    "https://images.unsplash.com/photo-1592833159057-65c976071197?w=600&q=80",
  pump: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80",
  chakki:
    "https://images.unsplash.com/photo-1558449028-b53a39d100fc?w=600&q=80", // Industrial context
  mission:
    "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
};

export default function ProfessionalAboutPage() {
  return (
    <div
      className="bg-white text-slate-800"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        @keyframes shine { 0% { transform: translateX(-100%); } 100% { transform: translateX(100%); } }
        .hover-shine:hover::after {
          content: ''; position: absolute; top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.3), transparent);
          animation: shine 0.6s;
        }
        .text-gradient { background: linear-gradient(to right, #e5792b, #008235); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      `}</style>

      <PageBanner />

      {/* Welcome & specialized Services Section - Star India Energy Solution */}
      <div className="container w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8 py-12 md:py-24 -mt-10 -mb-38">
        <section className="animate-fadeIn">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* LEFT CONTENT: Professional Introduction */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-[3px] bg-[#e5792b]"></div>
                <p className="text-[#e5792b] font-bold text-sm uppercase tracking-[0.2em]">
                  Empowering India's Energy Future
                </p>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
                Reliable <span className="text-[#e5792b]">Solar</span> Solutions
                for <span className="text-[#008235]">Generations</span>
              </h2>

              <div className="space-y-6 text-gray-600 leading-relaxed text-lg italic border-l-4 border-[#008235] pl-6 py-2 bg-gray-50 rounded-r-2xl">
                <p
                  className="animate-fadeInUp"
                  style={{ animationDelay: "100ms" }}
                >
                  "At Star India Energy Solution, we don't just install panels;
                  we deliver energy independence. Our mission is to power every
                  rooftop with the infinite strength of the sun."
                </p>
              </div>

              <div className="mt-8 space-y-5 text-gray-700 leading-relaxed text-justify font-medium">
                <p
                  className="animate-fadeInUp"
                  style={{ animationDelay: "200ms" }}
                >
                  Star India Energy Solution stands as a beacon of trust in the
                  renewable energy sector. We specialize in cutting-edge solar
                  technology designed to drastically reduce electricity
                  overheads while fostering environmental sustainability. With
                  over **500+ successful installations**, we are a preferred
                  partner for residential and industrial transitions.
                </p>

                <p
                  className="animate-fadeInUp"
                  style={{ animationDelay: "300ms" }}
                >
                  We provide a comprehensive ecosystem of solar services, from
                  **Government Subsidy Assistance** to specialized industrial
                  setups like **Solar Aata Chakkis** and **Agriculture Pumps**,
                  ensuring that green energy is accessible to every sector of
                  society.
                </p>

                {/* Trust Indicators Grid */}
                {/* <div className="grid grid-cols-2 gap-4 mt-8">
                  {[
                    {
                      title: "25 Years",
                      sub: "Performance Warranty",
                      icon: "🛡️",
                    },
                    { title: "MNRE", sub: "Empanelled Partner", icon: "🏛️" },
                    { title: "Tier-1", sub: "Quality Components", icon: "💎" },
                    {
                      title: "80% Savings",
                      sub: "On Monthly Bills",
                      icon: "⚡",
                    },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-[#e5792b] transition-all cursor-default group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {stat.icon}
                      </span>
                      <div>
                        <p className="text-[#e5792b] font-bold leading-none">
                          {stat.title}
                        </p>
                        <p className="text-[10px] text-gray-500 font-bold uppercase mt-1 tracking-wider">
                          {stat.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div> */}
              </div>
            </div>

            {/* RIGHT CONTENT: High-Impact Visuals */}
            <div className="relative w-full order-1 lg:order-2 flex flex-col items-center justify-center gap-2">
              {/* Abstract Glow Effect */}
              <div className="absolute w-[85%] h-[85%] bg-[#008235]/10 rounded-full blur-[80px]"></div>

              {/* Primary Image: Modern Solar Array */}
              {/* <div className="absolute top-0 right-0 w-[80%] h-[75%] rounded-[45px] overflow-hidden shadow-2xl z-20 border-8 border-white group"> */}
              <div className="relative w-full h-[200px] lg:h-[400px] rounded-[35px] overflow-hidden shadow-2xl z-30 border-8 border-white group mt-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1679607691186-4550451e13b7?q=80&w=415&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Star India Modern Solar Array"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>

              {/* Secondary Image: Technical Excellence */}
              {/* <div className="absolute bottom-4 left-0 w-[65%] h-[55%] rounded-[35px] overflow-hidden shadow-2xl z-30 border-8 border-white group"> */}
              <div className="relative w-full h-[200px] lg:h-[400px] rounded-[35px] overflow-hidden shadow-2xl z-30 border-8 border-white group mt-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1682148205811-e8a8ce759f4b?q=80&w=653&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  alt="Expert Technical Installation"
                />
                {/* Status Badge */}
                <div className="absolute top-6 right-6 bg-[#008235] text-white py-2 px-4 rounded-full shadow-lg flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  <p className="text-[10px] font-black uppercase tracking-widest">
                    Certified Installer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CORE SERVICES SHOWCASE */}
          {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "On-Grid Solar",
                desc: "Eliminate your bills via Net-Metering. Perfect for urban homes and offices.",
                color: "#e5792b",
                icon: "🏢",
              },
              {
                name: "Off-Grid / Hybrid",
                desc: "Achieve complete energy autonomy with advanced battery storage systems.",
                color: "#008235",
                icon: "🔋",
              },
              {
                name: "Solar Aata Chakki",
                desc: "Revolutionize your flour mill with massive savings on high-load energy.",
                color: "#e5792b",
                icon: "🏗️",
              },
              {
                name: "Solar Water Pump",
                desc: "Sustainable irrigation solutions for farmers, running entirely on sunlight.",
                color: "#008235",
                icon: "🌾",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group p-10 bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 border border-gray-100 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden"
              >
               
                <div
                  className="absolute top-0 left-0 w-full h-2 group-hover:h-3 transition-all"
                  style={{ backgroundColor: service.color }}
                ></div>

                <div className="text-5xl mb-8 transform group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3
                  className="text-2xl font-black mb-4 tracking-tight"
                  style={{ color: service.color }}
                >
                  {service.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                <button className="flex items-center gap-3 text-xs font-black uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
                  Learn More{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-2 transition-transform"
                  />
                </button>
              </div>
            ))}
          </div> */}
        </section>
      </div>
      {/* ─── Mission & Quality Section ─── */}
      {/* <section className="py-24 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="relative">
              <img
                src={IMGS.mission}
                className="rounded-3xl shadow-2xl z-10 relative"
                alt="Our Mission"
              />
              <div className="absolute -bottom-8 -right-8 bg-green-600 text-white p-8 rounded-3xl shadow-xl hidden lg:block">
                <div className="text-4xl font-black mb-1">10+ MW</div>
                <div className="text-green-100 text-sm font-medium">
                  Solar Capacity Installed
                </div>
              </div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full -z-10 animate-pulse"></div>
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm inline-block mb-4">
              Why Choose Us
            </span>
            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              We provide energy that is{" "}
              <span className="text-orange-600">Pure, Reliable</span> and{" "}
              <span className="text-green-600">Free</span>.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              At **Star India Energy Solution**, quality isn't an option—it's
              our foundation. From the initial site survey to the final
              net-metering approval, we handle everything with Tier-1 components
              and certified engineers.
            </p>

            <div className="space-y-4">
              {[
                "Tier-1 Solar Panels (25 Years Warranty)",
                "MNRE & DISCOM Approved Installations",
                "Advanced Monitoring for Performance",
                "Pan India Service & Support",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 text-slate-800 font-semibold"
                >
                  <div className="bg-orange-100 p-1 rounded-full">
                    <CheckCircle size={20} className="text-orange-600" />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section> */}

      {/* ─── Professional Statistics ─── */}
      <section className="bg-slate-900 py-10 mt-6 md:-mt-10  ">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { label: "Happy Clients", val: "500+" },
            { label: "States Covered", val: "12+" },
            { label: "Projects Completed", val: "1200+" },
            { label: "Years Experience", val: "10+" },
          ].map((stat, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="text-orange-500 text-4xl font-black mb-2">
                {stat.val}
              </div>
              <div className="text-slate-400 uppercase tracking-widest text-xs font-bold">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ─── Mission Section ─── */}
      <section className=" overflow-hidden bg-white  ">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8 py-12 md:py-24 grid md:grid-cols-2 gap-16 items-center -mt-10 ">
          {/* LEFT IMAGE */}
          <FadeIn direction="left">
            <div className="relative ">
              {/* IMAGE */}
              <img
                src={IMGS.mission}
                className="rounded-3xl shadow-2xl relative z-10"
              />

              {/* BADGE FIX */}
              <div className="absolute -bottom-8 -right-8 bg-orange-600 text-white p-4 rounded-3xl shadow-xl hidden lg:block z-20">
                <div className="text-2xl font-black">Clean Energy</div>
                <div className="text-orange-100 text-sm">For Every Home</div>
              </div>

              {/* BACKGROUND GLOW */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-100 rounded-full -z-10 animate-pulse"></div>
            </div>
          </FadeIn>

          {/* RIGHT CONTENT */}
          <FadeIn direction="right">
            <span className="text-orange-600 font-bold uppercase tracking-widest text-sm inline-block mb-4 ">
              Our Mission
            </span>

            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Powering India with <span className="text-orange-600">Clean</span>{" "}
              & <span className="text-green-600">Reliable Energy</span>
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Our mission is to accelerate solar adoption across India by
              delivering cost-effective, high-efficiency solutions for homes,
              farms, and industries.
            </p>

            <div className="space-y-4">
              {[
                "Clean Energy for All",
                "Customer-First Approach",
                "Advanced Solar Technology",
                "Sustainable Growth Vision",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 font-semibold"
                >
                  <div className="bg-orange-100 p-1 rounded-full">
                    <CheckCircle className="text-orange-600" size={20} />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Vision Section ─── */}
      <section className="overflow-hidden bg-slate-50 -mt-25">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8 py-12 md:py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <FadeIn direction="left">
            <span className="text-green-600 font-bold uppercase tracking-widest text-sm inline-block mb-4">
              Our Vision
            </span>

            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Building a <span className="text-green-600">Solar-Powered</span>{" "}
              Nation
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We envision a future where every household and business runs on
              renewable energy, ensuring sustainability, independence, and
              long-term savings.
            </p>

            <div className="space-y-4">
              {[
                "100% Renewable Future",
                "Energy Independence",
                "Smart Solar Ecosystem",
                "Green Economy Growth",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 font-semibold"
                >
                  <div className="bg-green-100 p-1 rounded-full">
                    <CheckCircle className="text-green-600" size={20} />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </FadeIn>

          {/* RIGHT IMAGE */}
          <FadeIn direction="right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800"
                className="rounded-3xl shadow-2xl"
              />

              <div className="absolute -top-8 -left-8 bg-green-600 text-white p-4 rounded-3xl shadow-xl hidden lg:block">
                <div className="text-2xl font-black">Future Ready</div>
                <div className="text-green-100 text-sm">Solar Innovation</div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Quality Section ─── */}
      <section className=" overflow-hidden bg-white -mt-35 -mb-10">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8 py-12 md:py-24 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT IMAGE */}
          <FadeIn direction="left">
            <div className="relative">
              <img src={IMGS.welcome} className="rounded-3xl shadow-2xl" />

              <div className="absolute -bottom-8 -right-8 bg-blue-600 text-white p-4 rounded-3xl shadow-xl hidden lg:block">
                <div className="text-2xl font-black">Tier-1</div>
                <div className="text-blue-100 text-sm">Solar Components</div>
              </div>
            </div>
          </FadeIn>

          {/* RIGHT CONTENT */}
          <FadeIn direction="right">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm inline-block mb-4">
              Quality Assurance
            </span>

            <h2 className="text-4xl font-black text-slate-900 mb-6 leading-tight">
              Commitment to{" "}
              <span className="text-blue-600">Top-Tier Quality</span>
            </h2>

            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We use only premium-grade solar components and certified
              installation practices to ensure maximum efficiency, safety, and
              long-term durability.
            </p>

            <div className="space-y-4">
              {[
                "Tier-1 Solar Panels",
                "MNRE Approved Systems",
                "Certified Engineers",
                "25 Years Performance Warranty",
              ].map((point, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 font-semibold"
                >
                  <div className="bg-blue-100 p-1 rounded-full">
                    <CheckCircle className="text-blue-600" size={20} />
                  </div>
                  {point}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      {/* <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-600 to-orange-500 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-200">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-6">
              Start Your Solar Journey
            </h2>
            <p className="text-orange-50 text-lg mb-10 max-w-xl mx-auto opacity-90">
              Get a free consultation for your home, farm, or industry. Join
              thousands of Indians saving lakhs on electricity.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-10 py-4 bg-white text-orange-600 rounded-full font-black hover:scale-105 transition-transform flex items-center gap-2 shadow-xl">
                <Phone size={20} /> Request Callback
              </button>
              <button className="px-10 py-4 bg-slate-900 text-white rounded-full font-black hover:bg-slate-800 transition-colors flex items-center gap-2">
                <Mail size={20} /> Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </section> */}

      <FreeInstallation />
    </div>
  );
}


// import { useEffect, useRef, useState } from "react";
// import {
//   CheckCircle,
//   Sun,
//   Zap,
//   Leaf,
//   Award,
//   Users,
//   Globe,
//   ArrowRight,
//   Shield,
//   TrendingUp,
//   Star,
//   Phone,
//   Mail,
//   Settings,
//   Droplets,
//   Wind,
//   Battery,
// } from "lucide-react";
// import PageBanner from "../components/sections/PageBanner";
// import FreeInstallation from "../components/sections/FreeInstallation";

// /* ─────────── useInView Hook ─────────── */
// const useInView = (threshold = 0.1) => {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold },
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// };

// /* ─────────── FadeIn Component ─────────── */
// const FadeIn = ({ children, delay = 0, direction = "up", style = {} }) => {
//   const [ref, inView] = useInView();
//   const dirs = {
//     up: "translateY(40px)",
//     down: "translateY(-40px)",
//     left: "translateX(-40px)",
//     right: "translateX(40px)",
//   };
//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "none" : dirs[direction],
//         transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`,
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const IMGS = {
//   mission:
//     "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
//   welcome:
//     "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
// };

// export default function ProfessionalAboutPage() {
//   return (
//     <div className="bg-white text-slate-800">
//       <PageBanner />

//       {/* SECTION */}
//       <div className="container w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8 py-10 md:py-16">
//         <section>
//           <div className="grid lg:grid-cols-2 gap-10 items-center">
            
//             {/* LEFT CONTENT */}
//             <div className="order-2 lg:order-1">
//               <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
//                 Reliable <span className="text-[#e5792b]">Solar</span> Solutions
//               </h2>
//               <p className="text-gray-600">
//                 Star India Energy Solution provides high-quality solar solutions
//                 for homes and industries.
//               </p>
//             </div>

//             {/* RIGHT IMAGES (UPDATED) */}
//             <div className="w-full order-1 lg:order-2 flex flex-col items-center gap-6">
              
//               {/* IMAGE 1 */}
//               <div className="relative w-full max-w-[500px] aspect-square rounded-[35px] overflow-hidden shadow-2xl border-8 border-white group">
//                 <img
//                   src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
//                 />
//               </div>

//               {/* IMAGE 2 */}
//               <div className="relative w-full max-w-[500px] aspect-square rounded-[35px] overflow-hidden shadow-2xl border-8 border-white group">
//                 <img
//                   src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800"
//                   className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
//                 />

//                 {/* BADGE */}
//                 <div className="absolute top-4 right-4 bg-[#008235] text-white py-2 px-4 rounded-full flex items-center gap-2">
//                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                   <p className="text-[10px] font-black uppercase">
//                     Certified Installer
//                   </p>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </section>
//       </div>

//       {/* STATS */}
//       <section className="bg-slate-900 py-12">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {[
//             { label: "Happy Clients", val: "500+" },
//             { label: "Projects Completed", val: "1200+" },
//             { label: "Years Experience", val: "10+" },
//             { label: "States Covered", val: "12+" },
//           ].map((stat, i) => (
//             <FadeIn key={i}>
//               <div className="text-orange-500 text-3xl font-black">
//                 {stat.val}
//               </div>
//               <div className="text-slate-400 text-xs">{stat.label}</div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       <FreeInstallation />
//     </div>
//   );
// }


// import { useEffect, useRef, useState } from "react";
// import {
//   CheckCircle,
// } from "lucide-react";
// import PageBanner from "../components/sections/PageBanner";
// import FreeInstallation from "../components/sections/FreeInstallation";

// /* ─────────── useInView Hook ─────────── */
// const useInView = (threshold = 0.1) => {
//   const ref = useRef(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => {
//         if (e.isIntersecting) {
//           setInView(true);
//           obs.disconnect();
//         }
//       },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return [ref, inView];
// };

// /* ─────────── FadeIn Component ─────────── */
// const FadeIn = ({ children, delay = 0, direction = "up", style = {} }) => {
//   const [ref, inView] = useInView();
//   const dirs = {
//     up: "translateY(40px)",
//     down: "translateY(-40px)",
//     left: "translateX(-40px)",
//     right: "translateX(40px)",
//   };
//   return (
//     <div
//       ref={ref}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "none" : dirs[direction],
//         transition: `all 0.8s ease ${delay}ms`,
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// };

// const IMGS = {
//   mission:
//     "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80",
//   welcome:
//     "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
// };

// export default function ProfessionalAboutPage() {
//   return (
//     <div className="bg-white text-slate-800">

//       <PageBanner />

//       {/* MAIN SECTION */}
//       <div className="container w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 md:px-8 py-10  md:py-16">
//         <section>
//           <div className="grid lg:grid-cols-2 gap-10 items-center -mt-8">

//             {/* LEFT CONTENT */}
//             <div className="order-2 lg:order-1">
              
//               <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
//                 Reliable <span className="text-[#e5792b]">Solar</span> Solutions
//                 for <span className="text-[#008235]">Generations</span>
//               </h2>

//               <p className="text-gray-600 text-lg leading-relaxed mb-6">
//                 Star India Energy Solution stands as a trusted name in solar energy,
//                 delivering sustainable and cost-effective solutions for homes,
//                 industries, and agriculture.
//               </p>

//               <p className="text-gray-600 text-lg leading-relaxed">
//                 With 500+ installations and strong government support, we help you
//                 achieve energy independence while reducing electricity bills.
//               </p>

//             </div>

//             {/* RIGHT IMAGES (FIXED) */}
//             <div className="w-full order-1 lg:order-2 flex flex-col items-center gap-4">

//               {/* IMAGE 1 */}
//               <div className="relative w-full max-w-[420px] aspect-square rounded-[30px] h-80 overflow-hidden shadow-xl border-8 border-white group">
//                 <img
//                   src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?w=800"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   alt=""
//                 />
//               </div>

//               {/* IMAGE 2 */}
//               <div className="relative w-full max-w-[420px] aspect-square rounded-[30px] overflow-hidden shadow-xl border-8 border-white h-80 group">

//                 <img
//                   src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800"
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
//                   alt=""
//                 />

//                 {/* BADGE */}
//                 <div className="absolute top-3 right-3 bg-[#008235] text-white px-3 py-1 rounded-full flex items-center gap-2 shadow-md">
//                   <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
//                   <span className="text-[10px] font-bold uppercase">
//                     Certified Installer
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </section>
//       </div>

//       {/* STATS */}
//       <section className="bg-slate-900 py-12">
//         <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
//           {[
//             { label: "Happy Clients", val: "500+" },
//             { label: "States Covered", val: "12+" },
//             { label: "Projects Completed", val: "1200+" },
//             { label: "Years Experience", val: "10+" },
//           ].map((stat, i) => (
//             <FadeIn key={i}>
//               <div className="text-orange-500 text-3xl font-black">
//                 {stat.val}
//               </div>
//               <div className="text-slate-400 text-xs uppercase tracking-wide">
//                 {stat.label}
//               </div>
//             </FadeIn>
//           ))}
//         </div>
//       </section>

//       {/* MISSION */}
//       <section className="py-12">
//         <div className="w-full md:w-[85%] mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          
//           <FadeIn direction="left">
//             <img src={IMGS.mission} className="rounded-2xl shadow-xl" />
//           </FadeIn>

//           <FadeIn direction="right">
//             <h2 className="text-3xl font-bold mb-4">
//               Powering India with Clean Energy
//             </h2>

//             <div className="space-y-3">
//               {[
//                 "Clean Energy for All",
//                 "Customer-First Approach",
//                 "Advanced Solar Technology",
//                 "Sustainable Growth",
//               ].map((point, idx) => (
//                 <div key={idx} className="flex items-center gap-3">
//                   <CheckCircle size={18} className="text-orange-500" />
//                   {point}
//                 </div>
//               ))}
//             </div>
//           </FadeIn>

//         </div>
//       </section>

//       <FreeInstallation />

//     </div>
//   );
// }