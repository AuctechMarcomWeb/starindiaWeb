import { useEffect, useState } from "react";
import img from "../../assets/images/hero/hero-background-image.jpg";
import img1 from "../../assets/images/hero/hero-background-image2.jpg";
import img2 from "../../assets/images/hero/hero-background-image3.jpg";
import video from "../../assets/videos/pop-up-hero-video.mp4";

const slides = [
  {
    _id: "69f594525ea228e9ba895346",
    image: "https://res.cloudinary.com/dbewtyvax/image/upload/v1777701966/y3u30fagikdf8paxti6o.jpg",
    fallback: img,
    title: "Go Solar, Save More",
    heading: "Efficient Solar Technology You Can Count On",
    subHeading: "With cutting-edge solar innovation, we provide eco-friendly power solutions that make homes more energy-independent",
  },
  {
    _id: "69f594215ea228e9ba895340",
    image: "https://res.cloudinary.com/dbewtyvax/image/upload/v1777701917/yplggfbdo3vhwuajglfw.jpg",
    fallback: img1,
    title: "Welcome to Star India Energy Solutions",
    heading: "Intelligent Solar Solutions You Can Rely On",
    subHeading: "We use advanced solar technology to deliver clean, sustainable, and long-lasting energy solutions for every home.",
  },
  {
    _id: "69f593dd5ea228e9ba89533a",
    image: "https://res.cloudinary.com/dbewtyvax/image/upload/v1777701841/kv8ejmom6jb8n8vwakqt.jpg",
    fallback: img2,
    title: "Welcome to Star India Energy Solutions",
    heading: "We Specialize in Sustainable Energy Solutions",
    subHeading: "We're committed to clean energy solutions that protect our planet. That's why we deliver premium solar panel installation services.",
  },
  {
    _id: "69f454c0af31f6a5f1d87117",
    image: "https://res.cloudinary.com/dbewtyvax/image/upload/v1777636050/rveel4lwuo8sm8qdfbuf.jpg",
    fallback: img,
    title: "Go Solar, Save More",
    heading: "Powering 10,000+ Homes Across India with Clean Solar Energy",
    subHeading: "Reduce your electricity bills by up to 90% with StarIndiaSolar's premium solar installations.",
  },
];  

const HeroSections = () => {
  const [current, setCurrent] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" role="region" aria-label="Hero slideshow">
      {slides.map((slide, index) => (
        <div
          key={slide._id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={index !== current}
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <img
              src={slide.image}
              alt={slide.heading}
              className="absolute inset-0 w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              fetchpriority={index === 0 ? "high" : "auto"}
              decoding={index === 0 ? "sync" : "async"}
              width="1920"
              height="1080"
              onError={(e) => { e.currentTarget.src = slide.fallback; }}
            />
            <div className="absolute inset-0 bg-black/70" aria-hidden="true" />
            <div className="relative z-10 text-center px-4 max-w-5xl">
              <p className="text-white tracking-widest text-sm md:text-base uppercase mb-3 animate-fadeUp">
                {slide.title}
              </p>
              <h1 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 animate-fadeUp delay-100">
                {slide.heading}
              </h1>
              <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto animate-fadeUp delay-200">
                {slide.subHeading}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 animate-fadeUp delay-300">
                <a
                  href="services/on-grid"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-md font-medium transition"
                >
                  Our Services
                </a>
                <div className="flex items-center gap-4 cursor-pointer">
                  <button
                    onClick={() => setShowVideo(true)}
                    className="relative w-14 h-14 flex items-center justify-center border-2 border-white rounded-full group bg-transparent"
                    aria-label="Watch company introduction video"
                  >
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

      <style>{`
        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }
        .delay-100 { animation-delay: 0.2s; }
        .delay-200 { animation-delay: 0.4s; }
        .delay-300 { animation-delay: 0.6s; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HeroSections;
