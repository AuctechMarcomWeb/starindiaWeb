/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/set-state-in-effect */
import React, { useEffect, useState } from 'react'
import Navbar from './components/common/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'
import CustomCursor from './components/common/CustomCursor'
import ScrollToTop from "./components/common/ScrollToTop";
import { Toaster } from 'react-hot-toast'
import { useLocation } from 'react-router-dom'
import Preloader from './components/common/Preloader'

const App = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);

      const timer = setTimeout(() => {
        setLoading(false);
      }, 300); // reduced for better performance score

      return () => clearTimeout(timer);
    }, [location]);
  return (
    <>
    <Toaster />
      <CustomCursor />
       <ScrollToTop />
      {loading && <Preloader />}
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App
