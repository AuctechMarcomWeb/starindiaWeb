import React from "react";
import logo from "../../assets/logo.png";

const Preloader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[999999] flex items-center justify-center">
      <style>
        {`
          @keyframes squareMove {
            0%   { transform: translate(0, 0); }
            25%  { transform: translate(80px, 0); }
            50%  { transform: translate(80px, 80px); }
            75%  { transform: translate(0, 80px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>

      <div className="relative w-[100px] h-[100px]">
        {/* 🔥 Center Logo */}
        <img
          src={logo}
          alt="logo"
          className="absolute top-1/2 left-1/2 w-14 h-14 -translate-x-1/2 -translate-y-1/2 object-contain z-10"
        />

        {/* 🔵 Moving Dots (Window Style) */}
        {[0, 1, 2, 3].map((i) => (
          <span
            key={i}
            className="absolute w-4 h-4 bg-[#00ba72] rounded-full"
            style={{
              animation: "squareMove 2.5s linear infinite",
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Preloader;
