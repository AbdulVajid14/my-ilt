
// import axios from "axios";
// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";   

// const CARDS_PER_PAGE = {
//   sm: 1,
//   md: 2,
//   lg: 3,
// };

// const OurTrainers = () => {
//   const [trainers, setTrainers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [page, setPage] = useState(0);

//   const getBreakpoint = () => {
//     const w = window.innerWidth;
//     if (w >= 1024) return "lg";
//     if (w >= 640) return "md";
//     return "sm";
//   };
//   const [bp, setBp] = useState(getBreakpoint());

//   useEffect(() => {
//     const onResize = () => setBp(getBreakpoint());
//     window.addEventListener("resize", onResize);
//     return () => window.removeEventListener("resize", onResize);
//   }, []);


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

//   const cardsPerPage = CARDS_PER_PAGE[bp];
//   const totalPages = Math.ceil(trainers.length / cardsPerPage);
//   const visibleTrainers = trainers.slice(page * cardsPerPage, (page + 1) * cardsPerPage);

//   const goPrev = () => setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));
//   const goNext = () => setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="p-6 bg-red-50 text-red-900 rounded-lg text-center">
//         Error loading trainers: {error}
//       </div>
//     );
//   }

//   const showArrows = trainers.length > cardsPerPage;

//   return (
//     <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
//       <p className="text-green-900 font-semibold text-center text-base sm:text-lg">
//         Our Trainers
//       </p>
//       <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
//         Meet Our Expert Trainers
//       </h2>

//       {/* ---------- CAROUSEL WRAPPER ---------- */}
//       <div className="relative overflow-hidden">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
//           <AnimatePresence mode="wait">
//             {visibleTrainers.map((trainer, idx) => (
//               <motion.div
//                 key={trainer.id}
//                 layout
//                 initial={{ opacity: 0, x: 100 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -100 }}
//                 transition={{ duration: 0.4, ease: "easeOut" }}
//                 className="relative"
//               >
//                 <Link
//                   to={`/trainers/${trainer.slug}`}
//                   className="relative rounded-xl overflow-hidden shadow-lg bg-black text-white transform hover:scale-[1.02] transition-all duration-300 block"
//                 >
//                   <img
//                     src={`${import.meta.env.VITE_BASE_URL_IMAGE}${trainer.image}`}
//                     alt={trainer.name}
//                     className="w-full h-110 sm:h-120 object-cover"
//                     loading="lazy"
//                   />
//                   <div className="absolute top-4 left-4 bg-green-900 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
//                     {trainer.students} Students
//                   </div>
//                   <div className="absolute top-4 right-4 bg-green-900 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
//                     {trainer.rating}★ Rating
//                   </div>

//                   <div
//                     className={`absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm ${
//                       idx % 2 === 0 ? "bg-black/60" : "bg-gray-900/60"
//                     }`}
//                   >
//                     <div className="flex gap-2 mb-2 flex-wrap">
//                       {trainer.skills.map((skill, i) => (
//                         <span
//                           key={i}
//                           className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-white-900 text-white"
//                         >
//                           {skill}
//                         </span>
//                       ))}
//                     </div>
//                     <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
//                     <p className="text-xs sm:text-sm mt-1">{trainer.post}</p>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* ---------- ARROW BUTTONS ---------- */}
//         {showArrows && (
//           <>
//             {/* LEFT */}
//             <button
//               onClick={goPrev}
//               aria-label="Previous trainers"
//               className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
//             >
//               <ChevronLeft className="w-6 h-6 text-black" />
//             </button>

//             {/* RIGHT */}
//             <button
//               onClick={goNext}
//               aria-label="Next trainers"
//               className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 shadow-lg flex items-center justify-center hover:bg-white transition-colors"
//             >
//               <ChevronRight className="w-6 h-6 text-black" />
//             </button>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// export default OurTrainers;

