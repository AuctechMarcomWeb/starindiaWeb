/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import defaultBg from "../../assets/images/portfolio/portfolio-img2.jpg";

const routes = [
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },

  // Blog
  { name: "Blogs", path: "/blog" },
  { name: "Blog Details", path: "/blog/" }, // dynamic

  // Services (Navbar dropdown)
  { name: "On Grid", path: "/services/on-grid" },
  { name: "Off Grid", path: "/services/off-grid" },
  { name: "Hybrid", path: "/services/hybrid" },
  { name: "Aata Chakki", path: "/services/atta-chakki" },
  { name: "Solar Pump", path: "/services/pump" },
];


/* ── Keyframes injected once into <head> ── */
const STYLE_ID = "pb-keyframes";
const css = `
@keyframes pb-slideDown {
  0% {
    opacity: 0;
    transform: translateY(-40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.pb-title {
  opacity: 0;
  animation: pb-slideDown 0.6s ease-out 0.2s forwards;
}

  @keyframes pb-slideIn {
    0%   { opacity: 0; transform: translateX(-55px); }
    100% { opacity: 1; transform: translateX(0); }
  }
  @keyframes pb-lineGrow {
    0%   { transform: scaleX(0); transform-origin: center; }
    100% { transform: scaleX(1); transform-origin: center; }
  }
  @keyframes pb-shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes pb-kenBurns {
    0%   { transform: scale(1.08); }
    100% { transform: scale(1.0); }
  }
  @keyframes pb-overlayIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
  }

  .pb-bg {
    animation: pb-kenBurns 8s ease-out forwards;
    will-change: transform;
  }
  .pb-overlay-anim {
    animation: pb-overlayIn 0.7s ease forwards;
  }
  .pb-title {
    opacity: 0;
    animation: pb-slideIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s forwards;
  }
  .pb-title-shimmer {
    background: linear-gradient(90deg, #fff 20%, #e5792b 50%, #008235 80%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation:
      pb-slideIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.2s forwards,
      pb-shimmer 4s linear 1.2s infinite;
  }
  .pb-bar {
    opacity: 0;
    animation: pb-lineGrow 0.55s cubic-bezier(0.22,1,0.36,1) 0.52s forwards;
  }
  .pb-breadcrumb {
    opacity: 0;
    animation: pb-slideIn 0.6s cubic-bezier(0.22,1,0.36,1) 0.55s forwards;
  }
`;

function injectStyles() {
  if (document.getElementById(STYLE_ID)) return;
  const el = document.createElement("style");
  el.id = STYLE_ID;
  el.textContent = css;
  document.head.appendChild(el);
}

const PARTICLES = [
  { size: 180, top: "8%", left: "3%", opacity: 0.06 },
  { size: 100, top: "55%", left: "82%", opacity: 0.05 },
  { size: 55, top: "25%", left: "88%", opacity: 0.08 },
  { size: 130, top: "68%", left: "10%", opacity: 0.05 },
  { size: 40, top: "18%", left: "58%", opacity: 0.09 },
];

const PageBanner = ({ bgImage = defaultBg }) => {
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    injectStyles();
  }, []);

//  const currentRoute = routes.find((r) => location.pathname.startsWith(r.path));

const currentRoute = routes.find((r) => {
  if (r.path === "/blog/") {
    return location.pathname.startsWith("/blog/");
  }
  return location.pathname === r.path;
});


 const title = currentRoute?.name ?? "Page";

const finalBg = bgImage || defaultBg;

  // Re-trigger animation on every route change
  // useEffect(() => {
  //   setVisible(false);
  //   const t = setTimeout(() => setVisible(true), 60);
  //   return () => clearTimeout(t);
  // }, [location.pathname]);

  // const currentRoute = routes.find((r) => r.path === location.pathname);
  // const title = currentRoute ? currentRoute.name : "Page";

  



  return (
    <section className="relative overflow-hidden text-white">
      {/* Ken-Burns background — key re-mounts on route change = re-animates */}
      <img
        key={`bg-${location.pathname}`}
        src={finalBg}
        alt=""
        aria-hidden="true"
        className="pb-bg absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
        fetchpriority="high"
        decoding="sync"
      />

      {/* Gradient overlay */}
      {/* <div className="pb-overlay-anim absolute inset-0 bg-gradient-to-br from-black/65 via-black/40 to-black/60" /> */}

      {/* Decorative gold blur circles */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: p.size,
              height: p.size,
              top: p.top,
              left: p.left,
              opacity: p.opacity,
              background: "rgba(229,121,43,0.15)", // orange tone
            }}
          />
        ))}
      </div>

      {/* ── Centered Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28 max-w-5xl mx-auto">
        <>
          {/* Title */}
          <h2
            key={`title-${location.pathname}`}
            className="pb-title text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-3"
          >
            {title}
          </h2>

          {/* Gold underline bar */}
          <div
            key={`bar-${location.pathname}`}
            className="pb-bar h-[3px] w-14 sm:w-16 rounded-full mb-4"
            style={{ background: "linear-gradient(90deg,#e5792b,#008235)" }}
          />

          {/* Breadcrumb */}
          <nav
            key={`bc-${location.pathname}`}
            className="pb-breadcrumb mt-3 px-4 py-2 rounded-full bg-[#e5792b] flex items-center gap-2 text-sm sm:text-base font-medium"
            aria-label="breadcrumb"
          >
            <Link to="/" className="text-white hover:underline">
              Home
            </Link>

            <span className="text-white">›</span>

            <span className="text-[#008235] font-semibold">{title}</span>
          </nav>
        </>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full z-[5] leading-[0]">
        <svg
          viewBox="0 0 1440 40"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="block w-full"
        >
          <path
            d="M0,20 C360,40 1080,0 1440,20 L1440,40 L0,40 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default PageBanner;
