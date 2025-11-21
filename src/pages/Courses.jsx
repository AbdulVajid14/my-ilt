// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import QueriesForm from "../components/CommonComponents/QueriesForm";
// import { FaCalendarAlt, FaBookOpen } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import OurGraduates from "../components/Home/OurGraduates";
// import Questions from "../components/Home/Questions";

// const coursesAbroad = [
//   {
//     title: "SEO Mastery",
//     image: "/images/WhatsApp Image 2025-09-20 at 10.54.00_00084e9c.jpg",
//     desc: "Learn how to rank websites higher on Google with keyword strategy, on-page & off-page SEO, and analytics.",
//     modules: 5,
//     duration: "5 Months",
//   },
//   {
//     title: "Social Media Marketing",
//     image: "/images/WhatsApp Image 2025-09-20 at 10.54.00_f2a20352.jpg",
//     desc: "Master platforms like Instagram, Facebook, and LinkedIn to create engaging campaigns and grow audiences.",
//     modules: 6,
//     duration: "5 Months",
//   },
// ];

// const Courses = () => {
//   const [courses, setCourses] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     axios
//       .get(`${import.meta.env.VITE_BASE_URL}/courses`)
//       .then((response) => {
//         if (response.data.success) {
//           const sortedCourses = response.data.data.sort(
//             (a, b) => (a.sequence || 0) - (b.sequence || 0)
//           );
//           setCourses(sortedCourses);
//         }
//       })
//       .catch((error) => console.error("Error fetching courses:", error));
//   }, []);

//   // Handle search input change
//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   // Clear search input
//   const handleClearSearch = () => {
//     setSearchTerm("");
//   };

//   // Filter function for courses
//   const filterCourses = (courses, term) => {
//     if (!term) return courses;
//     const lowerTerm = term.toLowerCase();
//     return courses.filter(
//       (course) =>
//         course.title.toLowerCase().includes(lowerTerm) ||
//         course.desc?.toLowerCase().includes(lowerTerm) ||
//         course.description?.toLowerCase().includes(lowerTerm)
//     );
//   };

//   // Primary courses (category_id: 1)
//   const primaryCourses = filterCourses(
//     courses
//       .filter((c) => c.category_id === 1)
//       .map((c) => ({
//         title: c.name,
//         image: `${import.meta.env.VITE_BASE_URL_IMAGE}/${c.image}`,
//         desc:
//           c.description.length > 100
//             ? c.description.slice(0, 100) + "..."
//             : c.description,
//         modules: c.program_modules.split(".\r\n").filter((s) => s.trim()).length,
//         duration: `${c.duration} Months`,
//       })),
//     searchTerm
//   );

//   // Secondary courses (category_id: 2)
//   const secondaryCourses = filterCourses(
//     courses
//       .filter((c) => c.category_id === 2)
//       .map((c) => ({
//         id: c.id,
//         title: c.name,
//         img: `${import.meta.env.VITE_BASE_URL_IMAGE}/${c.image}`,
//         description:
//           c.description.length > 100
//             ? c.description.slice(0, 100) + "..."
//             : c.description,
//         modules: c.program_modules.split(".\r\n").filter((s) => s.trim()).length,
//         duration: `${c.duration} Months`,
//       })),
//     searchTerm
//   );

//   // Filter coursesAbroad
//   const filteredCoursesAbroad = filterCourses(coursesAbroad, searchTerm);

//   return (
//     <div className="w-full">
//       {/* Banner Section */}
//       <div
//         className="w-full h-[400px] flex items-center justify-center bg-center bg-cover relative"
//         style={{
//           backgroundImage: `url('/images/WhatsApp Image 2025-10-09 at 12.16.37_d35ed120.jpg')`,
//         }}
//       >
//         <h1 className="text-white text-4xl font-bold drop-shadow-lg">
//           All Courses
//         </h1>
//       </div>

//       {/* Main Content Container */}
//       <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
//         {/* Search Section */}
//         <section className="text-center max-w-xl mx-auto space-y-3">
//           <h2 className="text-2xl font-semibold">
//             Find the Right Course for You
//           </h2>
//           <p className="text-gray-600">
//             Explore ILT’s expert-led programs and choose the one that fits your
//             career goals.
//           </p>
//           <form
//             className="flex items-center border border-gray-300 rounded-md overflow-hidden max-w-md mx-auto"
//             onSubmit={(e) => e.preventDefault()}
//           >
//             <input
//               type="text"
//               placeholder="Search course"
//               className="flex-grow py-2 px-4 focus:outline-none"
//               value={searchTerm}
//               onChange={handleSearchChange}
//             />
//             {searchTerm && (
//               <button
//                 type="button"
//                 className="px-3 text-gray-600 hover:text-gray-800"
//                 onClick={handleClearSearch}
//                 title="Clear search"
//               >
//                 ✕
//               </button>
//             )}
//             <button
//               type="submit"
//               className="bg-green-500 hover:bg-green-600 text-white font-medium px-5 py-2"
//             >
//               Search
//             </button>
//           </form>
//         </section>

