import React, { useState } from "react";
import { ArrowUp, ArrowDown, PhoneCallIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [scrolledTop, setScrolledTop] = useState(false);

  const handleClick = () => {
    if (scrolledTop) {
      // Scroll to bottom
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } else {
      // Scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setScrolledTop(!scrolledTop);
  };

  // 🔹 WhatsApp Click
  const handleWhatsAppClick = () => {
    const phone = "8922994825";
    const message =
      "Hi, I’m interested in solar panel installation. Please share process, packages & pricing details. Thanks!";

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // 🔹 Call Click
  const handleCallClick = () => {
    window.location.href = "tel:+9076734825";
  };

  return (
    <div className="fixed bottom-16 right-6 flex flex-col gap-3 z-50">
      {/* 🔹 Call + WhatsApp (HIDE ON MOBILE) */}
      <div className="hidden md:flex flex-col gap-3">
        {/* Call Button */}
        <button
          onClick={handleCallClick}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Call"
        >
          <PhoneCallIcon size={20} />
        </button>

        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="WhatsApp"
        >
          <FaWhatsapp size={22} />
        </button>
      </div>

      {/* 🔹 Scroll Button (always visible) */}
      <button
        onClick={handleClick}
        className="bg-[#2c408c] hover:bg-[#1f2f6b] text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        aria-label="Scroll toggle"
      >
        {scrolledTop ? <ArrowDown size={20} /> : <ArrowUp size={20} />}
      </button>
    </div>
  );
};

export default ScrollToTopButton;
