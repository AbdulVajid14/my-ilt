
// // // import React from "react";

// // // const placements = [
// // //   {
// // //     name: "Fatima Noor",
// // //     role: "SEO Analyst",
// // //     company: "BrandWave Solutions",
// // //     location: "Dubai, UAE",
// // //     image: "/images/WhatsApp Image 2025-09-20 at 10.53.48_9fcda950.jpg", 
// // //   },
// // //   {
// // //     name: "Aneesh R.",
// // //     role: "Digital Marketing Executive",
// // //     company: "WebStacks Media",
// // //     location: "Kochi, Kerala",
// // //     image: "/images/WhatsApp Image 2025-09-20 at 10.53.48_02e1c4ba.jpg",
// // //   },
// // //   {
// // //     name: "Nayana S.",
// // //     role: "Google Ads Specialist",
// // //     company: "Advantage Media Tech",
// // //     location: "Abu Dhabi, UAE",
// // //     image: "/images/WhatsApp Image 2025-10-09 at 12.16.34_eaed36f3.jpg",
// // //   },
// // //   {
// // //     name: "Joel Mathew",
// // //     role: "Social Media Strategist",
// // //     company: "CreativeHub Digital",
// // //     location: "Bangalore, India",
// // //     image: "/images/WhatsApp Image 2025-09-20 at 10.53.59_65780d93.jpg",
// // //   },
// // // ];

// // // function PlacementHighlights() {
// // //   return (
// // //     <section className="py-12 sm:py-16 px-4 bg-white">
// // //       <div className="max-w-7xl mx-auto text-center">
// // //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
// // //           Student Placement Highlights
// // //         </h2>

// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// // //           {placements.map((student, index) => (
// // //             <div
// // //               key={index}
// // //               className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
// // //             >
// // //               <div className="relative">
// // //                 <img
// // //                   src={student.image}
// // //                   alt={student.name}
// // //                   className="w-full h-100 object-cover"
// // //                 />
// // //                 <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm py-4 px-3 text-center">
// // //                   <h3 className="text-lg font-semibold text-green-700">
// // //                     {student.name}
// // //                   </h3>
// // //                   <p className="text-sm text-gray-800">{student.role}</p>
// // //                   <p className="text-sm text-gray-800">{student.company}</p>
// // //                   <p className="text-xs text-gray-600 mt-1">
// // //                     {student.location}
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default PlacementHighlights;
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";

// // function PlacementHighlights() {
// //   const BASE_URL = import.meta.env.VITE_BASE_URL;
// //   const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE; 
// //   const [placements, setPlacements] = useState([]);

// //   useEffect(() => {
// //     const fetchPlacements = async () => {
// //       try {
// //         const response = await axios.get(`${BASE_URL}/Samples`);
// //         if (response.data && response.data.data) {
// //           setPlacements(response.data.data);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching placement data:", error);
// //       }
// //     };

// //     fetchPlacements();
// //   }, [BASE_URL]);

// //   return (
// //     <section className="py-12 sm:py-16 px-4 bg-white">
// //       <div className="max-w-7xl mx-auto text-center">
// //         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
// //           Student Placement Highlights
// //         </h2>

// //         {placements.length === 0 ? (
// //           <p className="text-gray-600">Loading placement highlights...</p>
// //         ) : (
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
// //             {placements.map((student) => (
// //               <div
// //                 key={student.id}
// //                 className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
// //               >
// //                 <div className="relative">
// //                   <img
// //                     src={`${IMAGE_URL}${student.image}`}
// //                     alt={student.name}
// //                     className="w-full h-90 object-cover"
// //                   />
// //                   <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm py-4 px-3 text-center">
// //                     <h3 className="text-lg font-semibold text-green-700">
// //                       {student.name}
// //                     </h3>
// //                     <p className="text-sm text-gray-800">{student.details1}</p>
// //                     <p className="text-sm text-gray-800">{student.details2}</p>
// //                     <p className="text-xs text-gray-600 mt-1">
// //                       {student.type}
// //                     </p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // }

// // export default PlacementHighlights;
// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// function PlacementHighlights() {
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
//   const [placements, setPlacements] = useState([]);
//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const fetchPlacements = async () => {
//       try {
//         const response = await axios.get(`${BASE_URL}/Samples`);
//         if (response.data && response.data.data) {
//           setPlacements(response.data.data);
//         }
//       } catch (error) {
//         console.error("Error fetching placement data:", error);
//       }
//     };

//     fetchPlacements();
//   }, [BASE_URL]);

//   // Duplicate items for seamless infinite scroll
//   const duplicatedPlacements = placements.length > 0 ? [...placements, ...placements] : [];

//   return (
//     <section className="py-12 sm:py-16 px-4 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto text-center">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
//           Student Placement Highlights
//         </h2>

//         {placements.length === 0 ? (
//           <p className="text-gray-600">Loading placement highlights...</p>
//         ) : (
//           <div className="relative overflow-hidden">
//             <div
//               ref={scrollRef}
//               className="flex animate-scroll-left hover:pause-scroll"
//               style={{
//                 display: "flex",
//                 gap: "1.5rem",
//                 padding: "0 1rem",
//               }}
//             >
//               {duplicatedPlacements.map((student, index) => (
//                 <div
//                   key={`${student.id}-${index}`}
//                   className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
//                   style={{ width: "280px" }} // Fixed width for consistent scrolling
//                 >
//                   <div className="relative">
//                     <img
//                       src={`${IMAGE_URL}${student.image}`}
//                       alt={student.name}
//                       className="w-full h-90 object-cover"
//                     />
//                     <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm py-4 px-3 text-center">
//                       <h3 className="text-lg font-semibold text-green-700">
//                         {student.name}
//                       </h3>
//                       <p className="text-sm text-gray-800">{student.details1}</p>
//                       <p className="text-sm text-gray-800">{student.details2}</p>
//                       <p className="text-xs text-gray-600 mt-1">
//                         {student.type}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Tailwind + CSS Keyframes for Animation */}
//       <style jsx>{`
//         @keyframes scroll-left {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }

//         .animate-scroll-left {
//           animation: scroll-left 10s linear infinite;
//         }

//         .pause-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// }

// export default PlacementHighlights;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function PlacementHighlights() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Samples`);
        if (response.data && response.data.data) {
          setPlacements(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching placement data:", error);
      }
    };
    fetchPlacements();
  }, [BASE_URL]);

  const repeatedPlacements = [...placements, ...placements];

  return (
    <section className="py-12 sm:py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-gray-900">
          Student Placement Highlights
        </h2>

        {placements.length === 0 ? (
          <p className="text-gray-600">Loading placement highlights...</p>
        ) : (
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 10, 
                ease: "linear",
              }}
            >
              {repeatedPlacements.map((student, index) => (
                <div
                  key={`${student.id}-${index}`}
                  className="min-w-[250px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
                >
                  <div className="relative">
                    <img
                      src={`${IMAGE_URL}${student.image}`}
                      alt={student.name}
                      className="w-full h-90 object-cover"
                    />
                    <div className="absolute bottom-0 w-full bg-white/80 backdrop-blur-sm py-4 px-3 text-center">
                      <h3 className="text-lg font-semibold text-green-700">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-800">{student.details1}</p>
                      <p className="text-sm text-gray-800">{student.details2}</p>
                      <p className="text-xs text-gray-600 mt-1">
                        {student.type}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default PlacementHighlights;
