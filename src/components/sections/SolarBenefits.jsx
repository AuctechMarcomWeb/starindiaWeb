import React from "react";
import benefit from "../../assets/images/solar-benefits/solar-benefits-img.png";
export default function SolarBenefits() {
  return (
    <section className="mx-auto w-full md:w-[85%] 2xl:w-[75%] px-8 sm:px-6 lg:px-8 mt-8">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* LEFT */}
        <div className="w-full lg:w-1/2">
          <span className="text-[#008235] font-semibold uppercase tracking-widest text-sm">
            Solar Benefits
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            Unlock the Power of{" "}
            <span className="text-[#008235]">Solar Energy</span>
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-7 mt-6">
            Behind every solar panel and battery storage system lies a complex
            process of planning, approvals, and technical execution. With our
            expert team, you don’t have to worry about any of it—we handle
            everything seamlessly while you enjoy reliable, clean energy.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-7 mt-4">
            From consultation to installation, we ensure a smooth journey that
            delivers long-term savings, energy independence, and sustainability.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={benefit}
            alt="Solar Benefits"
            className="w-full h-auto rounded-xl object-cover "
          />
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
  {[
    "Affordable Electricity",
    "Increase Property Value",
    "Improved Energy Security",
    "Predictable Budgeting",
    "Government Subsidies",
    "Sell Power to Grid",
    "Higher Property Resale Value",
    "Low Maintenance Cost",
  ].map((item, i) => (
    <div
      key={i}
      className="flex items-center gap-3 bg-white p-3 rounded-xl"
    >
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#008235] text-white text-xs">
        ✓
      </div>
      <p className="text-xs sm:text-sm font-medium text-gray-800">
        {item}
      </p>
    </div>
  ))}
</div>

      {/* BENEFITS LIST
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-4">
        {[
          "Affordable Electricity",
          "Increase Property Value",
          "Improved Energy Security",
          "Predictable Budgeting",
          "Government Subsidies",
          "Sell Power to Grid",
          "Higher Property Resale Value",
          "Low Maintenance Cost",
        ].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-white p-2 rounded-xl border-none "
          >
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#008235] text-white text-xs">
              ✓
            </div>
            <p className="text-sm font-medium text-gray-800">{item}</p>
          </div>
        ))}
      </div> */}

      {/* COUNTER SECTION */}
      {/* <div className=" bg-gray-100 rounded-2xl p-8 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#008235]">
              86+
            </h3>
            <p className="text-sm text-gray-600 mt-1">Team Members</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#008235]">
              12k+
            </h3>
            <p className="text-sm text-gray-600 mt-1">Installed Capacity</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#008235]">
              10k+
            </h3>
            <p className="text-sm text-gray-600 mt-1">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#008235]">
              1k+
            </h3>
            <p className="text-sm text-gray-600 mt-1">Awards Winning</p>
          </div>
        </div>
      </div> */}
    </section>
  );
}
