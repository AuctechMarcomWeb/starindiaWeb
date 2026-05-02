import React from 'react'
import Navbar from './components/common/Navbar'
import AppRoutes from './routes/AppRoutes'
import Footer from './components/common/Footer'
import CustomCursor from './components/common/CustomCursor'
import ScrollToTop from "./components/common/ScrollToTop";
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <>
    <Toaster />
      <CustomCursor />
       <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App
