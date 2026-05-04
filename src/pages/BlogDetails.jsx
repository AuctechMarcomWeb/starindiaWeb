/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Clock,
  Calendar,
  Share2,
  Link2,
  Mail,
  
  X,
  Check,
} from "lucide-react";
import { Helmet } from "react-helmet";
import { noTokenGetRequest } from "../Helpers/index";
import "./suneditor-content.css";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import PageBanner from "../components/sections/PageBanner";
import { getRequest } from "../Helpers/index";
import OtherBlog from "./OtherBlog";
import MobileCTA from "../components/sections/MobileCTA";

const BlogDetail = ({ updateSignal }) => {
  const { url } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  // FETCH BLOG
  const fetchBlog = async () => {
    setLoading(true);
    try {
const res = await getRequest(`blogs/${url}`);
    setBlog(res?.data?.data?.blog);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, [url]);

  // COPY LINK
  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });

  const formatTime = (date) =>
    new Date(date).toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });

  // SKELETON
  const BlogSkeleton = () => (
    <div className="max-w-5xl mx-auto p-6 animate-pulse">
      <div className="h-72 bg-gray-200 rounded-2xl mb-6"></div>
      <div className="h-4 w-40 bg-gray-200 rounded mb-4"></div>
      <div className="h-4 w-32 bg-gray-200 rounded mb-6"></div>
      <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
      <div className="space-y-3">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <PageBanner />
        {/* <BlogSkeleton /> */}
      </div>
    );
  }

  if (!blog && !loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>

        <p className="text-gray-600 mb-8 max-w-md">
          The blog you are looking for does not exist or has been removed.
        </p>

        <button
          onClick={() => navigate("/")}
          className="px-6 py-3 rounded-xl bg-[#008235] text-white font-semibold hover:bg-green-700 transition-all shadow-lg"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* ✅ Page Banner */}
        <PageBanner />

        {/* BLOG SECTION */}
        <section className="w-full md:w-[90%] 2xl:w-[80%] mx-auto px-4 sm:px-6 py-16">
          <Helmet>
            <title>{blog?.seoTitle}</title>
            <meta name="keywords" content={blog?.metaKeywords} />
            <meta name="description" content={blog?.shortDescription} />
          </Helmet>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* LEFT */}
            <div className="lg:col-span-8">
              <img
                src={blog?.mainImage}
                alt={blog?.heading || "Blog post image"}
                className="w-full h-[260px] sm:h-[360px] lg:h-[420px] object-cover rounded-2xl mb-6"
                loading="eager"
                fetchpriority="high"
              />

              {/* META */}
              <div className="flex flex-wrap items-center gap-5 text-gray-500 text-sm mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={16} />
                  {formatDate(blog?.createdAt)}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={16} />
                  {formatTime(blog?.createdAt)}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                {blog?.heading}
              </h1>

              <div
                className="sun-editor-editable"
                dangerouslySetInnerHTML={{ __html: blog?.details }}
              />
            </div>

            {/* RIGHT */}
            <OtherBlog currentBlogId={blog?.url} />
          </div>

          {/* SHARE */}
          <div className="mt-12 pt-8 border-t border-green-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <h3
                onClick={() => setIsShareOpen(!isShareOpen)}
                className="flex items-center gap-2 cursor-pointer font-bold text-gray-800"
              >
                <div className="w-10 h-10 rounded-full border border-[#008235] flex items-center justify-center">
                  <Share2 className="text-[#008235]" />
                </div>
                Share this article
              </h3>
            </div>

            {/* MODAL */}
            {isShareOpen && (
              <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                <div className="bg-white rounded-2xl p-6 w-full max-w-md">
                  <div className="flex justify-between mb-4">
                    <h3 className="text-xl font-bold">Share Article</h3>
                    <X
                      className="cursor-pointer"
                      onClick={() => setIsShareOpen(false)}
                    />
                  </div>

                  {/* COPY */}
                  <div className="flex gap-2 mb-4">
                    <input
                      value={window.location.href}
                      readOnly
                      className="flex-1 border px-3 py-2 rounded-lg"
                    />
                    <button
                      onClick={handleCopyLink}
                      className="bg-[#008235] text-white px-4 rounded-lg"
                    >
                      {copySuccess ? <Check /> : <Link2 />}
                    </button>
                  </div>

                  {/* SOCIAL */}
                  <div className="flex gap-3">
                    {[FaFacebook, FaTwitter, FaLinkedin, Mail].map(
                      (Icon, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 flex items-center justify-center border border-[#008235] rounded-full hover:bg-[#008235] group cursor-pointer"
                        >
                          <Icon className="text-[#008235] group-hover:text-white" />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
        <MobileCTA />
      </div>
    </>
  );
};

export default BlogDetail;