//         {/* Primary Course Section */}
//         <section className="px-4 sm:px-8 py-12">
//           <h3 className="text-xl font-semibold mb-4">Primary Course</h3>
//           {primaryCourses.length === 0 && searchTerm && (
//             <p className="text-gray-600 text-center">No primary courses found.</p>
//           )}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {primaryCourses.map((course, idx) => {
//               const slug = course.title.toLowerCase().replace(/\s+/g, "-");
//               return (
//                 <div
//                   key={idx}
//                   className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
//                 >
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-56 sm:h-64 md:h-100 object-cover"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
//                   <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
//                     <h4 className="text-lg font-bold mb-1">{course.title}</h4>
//                     <p className="text-xs sm:text-sm leading-snug line-clamp-2">
//                       {course.desc}
//                     </p>
//                     <div className="flex items-center justify-between mt-4">
//                       <Link to={`/courses/${slug}`}>
//                         <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
//                           Learn More
//                         </button>
//                       </Link>
//                       <div className="flex items-center space-x-2 text-[11px] sm:text-xs opacity-90">
//                         <span>{course.modules} Modules</span>
//                         <span>{course.duration}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Secondary Course Section */}
//         <section className="px-4 sm:px-8 py-12">
//           <h3 className="text-xl font-semibold mb-6">Secondary Courses</h3>
//           {secondaryCourses.length === 0 && searchTerm && (
//             <p className="text-gray-600 text-center">
//               No secondary courses found.
//             </p>
//           )}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//             {secondaryCourses.map((course) => (
//               <div
//                 key={course.id}
//                 className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
//               >
//                 <div className="relative">
//                   <img
//                     src={course.img}
//                     alt={course.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
//                     <h4 className="text-white text-lg font-semibold">
//                       {course.title}
//                     </h4>
//                   </div>
//                 </div>
//                 <div className="p-5 flex flex-col flex-grow justify-between">
//                   <p className="text-gray-600 text-sm mb-3 line-clamp-3">
//                     {course.description}
//                   </p>
//                   <div className="flex justify-between text-gray-700 text-sm mb-4">
//                     <span className="flex items-center gap-2">
//                       <FaBookOpen className="text-green-600" />
//                       {course.modules} Modules
//                     </span>
//                     <span className="flex items-center gap-2">
//                       <FaCalendarAlt className="text-green-600" />
//                       {course.duration}
//                     </span>
//                   </div>
//                   <Link
//                     to={`/courses/${course.title
//                       .toLowerCase()
//                       .replace(/\s+/g, "-")}`}
//                   >
//                     <button className="w-full border border-green-600 text-green-600 font-medium text-sm py-2 rounded-md hover:bg-green-50 transition-colors">
//                       Learn More
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Study Abroad Section */}
//         <section>
//           <h3 className="text-xl font-semibold mb-6">
//             Study{" "}
//             <span className="text-green-600">
//               Digital Marketing Abroad Section
//             </span>
//           </h3>
//           {filteredCoursesAbroad.length === 0 && searchTerm && (
//             <p className="text-gray-600 text-center">
//               No study abroad courses found.
//             </p>
//           )}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {filteredCoursesAbroad.map((course, idx) => {
//               const slug = course.title.toLowerCase().replace(/\s+/g, "-");
//               return (
//                 <div
//                   key={idx}
//                   className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
//                 >
//                   <img
//                     src={course.image}
//                     alt={course.title}
//                     className="w-full h-56 sm:h-64 md:h-100 object-cover"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent"></div>
//                   <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
//                     <h4 className="text-lg font-bold mb-1">{course.title}</h4>
//                     <p className="text-xs sm:text-sm leading-snug line-clamp-2">
//                       {course.desc}
//                     </p>
//                     <div className="flex items-center justify-between mt-4">
//                       <Link to={`/courses/${slug}`}>
//                         <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
//                           Learn More
//                         </button>
//                       </Link>
//                       <div className="flex items-center space-x-2 text-[11px] sm:text-xs opacity-90">
//                         <span>{course.modules} Modules</span>
//                         <span>{course.duration}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </section>

