import React from 'react'


// Skeleton Card
const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-md animate-pulse">
    <div className="flex gap-3 mb-4">
      <div className="w-11 h-11 rounded-full bg-gray-200 flex-shrink-0" />
      <div className="flex-1 space-y-2 pt-1">
        <div className="h-3.5 bg-gray-200 rounded-full w-3/4" />
        <div className="h-3 bg-gray-200 rounded-full w-1/2" />
      </div>
    </div>
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 bg-gray-200 rounded" />
      ))}
    </div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-200 rounded-full" />
      <div className="h-3 bg-gray-200 rounded-full w-5/6" />
      <div className="h-3 bg-gray-200 rounded-full w-4/6" />
    </div>
  </div>
);

const TestimonialSkeleton = () => {
  return (
    <div className="relative">
      {/* Fake slider */}
      <div className="flex gap-4 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex-1 min-w-[280px] sm:min-w-[300px] lg:min-w-0"
          >
            <SkeletonCard />
          </div>
        ))}
      </div>

      {/* Fake dots */}
      <div className="flex justify-center gap-2 mt-6">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-3 h-3 bg-gray-300 rounded-full animate-pulse"
          />
        ))}
      </div>
    </div>
  );
};


export default TestimonialSkeleton
