import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  // Fade-up animation on scroll
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeUp");
          }
        });
      },
      { threshold: 0.2 },
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <footer className="bg-green-700 text-white pt-14 relative overflow-hidden">
      {/* Container */}
      <div className="w-full md:w-[85%] 2xl:w-[70%]  mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
        {/* Logo + About */}
        <div className="fade-up opacity-0">
          <img src={logo} className="w-32 mb-4" />

          <p className="text-sm  align-justify leading-6 text-gray-300">
           github pushing Powering a sustainable future with innovative solar solutions. Join
            us in making the world greener, one panel at a time! Trusted by 500+
            clients across residential, commercial & industrial projects.
          </p>

          {/* Social */}
          <div className="flex gap-3 mt-5">
            {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube].map((Icon, i) => (
              <div key={i} className="group relative overflow-hidden">
                <Icon className="bg-white text-green-800 p-2 rounded w-9 h-9 cursor-pointer transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white" />

                {/* Shine effect */}
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 blur-md transition"></span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="fade-up opacity-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">
            {["Home", "About Us", "Gallery", "Blogs", "Contact Us"].map(
              (item, i) => (
                <li
                  key={i}
                  className="hover:text-orange-400 cursor-pointer transition duration-300 hover:translate-x-1"
                >
                  {item}
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Services */}
        <div className="fade-up opacity-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
            Our Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            {[
              "On-Grid Solutions",
              "Off Grid Solar",
              "Hybrid Solar",
              "Solar Aata-Chakki",
              "Solar Pump",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-orange-400 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="fade-up opacity-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
            Contact Us
          </h3>

          <div className="space-y-4 text-gray-300 text-sm">
            {/* PHONE */}
            <a
              href="tel:+919076734825"
              className="flex gap-2 items-start hover:text-orange-400 transition"
            >
              <Phone size={16} className="text-orange-400 mt-1" />
              <span>+91-9076734825</span>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:starindiaenergy@gmail.com"
              className="flex gap-2 items-start hover:text-orange-400 transition"
            >
              <Mail size={16} className="text-orange-400 mt-1" />
              <span>starindiaenergy@gmail.com</span>
            </a>

            {/* ADDRESS (GOOGLE MAP OPEN) */}
            <a
              href="https://www.google.com/maps?ll=26.863692,80.997792&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=15286058874902622042"
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-start hover:text-orange-400 transition"
            >
              <MapPin size={16} className="text-orange-400 mt-1" />
              <span>
                D-222 UGF Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010
              </span>
            </a>
          </div>
        </div>

        {/* Branches */}
        <div className="fade-up opacity-0">
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
            Branches
          </h3>

          <ul className="text-sm text-gray-300 space-y-2">
            <li className="hover:text-orange-400 transition">
              ➤ M 177, Chungi - Parag Rd, Lucknow 226012
            </li>
            <li className="hover:text-orange-400 transition">
              ➤ Petrol Pump, Dubagga, Lucknow 226003
            </li>
            <li className="hover:text-orange-400 transition">
              ➤ Nandan, Sitapur Rd, Lucknow 226201
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 bg-green-900 text-center py-4 text-sm text-gray-400">
        © 2025 Star India Solar. All Rights Reserved
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .animate-fadeUp {
          opacity: 1 !important;
          transform: translateY(0px) !important;
          transition: all 0.8s ease;
        }
        .fade-up {
          transform: translateY(40px);
        }
      `}</style>
      {/* Scroll Button */}
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
