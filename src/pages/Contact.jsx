/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChefHat,
  UtensilsCrossed,
} from "lucide-react";
import toast from "react-hot-toast";
import PageBanner from "../components/sections/PageBanner";
// import contactImg from "../assets/images/about/about-page-img1.png";
import contactImg from "../assets/New folder/last image.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { postRequest } from "../Helpers/index";
import MobileCTA from "../components/sections/MobileCTA";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const contactData = [
    {
      icon: Phone,
      title: "Call Us",
      info: [
        {
          text: "+91 9076734825",
          link: "tel:+919076734825",
          type: "call",
        },
      ],
      subinfo: "",
    },
    {
      icon: Mail,
      title: "Email Us",
      info: {
        text: "starindiaenergy@gmail.com",
        link: "mailto:starindiaenergy@gmail.com",
      },
      subinfo: "We reply within 24hrs",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      info: {
        text: "1/352 Vibhav Khand Gomti Nagar Lucknow 226010",
        link: "https://www.google.com/maps/place/1%2F352,+Fims+College+Rd,+Vibhav+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh+226010/@26.863242,81.0170016,18z/data=!4m6!3m5!1s0x399be2ed25daa0ab:0x24be2d86fc0f624!8m2!3d26.86312!4d81.017876!16s%2Fg%2F11g7kl3x64?entry=ttu&g_ep=EgoyMDI2MDUwMi4wIKXMDSoASAFQAw%3D%3D",
      },
    },
  ];

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone))
      e.phone = "Enter valid 10-digit mobile number";
    if (form.email && !/\S+@\S+\.\S+/.test(form.email))
      e.email = "Enter valid email";
    if (!form.subject.trim()) e.subject = "Subject is required";

    if (!form.message.trim()) e.message = "Message is required";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");

  // ✅ Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      const res = await postRequest({
        url: "contact",
        cred: form,
      });

      // ✅ Handle both axios + custom backend response
      const success =
        res?.status === 200 ||
        res?.status === 201 ||
        res?.data?.statusCode === 201;

      if (success) {
        setUserName(form.name); // 👈 name preserve
        setSubmitted(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setErrors({});

        toast.success(res?.data?.message || "Request submitted successfully");
      } else {
        throw new Error(res?.data?.message || "Something went wrong");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Banner */}
      <Helmet>
        <title>
          Contact Us | Star India Energy Solutions – Get Free Solar Quote
        </title>
        <meta
          name="description"
          content="Contact Star India Energy Solutions for a free solar consultation. Call +91 9076734825 or visit us at Gomti Nagar, Lucknow. Get a free solar quote today."
        />
        <meta
          name="keywords"
          content="contact Star India Energy Solutions, solar consultation India, free solar quote, solar company Lucknow, solar panel inquiry, solar installation contact"
        />
        <link rel="canonical" href="https://www.starindiaenergy.com/contact" />
        <meta
          property="og:title"
          content="Contact Us | Star India Energy Solutions"
        />
        <meta
          property="og:description"
          content="Get a free solar consultation. Call +91 9076734825 or visit Gomti Nagar, Lucknow."
        />
        <meta
          property="og:url"
          content="https://www.starindiaenergy.com/contact"
        />
      </Helmet>
      <PageBanner />

      <div className="w-full lg:w-[85%] md:w-[85%] 2xl:w-[85%]  mx-auto px-4 py-12 md:py-20">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold mb-4">
            Get In <span className="text-[#008235]">Touch</span>
          </h2>
          <p className="text-gray-600">We'd love to hear from you</p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 ">
          {contactData.map((item, idx) => (
            <a
              key={idx}
              href={
                Array.isArray(item.info) ? item.info[0].link : item.info.link
              }
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-2"
            >
              <div className="w-14 h-14 bg-[#008235] rounded-full flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-white" />
              </div>

              <h3 className="text-xl font-semibold text-center">
                {item.title}
              </h3>

              <div className="text-center text-gray-700 font-medium mt-2 space-y-1">
                {Array.isArray(item.info) ? (
                  item.info.map((infoItem, i) => (
                    <div
                      key={i}
                      className="flex justify-center items-center gap-2"
                    >
                      {/* 🔹 Conditional Icon */}
                      {infoItem.type === "whatsapp" ? (
                        <FaWhatsapp className="text-green-500" />
                      ) : (
                        <Phone className="text-blue-500 w-4 h-4" />
                      )}

                      {/* 🔹 Clickable Link */}
                      <a
                        href={infoItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {infoItem.text}
                      </a>
                    </div>
                  ))
                ) : (
                  <a
                    href={item.info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {item.info.text}
                  </a>
                )}
              </div>

              {item.subinfo && (
                <p className="text-center text-sm text-gray-500 mt-2">
                  {item.subinfo}
                </p>
              )}
            </a>
          ))}
        </div>

        {/* FORM + IMAGE */}
        <div className="grid 2xl:grid-cols-2 xl:grid-cols-1 lg:grid-cols-1 md:grid-cols-1 gap-10 items-center ">
          {/* LEFT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={contactImg}
              alt="Contact Star India Energy Solutions for solar consultation"
              className="w-full h-full object-cover min-h-[400px]"
              loading="lazy"
              decoding="async"
            />

            <div className="absolute inset-0 bg-black/40"></div>

            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold">We’re Here to Help</h3>
              <p className="text-sm">Contact us anytime</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-white rounded-3xl shadow-xl p-8">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center justify-center">
                <Send className="w-10 h-10 text-green-600 mb-4" />

                <h3 className="text-2xl font-bold text-green-600 mb-3">
                  Message Sent!
                </h3>

                <p className="text-gray-500 text-base max-w-md leading-relaxed">
                  Thank you, <strong>{userName}</strong>! Our team will contact
                  you shortly.
                </p>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* 🔹 Heading */}
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#008235]">
                    Request a Solar Consultation
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Share your requirements and our experts will recommend the
                    best solar solution
                  </p>
                </div>

                {/* Name */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235] transition"
                  />
                  {errors.name && (
                    <p className="text-[#e5792b] text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Email Address <span className="text-red-500">*</span>
                      {/* <span className="text-gray-400">(Optional)</span> */}
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235] transition"
                    />
                    {errors.email && (
                      <p className="text-[#e5792b] text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-1 block">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter 10-digit mobile number"
                      value={form.phone}
                      maxLength={10}
                      inputMode="numeric"
                      pattern="[0-9]*"
                      onChange={(e) => {
                        const value = e.target.value.replace(/\D/g, "");
                        if (value.length <= 10) {
                          setForm((prev) => ({
                            ...prev,
                            phone: value,
                          }));
                        }
                      }}
                      className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235] transition"
                    />
                    {errors.phone && (
                      <p className="text-[#e5792b] text-sm mt-1">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Service Requirement <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    placeholder="e.g. Rooftop Solar, Commercial, Maintenance"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235] transition"
                  />
                  {errors.subject && (
                    <p className="text-[#e5792b] text-sm mt-1">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Location, property type, electricity bill, required capacity (kW), etc."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235] transition"
                  />
                  {errors.message && (
                    <p className="text-[#e5792b] text-sm mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#008235] text-white py-3 rounded-xl hover:bg-[#006b2c] transition"
                >
                  {loading ? "Submitting Request..." : "Get Free Solar Quote"}
                </button>

                {/* Trust Line */}
                <p className="text-center text-xs text-gray-400">
                  Our team will contact you within 24 hours. Your information is
                  secure with us.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* MAP (Same as yours) */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28477.548596500732!2d80.9657449!3d26.8496969!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be372786cb681%3A0xd422fd8ec6472f5a!2sStar%20India%20Energy%20Solutions!5e0!3m2!1sen!2sin!4v1777551419835!5m2!1sen!2sin"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>
      <MobileCTA />
    </div>
  );
}
