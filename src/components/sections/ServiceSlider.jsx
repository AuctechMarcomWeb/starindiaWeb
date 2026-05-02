import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import img1 from "../../assets/images/service-solutions/service-solutions-img1.png";
import solaratta from "../../assets/images/solar-benefits/solaratta.png"

import solarBenefits from "../../assets/images/solar-benefits/solar-benefits-img.png";

import offgrid from "../../assets/images/solar-benefits/offgrid.jpg"
import ongrid from "../../assets/images/solar-benefits/ongrid.jpg"
import img2 from "../../assets/images/service-solutions/service-solutions-img2.png";
import img3 from "../../assets/images/service-solutions/service-solutions-img3.png";
import img4 from "../../assets/images/service-solutions/service-solutions-img4.png";
import img5 from "../../assets/images/service-solutions/service-solutions-img4.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const services = [
  {
    id: 1,
    title: "On-Grid Solar",
    desc: "Reduce electricity bills by exporting surplus energy to the grid.",
    image: ongrid,
    link: "/services/on-grid",
  },
  {
    id: 2,
    title: "Off-Grid Solar",
    desc: "Complete energy independence with battery-powered systems.",
    image: offgrid,
    link: "/services/off-grid",
  },
  {
    id: 3,
    title: "Hybrid Solar",
    desc: "Grid + battery backup for uninterrupted power supply.",
    image: img2,
    link: "/services/hybrid",
  },
  {
    id: 4,
    title: "Solar Pump",
    desc: "Efficient solar-powered irrigation for agriculture.",
    image: solarBenefits,
    link: "/services/solar-pump",
  },
  {
    id: 5,
    title: "Aata Chakki",
    desc: "Efficient solar-powered irrigation for agriculture.",
    image: solaratta,
    link: "/services/aata-chakki",
  },
];

function ServiceCard({ item }) {
  return (
    <div
      onClick={() => (window.location.href = item.link)}
      className="
        group cursor-pointer rounded-2xl overflow-hidden border-none shadow-lg
        bg-white hover:bg-[#008235] transition-all duration-300
        hover:-translate-y-2 shadow-md hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="h-44 overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 group-hover:text-white transition">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 mt-2 group-hover:text-green-100 transition">
          {item.desc}
        </p>

        {/* CTA */}
        <div className="mt-4 text-sm font-semibold text-[#008235] group-hover:text-[#e5792b]">
          Explore Service →
        </div>
      </div>
    </div>
  );
}

export default function ServicesSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header (same testimonial style) */}
        <div className="text-center mb-12">
          <span className="text-green-600 font-semibold uppercase tracking-widest text-sm">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            In-Depth Look at{" "}
            <span className="text-[#008235]">Service Solutions </span>
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          {/* Nav Buttons */}
          {/* <button
            ref={prevRef}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow"
          >
            ‹
          </button>

          <button
            ref={nextRef}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white w-10 h-10 rounded-full shadow"
          >
            ›
          </button> */}

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            loop
            autoplay={{ delay: 3000 }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((item) => (
              <SwiperSlide key={item.id}>
                <ServiceCard item={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
