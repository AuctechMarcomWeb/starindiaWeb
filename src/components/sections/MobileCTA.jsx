import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone } from "lucide-react";

const MobileCTA = () => {
  const whatsappNumber = "919838075493"; // existing
  const newWhatsAppNumber = "918922994825"; // 8922994825
  const contactNumber = "9076734825";

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 md:hidden">
      <div className="flex items-center justify-between shadow-lg border-t border-gray-200">
        {/* WhatsApp Section */}
        <a
          href={`https://wa.me/${newWhatsAppNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white w-1/2 py-3 justify-center"
        >
          <FaWhatsapp className="text-green-500 text-xl" />
          <div className="flex flex-col leading-tight">
            <span className="text-xs text-gray-500">WhatsApp</span>
            <span className="text-sm font-semibold text-gray-800">
              89229 94825
            </span>
          </div>
        </a>

        {/* Call / Contact Section */}
        <a
          href={`tel:${contactNumber}`}
          className="w-1/2 py-3 flex items-center justify-center gap-2 text-white bg-gradient-to-r from-orange-500 to-orange-600"
        >
          <Phone size={18} />
          <div className="flex flex-col leading-tight">
            <span className="text-xs opacity-90">Call Us</span>
            <span className="text-sm font-semibold">90767 34825</span>
          </div>
        </a>
      </div>
    </div>
  );
};

export default MobileCTA;
