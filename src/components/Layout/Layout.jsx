import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Navbar */}
      <Navbar />

      {/* Dynamic Page Content */}
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <a
        href="https://wa.me/9539070845" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50 transition-transform transform hover:scale-110"
      >
        <FaWhatsapp className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Layout;
