import React, { useEffect } from "react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import ScrollToTopButton from "./ScrollToTopButton";
import { Link } from "react-router-dom";

const Footer = () => {
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
    <footer
      className="bg-green-700 text-white pt-5 relative overflow-hidden"
      data-cursor="footer"
    >
      {/* Container */}
      <div className="w-full md:w-[85%] xl:w-[85%] mx-auto px-4 py-12 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 text-left">
          {/* Logo + About */}
          <div className="fade-up opacity-0">
            <img src={logo} className="w-32 mb-4" alt="solar logo" />

            <p className="text-sm leading-6 text-gray-300">
              Powering a sustainable future with innovative solar solutions.
              Join us in making the world greener, one panel at a time! Trusted
              by 500+ clients across residential, commercial & industrial
              projects.
            </p>

            {/* Social */}
            <div className="flex gap-3 pt-3 justify-start">
              {[
                {
                  icon: FaFacebook,
                  link: "https://www.facebook.com/starenergysolution",
                },
                {
                  icon: FaInstagram,
                  link: "https://www.instagram.com/starenergysolution/",
                },
              ].map(({ icon: Icon, link }, i) => (
                <a
                  key={i}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="button" // ✅ ADD THIS
                  className="w-9 h-9 flex items-center justify-center rounded-md bg-white/10 hover:bg-[#e5792b] hover:text-black transition-all duration-300 cursor-pointer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="fade-up opacity-0">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-300">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Gallery", path: "/gallery" },
                { name: "Blogs", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-400 transition duration-300 hover:translate-x-1 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="fade-up opacity-0">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
              Our Services
            </h3>

            <ul className="space-y-2 text-gray-300">
              {[
                { name: "On-Grid Solutions", path: "/services/on-grid" },
                { name: "Off Grid Solar", path: "/services/off-grid" },
                { name: "Hybrid Solar", path: "/services/hybrid" },
                { name: "Solar Aata-Chakki", path: "/services/atta-chakki" },
                { name: "Solar Pump", path: "/services/pump" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:text-orange-400 transition block"
                  >
                    {item.name}
                  </Link>
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
              <a
                href="tel:+919076734825"
                className="flex gap-2 items-start hover:text-orange-400 transition"
              >
                <Phone size={16} className="text-orange-400" />
                <span>+91-9076734825</span>
              </a>

              <a
                href="mailto:starindiaenergy@gmail.com"
                className="flex gap-2 items-start hover:text-orange-400 transition"
              >
                <Mail size={16} className="text-orange-400" />
                <span>starindiaenergy@gmail.com</span>
              </a>

              <a
                href="https://www.google.com/maps/place/1%2F352,+Fims+College+Rd,+Vibhav+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.863242,81.0170016,18z/data=!4m6!3m5!1s0x399be2ed25daa0ab:0x24be2d86fc0f624!8m2!3d26.86312!4d81.017876!16s%2Fg%2F11g7kl3x64?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-start hover:text-orange-400 transition"
              >
                <MapPin size={16} className="text-orange-400" />
                <span>1/352 Vibhav Khand Gomti Nagar Lucknow 226010</span>
              </a>
            </div>
          </div>

          {/* Branches */}
          <div className="fade-up opacity-0">
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-orange-500 inline-block">
              Branches
            </h3>

            <ul className="text-sm text-gray-300 space-y-2">
              <li className="hover:text-orange-400 transition cursor-pointer">
                ➤ M 177, Chungi - Parag Rd, Lucknow 226012
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                ➤ Petrol Pump, Dubagga, Lucknow 226003
              </li>
              <li className="hover:text-orange-400 transition cursor-pointer">
                ➤ Nandan, Sitapur Rd, Lucknow 226201
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 bg-green-900 text-center py-4 text-sm text-gray-400 px-3">
        © 2026 Star India Solar. All Rights Reserved
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

      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
