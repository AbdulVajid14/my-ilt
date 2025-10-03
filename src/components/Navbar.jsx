import React, { useState } from "react";
import { FaChevronDown, FaPhone, FaUser } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logoSrc = "/images/logo.jpg";
  const googlePlaySrc =
    "/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg";
  const appStoreSrc =
    "/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg";

  return (
    <nav className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={logoSrc}
            alt="Internet Leads Training Logo"
            className="h-12 md:h-16"
          />
        </div>

        {/* Course Info (hidden on mobile) */}
        <div className="hidden lg:flex flex-col text-right text-gray-700 text-sm px-4">
          <span className="mb-1">
            Next Professional Diploma Marketing Course : Start Date:{" "}
            <b className="font-bold">Day Course</b>: Starts 25th March
          </span>
          <span className="text-sm">
            <b className="font-bold">Evening Course</b>: Starts 21st August
            (Thursday, 6:30pm - 9:30pm){" "}
            <b className="text-green-600">Enrol Now!</b>
          </span>
        </div>

        {/* App Links */}
        <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
          <a href="#" className="h-10 md:h-12">
            <img src={googlePlaySrc} alt="Google Play" className="h-full" />
          </a>
          <a href="#" className="h-10 md:h-12">
            <img src={appStoreSrc} alt="App Store" className="h-full" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-6 text-white text-base font-semibold">
            <li>
              <a href="#" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-200">
                About Us
              </a>
            </li>
            {/* Dropdown */}
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-gray-200">
                Courses <FaChevronDown className="ml-1 text-xs" />
              </a>
              <div className="absolute left-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg hidden group-hover:block z-10">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  SEO Mastery
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Social Media Marketing
                </a>
              </div>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-gray-200">
                Program Modes <FaChevronDown className="ml-1 text-xs" />
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center hover:text-gray-200">
                Certificates <FaChevronDown className="ml-1 text-xs" />
              </a>
            </li>
          </ul>

          {/* Contact + Sign In */}
          <div className="hidden lg:flex items-center text-white space-x-6">
            <a href="#" className="flex items-center font-semibold hover:text-gray-200">
              <FaPhone className="mr-2" /> Contact Us
            </a>
            <a href="#" className="flex items-center font-semibold hover:text-gray-200">
              <FaUser className="mr-2" /> Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-green-700 text-white px-4 py-4 space-y-4">
          <a href="#" className="block hover:text-gray-200">
            Home
          </a>
          <a href="#" className="block hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="block hover:text-gray-200">
            Courses
          </a>
          <a href="#" className="block hover:text-gray-200">
            Program Modes
          </a>
          <a href="#" className="block hover:text-gray-200">
            Certificates
          </a>
          <a href="#" className="block hover:text-gray-200">
            Contact Us
          </a>
          <a href="#" className="block hover:text-gray-200">
            Sign In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