//         {/* Queries Section */}
//         <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <QueriesForm />
//           </div>
//           <div>
//             <img
//               src={`/images/WhatsApp Image 2025-10-09 at 12.16.37_1d071594.jpg`}
//               alt="Study"
//               className="w-full rounded-lg object-cover h-[420px]"
//             />
//           </div>
//         </section>
//         <OurGraduates />
//         <Questions />
//       </div>
//     </div>
//   );
// };

// export default Courses;
import React, { useState, useEffect } from "react";
import axios from "axios";
import QueriesForm from "../components/CommonComponents/QueriesForm";
import { FaCalendarAlt, FaRupeeSign } from "react-icons/fa";
import { Link } from "react-router-dom";
import OurGraduates from "../components/Home/OurGraduates";
import Questions from "../components/Home/Questions";

const Courses = () => {
  useEffect(() => {
    document.title =
      "SEO Training, Digital Marketing Class, Pay Per Click Certification & Social Media Class in Cochin, Kerala";
    const metaDescription =
      document.querySelector("meta[name='description']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "description";
        document.head.appendChild(meta);
        return meta;
      })();

    metaDescription.setAttribute(
      "content",
      "ILT offers foundation class for digital marketing, advanced digital marketing training, social media marketing, Email Marketing class, Affiliate marketing training, Blogging Training & Google Analytics Class in Cochin, Kerala."
    );
    const metaKeywords =
      document.querySelector("meta[name='keywords']") ||
      (() => {
        const meta = document.createElement("meta");
        meta.name = "keywords";
        document.head.appendChild(meta);
        return meta;
      })();

    metaKeywords.setAttribute("content", "Training Courses");
  }, []);
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/courses`)
      .then((response) => {
        if (response.data.success) {
          const sortedCourses = response.data.data.sort(
            (a, b) => (a.sequence || 0) - (b.sequence || 0)
          );
          setCourses(sortedCourses);
        }
      })
      .catch((error) => console.error("Error fetching courses:", error));
  }, []);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Clear search input
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  // Filter function for courses
  const filterCourses = (courses, term) => {
    if (!term) return courses;
    const lowerTerm = term.toLowerCase();
    return courses.filter(
      (course) =>
        course.title.toLowerCase().includes(lowerTerm) ||
        course.desc?.toLowerCase().includes(lowerTerm) ||
        course.description?.toLowerCase().includes(lowerTerm)
    );
  };

  // Primary courses (category_id: 1)
  const primaryCourses = filterCourses(
    courses
      .filter((c) => c.category_id === 1)
      .map((c) => ({
        title: c.name,
        image: `${import.meta.env.VITE_BASE_URL_IMAGE}/${c.image}`,
        desc:
          c.description.length > 100
            ? c.description.slice(0, 100) + "..."
            : c.description,
        modules: c.program_modules.split(".\r\n").filter((s) => s.trim())
          .length,
        duration: `${c.duration}`,
        price: c.price.toLocaleString(),
      })),
    searchTerm
  );

  // Secondary courses (category_id: 2)
  const secondaryCourses = filterCourses(
    courses
      .filter((c) => c.category_id === 2)
      .map((c) => ({
        id: c.id,
        title: c.name,
        img: `${import.meta.env.VITE_BASE_URL_IMAGE}/${c.image}`,
        description:
          c.description.length > 100
            ? c.description.slice(0, 100) + "..."
            : c.description,
        modules: c.program_modules.split(".\r\n").filter((s) => s.trim())
          .length,
        duration: `${c.duration}`,
        price: c.price.toLocaleString(),
      })),
    searchTerm
  );

  // Study Abroad courses (category_id: 3)
  const abroadCourses = filterCourses(
    courses
      .filter((c) => c.category_id === 3)
      .map((c) => ({
        id: c.id,
        title: c.name,
        image: `${import.meta.env.VITE_BASE_URL_IMAGE}/${c.image}`,
        desc:
          c.description.length > 100
            ? c.description.slice(0, 100) + "..."
            : c.description,
        modules: c.program_modules.split(".\r\n").filter((s) => s.trim())
          .length,
        duration: `${c.duration}`,
        price: c.price.toLocaleString(),
      })),
    searchTerm
  );

  return (
    <div className="w-full">
      {/* Banner Section */}
      <div
        className="w-full h-[400px] flex items-center justify-start bg-center bg-cover relative"
        style={{
          backgroundImage: `url('/images/WhatsApp Image 2025-10-09 at 12.16.37_d35ed120.jpg')`,
        }}
      >
        <h1 className="text-white text-4xl font-bold drop-shadow-lg pl-4 sm:pl-12 lg:pl-24">
          All Courses
        </h1>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-14">
        {/* Search Section */}
        <section className="text-center max-w-xl mx-auto space-y-4 py-6">
          <h2 className="text-2xl font-semibold text-gray-800">
            Find the Right Course for You
          </h2>
          <p className="text-gray-600">
            Explore ILT’s expert-led programs and choose the one that fits your
            career goals.
          </p>

          <form
            className="relative flex items-center max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Search Icon */}
            <span className="absolute left-3 text-green-600 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>

            {/* Input Field */}
            <input
              type="text"
              placeholder="Search Courses"
              className="w-full py-3 pl-10 pr-12 text-gray-700 bg-white border-2 border-green-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 focus:border-green-600 transition-all duration-200 shadow-sm"
              value={searchTerm}
              onChange={handleSearchChange}
            />

            {/* Clear Button (appears when there's input) */}
            {searchTerm && (
              <button
                type="button"
                className="absolute right-2 p-1.5 text-green-600 hover:text-green-800 hover:bg-green-50 rounded-full transition-colors duration-150"
                onClick={handleClearSearch}
                title="Clear search"
                aria-label="Clear search"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
          </form>
        </section>

        {/* Primary Course Section */}
        <section className="px-4 sm:px-8 py-12">
          <h3 className="text-xl font-semibold mb-4">Primary Course</h3>
          {primaryCourses.length === 0 && searchTerm && (
            <p className="text-gray-600 text-center">
              No primary courses found.
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {primaryCourses.map((course, idx) => {
              const slug = course.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 sm:h-64 md:h-100 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                    <h4 className="text-lg font-bold mb-1">{course.title}</h4>
                    <p className="text-xs sm:text-sm leading-snug line-clamp-2">
                      {course.desc}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/courses/${slug}`}>
                        <button
                          className="bg-green-600 hover:bg-green-700 text-white py-1.5 px-3 sm:py-2 sm:px-4 rounded-lg text-xs sm:text-sm transition-all duration-300 hover:shadow-md hover:scale-105 
                                   w-28 sm:w-32 truncate"
                        >
                          Learn More {course.title}
                        </button>
                      </Link>
                      <div className="flex items-center space-x-2 text-[11px] sm:text-lg opacity-90">
                        <span>₹ {course.price} </span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Secondary Course Section */}
        <section className="px-4 sm:px-8 py-12">
          <h3 className="text-xl font-semibold mb-6">Secondary Courses</h3>
          {secondaryCourses.length === 0 && searchTerm && (
            <p className="text-gray-600 text-center">
              No secondary courses found.
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {secondaryCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                    <h4 className="text-white text-lg font-semibold">
                      {course.title}
                    </h4>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    {course.description}
                  </p>
                  <div className="flex justify-between text-gray-700 text-sm mb-4">
                    <span className="flex items-center gap-2">
                      <FaRupeeSign className="text-green-600" />
                      {course.price}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-green-600" />
                      {course.duration}
                    </span>
                  </div>
                  <Link
                    to={`/courses/${course.title
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    <button className="w-full border border-green-600 text-green-600 font-medium text-sm py-2 rounded-md hover:bg-green-50 transition-colors">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Study Abroad Section */}
        {/* <section className="px-4 sm:px-8 py-12">
          <h3 className="text-xl font-semibold mb-6">
            Study{" "}
            <span className="text-green-600">Digital Marketing Abroad</span>
          </h3>
          {abroadCourses.length === 0 && searchTerm && (
            <p className="text-gray-600 text-center">
              No study abroad courses found.
            </p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {abroadCourses.map((course, idx) => {
              const slug = course.title.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={idx}
                  className="relative rounded-lg overflow-hidden shadow-md bg-white hover:shadow-lg transition-all duration-300"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-56 sm:h-64 md:h-100 object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-50 bg-gradient-to-t from-black/100 to-transparent"></div>
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-white z-10">
                    <h4 className="text-lg font-bold mb-1">{course.title}</h4>
                    <p className="text-xs sm:text-sm leading-snug line-clamp-2">
                      {course.desc}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <Link to={`/courses/${slug}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md text-xs sm:text-sm transition-all duration-300 hover:shadow-md">
                          Learn More
                        </button>
                      </Link>
                      <div className="flex items-center space-x-2 text-[11px] sm:text-lg opacity-90">
                        <span>₹ {course.price} </span>
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section> */}

        {/* Queries Section */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <QueriesForm />
          </div>
          <div>
            <img
              src={`/images/WhatsApp Image 2025-10-09 at 12.16.37_1d071594.jpg`}
              alt="Study"
              className="w-full rounded-lg object-cover h-[420px]"
            />
          </div>
        </section>
        <OurGraduates />
        <Questions />
      </div>
    </div>
  );
};

export default Courses;
