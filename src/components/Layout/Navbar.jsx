import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaBlog,
  FaYoutube,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showProgramModesDropdown, setShowProgramModesDropdown] =
    useState(false);
  const [showCertificatesDropdown, setShowCertificatesDropdown] =
    useState(false);
  const [showTrainersDropdown, setShowTrainersDropdown] = useState(false);
  const [showMobileCoursesDropdown, setShowMobileCoursesDropdown] =
    useState(false);
  const [showMobileProgramModesDropdown, setShowMobileProgramModesDropdown] =
    useState(false);
  const [showMobileCertificatesDropdown, setShowMobileCertificatesDropdown] =
    useState(false);
  const [showMobileTrainersDropdown, setShowMobileTrainersDropdown] =
    useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [closeTimeoutProgram, setCloseTimeoutProgram] = useState(null);
  const [closeTimeoutCert, setCloseTimeoutCert] = useState(null);
  const [closeTimeoutTrainers, setCloseTimeoutTrainers] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logoSrc = "/images/ilt logo 2.png";
  const googlePlaySrc =
    "/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg";
  const appStoreSrc =
    "/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg";

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  const fetchCourses = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/courses?status=1&limit=100&offset=0`
      );

      const fetchedCourses = res.data.data
        .filter((course) => course.category_id !== 4)
        .map((course) => ({
          id: course.id,
          label: course.name,
          slug: course.slug || course.name.toLowerCase().replace(/\s+/g, "-"),
        }));

      setCourses(fetchedCourses);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Desktop Dropdown Handlers
  const handleMouseEnterCourses = () => {
    if (closeTimeout) clearTimeout(closeTimeout);
    setShowCoursesDropdown(true);
  };

  const handleMouseLeaveCourses = () => {
    const timeout = setTimeout(() => setShowCoursesDropdown(false));
    setCloseTimeout(timeout);
  };

  const handleMouseEnterProgramModes = () => {
    if (closeTimeoutProgram) clearTimeout(closeTimeoutProgram);
    setShowProgramModesDropdown(true);
  };

  const handleMouseLeaveProgramModes = () => {
    const timeout = setTimeout(() => setShowProgramModesDropdown(false));
    setCloseTimeoutProgram(timeout);
  };

  const handleMouseEnterCertificates = () => {
    if (closeTimeoutCert) clearTimeout(closeTimeoutCert);
    setShowCertificatesDropdown(true);
  };

  const handleMouseLeaveCertificates = () => {
    const timeout = setTimeout(() => setShowCertificatesDropdown(false));
    setCloseTimeoutCert(timeout);
  };

  const handleMouseEnterTrainers = () => {
    if (closeTimeoutTrainers) clearTimeout(closeTimeoutTrainers);
    setShowTrainersDropdown(true);
  };

  const handleMouseLeaveTrainers = () => {
    const timeout = setTimeout(() => setShowTrainersDropdown(false));
    setCloseTimeoutTrainers(timeout);
  };

  // Mobile Toggles
  const toggleMobileCourses = () =>
    setShowMobileCoursesDropdown(!showMobileCoursesDropdown);
  const toggleMobileProgramModes = () =>
    setShowMobileProgramModesDropdown(!showMobileProgramModesDropdown);
  const toggleMobileCertificates = () =>
    setShowMobileCertificatesDropdown(!showMobileCertificatesDropdown);
  const toggleMobileTrainers = () =>
    setShowMobileTrainersDropdown(!showMobileTrainersDropdown);

  const closeMobileMenu = () => {
    setShowMobileCoursesDropdown(false);
    setShowMobileProgramModesDropdown(false);
    setShowMobileCertificatesDropdown(false);
    setShowMobileTrainersDropdown(false);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full shadow-lg sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-6">
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logoSrc}
              alt="Internet Leads Training Logo"
              loading="lazy"
              width="150"
              height="60"
              className="w-[150px] h-[60px] object-contain"
            />
          </Link>
        </div>

        <div className="hidden lg:flex flex-col text-right text-gray-900 text-sm px-4">
          <span className="mb-1">
            Next Professional <b>Diploma Marketing Course Starts on Monday</b>{" "}
            <br />
            Course FEE (Online) INR 40,000 & Offline INR 60,000.
            <b className="text-green-900">Enrol Now!</b>
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
          <a
            href="https://play.google.com/store/apps/details?id=com.mindlabs.ilt"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 md:h-12"
          >
            <img src={googlePlaySrc} alt="Google Play" className="h-full" />
          </a>
          <a
            href="https://apps.apple.com/in/app/internet-leads-training-ilt/id1548244062"
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 md:h-12"
          >
            <img src={appStoreSrc} alt="App Store" className="h-full" />
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/internetleadstraining/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-green-900 transition"
          >
            <FaFacebookF size={20} className="w-5 h-5" />
          </a>

          <a
            href="https://www.instagram.com/internet_leads_training/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-green-900 transition"
          >
            <FaInstagram size={20} className="w-5 h-5" />
          </a>

          <a
            href="https://www.linkedin.com/company/internet-leads-training/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-green-900 transition"
          >
            <FaLinkedinIn size={20} className="w-5 h-5" />
          </a>
          <a
            href="https://www.youtube.com/c/InternetLeadsTraining/featured"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="hover:text-green-900 transition"
          >
            <FaYoutube size={20} className="w-5 h-5" />
          </a>

          <Link
            to="/blog"
            aria-label="Blog"
            className="hover:text-green-900 transition"
          >
            <FaBlog size={20} className="w-5 h-5" />
          </Link>
        </div>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-900 text-2xl relative z-50"
            aria-label="Open menu"
            aria-expanded="false"
          >
            <motion.div
              animate={{ rotate: menuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {menuOpen ? <HiX /> : <HiMenu />}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <ul className="hidden lg:flex items-center space-x-8 text-white text-base font-semibold">
            <li>
              <Link to="/" className="transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition">
                About Us
              </Link>
            </li>
            {/* Courses Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnterCourses}
              onMouseLeave={handleMouseLeaveCourses}
            >
              <a
                href="/courses"
                className="flex items-center transition cursor-pointer"
              >
                Courses <FaChevronDown className="ml-1 text-xs" />
              </a>

              <AnimatePresence>
                {showCoursesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white rounded-xl shadow-2xl overflow-hidden z-50 border border-gray-100"
                    style={{
                      width:
                        courses.length <= 8
                          ? "280px"
                          : courses.length <= 16
                          ? "560px"
                          : "840px",
                    }}
                  >
                    <div className="p-3">
                      {loading ? (
                        <p className="text-gray-900 text-center py-2 text-sm">
                          Loading courses...
                        </p>
                      ) : error ? (
                        <p className="text-red-900 text-center py-2 text-sm">
                          Error loading courses
                        </p>
                      ) : courses.length === 0 ? (
                        <p className="text-gray-900 text-center py-2 text-sm">
                          No courses available
                        </p>
                      ) : (
                        <div
                          className={`grid gap-2 ${
                            courses.length > 16 ? "pl-12" : ""
                          }`}
                          style={{
                            gridTemplateColumns:
                              courses.length <= 8
                                ? "1fr"
                                : courses.length <= 16
                                ? "repeat(2, 1fr)"
                                : "repeat(3, 1fr)",
                          }}
                        >
                          {courses.map((course) => (
                            <motion.div
                              key={course.id}
                              whileHover={{ x: 6 }}
                              transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 18,
                              }}
                            >
                              <Link
                                to={`/courses/${course.slug}`}
                                className="block px-3 py-2 text-gray-900 text-sm font-medium rounded-md transition-all duration-300 hover:bg-green-50 hover:text-green-900 relative overflow-hidden group"
                              >
                                <span className="relative z-10">
                                  {course.label}
                                </span>
                                <span className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 transition-all duration-300 group-hover:w-full opacity-10"></span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Program Modes */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnterProgramModes}
              onMouseLeave={handleMouseLeaveProgramModes}
            >
              <a
                href="/mode"
                className="flex items-center transition cursor-pointer"
              >
                Program Modes <FaChevronDown className="ml-1 text-xs" />
              </a>
              <AnimatePresence>
                {showProgramModesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 mt-4 w-64 bg-white rounded-xl shadow-2xl z-50 border border-gray-100 overflow-hidden"
                  >
                    <div className="p-3">
                      {[
                        { label: "Online", id: "online" },
                        { label: "In-House Training", id: "inhouse" },
                        { label: "Individual", id: "individual" },
                        { label: "Private SEO Training", id: "privateseo" },
                        { label: "Corporate", id: "corporate" },
                        { label: "Workshop", id: "workshop" },
                      ].map((mode) => (
                        <motion.div
                          key={mode.id}
                          whileHover={{ x: 8 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          <Link
                            to={`/mode?mode=${mode.id}`}
                            className="block px-5 py-3 text-gray-900 font-medium rounded-lg transition-all duration-300 hover:bg-green-50 hover:text-green-900 relative overflow-hidden group"
                          >
                            <span className="relative z-10">{mode.label}</span>
                            <span className="absolute left-0 top-0 bottom-0 w-1 bg-green-600 transition-all duration-300 group-hover:w-full opacity-10"></span>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
            {/* placement */}
            <li className="relative">
              <Link
                to="/placements"
                className="flex items-center transition cursor-pointer"
              >
                Placement
              </Link>
            </li>
            {/* events */}
            <li className="relative">
              <Link
                to="/events"
                className="flex items-center transition cursor-pointer"
              >
                Life at ILT
              </Link>
            </li>
            {/* Trainers */}
            <li className="relative">
              <Link
                to="/hire-digital-marketers-in-india"
                className="flex items-center transition cursor-pointer"
              >
                Hire Digital Marketers
              </Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center text-white">
            <Link
              to="/contact"
              className="flex items-center font-bold transition"
            >
              <FaPhone className="mr-2 rotate-90" /> Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-green-900 text-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl"
                  aria-label="Open menu"
                  aria-expanded="false"
                >
                  <motion.div
                    animate={{ rotate: menuOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiX />
                  </motion.div>
                </button>
              </div>

              <div className="px-6 pb-6 space-y-4">
                <Link
                  to="/"
                  className="block text-lg font-medium transition"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="block text-lg font-medium transition"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                {/* Mobile Courses Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={toggleMobileCourses}
                    className="flex items-center justify-between w-full text-left text-lg font-medium transition"
                  >
                    Courses
                    <motion.div
                      animate={{ rotate: showMobileCoursesDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="ml-2 text-sm" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showMobileCoursesDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pl-4 space-y-1 overflow-hidden"
                        style={{ maxHeight: "50vh", overflowY: "auto" }}
                      >
                        {loading ? (
                          <div className="py-2 text-sm text-gray-900">
                            Loading courses...
                          </div>
                        ) : error ? (
                          <div className="py-2 text-sm text-red-900">
                            Error loading courses
                          </div>
                        ) : courses.length === 0 ? (
                          <div className="py-2 text-sm text-gray-900">
                            No courses available
                          </div>
                        ) : (
                          courses.map((course) => (
                            <Link
                              key={course.id}
                              to={`/courses/${course.slug}`}
                              className="block py-2 text-sm transition pl-2 border-l border-emerald-900"
                              onClick={closeMobileMenu}
                            >
                              {course.label}
                            </Link>
                          ))
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Program Modes Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={toggleMobileProgramModes}
                    className="flex items-center justify-between w-full text-left text-lg font-medium transition"
                  >
                    Program Modes
                    <motion.div
                      animate={{
                        rotate: showMobileProgramModesDropdown ? 180 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="ml-2 text-sm" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showMobileProgramModesDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        {[
                          { label: "Online", id: "online" },
                          { label: "In-House Training", id: "inhouse" },
                          { label: "Individual", id: "individual" },
                          { label: "Private SEO Training", id: "privateseo" },
                          { label: "Corporate", id: "corporate" },
                          { label: "Workshop", id: "workshop" },
                        ].map((mode) => (
                          <Link
                            key={mode.id}
                            to={`/mode?mode=${mode.id}`}
                            className="block py-2 text-sm transition pl-2 border-l border-emerald-900"
                            onClick={closeMobileMenu}
                          >
                            {mode.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile placement */}
                <div className="space-y-2">
                  <Link
                    to="/placements"
                    className="flex items-center justify-between w-full text-left text-lg font-medium transition"
                    onClick={closeMobileMenu}
                  >
                    Placement
                  </Link>
                </div>
                {/* Mobile events */}
                <div className="space-y-2">
                  <Link
                    to="/events"
                    className="flex items-center justify-between w-full text-left text-lg font-medium transition"
                    onClick={closeMobileMenu}
                  >
                    Life at ILT
                  </Link>
                </div>
                {/* Mobile Trainers Dropdown */}
                <div className="space-y-2">
                  <Link
                    to="/hire-digital-marketers-in-india"
                    className="flex items-center justify-between w-full text-left text-lg font-medium transition"
                    onClick={closeMobileMenu}
                  >
                    Hire Digital Marketers
                  </Link>
                </div>

                <Link
                  to="/contact"
                  className="block text-lg font-medium transition"
                  onClick={closeMobileMenu}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
