import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageBanner from "../components/sections/PageBanner";
import {
  MessageCircle,
  ArrowRight,
  Sun,
  Zap,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { getRequest } from "../Helpers/index";
import BlogSkeleton from "./BlogSkeleton";
import PaginationComponent from "../components/sections/PaginationComponent";
const marqueeItems = [
  { icon: Sun, label: "Clean Solar Energy" },
  { icon: Zap, label: "Power Backup Solution" },
  { icon: Leaf, label: "Eco-Friendly System" },
  { icon: TrendingUp, label: "Reduce Electricity Bills" },
];

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

useEffect(() => {
  setLoading(true);
  const query = new URLSearchParams({
    page,
    limit,
    sortBy: "recent",
    isActive: true,
  }).toString();
  getRequest(`blogs?${query}`)
    .then((res) => {
      console.log("Blogs API:", res);
        setBlogs(res?.data?.data?.blogs || []);
        setTotal(res?.data?.data?.totalBlogs || 0);
    })
    .catch((err) => {
      console.log("Blog error:", err);
      setBlogs([]);
    })
    .finally(() => setLoading(false));
}, [page, limit]);


const formatDate = (dateString) => {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });
};
const formatTimeOnly = (date) => {
  if (!date) return "-";

  return new Date(date)
    .toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .replace(/\s?(am|pm)/i, (m) => m.toUpperCase());
};

  return (
    <div className="bg-white text-gray-800 overflow-hidden">
      <PageBanner />
      {/* MARQUEE */}
      <div className="relative bg-gradient-to-r from-green-600/90 via-green-600/90 to-green-600/90 py-3 overflow-hidden cursor-pointer">
        <div className="marquee-container">
          <div className="marquee-content">
            {[...marqueeItems, ...marqueeItems].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 mx-8 text-lg font-semibold whitespace-nowrap text-white
                  hover:text-green-300 transition"
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BLOG GRID */}
      <section className="w-full md:w-[90%] xl:w-[85%] mx-auto px-4 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-[600] text-900 mb-4 leading-tight text-[#008235]">
            Our Latest Blogs
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest insights on solar energy, industry
            trends and smart solutions to reduce your electricity costs and
            embrace a sustainable future.
          </p>
        </div>
        {/* LOADING */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(limit)].map((_, i) => (
              <BlogSkeleton key={i} />
            ))}
          </div>
        )}

        {/* ✅ BLOG LIST */}
        {!loading && blogs?.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post, idx) => (
              <article
                key={post?._id}
                // onClick={() => navigate(`/blog/${post?._id}`)}
                onClick={() => navigate(`/blog/${post?.
                  _id}`)}
                // onClick={() =>
                //   navigate(`/blog/${post?.url}`, {
                //     state: { id: post?._id },
                //   })
                // }
                className="group bg-white rounded-2xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl cursor-pointer"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${idx * 0.2}s both`,
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={
                      post?.mainImage ||
                      "https://res.cloudinary.com/dtguimwsu/image/upload/v1766470898/kjfwaxhehxbafkh6rqax.png"
                    }
                    alt={post?.url}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 flex-wrap">
                    <span>{formatDate(post?.createdAt)}</span>

                    <span>• {formatTimeOnly(post?.createdAt)}</span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-[#008235] transition-colors">
                    {post?.heading}
                  </h3>

                  <button className="flex items-center gap-2 text-[#008235] font-semibold group-hover:gap-4 transition-all">
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* ✅ NO DATA */}
        {!loading && blogs?.length === 0 && (
          <div className="text-center bg-white rounded-2xl shadow p-10 max-w-md mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              No Blogs Found
            </h3>
            <p className="text-gray-500 text-sm">Please check back later ✨</p>
          </div>
        )}

        {/* ✅ PAGINATION */}
        {!loading && total > limit && (
          <PaginationComponent
            page={page}
            limit={limit}
            total={total}
            onPageChange={setPage}
          />
        )}
      </section>

      <style>{`
        .marquee-container { overflow:hidden; white-space:nowrap }
        .marquee-content { display:inline-flex; animation:marquee 18s linear infinite }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </div>
  );
};

export default Blog;
