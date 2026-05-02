import React from 'react'

const HeroSkeleton = () => {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* Background Skeleton */}
      <div className="absolute inset-0 bg-gray-300 animate-pulse" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center px-4 w-full max-w-5xl">
          {/* Small Title */}
          <div className="h-4 w-40 mx-auto mb-4 bg-gray-400 rounded animate-pulse" />

          {/* Main Heading */}
          <div className="space-y-3 mb-6">
            <div className="h-6 md:h-10 w-3/4 mx-auto bg-gray-400 rounded animate-pulse" />
            <div className="h-6 md:h-10 w-2/4 mx-auto bg-gray-400 rounded animate-pulse" />
          </div>

          {/* Description */}
          <div className="space-y-2 mb-8">
            <div className="h-4 w-3/4 mx-auto bg-gray-400 rounded animate-pulse" />
            <div className="h-4 w-2/3 mx-auto bg-gray-400 rounded animate-pulse" />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="h-10 w-40 bg-gray-400 rounded animate-pulse" />
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gray-400 rounded-full animate-pulse" />
              <div className="h-4 w-24 bg-gray-400 rounded animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default HeroSkeleton
