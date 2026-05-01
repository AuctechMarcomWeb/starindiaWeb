// import React from "react";
// import installationImg from "../../assets/images/free-installation/free-installation-img.png";  
// export default function FreeInstallation() {
//   return (
//     <section className="flex items-center overflow-hidden">
//       {/* LEFT SIDE */}
//       <div
//         className="
//           w-full max-w-[1055px] bg-black
//           [clip-path:polygon(0_0,100%_0,91%_100%,0_100%)]
//         "
//       >
//         <div className="max-w-[630px] ml-auto mr-[110px] py-[80px] sm:py-[100px] px-4">
//           {/* Heading */}
//           <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
//             <span className="text-[#00d061]">Free Installation</span> For First
//             Time Use!
//           </h2>

//           {/* Paragraph */}
//           <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 py-5 sm:py-8">
//             Experience a seamless transition to solar energy with our
//             complimentary installation service. Our expert team ensures a
//             hassle-free setup, delivering efficient and reliable energy
//             solutions tailored to your needs.
//           </p>

//           {/* Buttons */}
//           <div className="flex flex-wrap items-center gap-5">
//             {/* CTA Button */}
//             <a
//               href="/contact"
//               className="
//                 inline-flex items-center justify-center
//                 w-[200px] sm:w-[223px] h-[56px] sm:h-[64px]
//                 bg-[#008235] text-white font-semibold rounded-full
//                 hover:bg-[#e5792b] transition
//               "
//             >
//               Contact Us Today
//             </a>

//             {/* Help Section */}
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-black border border-gray-700 rounded-full flex items-center justify-center">
//                 <img
//                   src="../../assets/images/about/need-help-now-btn.svg"
//                   alt="help"
//                   className="w-5 h-5"
//                 />
//               </div>

//               <div>
//                 <p className="text-xs text-gray-400 font-semibold">
//                   NEED HELP NOW?
//                 </p>
//                 <a
//                   href="tel:+919076734825"
//                   className="text-white font-semibold text-sm"
//                 >
//                   +91 9076734825
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* RIGHT SIDE IMAGE */}
//       <div className="w-full max-w-[1055px] -ml-[120px] sm:-ml-[150px] md:-ml-[190px] mb-6 sm:mb-10">
//         <img
//           src={installationImg}
//           alt="Free Installation"
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </section>
//   );
// }



import React from "react";
import { Phone } from "lucide-react";
import installationImg from "../../assets/images/free-installation/free-installation-img.png";

export default function FreeInstallation() {
  return (
    <section className="flex flex-col lg:flex-row items-center overflow-hidden">
      
      {/* LEFT SIDE */}
      <div
        className="
          w-full lg:max-w-[1055px] bg-black
          lg:[clip-path:polygon(0_0,100%_0,91%_100%,0_100%)]
        "
      >
        <div className="max-w-[630px] mx-auto lg:ml-auto lg:mr-[110px] py-[60px] sm:py-[80px] lg:py-[100px] px-5 sm:px-6">
          
          {/* Heading */}
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug text-center lg:text-left">
            <span className="text-[#00d061]">Free Installation</span> For First
            Time Use!
          </h2>

          {/* Paragraph */}
          <p className="text-gray-400 text-sm sm:text-base leading-7 sm:leading-8 py-5 sm:py-8 text-center lg:text-left">
            Experience a seamless transition to solar energy with our
            complimentary installation service. Our expert team ensures a
            hassle-free setup, delivering efficient and reliable energy
            solutions tailored to your needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            
            {/* CTA Button */}
            <a
              href="/contact"
              className="
                inline-flex items-center justify-center
                w-[200px] sm:w-[223px] h-[56px] sm:h-[64px]
                bg-[#008235] text-white font-semibold rounded-full
                hover:bg-[#e5792b] transition
              "
            >
              Contact Us Today
            </a>

            {/* Help Section */}
            <div className="flex items-center gap-3">
              {/* <div className="w-10 h-10 bg-black border border-gray-700 rounded-full flex items-center justify-center">
                <img
                  src="../../assets/images/about/need-help-now-btn.svg"
                  alt="help"
                  className="w-5 h-5"
                />
              </div> */}

              <div className="text-center sm:text-left">
                <p className="text-xs text-gray-400 font-semibold ml-8">
                  NEED HELP NOW?
                </p>
                <a
  href="tel:+919076734825"
  className="text-white font-semibold text-sm flex items-center gap-2"
>
  <Phone size={16} className="text-[#00d061]" />
  +91 9076734825
</a>
                {/* <a
                  href="tel:+919076734825"
                  className="text-white font-semibold text-sm"
                >
                  +91 9076734825
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full lg:max-w-[1055px] lg:-ml-[190px] mt-6 lg:mt-0">
        <img
          src={installationImg}
          alt="Free Installation"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
