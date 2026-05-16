import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { ChevronDown, Mail, Menu, Phone, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const dropdownRef = React.useRef(null);

  // Close desktop dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="w-full shadow-md sticky top-0 left-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="hidden md:flex w-full bg-green-700 text-white text-xs md:text-sm py-2">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline">Follow Us:</span>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/starenergysolution"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-blue-600"
                aria-label="Follow us on Facebook"
              >
                <FaFacebook size={16} aria-hidden="true" />
              </a>

              <a
                href="https://www.instagram.com/starenergysolution/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:text-pink-500"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+919076734825"
              className="flex items-center gap-1 hover:text-green-600"
            >
              <Phone size={14} />
              +91 9076734825
            </a>

            <a
              href="mailto:starindiaenergy@gmail.com"
              className="flex items-center gap-1 hover:text-blue-600"
            >
              <Mail size={14} />
              starindiaenergy@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="w-full md:w-[85%] 2xl:w-[75%] mx-auto px-4 flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" aria-label="Star India Energy Solutions - Home">
            <img src={logo} alt="Star India Energy Solutions Logo" className=" object-cover" width="120" height="65" />
          </Link>

          {/* Mobile Button */}
          <button
            className="lg:hidden text-green-700"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 font-medium" role="menubar" aria-label="Main navigation">
            {/* Nav Item */}
            <li className="group relative">
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>

            <li className="group relative">
              <Link to="/about" className="nav-item">
                About Us
              </Link>
            </li>

            {/* SERVICES */}
            <li className="relative group" role="none">
              <button
                className="nav-item flex items-center gap-1 cursor-pointer bg-transparent border-none"
                aria-haspopup="true"
                aria-expanded={desktopServicesOpen}
                onClick={() => setDesktopServicesOpen(!desktopServicesOpen)}
              >
                Services <ChevronDown size={16} aria-hidden="true" />
              </button>

              <div
                className="absolute left-0 top-full pt-2 opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-300 min-w-[220px] z-50
                  bg-white shadow-lg rounded-md border border-gray-100"
              >
                <Link
                  to="/services/on-grid"
                  className="block px-4 py-2 rounded hover:bg-green-50 hover:text-green-700"
                >
                  On Grid Solutions
                </Link>

                <Link
                  to="/services/off-grid"
                  className="block px-4 py-2 rounded hover:bg-green-50 hover:text-green-700"
                >
                  Off Grid Solutions
                </Link>

                <Link
                  to="/services/hybrid"
                  className="block px-4 py-2 rounded hover:bg-green-50 hover:text-green-700"
                >
                  Hybrid Solutions
                </Link>

                <Link
                  to="/services/atta-chakki"
                  className="block px-4 py-2 rounded hover:bg-green-50 hover:text-green-700"
                >
                  Solar Aata Chakki
                </Link>

                <Link
                  to="/services/pump"
                  className="block px-4 py-2 rounded hover:bg-green-50 hover:text-green-700"
                >
                  Solar Pump
                </Link>
              </div>
            </li>

            <li>
              <Link to="/gallery" className="nav-item">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/blog" className="nav-item">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-item">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Overlay */}
        {open && (
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={() => setOpen(false)}
          />
        )}

        {/* Mobile Sidebar */}
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Mobile navigation"
          className={`fixed top-0 left-0 h-full w-72  bg-green-700 text-white z-50 transform ${
            open ? "translate-x-0" : "-translate-x-full"
          } transition duration-300 lg:hidden`}
        >
          <div className="p-5">
            <div className="flex justify-between items-center mb-6">
              <img src={logo} className="w-20" alt="Star India Energy Solutions Logo" width="80" height="56" />
              <button onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
            </div>

            <ul className="space-y-4 text-lg">
              <li>
                <Link to="/" onClick={() => setOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setOpen(false)}>
                  About
                </Link>
              </li>

              {/* Mobile Services */}
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex justify-between w-full"
                >
                  Services
                  <ChevronDown
                    className={`${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {servicesOpen && (
                  <div className="pl-4 mt-2 space-y-2 text-sm overflow-hidden transition-all duration-300">
                    <Link
                      to="/services/on-grid"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      On-Grid Solutions
                    </Link>

                    <Link
                      to="/services/off-grid"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Off-Grid Solutions
                    </Link>

                    <Link
                      to="/services/hybrid"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Hybrid Solutions
                    </Link>

                    <Link
                      to="/services/atta-chakki"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Solar Aata Chakki
                    </Link>

                    <Link
                      to="/services/pump"
                      onClick={() => setOpen(false)}
                      className="block py-1 hover:text-green-600 transition"
                    >
                      Solar Pump
                    </Link>
                  </div>
                )}
              </li>

              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blogs</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
