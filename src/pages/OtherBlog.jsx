import React, { useEffect, useState } from "react";
import { Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { getRequest } from "../Helpers";

const OtherBlog = ({ currentBlogId }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const fetchOtherBlogs = async () => {
    setLoading(true);

    try {
      const res = await getRequest("blogs");

      const filtered =
        res?.data?.data?.blogs
          ?.filter((b) => b.url !== currentBlogId)
          ?.slice(0, 4) || [];

      setBlogs(filtered);
    } catch (err) {
      console.error(err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchOtherBlogs();
  }, [currentBlogId]);

  const OtherBlogsSkeleton = () => {
    return (
      <div className="space-y-5 animate-pulse">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="flex gap-3">
            <div className="w-20 h-16 bg-gray-200 rounded-lg"></div>

            <div className="flex-1 space-y-2">
              <div className="h-3 w-24 bg-gray-200 rounded"></div>
              <div className="h-4 w-full bg-gray-200 rounded"></div>
              <div className="h-4 w-5/6 bg-gray-200 rounded"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <aside className="lg:col-span-4">
      <div className="sticky top-24 bg-yellow-50 rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Other Blogs
        </h3>

        <div className="space-y-5">
          {/* Skeleton Loader */}
          {loading && <OtherBlogsSkeleton />}

          {/* Not Found */}
          {!loading && blogs.length === 0 && (
            <p className="text-sm text-gray-500 text-center">
              No other blogs found
            </p>
          )}

          {/* Blog List */}
          {!loading &&
            blogs.map((item) => (
              <div
                key={item._id}
                onClick={() => navigate(`/blog/${item?.url}`)}
                className="flex gap-3 cursor-pointer group"
              >
                <img
                  src={item.mainImage}
                  alt={item.heading}
                  className="w-20 h-16 object-cover rounded-lg"
                />

                <div>
                  <p className="text-xs text-gray-500 flex items-center gap-1 mb-1">
                    <Calendar size={12} />
                    {new Date(item.createdAt).toLocaleDateString("en-IN")}
                  </p>

                  <p
                    className="
              text-sm font-medium text-gray-800 leading-snug
              group-hover:text-red-600 transition
            "
                  >
                    {item.heading}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </aside>
  );
};

export default OtherBlog;
