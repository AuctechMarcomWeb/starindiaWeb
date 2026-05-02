import React, { useState } from "react";
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
import contactImg from "../assets/images/about/about-page-img1.png"; // 👉 apni image
import { FaWhatsapp } from "react-icons/fa";
import { postRequest } from "../Helpers/index";
export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  console.log("FORM DATA:", formData);

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
        text: "D-222 UGF Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010",
        link: "https://www.google.com/maps?ll=26.863692,80.997792&z=13&t=m&hl=en&gl=IN&mapclient=embed&cid=15286058874902622042",
      },
    },
  ];

  // ✅ Validation
  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email";
    }

    if (!formData.phone) {
      newErrors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter valid 10 digit number";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";

    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ Handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // 👈 ADD THIS

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ Submit

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const res = await postRequest({ url: `contact`, cred: payload });

      console.log("API RESPONSE:", res);

      if (res?.statusCode === 201 || res?.success) {
        toast.success(res?.message || "Message sent successfully!");

        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        // 🔴 Handle specific status codes
        if (res?.statusCode === 409) {
          toast.error(res?.message || "You already submitted this enquiry");
        } else if (res?.statusCode === 400) {
          toast.error(res?.message || "Invalid data");
        } else if (res?.statusCode === 500) {
          toast.error(res?.message || "Server error, please try later");
        } else {
          toast.error(res?.message || "Something went wrong");
        }
      }
    } catch (error) {
      console.error(error);
      // toast.error( "Server error, please try again");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Banner */}
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
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition hover:-translate-y-2"
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
            </div>
          ))}
        </div>

        {/* FORM + IMAGE */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT IMAGE */}
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            <img
              src={contactImg}
              alt="Contact"
              className="w-full h-full object-cover min-h-[400px]"
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
              <div className="text-center py-12">
                <Send className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-green-600">
                  Message Sent!
                </h3>
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {/* 🔹 Heading */}
                <div className="mb-4">
                  <h2 className="text-2xl md:text-3xl font-semibold text-[#008235]">
                    Send us a Message
                  </h2>
                  <p className="text-gray-500 text-sm mt-1">
                    We’ll get back to you as soon as possible
                  </p>
                </div>

                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#008235] 
focus:border-[#008235]
 transition"
                />
                {errors.name && (
                  <p className="text-[#e5792b] text-sm">{errors.name}</p>
                )}

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                  />
                  {errors.email && (
                    <p className="text-[#e5792b] text-sm">{errors.email}</p>
                  )}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={(e) => {
                      const value = e.target.value.replace(/\D/g, ""); // only digits
                      handleChange({ target: { name: "phone", value } });
                    }}
                    className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                  />
                  {errors.phone && (
                    <p className="text-[#e5792b] text-sm">{errors.phone}</p>
                  )}
                </div>

                {/* Subject */}
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                />
                {errors.subject && (
                  <p className="text-[#e5792b] text-sm">{errors.subject}</p>
                )}

                {/* Message */}
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-200 p-3 rounded-xl 
focus:outline-none focus:ring-2 focus:ring-[#2c408c] 
focus:border-[#2c408c] transition"
                />
                {errors.message && (
                  <p className="text-[#e5792b] text-sm">{errors.message}</p>
                )}

                {/* Button */}
                <button
                  type="submit"
                  className="w-full bg-[#008235] text-white py-3 rounded-xl hover:bg-[#006b2c]"
                >
                  Send Message
                </button>
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
    </div>
  );
}
