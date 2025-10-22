// import React from 'react'
// import { useNavigate } from "react-router-dom";

// function OurGraduates() {
//     const navigate = useNavigate();
//   return (
//       <section className="py-12 sm:py-16 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
//           <div className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
//               Hear From Our Graduates
//             </h2>
//             <div className="text-green-600 text-4xl sm:text-5xl font-serif mb-4">
//               “
//             </div>
//             <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
//               The hands-on projects and expert guidance helped me land my first
//               digital marketing job in just 3 months.
//             </p>
//             <div className="flex flex-wrap gap-4 sm:gap-6">
//               {[
//                 {
//                   src: "/images/WhatsApp Image 2025-09-20 at 10.53.48_21cf63e0.jpg",
//                   alt: "Amazon Logo",
//                   width: "w-24 sm:w-32",
//                 },
//                 {
//                   src: "/images/tata.jpg",
//                   alt: "Tata Logo",
//                   width: "w-20 sm:w-24",
//                 },
//                 {
//                   src: "/images/hcl.jpg",
//                   alt: "HCLTech Logo",
//                   width: "w-32 sm:w-40",
//                 },
//               ].map((logo, idx) => (
//                 <img
//                   key={idx}
//                   src={logo.src}
//                   alt={logo.alt}
//                   className={`h-8 sm:h-10 object-contain ${logo.width}`}
//                 />
//               ))}
//             </div>
//           </div>
//           <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
//             {[
//               {
//                 name: "Rayon",
//                  slug: "rayon",
//                 title: "Digital Marketing Executive at Wipro",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.53.48_197251bf.jpg",
//               },
//               {
//                 name: "James",
//                  slug: "james",
//                 title: "Junior Data Analyst at Netflix",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.53.48_02e1c4ba.jpg",
//               },
//               {
//                 name: "Sophia",
//                 title: "Senior Cyber Security at Microsoft",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.53.48_9fcda950.jpg",
//               },
//               {
//                 name: "Geon",
//                 title: "Digital Marketing Executive at Tata",
//                 image:
//                   "/images/WhatsApp Image 2025-09-20 at 10.53.59_65780d93.jpg",
//               },
//             ].map((graduate, idx) => (
//               <div
//                 key={idx}
//                 className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center"
//               >
//                 <img
//                   src={graduate.image}
//                   alt={graduate.name}
//                   className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4"
//                 />
//                 <h4 className="font-bold text-base sm:text-xl">
//                   {graduate.name}
//                 </h4>
//                 <p className="text-xs sm:text-sm text-gray-600 mb-4">
//                   {graduate.title}
//                 </p>
//                 <button
//                   onClick={() => navigate(`/testimonial/${graduate.slug}`)}
//                  className="bg-green-600 text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-green-700 transition duration-300">
//                   View Story
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>  )
// }

// export default OurGraduates
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OurGraduates = () => {
  const navigate = useNavigate();
  const [graduates, setGraduates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetchGraduates();
  }, []);

  const fetchGraduates = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BASE_URL}/admin/graduates?status=1&limit=10&offset=0`
      );
      const fetchedGraduates = res.data.data.map((graduate) => ({
        ...graduate,
        slug: graduate.name.toLowerCase().replace(/\s+/g, "-"),
      }));
      setGraduates(fetchedGraduates);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching graduates:", err);
    } finally {
      setLoading(false);
    }
  };

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
        Error loading graduates: {error}
      </div>
    );
  }

  // Get unique companies for logos (up to 3 for display)
  const uniqueCompanies = [...new Set(graduates.map((g) => g.company))].slice(
    0,
    3
  );

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 pr-0 lg:pr-8 mb-8 lg:mb-0"
        >
         
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
              Hear From Our Graduates
            </h2>
            <div className="text-green-600 text-4xl sm:text-5xl font-serif mb-4">
              “
            </div>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
              The hands-on projects and expert guidance helped me land my first
              digital marketing job in just 3 months.
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                {
                  src: "/images/WhatsApp Image 2025-09-20 at 10.53.48_21cf63e0.jpg",
                  alt: "Amazon Logo",
                  width: "w-24 sm:w-32",
                },
                {
                  src: "/images/tata.jpg",
                  alt: "Tata Logo",
                  width: "w-20 sm:w-24",
                },
                {
                  src: "/images/hcl.jpg",
                  alt: "HCLTech Logo",
                  width: "w-32 sm:w-40",
                },
              ].map((logo, idx) => (
                <img
                  key={idx}
                  src={logo.src}
                  alt={logo.alt}
                  className={`h-8 sm:h-10 object-contain ${logo.width}`}
                />
              ))}
            </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8"
        >
          {graduates.slice(0, 4).map((graduate) => (
            <div
              key={graduate.id}
              className="p-4 sm:p-6 bg-white rounded-lg shadow-lg text-center"
            >
              <img
                src={`${import.meta.env.VITE_BASE_URL_IMAGE}${graduate.image}`}
                alt={graduate.name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto mb-4"
                loading="lazy"
              />
              <h4 className="font-bold text-base sm:text-xl">
                {graduate.name}
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 mb-4">
                {graduate.post} at {graduate.company}
              </p>
              <button
                onClick={() => navigate(`/testimonial/${graduate.slug}`)}
                className="bg-green-600 text-white font-semibold py-1.5 px-4 sm:py-2 sm:px-6 rounded-lg hover:bg-green-700 transition duration-300"
              >
                View Story
              </button>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurGraduates;