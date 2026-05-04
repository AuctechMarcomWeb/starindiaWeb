/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from "react";
import img from "../../assets/images/hero/hero-background-image.jpg";
import img1 from "../../assets/images/hero/hero-background-image2.jpg";
import img2 from "../../assets/images/hero/hero-background-image3.jpg";
import video from "../../assets/videos/pop-up-hero-video.mp4";
import { getRequest } from "../../Helpers/index";
import HeroSkeleton from "./HeroSkeleton";
// const slides = [
//   {
//     id: 1,
//     title: "We Specialize in Sustainable Energy Solutions",
//     desc: "We’re committed to clean energy solutions that protect our planet. That’s why we deliver premium solar panel installation services.",
//     bg: img,
//   },
//   {
//     id: 2,
//     title: "Intelligent Solar Solutions You Can Rely On",
//     desc: "We use advanced solar technology to deliver clean, sustainable, and long-lasting energy solutions for every home.",
//     bg: img1,
//   },
//   {
//     id: 3,
//     title: "Efficient Solar Technology You Can Count On",
//     desc: "With cutting-edge solar innovation, we provide eco-friendly power solutions that make homes more energy-independent.",
//     bg: img2,
//   },
// ];

const HeroSections = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [slides, setSlides] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [loading, setLoading] = useState(true);
  const [updateStatus, setUpdateStatus] = useState(false);

  // ✅ Fetch Banner with Pagination + Search
  useEffect(() => {
    setLoading(true);
    const query = new URLSearchParams({
      search: searchTerm,
      page,
      limit,
    }).toString();
    getRequest(`homeSlider?${query}`)
      .then((res) => {
        const responseData = res?.data?.data;
        setSlides(responseData?.sliders || []);
        setTotal(responseData?.totalSliders || 0);
      })
      .catch((error) => {
        // silently handle error in production
        if (import.meta.env.DEV) console.error("Hero slider error:", error);
      })
      .finally(() => setLoading(false));
  }, [page, limit, searchTerm, updateStatus]);

  // Auto slide
  useEffect(() => {
    if (slides.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides]);

  if (loading) {
    return <HeroSkeleton />;
  }


  return (
    <div className="relative w-full h-screen overflow-hidden" role="region" aria-label="Hero slideshow">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide?._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          {/* Background - use img for LCP optimization on first slide */}
          <div className="w-full h-full flex items-center justify-center relative">
            <img
              src={slide.image || "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png"}
              alt={slide?.heading || "Solar energy solutions"}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
              width="1920"
              height="1080"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl">
              <p className="text-white tracking-widest text-sm md:text-base uppercase mb-3 animate-fadeUp">
                {slide?.title}
              </p>

              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fadeUp delay-100">
                {slide?.heading}
              </h1>

              <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto animate-fadeUp delay-200">
                {slide?.subHeading}
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 animate-fadeUp delay-300">
                {/* Button */}
                <a
                  href="services/on-grid"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Our Services
                </a>

                {/* Video Button */}
                <div className="flex items-center gap-4 cursor-pointer">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="relative w-14 h-14 flex items-center justify-center border-2 border-white rounded-full group bg-transparent"
                    aria-label="Watch company introduction video"
                  >
                    {/* Pulse */}
                    <span className="absolute w-20 h-20 border border-white/30 rounded-full animate-ping" aria-hidden="true"></span>
                    <span aria-hidden="true">▶</span>
                  </button>

                  <p className="text-white font-medium">Company Intro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Video Popup */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" role="dialog" aria-modal="true" aria-label="Company introduction video">
          <div className="relative w-[90%] md:w-[700px]">
            <video
              src={video}
              controls
              autoPlay
              className="rounded-lg w-full"
              aria-label="Star India Energy Solutions company introduction video"
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-10 right-0 text-white text-3xl"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }
        .delay-100 {
          animation-delay: 0.2s;
        }
        .delay-200 {
          animation-delay: 0.4s;
        }
        .delay-300 {
          animation-delay: 0.6s;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};;

export default HeroSections;
