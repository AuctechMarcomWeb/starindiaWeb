import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy load all pages for code splitting (improves initial load performance)
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));
const Blog = lazy(() => import("../pages/Blog"));
const Notfound = lazy(() => import("../pages/Notfound"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Ongrid = lazy(() => import("../features/services/Ongrid"));
const Offgrid = lazy(() => import("../features/services/Offgrid"));
const Hybrid = lazy(() => import("../features/services/Hybrid"));
const Atta = lazy(() => import("../features/services/Atta"));
const Solarpump = lazy(() => import("../features/services/Solarpump"));
const BlogDetails = lazy(() => import("../pages/BlogDetails"));

// Minimal fallback - preloader already handles this in App.jsx
const PageFallback = () => (
  <div style={{ minHeight: "60vh" }} aria-hidden="true" />
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />

        {/* Blog */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:url" element={<BlogDetails />} />

        {/* Services */}
        <Route path="/services">
          <Route path="on-grid" element={<Ongrid />} />
          <Route path="off-grid" element={<Offgrid />} />
          <Route path="hybrid" element={<Hybrid />} />
          <Route path="atta-chakki" element={<Atta />} />
          <Route path="pump" element={<Solarpump />} />
        </Route>

        {/* 404 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
