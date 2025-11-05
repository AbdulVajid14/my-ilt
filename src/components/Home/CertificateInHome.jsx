// import React from 'react'

// function Certificate() {
//   return (
//       <section className="bg-white py-12 sm:py-16 px-4">
//         <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
//           {[
//             "/images/Google Ads.png",
//             "/images/Google Analytics.png",
//             "/images/Google Ads.png",
//             "/images/Google Analytics.png",
//           ].map((src, idx) => (
//             <img
//               key={idx}
//               src={src}
//               alt="Certification"
//               className="h-16 sm:h-20 object-contain"
//             />
//           ))}
//         </div>
//       </section>
//   )
// }

// export default Certificate

import React from 'react';
import { motion } from 'framer-motion';

function Certificate() {
  const certificates = [
    "/images/Google Ads.png",
    "/images/Google Analytics.png",
    "/images/Google Ads.png",
    "/images/Google Analytics.png",
    // Duplicate for seamless loop
    "/images/Google Ads.png",
    "/images/Google Analytics.png",
    "/images/Google Ads.png",
    "/images/Google Analytics.png",
  ];

  return (
    <section className="bg-white py-12 sm:py-16 px-4 overflow-hidden">
      
      {/* Heading */}
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
        Certifications
      </h2>

      {/* 700px container */}
      <div className="max-w-[700px] mx-auto overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8"
          animate={{ x: [0, "-100%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {certificates.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt="Certification"
              className="h-16 sm:h-20 object-contain flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Certificate;
