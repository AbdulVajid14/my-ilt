// // import React from 'react'
// // import { Link } from "react-router-dom";

// // function OurTrainers() {
// //     const trainers = [
// //     {
// //       name: "David Mathews",
// //       title: "Senior Digital Marketing Strategist",
// //       students: "20K+ Students",
// //       rating: "4.8★ Rating",
// //       skills: ["SEO", "Social Media Marketing"],
// //       imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.43_91db6ff6.jpg",
// //       slug: "david-mathews",
// //     },
// //     {
// //       name: "Anita Varghese",
// //       title: "Digital Advertising Specialist",
// //       students: "18K+ Students",
// //       rating: "4.9★ Rating",
// //       skills: ["PPC", "Content Marketing"],
// //       imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.44_db38e36e.jpg",
// //       slug: "anita-varghese",
// //     },
// //     {
// //       name: "Rahul Menon",
// //       title: "Lead Data Analyst",
// //       students: "12K+ Students",
// //       rating: "4.7★ Rating",
// //       skills: ["Data Visualization", "Python Analytics"],
// //       imageUrl: "/images/WhatsApp Image 2025-10-01 at 14.31.44_7292d380.jpg",
// //       slug: "rahul-menon",
// //       darkBg: true,
// //     },
// //   ];

// //   return (
// //     <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
// //         <p className="text-green-600 font-semibold text-center text-base sm:text-lg">
// //           Our Trainers
// //         </p>
// //         <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
// //           Meet Our Expert Trainers
// //         </h2>
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
// //           {trainers.map((trainer, idx) => (
// //             <Link
// //             key={idx}
// //             to={`/trainers/${trainer.slug}`}
// //             className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white transform hover:scale-[1.02] transition-all duration-300"
// //           >
// //               <img
// //                 src={trainer.imageUrl}
// //                 alt={trainer.name}
// //                 className="w-full h-80 sm:h-120 object-cover"
// //                 loading="lazy"
// //               />
// //               <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
// //                 {trainer.students}
// //               </div>
// //               <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
// //                 {trainer.rating}
// //               </div>
// //               <div
// //                 className={`absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm ${
// //                   trainer.darkBg ? "bg-black/60" : "bg-gray-800/60"
// //                 }`}
// //               >
// //                 <div className="flex gap-2 mb-2 flex-wrap">
// //                   {trainer.skills.map((skill, i) => (
// //                     <span
// //                       key={i}
// //                       className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-green-400 text-green-400"
// //                     >
// //                       {skill}
// //                     </span>
// //                   ))}
// //                 </div>
// //                 <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
// //                 <p className="text-xs sm:text-sm mt-1">{trainer.title}</p>
// //               </div>
// //               </Link>
// //           ))}
// //         </div>
// //       </section>
// // )
// // }

// // export default OurTrainers
// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const OurTrainers = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetchTrainers();
//   }, []);

//   const fetchTrainers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const res = await axios.get(
//         `${import.meta.env.VITE_BASE_URL}/admin/trainers?status=1&limit=10&offset=0`
//       );
//       const fetchedTrainers = res.data.data.map((trainer) => ({
//         ...trainer,
//         slug: trainer.name.toLowerCase().replace(/\s+/g, "-"),
//         skills: trainer.skills ? trainer.skills.split("\r\n") : [],
//       }));
//       setTrainers(fetchedTrainers);
//     } catch (err) {
//       setError(err.message);
//       console.error("Error fetching trainers:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 bg-red-50 text-red-600 rounded-lg text-center">
//         Error loading trainers: {error}
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
//       <p className="text-green-600 font-semibold text-center text-base sm:text-lg">
//         Our Trainers
//       </p>
//       <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
//         Meet Our Expert Trainers
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//         {trainers.map((trainer, idx) => (
//           <Link
//             key={trainer.id}
//             to={`/trainers/${trainer.slug}`}
//             className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white transform hover:scale-[1.02] transition-all duration-300"
//           >
//             <img
//               src={`${import.meta.env.VITE_BASE_URL_IMAGE}${trainer.image}`}
//               alt={trainer.name}
//               className="w-full h-80 sm:h-120 object-cover"
//               loading="lazy"
//             />
//             <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
//               {trainer.students} Students
//             </div>
//             <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
//               {trainer.rating}★ Rating
//             </div>
//             <div
//               className={`absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm ${
//                 idx % 2 === 0 ? "bg-black/60" : "bg-gray-800/60"
//               }`}
//             >
//               <div className="flex gap-2 mb-2 flex-wrap">
//                 {trainer.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-green-400 text-green-400"
//                   >
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//               <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
//               <p className="text-xs sm:text-sm mt-1">{trainer.post}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default OurTrainers;
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";   // optional icons

