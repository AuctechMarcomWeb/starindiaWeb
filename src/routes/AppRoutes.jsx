import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import Notfound from "../pages/Notfound";
import Gallery from "../pages/Gallery";
import Ongrid from "../features/services/Ongrid";
import Offgrid from "../features/services/Offgrid";
import Hybrid from "../features/services/Hybrid";
import Atta from "../features/services/Atta";
import Solarpump from "../features/services/Solarpump";
import BlogDetails from "../pages/BlogDetails";



const AppRoutes = () => {
  return (
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
  );
};

export default AppRoutes;
