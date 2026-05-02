

import React, { useState } from "react";
import { Phone, Mail, MapPin, CheckCircle, Send } from "lucide-react";

import contactImg from "../../assets/images/about/about-page-img1.png";
import { postRequest } from "../../Helpers/index"; // apne path ke hisaab se
import toast from "react-hot-toast";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "", // ✅ ADD THIS

    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

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

const handleSubmit = async (e) => {
  e.preventDefault();
  const e2 = validate();

  if (Object.keys(e2).length) return setErrors(e2);

  try {
    setLoading(true);

    const payload = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      subject: form.subject,
      message: form.message,
    };

    // 👉 API call
    const res = await postRequest({ url: `contact`, cred: payload });

    if (res?.success) {
      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        email: "",
        subject: "", // ✅ RESET THIS
        message: "",
      });
    } else {
      toast.success(res?.data?.message || "Contact message sent successfully");
    }
  } catch (err) {
    console.error(err);
    // toast.error("Server error, try again");
  } finally {
    setLoading(false);
  }
};

  return (
    <section className="w-full bg-gray-50 py-10 sm:py-14 md:py-20 px-4 sm:px-6">
      <style>{`
        .jj-input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #E5E7EB;
          border-radius: 10px;
          font-size: 14px;
          background: #fff;
          outline: none;
          transition: 0.2s;
        }
        .jj-input:focus {
          border-color: #008235;
          box-shadow: 0 0 0 3px rgba(0,130,53,0.1);
        }
        .jj-input.error { border-color: #EF4444; }
      `}</style>

      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-2">
          <p className="text-[#008235] font-bold text-xs sm:text-sm uppercase tracking-widest">
            Get In Touch
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mt-2 mb-3 leading-tight">
            Power Your Home with{" "}
            <span className="text-[#008235]">Solar Energy</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
            Connect with our solar experts for installation and consultation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 items-stretch">
          {/* LEFT */}
          <div className="flex flex-col h-full gap-4">
            {/* Image */}
            <div className="flex-1 overflow-hidden rounded-2xl shadow-lg">
              <img
                src={contactImg}
                alt="solar"
                className="w-full h-full object-cover min-h-[260px] md:min-h-[360px]"
              />
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                {
                  icon: <Phone className="w-5 h-5 text-[#008235]" />,
                  label: "Call Us",
                  value: "+91 9876543210",
                  link: "tel:+919876543210",
                },
                {
                  icon: <Mail className="w-5 h-5 text-[#008235]" />,
                  label: "Email",
                  value: "info@starindiaenergy.com",
                  link: "mailto:info@starindiaenergy.com",
                },
                {
                  icon: <MapPin className="w-5 h-5 text-[#008235]" />,
                  label: "Location",
                  value:
                    "D-222 UGF Vibhuti Khand, Gomti Nagar, Lucknow, UP 226010",
                  link: "https://www.google.com/maps?q=D-222+UGF+Vibhuti+Khand+Gomti+Nagar+Lucknow",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() =>
                    window.open(
                      item.link,
                      item.label === "Location" ? "_blank" : "_self",
                    )
                  }
                  className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-center items-center text-center h-full cursor-pointer"
                >
                  <div className="mb-2">{item.icon}</div>
                  <p className="text-xs text-gray-500">{item.label}</p>
                  <p className="text-sm font-semibold break-words">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM (UNCHANGED) */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-8 h-full flex flex-col">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[420px] text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>

                <h3 className="text-xl font-bold text-gray-800">
                  Request Received!
                </h3>

                <p className="text-gray-500 text-sm max-w-xs">
                  Thank you, <strong>{form.name}</strong>! Our team will contact
                  you shortly.
                </p>

                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      phone: "",
                      email: "",
                      message: "",
                    });
                  }}
                  className="mt-3 text-sm font-semibold text-[#008235] border border-[#008235] px-5 py-2 rounded-lg hover:bg-green-50 transition"
                >
                  Submit Another Request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  Request Solar Consultation
                </h3>

                <p className="text-gray-400 text-xs mb-5">
                  Fill in your details and our solar expert will reach out with
                  the best solution for your needs.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 flex-1"
                  noValidate
                >
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      className={`jj-input ${errors.name ? "error" : ""}`}
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1.5">
                        Email Address{" "}
                        <span className="text-gray-400 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        className={`jj-input ${errors.email ? "error" : ""}`}
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="example@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-1.5">
                        Mobile Number <span className="text-red-400">*</span>
                      </label>
                      <input
                        className={`jj-input ${errors.phone ? "error" : ""}`}
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="9876543210"
                        maxLength={10}
                        inputMode="numeric"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-[11px] mt-1">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <input
                      className={`jj-input ${errors.subject ? "error" : ""}`}
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-600 mb-1.5">
                      Your Requirement <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      className={`jj-input resize-none ${
                        errors.message ? "error" : ""
                      }`}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about your solar requirement (home, commercial, kW, etc.)"
                    />
                    {errors.message && (
                      <p className="text-red-500 text-[11px] mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#008235] hover:bg-[#006d2c] disabled:opacity-70 text-white font-semibold text-sm py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg mt-2"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="w-4 h-4 animate-spin"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v8z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Get Free Quote
                      </>
                    )}
                  </button>

                  <p className="text-center text-[11px] text-gray-400">
                    We respect your privacy. No spam guaranteed.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