const CARDS_PER_PAGE = {
  sm: 1,
  md: 2,
  lg: 3,
};

const OurTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);

  // detect current breakpoint (simple way – you can replace with your own hook)
  const getBreakpoint = () => {
    const w = window.innerWidth;
    if (w >= 1024) return "lg";
    if (w >= 640) return "md";
    return "sm";
  };
  const [bp, setBp] = useState(getBreakpoint());

  useEffect(() => {
    const onResize = () => setBp(getBreakpoint());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // -----------------------------------------------------------------
  // FETCH TRAINERS
  // -----------------------------------------------------------------
  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/trainers?status=1&limit=10&offset=0`
      );
      const fetchedTrainers = res.data.data.map((trainer) => ({
        ...trainer,
        slug: trainer.name.toLowerCase().replace(/\s+/g, "-"),
        skills: trainer.skills ? trainer.skills.split("\r\n") : [],
      }));
      setTrainers(fetchedTrainers);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching trainers:", err);
    } finally {
      setLoading(false);
    }
  };

  // -----------------------------------------------------------------
  // PAGINATION LOGIC
  // -----------------------------------------------------------------
  const cardsPerPage = CARDS_PER_PAGE[bp];
  const totalPages = Math.ceil(trainers.length / cardsPerPage);
  const visibleTrainers = trainers.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

  const goPrev = () => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));
  const goNext = () => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));

  // -----------------------------------------------------------------
  // RENDER STATES
  // -----------------------------------------------------------------
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 bg-red-50 text-red-600 rounded-lg text-center">
        Error loading trainers: {error}
      </div>
    );
  }

  const showArrows = trainers.length > cardsPerPage;

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <p className="text-green-600 font-semibold text-center text-base sm:text-lg">
        Our Trainers
      </p>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
        Meet Our Expert Trainers
      </h2>

      {/* ---------- CAROUSEL WRAPPER ---------- */}
      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {visibleTrainers.map((trainer, idx) => (
              <motion.div
                key={trainer.id}
                layout
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative"
              >
                <Link
                  to={`/trainers/${trainer.slug}`}
                  className="relative rounded-xl overflow-hidden shadow-lg bg-gray-900 text-white transform hover:scale-[1.02] transition-all duration-300 block"
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_URL_IMAGE}${trainer.image}`}
                    alt={trainer.name}
                    className="w-full h-80 sm:h-120 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {trainer.students} Students
                  </div>
                  <div className="absolute top-4 right-4 bg-green-600 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                    {trainer.rating}★ Rating
                  </div>

                  <div
                    className={`absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm ${
                      idx % 2 === 0 ? "bg-black/60" : "bg-gray-800/60"
                    }`}
                  >
                    <div className="flex gap-2 mb-2 flex-wrap">
                      {trainer.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-green-400 text-green-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
                    <p className="text-xs sm:text-sm mt-1">{trainer.post}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ---------- ARROW BUTTONS ---------- */}
        {showArrows && (
          <>
            {/* LEFT */}
            <button
              onClick={goPrev}
              aria-label="Previous trainers"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>

            {/* RIGHT */}
            <button
              onClick={goNext}
              aria-label="Next trainers"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default OurTrainers;