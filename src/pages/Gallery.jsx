/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import { Sparkles } from "lucide-react";
import React, { useEffect, useState } from "react";
import PageBanner from "../components/sections/PageBanner";
import { getRequest } from "../Helpers/index";
import GallerySkeleton from "../components/sections/GallerySkeleton";

const Gallery = () => {
const [gallery, setGallery] = useState([]);
const [loading, setLoading] = useState(true);
const [page, setPage] = useState(1);
const [limit, setLimit] = useState(12);
const [searchTerm, setSearchTerm] = useState("");
 const [updateStatus, setUpdateStatus] = useState(false);

useEffect(() => {
  setLoading(true);
  const query = new URLSearchParams({
    page,
    limit,
    sortBy: "recent",
    isActive: true,
    search: searchTerm || "",
  }).toString();
  getRequest(`gallery?${query}`)
    .then((res) => {
      console.log("Gallery response:", res);
        setGallery(res?.data?.data?.gallery || []);
    })
    .catch((err) => {
      console.log("Gallery error:", err);
      setGallery([]);
    })
    .finally(() => setLoading(false));
}, [page, limit, searchTerm, updateStatus]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      <PageBanner />

      {/* GALLERY GRID SECTION */}
      <section className="lg:max-w-[1400px]  mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 cursor-pointer">
        {/* Section Heading */}
        {/* <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-gray-900 mb-4 leading-tight ">
            Inside{" "}
            <span className="text-green-600">Star India Energy Solutions</span>
          </h2>
          <p className="mt-4 text-gray-600 text-sm sm:text-base">
            A visual journey through our solar projects, installation process,
            and commitment to clean energy solutions.
          </p>
        </div> */}

        {/* Responsive Masonry-like Grid */}
        {loading ? (
          <GallerySkeleton />
        ) : gallery.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
            {gallery.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-3xl shadow-xl
        ${index === 0 || index === 4 ? "row-span-2" : ""}`}
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                {/* Caption */}
                {/* <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-6 group-hover:translate-y-0 transition-all duration-500">
                <h4 className="text-white font-semibold text-lg">
                  {item.title}
                </h4>
                <p className="text-red-100 text-sm mt-1">{item.desc}</p>
              </div> */}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-semibold text-gray-800">
              No Gallery Found
            </h3>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
