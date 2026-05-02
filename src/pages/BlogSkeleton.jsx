import React from 'react'

const BlogSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    {/* Image Skeleton */}
    <div className="h-56 w-full bg-gray-200" />

    {/* Content */}
    <div className="p-6">
      <div className="flex gap-3 mb-3">
        <div className="h-3 w-20 bg-gray-200 rounded" />
        <div className="h-3 w-16 bg-gray-200 rounded" />
      </div>

      <div className="h-5 bg-gray-200 rounded w-3/4 mb-3" />
      <div className="h-5 bg-gray-200 rounded w-2/4 mb-4" />

      <div className="h-4 w-24 bg-gray-200 rounded" />
    </div>
  </div>
);

export default BlogSkeleton