import axios from "axios";
import React, { useState, useEffect, useRef, useMemo, useCallback, memo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CARDS_PER_PAGE = {
  sm: 1,
  md: 2,
  lg: 3,
};

// Memoized Trainer Card — prevents re-render unless props change
const TrainerCard = memo(({ trainer }) => {
  const skills = trainer.skills || [];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative"
    >
      <Link
        to={`/trainers/${trainer.slug}`}
        className="relative rounded-xl overflow-hidden shadow-lg bg-black text-white transform hover:scale-[1.02] transition-all duration-300 block"
      >
        <img
          src={`${import.meta.env.VITE_BASE_URL_IMAGE}${trainer.image}`}
          alt={trainer.name}
          className="w-full h-110 sm:h-120 object-cover"
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-green-900 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
          {trainer.students} Students
        </div>
        <div className="absolute top-4 right-4 bg-green-900 text-white text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
          {trainer.rating} Rating
        </div>

        <div className="absolute bottom-0 w-full px-4 sm:px-6 py-4 sm:py-6 backdrop-blur-sm bg-black/60">
          <div className="flex gap-2 mb-2 flex-wrap">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs font-semibold px-2 sm:px-3 py-1 rounded-full border border-white text-white"
              >
                {skill.trim()}
              </span>
            ))}
          </div>
          <h3 className="text-lg sm:text-xl font-bold">{trainer.name}</h3>
          <p className="text-xs sm:text-sm mt-1">{trainer.post}</p>
        </div>
      </Link>
    </motion.div>
  );
});

TrainerCard.displayName = "TrainerCard";

const OurTrainers = () => {
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);
  const [bp, setBp] = useState("lg");

  // Debounced resize handler
  const resizeTimeout = useRef(null);
  const handleResize = useCallback(() => {
    if (resizeTimeout.current) clearTimeout(resizeTimeout.current);

    resizeTimeout.current = setTimeout(() => {
      const w = window.innerWidth;
      let breakpoint = "sm";
      if (w >= 1024) breakpoint = "lg";
      else if (w >= 640) breakpoint = "md";
      setBp(breakpoint);
    }, 100);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (resizeTimeout.current) clearTimeout(resizeTimeout.current);
    };
  }, [handleResize]);

  // Fetch trainers once
  useEffect(() => {
    const fetchTrainers = async () => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/admin/trainers?status=1&limit=10&offset=0`
        );

        const fetchedTrainers = (res.data.data || []).map((trainer) => ({
          ...trainer,
          slug: trainer.name.toLowerCase().replace(/\s+/g, "-"),
          skills: trainer.skills
            ? trainer.skills.split("\r\n").map(s => s.trim()).filter(Boolean)
            : [],
        }));

        setTrainers(fetchedTrainers);
      } catch (err) {
        setError(err.message || "Failed to load trainers");
        console.error("Error fetching trainers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTrainers();
  }, []);

  // Memoized calculations
  const cardsPerPage = CARDS_PER_PAGE[bp];
  const totalPages = useMemo(
    () => Math.ceil(trainers.length / cardsPerPage),
    [trainers.length, cardsPerPage]
  );

  const visibleTrainers = useMemo(() => {
    const start = page * cardsPerPage;
    const end = start + cardsPerPage;
    return trainers.slice(start, end);
  }, [trainers, page, cardsPerPage]);

  const showArrows = trainers.length > cardsPerPage;

  // Memoized navigation
  const goPrev = useCallback(() => {
    setPage((p) => (p <= 0 ? totalPages - 1 : p - 1));
  }, [totalPages]);

  const goNext = useCallback(() => {
    setPage((p) => (p >= totalPages - 1 ? 0 : p + 1));
  }, [totalPages]);

  // Reset page on breakpoint change if needed
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) {
      setPage(0);
    }
  }, [page, totalPages]);

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-green-900 mx-auto"></div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <div className="p-6 bg-red-50 text-red-800 rounded-lg inline-block">
          Error loading trainers: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
      <p className="text-green-900 font-semibold text-center text-base sm:text-lg">
        Our Trainers
      </p>
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12">
        Meet Our Expert Trainers
      </h2>

      <div className="relative overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="wait">
            {visibleTrainers.map((trainer) => (
              <TrainerCard key={trainer.id} trainer={trainer} />
            ))}
          </AnimatePresence>
        </div>

        {/* Navigation Arrows */}
        {showArrows && (
          <>
            <button
              onClick={goPrev}
              aria-label="Previous trainers"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-xl backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
            >
              <ChevronLeft className="w-6 h-6 text-gray-900" />
            </button>

            <button
              onClick={goNext}
              aria-label="Next trainers"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 shadow-xl backdrop-blur-sm flex items-center justify-center hover:bg-white hover:scale-110 transition-all z-10"
            >
              <ChevronRight className="w-6 h-6 text-gray-900" />
            </button>
          </>
        )}
      </div>
    </section>
  );
};

OurTrainers.displayName = "OurTrainers";

export default memo(OurTrainers);