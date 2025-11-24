import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import OurGraduates from "../components/Home/OurGraduates";

function PlacementPage() {
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const IMAGE_URL = import.meta.env.VITE_BASE_URL_IMAGE;
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    const fetchPlacements = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/Samples`);
        if (response.data && response.data.data) {
          setPlacements(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching placement data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPlacements();
  }, [BASE_URL]);

  useEffect(() => {
          document.title = "Placements at ILT | Career Support & Digital Marketing Jobs";
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
            "Grow your career with ILT’s placement program, offering real job opportunities, corporate connections, and hands-on digital marketing training support."
          );
          const metaKeywords =
            document.querySelector("meta[name='keywords']") ||
            (() => {
              const meta = document.createElement("meta");
              meta.name = "keywords";
              document.head.appendChild(meta);
              return meta;
            })();
      
          metaKeywords.setAttribute(
            "content",
            "Placements at ILT | Career Support & Digital Marketing Jobs"
          );
        }, []);

  // Pagination Logic
  const totalPages = Math.ceil(placements.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPlacements = placements.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const renderPagination = () => {
    if (placements.length <= itemsPerPage) return null;

    return (
      <div className="flex justify-center items-center gap-2 mt-12">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium transition-all ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          ←
        </button>

        {/* Page Numbers */}
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`w-10 h-10 rounded-full font-medium transition-all ${
                currentPage === page
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-green-100"
              }`}
            >
              {page}
            </button>
          );
        })}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium transition-all ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-700"
          }`}
        >
          →
        </button>
      </div>
    );
  };

  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-20 px-4 bg-cover bg-center h-100"
        style={{
          backgroundImage: "url('/images/placement-banner.jpg')",
        }}
      >
        {/* Dark overlay (only on the background) */}
        <div className="absolute inset-y-0 left-0 w-2/5 bg-black opacity-30 z-0"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold pt-30 text-white">
              Placements
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Placement Grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">Loading placements...</p>
            </div>
          ) : placements.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-600 text-lg">
                No placement data available.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {currentPlacements.map((student) => (
                  <motion.div
                    key={student.id}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
                    whileHover={{ y: -8, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={`${IMAGE_URL}${student.image}`}
                        alt={student.name}
                        className="w-full h-90 object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    <div className="p-5 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold text-green-700 mb-2">
                        {student.name}
                      </h3>
                      <p className="text-sm text-gray-800 font-medium">
                        {student.details1}
                      </p>
                      <p className="text-sm text-gray-700 mt-1">
                        {student.details2}
                      </p>
                      <p className="text-sm text-gray-800 mt-3 italic">
                        {student.type}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination */}
              {renderPagination()}
            </>
          )}
        </div>
      </section>
            <OurGraduates />
    </>
  );
}

export default PlacementPage;
