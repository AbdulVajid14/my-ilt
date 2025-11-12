import axios from "axios";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const OurGraduates = () => {
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
        `${
          import.meta.env.VITE_BASE_URL
        }/admin/graduates?status=1&limit=10&offset=0`
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

  return (
    <section className="py-6 px-4 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/5"
        >
          <h2 className="text-left text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Hear From Our Graduates
          </h2>

          <div className="text-start max-w-sm mx-auto sm:mx-0">
            <div className="flex justify-start text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={28} /> 
              ))}
            </div>
            <p className="text-gray-600 text-lg">
              Based on{" "}
              <span className="font-semibold text-gray-800">2000+ reviews</span>
            </p>
            <div className="flex justify-start mt-3">
              <img
                src="/images/images.png"
                alt="Google"
                className="h-12 object-contain"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full overflow-hidden"
        >
          <style>
            {`
              @keyframes scrollX {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
            `}
          </style>

          {/* Scrolling container */}
          <div
            className="flex gap-6 sm:gap-8 overflow-hidden"
            style={{
              animation: "scrollX 25s linear infinite",
              width: "max-content",
            }}
          >
            {[...graduates, ...graduates].map((graduate, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl shadow-md p-5 flex flex-col text-left border border-gray-100
             w-[260px] h-[280px] flex-shrink-0"
              >
                {/* Header */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="flex items-center space-x-3">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL_IMAGE}${
                        graduate.image
                      }`}
                      alt={graduate.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {graduate.name}
                      </h4>
                    </div>
                  </div>
                  <img
                    src="/images/google-logo-2.png"
                    alt="Google"
                    className="w-5 h-5"
                  />
                </div>

                {/* Stars */}
                <div className="flex items-center mb-3 text-yellow-400">
                  {(() => {
                    // Safely extract rating
                    const rating = graduate?.post
                      ? parseFloat(graduate.post)
                      : 0;

                    return (
                      <>
                        {Array(5)
                          .fill()
                          .map((_, i) => {
                            if (rating >= i + 1) {
                              return <FaStar key={i} size={18} />;
                            } else if (rating >= i + 0.5) {
                              return <FaStarHalfAlt key={i} size={18} />;
                            } else {
                              return <FaRegStar key={i} size={18} />;
                            }
                          })}
                        <span className="ml-2 text-sm text-gray-600">
                          {rating > 0 ? rating.toFixed(1) : ""}
                        </span>
                      </>
                    );
                  })()}
                </div>

                {/* Review text – now uses the extra height */}
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mt-auto">
                  {graduate.details ||
                    "ILT is truly a place for growth and learning."}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurGraduates;
