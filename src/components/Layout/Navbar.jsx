// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import {
//   FaChevronDown,
//   FaPhone,
//   FaFacebookF,
//   FaTwitter,
//   FaInstagram,
// } from "react-icons/fa";
// import { HiMenu, HiX } from "react-icons/hi";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
//   const [showProgramModesDropdown, setShowProgramModesDropdown] =
//     useState(false);
//   const [showCertificatesDropdown, setShowCertificatesDropdown] =
//     useState(false);
//   const [showTrainersDropdown, setShowTrainersDropdown] = useState(false);
//   const [showMobileCoursesDropdown, setShowMobileCoursesDropdown] =
//     useState(false);
//   const [showMobileProgramModesDropdown, setShowMobileProgramModesDropdown] =
//     useState(false);
//   const [showMobileCertificatesDropdown, setShowMobileCertificatesDropdown] =
//     useState(false);
//   const [showMobileTrainersDropdown, setShowMobileTrainersDropdown] =
//     useState(false);
//   const [closeTimeout, setCloseTimeout] = useState(null);
//   const [closeTimeoutProgram, setCloseTimeoutProgram] = useState(null);
//   const [closeTimeoutCert, setCloseTimeoutCert] = useState(null);
//   const [closeTimeoutTrainers, setCloseTimeoutTrainers] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const logoSrc = "/images/ilt logo 2.png";
//   const googlePlaySrc =
//     "/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg";
//   const appStoreSrc =
//     "/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg";

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/courses?status=1&limit=100&offset=0`
//       );
//       const fetchedCourses = res.data.data.map((course) => ({
//         id: course.id,
//         label: course.name,
//         slug: course.slug || course.name.toLowerCase().replace(/\s+/g, "-"),
//       }));
//       setCourses(fetchedCourses);
//     } catch (err) {
//       setError(err.message);
//       console.error("Error fetching courses:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // ===== Courses Dropdown Handlers =====
//   const handleMouseEnterCourses = () => {
//     if (closeTimeout) {
//       clearTimeout(closeTimeout);
//       setCloseTimeout(null);
//     }
//     setShowCoursesDropdown(true);
//   };

//   const handleMouseLeaveCourses = () => {
//     const timeout = setTimeout(() => {
//       setShowCoursesDropdown(false);
//     }, 250);
//     setCloseTimeout(timeout);
//   };

//   // ===== Program Modes Dropdown Handlers =====
//   const handleMouseEnterProgramModes = () => {
//     if (closeTimeoutProgram) {
//       clearTimeout(closeTimeoutProgram);
//       setCloseTimeoutProgram(null);
//     }
//     setShowProgramModesDropdown(true);
//   };

//   const handleMouseLeaveProgramModes = () => {
//     const timeout = setTimeout(() => {
//       setShowProgramModesDropdown(false);
//     }, 250);
//     setCloseTimeoutProgram(timeout);
//   };

//   // ===== Certificates Dropdown Handlers =====
//   const handleMouseEnterCertificates = () => {
//     if (closeTimeoutCert) {
//       clearTimeout(closeTimeoutCert);
//       setCloseTimeoutCert(null);
//     }
//     setShowCertificatesDropdown(true);
//   };

//   const handleMouseLeaveCertificates = () => {
//     const timeout = setTimeout(() => {
//       setShowCertificatesDropdown(false);
//     }, 250);
//     setCloseTimeoutCert(timeout);
//   };

//   // ===== Trainers Dropdown Handlers =====
//   const handleMouseEnterTrainers = () => {
//     if (closeTimeoutTrainers) {
//       clearTimeout(closeTimeoutTrainers);
//       setCloseTimeoutTrainers(null);
//     }
//     setShowTrainersDropdown(true);
//   };

//   const handleMouseLeaveTrainers = () => {
//     const timeout = setTimeout(() => {
//       setShowTrainersDropdown(false);
//     }, 250);
//     setCloseTimeoutTrainers(timeout);
//   };

//   // ===== Mobile Dropdown Toggles =====
//   const toggleMobileCourses = () => {
//     setShowMobileCoursesDropdown(!showMobileCoursesDropdown);
//   };

//   const toggleMobileProgramModes = () => {
//     setShowMobileProgramModesDropdown(!showMobileProgramModesDropdown);
//   };

//   const toggleMobileCertificates = () => {
//     setShowMobileCertificatesDropdown(!showMobileCertificatesDropdown);
//   };

//   const toggleMobileTrainers = () => {
//     setShowMobileTrainersDropdown(!showMobileTrainersDropdown);
//   };

//   const closeMobileMenu = () => {
//     setShowMobileCoursesDropdown(false);
//     setShowMobileProgramModesDropdown(false);
//     setShowMobileCertificatesDropdown(false);
//     setShowMobileTrainersDropdown(false);
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="w-full shadow-md sticky top-0 z-50 bg-white">
//       {/* Top Bar */}
//       <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-6">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Link to="/">
//             <img
//               src={logoSrc}
//               alt="Internet Leads Training Logo"
//               className="h-12 md:h-16 cursor-pointer"
//             />
//           </Link>
//         </div>

//         {/* Course Info (hidden on mobile) */}
//         <div className="hidden lg:flex flex-col text-right text-gray-700 text-sm px-4">
//           <span className="mb-1">
//             Next Professional Diploma Marketing Course : Start Date:{" "}
//             <b className="font-bold">Day Course</b>: Starts 25th March
//           </span>
//           <span className="text-sm">
//             <b className="font-bold">Evening Course</b>: Starts 21st August
//             (Thursday, 6:30pm - 9:30pm){" "}
//             <b className="text-green-600">Enrol Now!</b>
//           </span>
//         </div>

//         {/* App Links */}
//         <div className="hidden md:flex items-center space-x-2 flex-shrink-0">
//           <a
//             href="https://play.google.com/store/apps/details?id=com.mindlabs.ilt"
//             className="h-10 md:h-12"
//           >
//             <img src={googlePlaySrc} alt="Google Play" className="h-full" />
//           </a>
//           <a
//             href="https://apps.apple.com/in/app/internet-leads-training-ilt/id1548244062"
//             className="h-10 md:h-12"
//           >
//             <img src={appStoreSrc} alt="App Store" className="h-full" />
//           </a>
//         </div>
//         <div className="flex items-center space-x-4">
//           <a
//             href="https://www.facebook.com/internetleadstraining/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Facebook"
//             className="hover:text-green-300"
//           >
//             <FaFacebookF size={20} />
//           </a>

//           <a
//             href="https://www.twitter.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Twitter"
//             className="hover:text-green-300"
//           >
//             <FaTwitter size={20} />
//           </a>

//           <a
//             href="https://www.instagram.com/internet_leads_training/"
//             target="_blank"
//             rel="noopener noreferrer"
//             aria-label="Instagram"
//             className="hover:text-green-300"
//           >
//             <FaInstagram size={20} />
//           </a>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="lg:hidden">
//           <button
//             onClick={() => {
//               if (menuOpen) {
//                 setShowMobileCoursesDropdown(false);
//                 setShowMobileProgramModesDropdown(false);
//                 setShowMobileCertificatesDropdown(false);
//                 setShowMobileTrainersDropdown(false);
//               }
//               setMenuOpen(!menuOpen);
//             }}
//             className="text-gray-700 text-2xl"
//           >
//             {menuOpen ? <HiX /> : <HiMenu />}
//           </button>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="bg-green-700">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
//           {/* Desktop Nav */}
//           <ul className="hidden lg:flex items-center space-x-6 text-white text-base font-semibold">
//             <li>
//               <Link to="/" className="hover:text-gray-200">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-gray-200">
//                 About Us
//               </Link>
//             </li>

//             {/* Courses Dropdown */}
//             {/* <li
//               className="group relative"
//               onMouseEnter={handleMouseEnterCourses}
//               onMouseLeave={handleMouseLeaveCourses}
//             >
//               <a
//                 href="/courses"
//                 className="flex items-center hover:text-gray-200"
//               >
//                 Courses <FaChevronDown className="ml-1 text-xs" />
//               </a>

//               <AnimatePresence>
//                 {showCoursesDropdown && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95, y: -10 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="absolute left-1/2 mt-2 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
//                     style={{
//                       minWidth: "600px",
//                       maxWidth: "800px",
//                       padding: "10px 0",
//                     }}
//                   >
//                     {loading ? (
//                       <div className="px-4 py-2 text-gray-600">
//                         Loading courses...
//                       </div>
//                     ) : error ? (
//                       <div className="px-4 py-2 text-red-600">
//                         Error loading courses
//                       </div>
//                     ) : courses.length === 0 ? (
//                       <div className="px-4 py-2 text-gray-600">
//                         No courses available
//                       </div>
//                     ) : (
//                       <div
//                         className="grid gap-y-1 gap-x-4 px-4"
//                         style={{
//                           display: "grid",
//                           gridTemplateColumns: `repeat(${Math.ceil(
//                             courses.length / 8
//                           )}, minmax(150px, 1fr))`,
//                         }}
//                       >
//                         {courses.map((course) => (
//                           <Link
//                             key={course.id}
//                             to={`/courses/${course.slug}`}
//                             className="block py-2 text-sm hover:bg-gray-100 rounded px-2"
//                           >
//                             {course.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li> */}
//             <li
//               className="group relative"
//               onMouseEnter={handleMouseEnterCourses}
//               onMouseLeave={handleMouseLeaveCourses}
//             >
//               <a
//                 href="/courses"
//                 className="flex items-center hover:text-gray-200"
//               >
//                 Courses <FaChevronDown className="ml-1 text-xs" />
//               </a>

//               <AnimatePresence>
//                 {showCoursesDropdown && (
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95, y: -10 }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="absolute left-1/2 mt-2 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
//                     style={{
//                       // Dynamic width based on number of courses
//                       width:
//                         courses.length <= 8
//                           ? "250px"
//                           : courses.length <= 16
//                           ? "500px"
//                           : "750px",
//                       padding: "10px 0",
//                     }}
//                   >
//                     {loading ? (
//                       <div className="px-4 py-2 text-gray-600">
//                         Loading courses...
//                       </div>
//                     ) : error ? (
//                       <div className="px-4 py-2 text-red-600">
//                         Error loading courses
//                       </div>
//                     ) : courses.length === 0 ? (
//                       <div className="px-4 py-2 text-gray-600">
//                         No courses available
//                       </div>
//                     ) : (
//                       <div
//                         className="grid gap-y-1 gap-x-4 px-4 pl-10"
//                         style={{
//                           // 1 column if <= 8, 2 columns if <= 16, 3 columns if >16
//                           gridTemplateColumns:
//                             courses.length <= 8
//                               ? "repeat(1, minmax(150px, 1fr))"
//                               : courses.length <= 16
//                               ? "repeat(2, minmax(150px, 1fr))"
//                               : "repeat(3, minmax(150px, 1fr))",
//                         }}
//                       >
//                         {courses.map((course) => (
//                           <Link
//                             key={course.id}
//                             to={`/courses/${course.slug}`}
//                             className="block py-2 text-sm hover:bg-gray-100 rounded px-2"
//                           >
//                             {course.label}
//                           </Link>
//                         ))}
//                       </div>
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>

//             {/* Program Modes Dropdown */}
//             <li
//               className="group relative"
//               onMouseEnter={handleMouseEnterProgramModes}
//               onMouseLeave={handleMouseLeaveProgramModes}
//             >
//               <a href="/mode" className="flex items-center hover:text-gray-200">
//                 Program Modes <FaChevronDown className="ml-1 text-xs" />
//               </a>
//               <AnimatePresence>
//                 {showProgramModesDropdown && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.95,
//                       y: -10,
//                       transformOrigin: "top left",
//                     }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="absolute left-1/2 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
//                   >
//                     {[
//                       { label: "Online", id: "online" },
//                       { label: "In-House Trainingline", id: "inhouse" },
//                       { label: "Individual", id: "individual" },
//                       { label: "Private SEO Training", id: "privateseo" },
//                       { label: "Corporate", id: "corporate" },
//                       { label: "Workshop", id: "workshop" },
//                     ].map((mode) => (
//                       <Link
//                         key={mode.id}
//                         to={`/mode?mode=${mode.id}`}
//                         className="block px-4 py-2 hover:bg-gray-100"
//                       >
//                         {mode.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>

//             {/* Certificates Dropdown */}
//             <li
//               className="group relative"
//               onMouseEnter={handleMouseEnterCertificates}
//               onMouseLeave={handleMouseLeaveCertificates}
//             >
//               <a href="#" className="flex items-center hover:text-gray-200">
//                 Certificates <FaChevronDown className="ml-1 text-xs" />
//               </a>
//               <AnimatePresence>
//                 {showCertificatesDropdown && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.95,
//                       y: -10,
//                       transformOrigin: "top left",
//                     }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="absolute left-1/2 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
//                   >
//                     <Link
//                       to="/certificate"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Google Certificate
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>

//             {/* Trainers Dropdown */}
//             <li
//               className="group relative"
//               onMouseEnter={handleMouseEnterTrainers}
//               onMouseLeave={handleMouseLeaveTrainers}
//             >
//               <a href="#" className="flex items-center hover:text-gray-200">
//                 Trainers <FaChevronDown className="ml-1 text-xs" />
//               </a>
//               <AnimatePresence>
//                 {showTrainersDropdown && (
//                   <motion.div
//                     initial={{
//                       opacity: 0,
//                       scale: 0.95,
//                       y: -10,
//                       transformOrigin: "top left",
//                     }}
//                     animate={{ opacity: 1, scale: 1, y: 0 }}
//                     exit={{ opacity: 0, scale: 0.95, y: -10 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="absolute left-1/2 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
//                   >
//                     <Link
//                       to="/trainers"
//                       className="block px-4 py-2 hover:bg-gray-100"
//                     >
//                       Hire Trainers
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </li>
//           </ul>

//           {/* Contact + Sign In */}
//           <div className="hidden lg:flex items-center text-white space-x-6">
//             <Link
//               to="/contact"
//               className="flex items-center font-semibold hover:text-gray-200"
//             >
//               <FaPhone className="mr-2 rotate-90" /> Contact Us
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.div
//             initial={{ opacity: 0, height: 0 }}
//             animate={{ opacity: 1, height: "auto" }}
//             exit={{ opacity: 0, height: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="lg:hidden bg-green-700 text-white px-4 py-4 space-y-4 overflow-hidden"
//           >
//             <Link
//               to="/"
//               className="block hover:text-gray-200"
//               onClick={closeMobileMenu}
//             >
//               Home
//             </Link>
//             <Link
//               to="/about"
//               className="block hover:text-gray-200"
//               onClick={closeMobileMenu}
//             >
//               About Us
//             </Link>

//             {/* Mobile Courses Dropdown */}
//             <div className="space-y-2">
//               <button
//                 onClick={toggleMobileCourses}
//                 className="flex items-center justify-between w-full text-left hover:text-gray-200"
//               >
//                 <span>Courses</span>
//                 <FaChevronDown
//                   className={`ml-2 text-xs transition-transform duration-300 ${
//                     showMobileCoursesDropdown ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {showMobileCoursesDropdown && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="pl-4 space-y-2 border-l-2 border-green-500 overflow-hidden"
//                   >
//                     {loading ? (
//                       <div className="text-sm text-gray-200">
//                         Loading courses...
//                       </div>
//                     ) : error ? (
//                       <div className="text-sm text-red-200">
//                         Error loading courses
//                       </div>
//                     ) : courses.length === 0 ? (
//                       <div className="text-sm text-gray-200">
//                         No courses available
//                       </div>
//                     ) : (
//                       courses.map((course) => (
//                         <Link
//                           key={course.id}
//                           to={`/courses/${course.slug}`}
//                           className="block text-sm hover:text-gray-200"
//                           onClick={closeMobileMenu}
//                         >
//                           {course.label}
//                         </Link>
//                       ))
//                     )}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Mobile Program Modes Dropdown */}
//             <div className="space-y-2">
//               <button
//                 onClick={toggleMobileProgramModes}
//                 className="flex items-center justify-between w-full text-left hover:text-gray-200"
//               >
//                 <span>Program Modes</span>
//                 <FaChevronDown
//                   className={`ml-2 text-xs transition-transform duration-300 ${
//                     showMobileProgramModesDropdown ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {showMobileProgramModesDropdown && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="pl-4 space-y-2 border-l-2 border-green-500 overflow-hidden"
//                   >
//                     {[
//                       { label: "Online", id: "online" },
//                       { label: "In-House Trainingline", id: "inhouse" },
//                       { label: "Individual", id: "individual" },
//                       { label: "Private SEO Training", id: "privateseo" },
//                       { label: "Corporate", id: "corporate" },
//                       { label: "Workshop", id: "workshop" },
//                     ].map((mode) => (
//                       <Link
//                         key={mode.id}
//                         to={`/mode?mode=${mode.id}`}
//                         className="block text-sm hover:text-gray-200"
//                         onClick={closeMobileMenu}
//                       >
//                         {mode.label}
//                       </Link>
//                     ))}
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Mobile Certificates Dropdown */}
//             <div className="space-y-2">
//               <button
//                 onClick={toggleMobileCertificates}
//                 className="flex items-center justify-between w-full text-left hover:text-gray-200"
//               >
//                 <span>Certificates</span>
//                 <FaChevronDown
//                   className={`ml-2 text-xs transition-transform duration-300 ${
//                     showMobileCertificatesDropdown ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {showMobileCertificatesDropdown && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="pl-4 space-y-2 border-l-2 border-green-500 overflow-hidden"
//                   >
//                     <Link
//                       to="/certificate"
//                       className="block text-sm hover:text-gray-200"
//                       onClick={closeMobileMenu}
//                     >
//                       Google Certificate
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             {/* Mobile Trainers Dropdown */}
//             <div className="space-y-2">
//               <button
//                 onClick={toggleMobileTrainers}
//                 className="flex items-center justify-between w-full text-left hover:text-gray-200"
//               >
//                 <span>Trainers</span>
//                 <FaChevronDown
//                   className={`ml-2 text-xs transition-transform duration-300 ${
//                     showMobileTrainersDropdown ? "rotate-180" : ""
//                   }`}
//                 />
//               </button>
//               <AnimatePresence>
//                 {showMobileTrainersDropdown && (
//                   <motion.div
//                     initial={{ height: 0, opacity: 0 }}
//                     animate={{ height: "auto", opacity: 1 }}
//                     exit={{ height: 0, opacity: 0 }}
//                     transition={{ duration: 0.3, ease: "easeInOut" }}
//                     className="pl-4 space-y-2 border-l-2 border-green-500 overflow-hidden"
//                   >
//                     <Link
//                       to="/trainers"
//                       className="block text-sm hover:text-gray-200"
//                       onClick={closeMobileMenu}
//                     >
//                       Hire Trainers
//                     </Link>
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </div>

//             <Link
//               to="/contact"
//               className="block hover:text-gray-200"
//               onClick={closeMobileMenu}
//             >
//               Contact Us
//             </Link>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;
import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  FaChevronDown,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCoursesDropdown, setShowCoursesDropdown] = useState(false);
  const [showProgramModesDropdown, setShowProgramModesDropdown] = useState(false);
  const [showCertificatesDropdown, setShowCertificatesDropdown] = useState(false);
  const [showTrainersDropdown, setShowTrainersDropdown] = useState(false);
  const [showMobileCoursesDropdown, setShowMobileCoursesDropdown] = useState(false);
  const [showMobileProgramModesDropdown, setShowMobileProgramModesDropdown] = useState(false);
  const [showMobileCertificatesDropdown, setShowMobileCertificatesDropdown] = useState(false);
  const [showMobileTrainersDropdown, setShowMobileTrainersDropdown] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const [closeTimeoutProgram, setCloseTimeoutProgram] = useState(null);
  const [closeTimeoutCert, setCloseTimeoutCert] = useState(null);
  const [closeTimeoutTrainers, setCloseTimeoutTrainers] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const logoSrc = "/images/ilt logo 2.png";
  const googlePlaySrc = "/images/WhatsApp Image 2025-09-20 at 10.54.36_6c0650ca.jpg";
  const appStoreSrc = "/images/WhatsApp Image 2025-09-20 at 10.54.36_d69e2bc6.jpg";

  useEffect(() => {
    fetchCourses();
  }, []);

  // Prevent body scroll when mobile menu is open
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
      .filter((course) => course.category_id !== 4) // ✅ Exclude category 4
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


  // ===== Desktop Dropdown Handlers =====
  const handleMouseEnterCourses = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setShowCoursesDropdown(true);
  };

  const handleMouseLeaveCourses = () => {
    const timeout = setTimeout(() => {
      setShowCoursesDropdown(false);
    }, 250);
    setCloseTimeout(timeout);
  };

  const handleMouseEnterProgramModes = () => {
    if (closeTimeoutProgram) {
      clearTimeout(closeTimeoutProgram);
      setCloseTimeoutProgram(null);
    }
    setShowProgramModesDropdown(true);
  };

  const handleMouseLeaveProgramModes = () => {
    const timeout = setTimeout(() => {
      setShowProgramModesDropdown(false);
    }, 250);
    setCloseTimeoutProgram(timeout);
  };

  const handleMouseEnterCertificates = () => {
    if (closeTimeoutCert) {
      clearTimeout(closeTimeoutCert);
      setCloseTimeoutCert(null);
    }
    setShowCertificatesDropdown(true);
  };

  const handleMouseLeaveCertificates = () => {
    const timeout = setTimeout(() => {
      setShowCertificatesDropdown(false);
    }, 250);
    setCloseTimeoutCert(timeout);
  };

  const handleMouseEnterTrainers = () => {
    if (closeTimeoutTrainers) {
      clearTimeout(closeTimeoutTrainers);
      setCloseTimeoutTrainers(null);
    }
    setShowTrainersDropdown(true);
  };

  const handleMouseLeaveTrainers = () => {
    const timeout = setTimeout(() => {
      setShowTrainersDropdown(false);
    }, 250);
    setCloseTimeoutTrainers(timeout);
  };

  // ===== Mobile Dropdown Toggles =====
  const toggleMobileCourses = () => {
    setShowMobileCoursesDropdown(!showMobileCoursesDropdown);
  };

  const toggleMobileProgramModes = () => {
    setShowMobileProgramModesDropdown(!showMobileProgramModesDropdown);
  };

  const toggleMobileCertificates = () => {
    setShowMobileCertificatesDropdown(!showMobileCertificatesDropdown);
  };

  const toggleMobileTrainers = () => {
    setShowMobileTrainersDropdown(!showMobileTrainersDropdown);
  };

  const closeMobileMenu = () => {
    setShowMobileCoursesDropdown(false);
    setShowMobileProgramModesDropdown(false);
    setShowMobileCertificatesDropdown(false);
    setShowMobileTrainersDropdown(false);
    setMenuOpen(false);
  };

  return (
    <nav className="w-full shadow-md sticky top-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto p-4 md:p-6">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <img
              src={logoSrc}
              alt="Internet Leads Training Logo"
              className="h-12 md:h-16 cursor-pointer"
            />
          </Link>
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
          <a
            href="https://play.google.com/store/apps/details?id=com.mindlabs.ilt"
            className="h-10 md:h-12"
          >
            <img src={googlePlaySrc} alt="Google Play" className="h-full" />
          </a>
          <a
            href="https://apps.apple.com/in/app/internet-leads-training-ilt/id1548244062"
            className="h-10 md:h-12"
          >
            <img src={appStoreSrc} alt="App Store" className="h-full" />
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/internetleadstraining/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-green-300"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-green-300"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="https://www.instagram.com/internet_leads_training/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-green-300"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Mobile Menu Button with Rotation */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 text-2xl relative z-50"
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
      <div className="bg-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-6 text-white text-base font-semibold">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About Us
              </Link>
            </li>

            {/* Courses Dropdown */}
            <li
              className="group relative"
              onMouseEnter={handleMouseEnterCourses}
              onMouseLeave={handleMouseLeaveCourses}
            >
              <a href="/courses" className="flex items-center hover:text-gray-200">
                Courses <FaChevronDown className="ml-1 text-xs" />
              </a>

              <AnimatePresence>
                {showCoursesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-1/2 mt-2 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
                    style={{
                      width:
                        courses.length <= 8
                          ? "250px"
                          : courses.length <= 16
                          ? "500px"
                          : "750px",
                      padding: "10px 0",
                    }}
                  >
                    {loading ? (
                      <div className="px-4 py-2 text-gray-600">Loading courses...</div>
                    ) : error ? (
                      <div className="px-4 py-2 text-red-600">Error loading courses</div>
                    ) : courses.length === 0 ? (
                      <div className="px-4 py-2 text-gray-600">No courses available</div>
                    ) : (
                      <div
                        className="grid gap-y-1 gap-x-4 px-4 pl-10"
                        style={{
                          gridTemplateColumns:
                            courses.length <= 8
                              ? "repeat(1, minmax(150px, 1fr))"
                              : courses.length <= 16
                              ? "repeat(2, minmax(150px, 1fr))"
                              : "repeat(3, minmax(150px, 1fr))",
                        }}
                      >
                        {courses.map((course) => (
                          <Link
                            key={course.id}
                            to={`/courses/${course.slug}`}
                            className="block py-2 text-sm hover:bg-gray-100 rounded px-2"
                          >
                            {course.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Program Modes Dropdown */}
            <li
              className="group relative"
              onMouseEnter={handleMouseEnterProgramModes}
              onMouseLeave={handleMouseLeaveProgramModes}
            >
              <a href="/mode" className="flex items-center hover:text-gray-200">
                Program Modes <FaChevronDown className="ml-1 text-xs" />
              </a>
              <AnimatePresence>
                {showProgramModesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-1/2 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
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
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {mode.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Certificates Dropdown */}
            <li
              className="group relative"
              onMouseEnter={handleMouseEnterCertificates}
              onMouseLeave={handleMouseLeaveCertificates}
            >
              <a href="#" className="flex items-center hover:text-gray-200">
                Certificates <FaChevronDown className="ml-1 text-xs" />
              </a>
              <AnimatePresence>
                {showCertificatesDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-1/2 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
                  >
                    <Link to="/certificate" className="block px-4 py-2 hover:bg-gray-100">
                      Google Certificate
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Trainers Dropdown */}
            <li
              className="group relative"
              onMouseEnter={handleMouseEnterTrainers}
              onMouseLeave={handleMouseLeaveTrainers}
            >
              <a href="#" className="flex items-center hover:text-gray-200">
                Trainers <FaChevronDown className="ml-1 text-xs" />
              </a>
              <AnimatePresence>
                {showTrainersDropdown && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="absolute left-1/2 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg z-10 overflow-hidden transform -translate-x-1/2"
                  >
                    <Link to="/trainers" className="block px-4 py-2 hover:bg-gray-100">
                      Hire Trainers
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* Contact + Sign In */}
          <div className="hidden lg:flex items-center text-white space-x-6">
            <Link
              to="/contact"
              className="flex items-center font-semibold hover:text-gray-200"
            >
              <FaPhone className="mr-2 rotate-90" /> Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide from Right */}
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
              className="fixed inset-y-0 right-0 w-80 max-w-full bg-green-700 text-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Close Button */}
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-3xl"
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
                  className="block text-lg font-medium hover:text-gray-200 transition"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>

                <Link
                  to="/about"
                  className="block text-lg font-medium hover:text-gray-200 transition"
                  onClick={closeMobileMenu}
                >
                  About Us
                </Link>

                {/* Mobile Courses Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={toggleMobileCourses}
                    className="flex items-center justify-between w-full text-left text-lg font-medium hover:text-gray-200 transition"
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
                          <div className="py-2 text-sm text-gray-300">Loading courses...</div>
                        ) : error ? (
                          <div className="py-2 text-sm text-red-300">Error loading courses</div>
                        ) : courses.length === 0 ? (
                          <div className="py-2 text-sm text-gray-300">No courses available</div>
                        ) : (
                          courses.map((course) => (
                            <Link
                              key={course.id}
                              to={`/courses/${course.slug}`}
                              className="block py-2 text-sm hover:text-gray-200 transition pl-2 border-l border-green-500"
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
                    className="flex items-center justify-between w-full text-left text-lg font-medium hover:text-gray-200 transition"
                  >
                    Program Modes
                    <motion.div
                      animate={{ rotate: showMobileProgramModesDropdown ? 180 : 0 }}
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
                            className="block py-2 text-sm hover:text-gray-200 transition pl-2 border-l border-green-500"
                            onClick={closeMobileMenu}
                          >
                            {mode.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Certificates Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={toggleMobileCertificates}
                    className="flex items-center justify-between w-full text-left text-lg font-medium hover:text-gray-200 transition"
                  >
                    Certificates
                    <motion.div
                      animate={{ rotate: showMobileCertificatesDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="ml-2 text-sm" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showMobileCertificatesDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        <Link
                          to="/certificate"
                          className="block py-2 text-sm hover:text-gray-200 transition pl-2 border-l border-green-500"
                          onClick={closeMobileMenu}
                        >
                          Google Certificate
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Trainers Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={toggleMobileTrainers}
                    className="flex items-center justify-between w-full text-left text-lg font-medium hover:text-gray-200 transition"
                  >
                    Trainers
                    <motion.div
                      animate={{ rotate: showMobileTrainersDropdown ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <FaChevronDown className="ml-2 text-sm" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showMobileTrainersDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="pl-4 space-y-1 overflow-hidden"
                      >
                        <Link
                          to="/trainers"
                          className="block py-2 text-sm hover:text-gray-200 transition pl-2 border-l border-green-500"
                          onClick={closeMobileMenu}
                        >
                          Hire Trainers
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  to="/contact"
                  className="block text-lg font-medium hover:text-gray-200 transition"
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