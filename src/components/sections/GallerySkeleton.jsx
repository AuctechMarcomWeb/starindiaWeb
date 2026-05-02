import React from 'react'

const GallerySkeleton = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[220px]">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="bg-gray-300 animate-pulse rounded-3xl h-[220px]"
      />
    ))}
  </div>
);


export default GallerySkeleton
